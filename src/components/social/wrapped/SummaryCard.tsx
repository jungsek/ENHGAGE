import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { IMAGES } from "@/constants/assets";
import { Button } from "@/components/common/Button";
import confetti from "canvas-confetti";
import { StatCard } from "./StatCard";

interface SummaryCardProps {
    wrapped: WrappedData;
    mascotImage: string;
}

export const SummaryCard = ({ wrapped, mascotImage }: SummaryCardProps) => {
    const handleShare = async (e: React.MouseEvent) => {
        e.stopPropagation();

        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });

        const shareData = {
            title: 'My 2024 Year in Review on ENHGAGE',
            text: `I'm a top ${100 - wrapped.appOpensPercentile}% learner on ENHGAGE! Check out my stats!`,
            url: window.location.href, // Or a specific share URL if available
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                // Ideally show a toast here, but for now we'll just log or rely on user knowing
                alert("Copied to clipboard!");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-[#87CEEB] to-[#E0F7FA] overflow-y-auto relative">
            {/* Background Clouds/Decoration - Simplified css shapes or images could be added here */}

            {/* Header */}
            <div className="flex justify-between items-center px-6 pt-12 pb-4">
                <div className="flex items-center gap-2">
                    {/* Placeholder for small logo text if needed, or just text */}
                    <span className="font-feather font-bold text-2xl text-white drop-shadow-md">ENHGAGE</span>
                </div>
                <span className="font-din font-bold text-xs tracking-widest text-white/90">2024 YEAR IN REVIEW</span>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center px-6">

                {/* 2024 Visual */}
                <div className="relative w-full max-w-[280px] h-[240px] flex items-center justify-center mt-4">
                    {/* Mascot */}
                    <motion.img
                        src={mascotImage}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 z-10 drop-shadow-lg"
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                        alt="Mascot"
                    />

                    {/* 2024 Text */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-10 z-20"
                    >
                        <h1 className="text-[100px] leading-none font-feather font-bold text-white drop-shadow-[0_8px_0_rgba(59,130,246,0.3)] filter"
                            style={{
                                textShadow: "4px 4px 0px #3B82F6",
                                WebkitTextStroke: "2px #3B82F6"
                            }}
                        >
                            2024
                        </h1>
                    </motion.div>
                </div>

                {/* Main Headline */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-2xl font-feather text-gray-700 leading-tight">
                        I'm a top <span className="text-[#58CC02]">{100 - wrapped.appOpensPercentile}%</span> learner<br />
                        on ENHGAGE!
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 w-full mb-8">
                    <StatCard
                        icon={IMAGES.icons.leaderboard}
                        iconBg="#E5E7EB" // Light gray/purple-ish
                        value={`Top ${100 - wrapped.appOpensPercentile}%`}
                        label="rank" // text-purple-600 logic could be in StatCard or passed
                        valueColor="#9333EA" // Purple
                        delay={0.6}
                    />
                    <StatCard
                        icon={IMAGES.icons.flameLarge}
                        iconBg="#FFDDB2" // Light orange
                        value={wrapped.longestStreak}
                        label="longest streak"
                        valueColor="#F97316" // Orange
                        delay={0.7}
                    />
                    <StatCard
                        icon={IMAGES.icons.lightning}
                        iconBg="#FEF08A" // Light yellow
                        value={wrapped.totalSteps}
                        label="total steps"
                        valueColor="#EAB308" // Yellow/Gold
                        delay={0.8}
                    />
                    <StatCard
                        icon={IMAGES.icons.timer}
                        iconBg="#D1FAE5" // Light Mint
                        value={wrapped.learningMinutes}
                        label="minutes spent"
                        valueColor="#10B981" // Emerald/Mint
                        delay={0.9}
                    />
                </div>

                {/* Share Button */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="w-full pb-8"
                >
                    <Button
                        variant="primary"
                        fullWidth
                        className="h-12 text-lg font-bold shadow-[0_4px_0_0_#1cb0f6] border-b-4 border-[#1cb0f6] active:border-b-0 active:translate-y-1"
                        onClick={handleShare}
                    >
                        SHARE YOUR WRAPPED
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
