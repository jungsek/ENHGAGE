// LessonHeader - Top bar with progress, close button, and hearts
// Matches Duolingo design: X button | Progress Bar | Heart counter

import React from "react";
import { motion } from "motion/react";
import { X, Heart } from "lucide-react";
import { cn } from "@/components/ui/utils";

interface LessonHeaderProps {
    currentCard: number;
    totalCards: number;
    hearts?: number;
    correctStreak?: number;
    onClose: () => void;
    className?: string;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
    currentCard,
    totalCards,
    hearts = 5,
    correctStreak = 0,
    onClose,
    className,
}) => {
    const progress = (currentCard / totalCards) * 100;

    return (
        <div className={cn("flex items-center gap-4 px-4 py-3", className)}>
            {/* Streak Indicator (shown when 3+ in a row) */}
            {correctStreak >= 3 && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-1 left-14 text-xs font-bold text-[#ff9600]"
                >
                    {correctStreak} IN A ROW
                </motion.div>
            )}

            {/* Close Button */}
            <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Exit lesson"
            >
                <X size={24} strokeWidth={2.5} />
            </button>

            {/* Progress Bar */}
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#FFC800] rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {/* Glossy highlight */}
                    <div className="absolute top-[3px] left-2 right-2 h-[5px] bg-white/40 rounded-full" />
                </motion.div>
            </div>

            {/* Hearts Counter */}
            <div className="flex items-center gap-1">
                <Heart
                    size={24}
                    className="text-[#FF4B4B] fill-[#FF4B4B]"
                />
                <span className="text-[#FF4B4B] font-bold text-lg">
                    {hearts}
                </span>
            </div>
        </div>
    );
};
