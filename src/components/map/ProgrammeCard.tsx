import React from 'react';
import { Programme, Venue, Pillar, Session } from '@/constants/programmeData';
import { useMapStore } from '@/store/useMapStore';

interface ProgrammeCardProps {
    programme: Programme;
    venue: Venue;
    pillar: Pillar;
    session: Session;
    onClick?: () => void;
}

// Calculate distance between two points (Haversine formula)
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export const ProgrammeCard: React.FC<ProgrammeCardProps> = ({
    programme,
    venue,
    pillar,
    session,
    onClick,
}) => {
    const { userLocation } = useMapStore();
    const distance = calculateDistance(userLocation[0], userLocation[1], venue.lat, venue.lng);

    return (
        <div
            onClick={onClick}
            className="bg-white rounded-2xl border-2 border-gray-200 border-b-4 p-3 flex gap-3 cursor-pointer hover:border-gray-300 active:translate-y-[2px] active:border-b-2 transition-all"
        >
            {/* Thumbnail */}
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                    src={programme.image_url}
                    alt={programme.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-gray-800 text-sm truncate">{programme.name}</h3>
                    <span
                        className="text-lg flex-shrink-0"
                        title={pillar.name}
                    >
                        {pillar.icon}
                    </span>
                </div>

                <p className="text-xs text-gray-500 truncate">
                    {venue.name} • {distance.toFixed(1)} km
                </p>

                <p className="text-xs font-bold text-gray-600 mt-1">
                    {session.start_time} - {session.end_time}
                </p>

                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: pillar.color }}>
                        +{programme.points_earned} pts
                    </span>
                    {session.slots_available <= 5 && (
                        <span className="text-[10px] font-bold text-red-500">
                            {session.slots_available} slots left
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
