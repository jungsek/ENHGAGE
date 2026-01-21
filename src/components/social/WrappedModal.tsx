import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Flame, Trophy, Star, Heart, Share2 } from "lucide-react";
import { MOCK_WRAPPED_DATA } from "@/constants/socialData";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";
import confetti from "canvas-confetti";

interface WrappedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type StoryCard = {
    id: string;
    title: string;
    content: React.ReactNode;
    bgGradient: string;
};

export const WrappedModal = ({ isOpen, onClose }: WrappedModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { profile } = useAppStore();
    const wrapped = MOCK_WRAPPED_DATA;

    const storyCards: StoryCard[] = [
        {
            id: "intro",
            title: "Opening",
            bgGradient: "from-purple-600 via-pink-500 to-orange-400",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <img
                            src={
                                profile.buddy === "lylah"
                                    ? IMAGES.lylahFull
                                    : profile.buddy === "ellah"
                                        ? IMAGES.ellahFull
                                        : IMAGES.olahFull
                            }
                            className="h-40 object-contain mb-6"
                            alt="Mascot"
                        />
                    </motion.div>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-feather text-white mb-3"
                    >
                        Hey {profile.name || "there"}! 🎉
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg font-din text-white/90"
                    >
                        {wrapped.month} was quite a month...
                    </motion.p>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-white/70 font-din mt-2"
                    >
                        Let's see what you accomplished together.
                    </motion.p>
                </div>
            ),
        },
        {
            id: "overview",
            title: "Overview",
            bgGradient: "from-blue-600 via-blue-500 to-cyan-400",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="text-6xl mb-4"
                    >
                        📱
                    </motion.div>
                    <h2 className="text-2xl font-feather text-white mb-2">
                        {wrapped.month.toUpperCase()} {wrapped.year}
                    </h2>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mt-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg font-din text-white/80"
                        >
                            You opened ENHGAGE
                        </motion.p>
                        <motion.p
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="text-5xl font-feather text-white my-2"
                        >
                            {wrapped.appOpens}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-sm font-din text-white/70"
                        >
                            times
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mt-4 bg-white/10 px-4 py-2 rounded-full"
                    >
                        <span className="font-din text-white text-sm">
                            That's more than {wrapped.appOpensPercentile}% of users! 🌟
                        </span>
                    </motion.div>
                </div>
            ),
        },
        {
            id: "streak",
            title: "Streak",
            bgGradient: "from-orange-500 via-red-500 to-pink-500",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Flame className="w-20 h-20 text-yellow-400 mb-4" fill="#facc15" />
                    </motion.div>
                    <h2 className="text-xl font-feather text-white mb-1">
                        🔥 STREAK CHECK 🔥
                    </h2>
                    <p className="text-sm font-din text-white/70 mb-6">
                        Your longest streak this month
                    </p>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6"
                    >
                        <p className="text-6xl font-feather text-white">
                            {wrapped.longestStreak}
                        </p>
                        <p className="text-lg font-din text-white/80">DAYS</p>
                    </motion.div>
                    <div className="mt-6 flex gap-4">
                        <div className="bg-white/10 px-3 py-2 rounded-xl">
                            <p className="text-xs font-din text-white/70">Streak Saves</p>
                            <p className="text-lg font-din font-bold text-white">{wrapped.streakSaves}</p>
                        </div>
                        <div className="bg-white/10 px-3 py-2 rounded-xl">
                            <p className="text-xs font-din text-white/70">Close Calls</p>
                            <p className="text-lg font-din font-bold text-white">{wrapped.closeCalls} 😅</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "activity",
            title: "Activity",
            bgGradient: "from-green-500 via-emerald-500 to-teal-500",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <motion.div
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                        className="text-6xl mb-4"
                    >
                        👟
                    </motion.div>
                    <h2 className="text-xl font-feather text-white mb-6">
                        Your top activity was {wrapped.topActivity}!
                    </h2>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6"
                    >
                        <p className="text-5xl font-feather text-white">
                            {wrapped.totalSteps.toLocaleString()}
                        </p>
                        <p className="text-lg font-din text-white/80">steps</p>
                    </motion.div>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 font-din text-white/80 text-sm max-w-xs"
                    >
                        {wrapped.stepsComparison}
                    </motion.p>
                </div>
            ),
        },
        {
            id: "community",
            title: "Community",
            bgGradient: "from-pink-500 via-rose-500 to-red-500",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        <Heart className="w-16 h-16 text-white mb-4" fill="white" />
                    </motion.div>
                    <h2 className="text-xl font-feather text-white mb-6">
                        🤝 TOGETHER WE'RE STRONGER
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                            <p className="text-3xl font-feather text-white">{wrapped.highFivesGiven}</p>
                            <p className="text-xs font-din text-white/70">High-Fives Given</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                            <p className="text-3xl font-feather text-white">{wrapped.highFivesReceived}</p>
                            <p className="text-xs font-din text-white/70">High-Fives Received</p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 bg-white/10 px-4 py-3 rounded-xl"
                    >
                        <p className="font-din text-white text-sm">
                            You contributed <span className="font-bold">{wrapped.schoolContribution}%</span> to your school's total!
                        </p>
                    </motion.div>
                </div>
            ),
        },
        {
            id: "summary",
            title: "Summary",
            bgGradient: "from-violet-600 via-purple-500 to-fuchsia-500",
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring" }}
                    >
                        <Trophy className="w-16 h-16 text-yellow-400 mb-4" fill="#facc15" />
                    </motion.div>
                    <h2 className="text-2xl font-feather text-white mb-4">
                        ✨ {wrapped.month.toUpperCase()} {wrapped.year} WRAPPED ✨
                    </h2>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 w-full max-w-xs">
                        <div className="space-y-3 text-left">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">🔥</span>
                                <span className="font-din text-white">{wrapped.longestStreak}-day streak</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">👟</span>
                                <span className="font-din text-white">{wrapped.totalSteps.toLocaleString()} steps</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">🏆</span>
                                <span className="font-din text-white">{wrapped.badgesEarned} badges earned</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">💪</span>
                                <span className="font-din text-white">Top {100 - wrapped.appOpensPercentile}% nationally</span>
                            </div>
                        </div>
                    </div>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            confetti({
                                particleCount: 100,
                                spread: 70,
                                origin: { y: 0.6 },
                            });
                        }}
                        className="mt-6 flex items-center gap-2 bg-white text-purple-600 font-din font-bold px-6 py-3 rounded-xl border-b-4 border-gray-200 active:border-b-0 active:translate-y-[4px] transition-all"
                    >
                        <Share2 size={18} />
                        Share Your Wrapped
                    </motion.button>
                </div>
            ),
        },
    ];

    const handleTap = (e: React.MouseEvent) => {
        const x = e.clientX;
        const width = window.innerWidth;

        if (x < width / 3) {
            // Left tap - go back
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        } else {
            // Right tap - go forward
            if (currentIndex < storyCards.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                onClose();
            }
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50"
                onClick={handleTap}
            >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${storyCards[currentIndex].bgGradient}`} />

                {/* Progress Bars */}
                <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
                    {storyCards.map((_, index) => (
                        <div
                            key={index}
                            className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{
                                    width: index < currentIndex ? "100%" : index === currentIndex ? "100%" : "0%",
                                }}
                                transition={{ duration: index === currentIndex ? 5 : 0 }}
                            />
                        </div>
                    ))}
                </div>

                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-10 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Story Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={storyCards[currentIndex].id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 pt-16 pb-8"
                    >
                        {storyCards[currentIndex].content}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation hint */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                    {storyCards.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
