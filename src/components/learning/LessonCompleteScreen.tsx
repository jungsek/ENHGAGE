import React, { useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { IMAGES } from "@/constants/assets";
import { Button } from "@/components/common/Button";
import { LessonResult } from "@/types/LessonTypes";

import { useMascot } from "@/hooks/useMascot";

interface LessonCompleteScreenProps {
    result: LessonResult;
    onClaim: () => void;
}

export const LessonCompleteScreen: React.FC<LessonCompleteScreenProps> = ({ result, onClaim }) => {
    const { mascotHappy, mascotName } = useMascot();

    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.2 },
        });
    }, []);
    // Format time from seconds to M:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 z-[110] flex flex-col bg-white overflow-hidden">
            {/* Main Content - centered vertically */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 overflow-y-auto">

                {/* Illustration Area */}
                <div className="relative w-[215px] h-[270px] mb-4 flex items-end justify-center flex-shrink-0">

                    {/* Characters */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                        className="flex items-end justify-center -space-x-8 z-10 w-[211px]"
                    >

                        {/* Human (Olah) - Right */}
                        <motion.img
                            src={mascotHappy}
                            alt={mascotName}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="h-56 object-contain z-0 origin-bottom"
                        />
                    </motion.div>
                </div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-feather text-[#FFC800] mb-8 text-center tracking-wide"
                >
                    Lesson complete!
                </motion.h1>

                {/* Stats Badges */}
                <div className="flex gap-2 w-full justify-center items-end px-4 flex-shrink-0 mb-6">
                    {/* Total XP Badge */}
                    <motion.img
                        src={IMAGES.stats.xp}
                        alt={`Total XP: ${result.totalXP}`}
                        initial={{ y: 30, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", bounce: 0.4, duration: 0.6 }}
                        className="w-20 max-w-20 h-auto object-contain"
                    />

                    {/* Good / Accuracy Badge */}
                    <motion.img
                        src={IMAGES.stats.good}
                        alt={`Accuracy: ${result.accuracy}%`}
                        initial={{ y: 30, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", bounce: 0.4, duration: 0.6 }}
                        className="w-20 max-w-20 h-auto object-contain"
                    />

                    {/* Speedy / Time Badge */}
                    <motion.img
                        src={IMAGES.stats.speedy}
                        alt={`Time: ${formatTime(result.timeSeconds)}`}
                        initial={{ y: 30, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", bounce: 0.4, duration: 0.6 }}
                        className="w-20 max-w-20 h-auto object-contain"
                    />
                </div>

                {/* Claim Button - full width */}
                <div className="mt-4 mb-[33px] w-full max-w-sm px-4">
                    <Button variant="primary" fullWidth onClick={onClaim}>
                        CLAIM XP
                    </Button>
                </div>
            </div>
        </div>
    );
};

