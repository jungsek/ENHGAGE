import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { IMAGES } from "@/constants/assets";
import { Button } from "@/components/common/Button";
import confetti from "canvas-confetti";
import { StatCard } from "./StatCard";

interface SummaryCardProps {
    wrapped: WrappedData;
    mascotImage: string;
    onShare: () => void;
}

export const SummaryCard = ({ wrapped, mascotImage, onShare }: SummaryCardProps) => {

    const handleShare = async (e: React.MouseEvent) => {
        e.stopPropagation();
        onShare();

        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });

        /*
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
        */
    };

    return (
        <div
            className="flex flex-col h-full overflow-y-auto relative"
            style={{
                backgroundImage: `url(${IMAGES.backgrounds.summary})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Background Clouds/Decoration - Simplified css shapes or images could be added here */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center px-6 justify-center">

                {/* 2024 Visual */}
                <div className="relative w-full flex flex-col items-center justify-center mt-20 mb-6">
                    <div className="relative">
                        {/* Mascot */}
                        <motion.img
                            src={mascotImage}
                            className="w-48 z-10 relative drop-shadow-xl"
                            initial={{ scale: 0, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                            alt="Mascot"
                        />
                    </div>
                </div>

                {/* Main Headline */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-8 px-2 mt-4"
                >
                    <h2 className="text-2xl md:text-3xl font-feather text-gray-700 leading-tight">
                        I'm a top <span className="text-[#58CC02]">{100 - wrapped.appOpensPercentile}%</span> learner<br />
                        on ENHGAGE!
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 w-full mb-8 auto-rows-fr">
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
                        share
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
