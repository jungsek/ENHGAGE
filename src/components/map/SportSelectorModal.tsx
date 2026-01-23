import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Footprints, Bike } from 'lucide-react';
import { useMapStore, ActivityType } from '@/store/useMapStore';
import { Button } from '../common/Button';
import { IMAGES } from '@/constants/assets';

interface SportSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ACTIVITIES: { type: ActivityType; icon: React.ReactNode; label: string }[] = [
    { type: 'walk', icon: <Footprints size={32} strokeWidth={2.5} />, label: 'Walk' },
    { type: 'run', icon: <img src={IMAGES.icons.run} alt="Run" className="w-8 h-8 object-contain" />, label: 'Run' },
    { type: 'cycle', icon: <Bike size={32} strokeWidth={2.5} />, label: 'Cycle' },
];

export const SportSelectorModal: React.FC<SportSelectorModalProps> = ({ isOpen, onClose }) => {
    const { startActivity } = useMapStore();
    const [selectedActivity, setSelectedActivity] = useState<ActivityType>('walk');

    const handleStart = () => {
        startActivity(selectedActivity);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative overflow-hidden font-din"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 left-0 w-full h-28 bg-[#00897B]/10 rounded-b-[60px] -z-10" />
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00897B]/15 rounded-full blur-2xl" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#66B2B2]/20 rounded-full blur-xl" />

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <h2 className="text-xl font-feather text-gray-800">Choose Activity</h2>
                            <button
                                onClick={onClose}
                                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X size={20} strokeWidth={3} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Activity Options */}
                        <div className="flex justify-center gap-4 mb-8 relative z-10">
                            {ACTIVITIES.map(({ type, icon, label }) => {
                                const isSelected = selectedActivity === type;
                                return (
                                    <motion.button
                                        key={type}
                                        onClick={() => setSelectedActivity(type)}
                                        className="flex flex-col items-center gap-2"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-b-4 transition-all duration-200 ${isSelected
                                                ? 'bg-[#00897B]/10 border-[#008080] text-[#008080]'
                                                : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'
                                                }`}
                                            animate={isSelected ? { scale: [1, 1.05, 1] } : {}}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {icon}
                                        </motion.div>
                                        <span className={`font-bold transition-colors ${isSelected ? 'text-[#008080]' : 'text-gray-600'
                                            }`}>
                                            {label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        <Button
                            variant="primary"
                            fullWidth
                            onClick={handleStart}
                        >
                            LET'S GO
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
