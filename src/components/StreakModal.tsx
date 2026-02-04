
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { cn } from '@/components/ui/utils';
import { IMAGES } from '@/constants/assets';

// Reuse FontStyles if needed, but since it's imported in App, we might not need it here if this was a separate file. 
// However, since we are adding this to App.tsx via edit/write, I'll just create the component code block to be inserted.

export const StreakModal = ({
    isOpen,
    onClose,
    streak
}: {
    isOpen: boolean;
    onClose: () => void;
    streak: { current: number; status: 'cold' | 'warm' | 'hot'; freezes: number; history: boolean[] };
}) => {
    if (!isOpen) return null;

    // Monday-based week to match history array: history[0] = Monday, history[6] = Sunday
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" style={{ zIndex: 9999 }} onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl border-2 border-gray-100 relative font-din"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X size={24} strokeWidth={3} />
                </button>

                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-2xl font-feather text-gray-700 mb-2">Streak</h2>
                    <p className="text-gray-500 font-bold text-center text-sm px-4">
                        Complete a quest every day to keep your streak alive!
                    </p>
                </div>

                {/* Big Flame */}
                <div className="flex flex-col items-center mb-8 relative">
                    <div className="relative flex items-center justify-center">
                        <img
                            src={IMAGES.icons.flameLarge}
                            alt="Streak Flame"
                            className={cn(
                                "w-36 h-36 object-contain transition-all duration-500",
                                streak.status === 'cold' && "grayscale opacity-50"
                            )}
                        />
                        <div className="absolute inset-0 flex items-center justify-center pt-8">
                            <span className="text-4xl font-feather text-white drop-shadow-md">{streak.current}</span>
                        </div>
                    </div>
                    {streak.status === 'hot' && (
                        <div className="absolute -top-4 -right-4 animate-bounce">
                            <span className="text-4xl">🔥</span>
                        </div>
                    )}
                </div>

                {/* Calendar Row */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 mb-6 shadow-sm">
                    <div className="flex justify-between items-center">
                        {days.map((day, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2">
                                <span className="text-xs font-bold text-gray-400">{day}</span>
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center border-2",
                                    streak.history[idx]
                                        ? "bg-orange-500 border-orange-600 text-white"
                                        : "bg-gray-100 border-gray-200 text-transparent"
                                )}>
                                    <Check size={16} strokeWidth={4} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Streak Freeze Inventory */}
                <div className="flex items-center justify-between bg-cyan-50 border-2 border-cyan-100 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white shadow-sm transform rotate-3">
                            <img src={IMAGES.icons.checkFreeze} alt="Freeze" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-extrabold text-cyan-700 text-sm">Streak Freeze</span>
                            <span className="text-xs font-bold text-cyan-600">You have {streak.freezes}/2</span>
                        </div>
                    </div>
                    <button className="bg-white text-cyan-600 text-xs font-extrabold px-3 py-1.5 rounded-lg border-2 border-cyan-100 shadow-sm">
                        GET MORE
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={onClose}
                        className="w-full bg-[#00897B] text-white font-extrabold py-3 rounded-2xl border-b-4 border-[#00695C] active:border-b-0 active:translate-y-1"
                    >
                        CONTINUE
                    </button>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};
