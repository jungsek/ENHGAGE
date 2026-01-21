// LessonCompleteScreen - Victory screen with XP, accuracy, and time badges
// Matches Duolingo completion screen design

import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Target, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { LessonResult } from "@/types/LessonTypes";
import { Button } from "@/components/common/Button";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";

interface LessonCompleteScreenProps {
    result: LessonResult;
    onClaimXP: () => void;
}

export const LessonCompleteScreen: React.FC<LessonCompleteScreenProps> = ({
    result,
    onClaimXP,
}) => {
    const { profile } = useAppStore();

    // Fire confetti on mount
    useEffect(() => {
        const duration = 2000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: ["#58CC02", "#FFC800", "#1CB0F6", "#CE82FF"],
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: ["#58CC02", "#FFC800", "#1CB0F6", "#CE82FF"],
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    // Format time as M:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    // Get mascot image based on selected buddy
    const mascotImage = profile.buddy
        ? IMAGES[`${profile.buddy}Full` as keyof typeof IMAGES]
        : IMAGES.olahFull;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-8"
        >
            {/* Mascot Celebration */}
            <motion.div
                initial={{ scale: 0.5, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                }}
                className="relative mb-8"
            >
                {/* Celebration sparkle */}
                <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 -right-4 text-[#FFC800] text-3xl"
                >
                    ✨
                </motion.div>

                <img
                    src={mascotImage}
                    alt="Celebration mascot"
                    className="w-40 h-40 object-contain"
                />
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#58CC02] to-[#00897B] italic mb-8"
            >
                Lesson complete!
            </motion.h1>

            {/* Stats Badges */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 mb-12"
            >
                {/* Total XP Badge */}
                <StatBadge
                    label="TOTAL XP"
                    value={result.totalXP.toString()}
                    icon={<Zap size={18} className="text-[#FFC800]" />}
                    color="yellow"
                />

                {/* Accuracy Badge */}
                <StatBadge
                    label="GOOD"
                    value={`${result.accuracy}%`}
                    icon={<Target size={18} className="text-[#58CC02]" />}
                    color="green"
                />

                {/* Time Badge */}
                <StatBadge
                    label="SPEEDY"
                    value={formatTime(result.timeSeconds)}
                    icon={<Clock size={18} className="text-[#1CB0F6]" />}
                    color="blue"
                />
            </motion.div>

            {/* Claim XP Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-sm"
            >
                <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={onClaimXP}
                    className="bg-[#1CB0F6] border-[#1899D6] hover:bg-[#47C1FF]"
                >
                    CLAIM XP
                </Button>
            </motion.div>
        </motion.div>
    );
};

// Stat Badge Component
interface StatBadgeProps {
    label: string;
    value: string;
    icon: React.ReactNode;
    color: "yellow" | "green" | "blue";
}

const StatBadge: React.FC<StatBadgeProps> = ({ label, value, icon, color }) => {
    const colorStyles = {
        yellow: {
            bg: "bg-[#FFF8E5]",
            border: "border-[#FFC800]",
            labelBg: "bg-[#FFC800]",
            text: "text-[#995C00]",
        },
        green: {
            bg: "bg-[#E5FFE5]",
            border: "border-[#58CC02]",
            labelBg: "bg-[#58CC02]",
            text: "text-[#2B6600]",
        },
        blue: {
            bg: "bg-[#E5F5FF]",
            border: "border-[#1CB0F6]",
            labelBg: "bg-[#1CB0F6]",
            text: "text-[#006699]",
        },
    };

    const styles = colorStyles[color];

    return (
        <div
            className={`relative flex flex-col items-center rounded-xl border-2 ${styles.border} ${styles.bg} pt-6 pb-3 px-4 min-w-[90px]`}
        >
            {/* Label pill */}
            <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 ${styles.labelBg} text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap`}
            >
                {label}
            </div>

            {/* Icon + Value */}
            <div className="flex items-center gap-1">
                {icon}
                <span className={`text-lg font-bold ${styles.text}`}>
                    {value}
                </span>
            </div>
        </div>
    );
};
