import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { getProgrammeById, getVenueById, getPillarById, getSessionById, SESSIONS } from '@/constants/programmeData';
import { useMapStore } from '@/store/useMapStore';
import { useAppStore } from '@/store/useAppStore';
import { Button } from '@/components/common/Button';
import { IMAGES } from '@/constants/assets';
import confetti from 'canvas-confetti';

export const ProgrammeDetailScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { addBooking, bookings } = useMapStore();
    const { addPoints } = useAppStore();

    const sessionId = searchParams.get('session');
    const programme = id ? getProgrammeById(id) : undefined;
    const session = sessionId ? getSessionById(sessionId) : undefined;
    const venue = session ? getVenueById(session.venue_id) : undefined;
    const pillar = programme ? getPillarById(programme.pillar_id) : undefined;

    // Get other sessions for this programme
    const otherSessions = SESSIONS.filter(s => s.programme_id === id && s.id !== sessionId).slice(0, 3);
    const isBooked = bookings.some(b => b.session_id === sessionId && b.status === 'confirmed');

    if (!programme || !session || !venue || !pillar) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-5">
                <p className="text-gray-500 font-din">Programme not found</p>
            </div>
        );
    }

    const handleBook = () => {
        addBooking(session.id);
        addPoints(programme.points_earned);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        navigate('/app/map');
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const today = new Date();
        if (date.toDateString() === today.toDateString()) return 'Today';
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
        return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    };

    const slotsPercentage = (session.slots_available / session.slots_total) * 100;

    return (
        <div className="min-h-screen bg-white overflow-y-auto">
            {/* Hero Image with Overlay */}
            <div className="relative h-48 w-full">
                <img
                    src={programme.image_url}
                    alt={programme.name}
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Back Button */}
                <motion.button
                    onClick={() => navigate(-1)}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                >
                    <ArrowLeft size={20} className="text-gray-700" />
                </motion.button>

                {/* Pillar Badge */}
                <div
                    className="absolute bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-10"
                    style={{ bottom: '16px', right: '20px' }}
                >
                    <span className="text-base">{pillar.icon}</span>
                    <span className="text-xs font-din font-bold text-gray-600">{pillar.name}</span>
                </div>
            </div>

            <div className="h-4"></div>

            {/* Content */}
            <div className="px-6 pt-6 pb-24">
                {/* Title */}
                <h1 className="text-2xl font-feather font-extrabold text-gray-800 leading-tight mb-6">
                    {programme.name}
                </h1>

                {/* Location & Time Row */}
                <div className="flex items-start gap-5 mb-6 pb-6 border-b border-gray-100">
                    {/* Location */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-6 h-6 rounded-full bg-[#008080]/10 flex items-center justify-center">
                                <MapPin size={12} className="text-[#008080]" />
                            </div>
                            <span className="text-[10px] font-din font-bold text-gray-400 uppercase tracking-wider">Location</span>
                        </div>
                        <p className="font-din font-bold text-gray-800 text-sm leading-tight">{venue.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{venue.address}</p>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-16 bg-gray-100 flex-shrink-0" />

                    {/* Date & Time */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-6 h-6 rounded-full bg-[#ff9600]/10 flex items-center justify-center">
                                <Clock size={12} className="text-[#ff9600]" />
                            </div>
                            <span className="text-[10px] font-din font-bold text-gray-400 uppercase tracking-wider">When</span>
                        </div>
                        <p className="font-din font-bold text-gray-800 text-sm">{formatDate(session.date)}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{session.start_time} - {session.end_time}</p>
                    </div>
                </div>

                {/* Points & Slots Row */}
                <div className="flex items-center gap-3 mb-8">
                    {/* Points Badge */}
                    <div className="flex items-center gap-2 bg-[#008080]/5 rounded-xl px-3 py-2.5 border border-[#008080]/15">
                        <img src={IMAGES.icons.chest} alt="" className="w-5 h-5" />
                        <div>
                            <p className="font-feather font-extrabold text-[#008080] text-lg leading-none">+{programme.points_earned}</p>
                            <p className="text-[9px] text-[#008080]/70 font-din">points</p>
                        </div>
                    </div>

                    {/* Capacity Badge */}
                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                            <Users size={10} className="text-gray-500" />
                        </div>
                        <div>
                            <p className="font-din font-bold text-gray-700 text-sm leading-none">{programme.group_size}</p>
                            <p className="text-[9px] text-gray-400 font-din">group</p>
                        </div>
                    </div>

                    {/* Slots */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[9px] font-din font-bold text-gray-400 uppercase tracking-wider">Slots</span>
                            <span className="font-din font-bold text-[#008080] text-xs">
                                {session.slots_available}/{session.slots_total}
                            </span>
                        </div>
                        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#008080] rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: `${slotsPercentage}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="absolute top-[3px] left-1 right-1 h-[3px] bg-white/40 rounded-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="mb-6">
                    <h2 className="font-feather font-extrabold text-gray-800 text-sm mb-3">About this programme</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{programme.description}</p>
                </div>

                {/* What to Bring */}
                {programme.what_to_bring.length > 0 && (
                    <div className="mb-8">
                        <h3 className="font-feather font-extrabold text-gray-800 text-sm mb-3">What to bring</h3>
                        <div className="flex flex-wrap gap-2">
                            {programme.what_to_bring.map((item, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center bg-gray-100 text-gray-700 text-xs font-din font-semibold px-3 py-1.5 rounded-full border border-gray-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Sessions */}
                {otherSessions.length > 0 && (
                    <div className="mb-8">
                        <h3 className="font-feather font-extrabold text-gray-800 text-sm mb-2">Other sessions</h3>
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {otherSessions.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => navigate(`/app/map/programme/${id}?session=${s.id}`)}
                                    className="px-3 py-2 bg-white rounded-xl text-xs font-din font-bold text-gray-600 border-2 border-gray-200 whitespace-nowrap hover:border-[#008080] hover:text-[#008080] active:scale-95 transition-all flex-shrink-0"
                                >
                                    {formatDate(s.date)} • {s.start_time}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Book Button */}
                <Button
                    variant="primary"
                    fullWidth
                    onClick={handleBook}
                    disabled={isBooked}
                    className={isBooked ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed" : ""}
                >
                    {isBooked ? "Booked" : "Book Now"}
                </Button>

                <div className='h-24'></div>
            </div>
        </div>
    );
};
