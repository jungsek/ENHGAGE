import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Reward } from "@/constants/rewardsData";

interface DailyRewardModalProps {
    isOpen: boolean;
    onClose: () => void;
    reward: Reward | null;
}

export const DailyRewardModal = ({ isOpen, onClose, reward }: DailyRewardModalProps) => {
    if (!reward) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 font-din">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-white w-full max-w-sm rounded-3xl p-6 relative z-10 shadow-2xl overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-[#00897B]/10 rounded-b-[50px] -z-10"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00897B]/20 rounded-full blur-2xl"></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                        >
                            <X size={20} strokeWidth={3} />
                        </button>

                        <div className="flex flex-col items-center text-center mt-4">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                className="w-32 h-32 mb-6 relative"
                            >
                                <div className="absolute inset-0 bg-[#00897B] rounded-full opacity-20 blur-xl animate-pulse"></div>
                                <div className="w-full h-full bg-white rounded-3xl shadow-[0_8px_0_#e5e7eb] border-4 border-white flex items-center justify-center overflow-hidden">
                                    {reward.image && <img src={reward.image} alt={reward.title} className="w-20 h-20 object-contain" />}
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-[#00897B] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm border-2 border-white">
                                    FREE!
                                </div>
                            </motion.div>

                            <h2 className="text-2xl font-feather text-[#00897B] mb-2">
                                Daily Reward Unlocked!
                            </h2>
                            <p className="text-gray-500 font-bold mb-6 px-4">
                                You found a <span className="text-black">{reward.title}</span> in the chest!
                            </p>

                            <Button
                                fullWidth
                                onClick={onClose}
                                className="bg-[#00897B] hover:bg-[#00796B] text-white border-b-4 border-[#00695C] active:border-b-0 py-4 text-xl shadow-[#00695C]"
                            >
                                AWESOME!
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
