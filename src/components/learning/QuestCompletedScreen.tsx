import React from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { IMAGES } from "@/constants/assets";

interface QuestCompletedScreenProps {
    questsCompleted?: number;
    gems?: number;
    onClose: () => void;
}

export const QuestCompletedScreen: React.FC<QuestCompletedScreenProps> = ({
    questsCompleted = 1,
    gems = 527,
    onClose,
}) => {
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    } as const;

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 0.6,
            },
        },
    };

    return (
        <div className="fixed inset-0 z-[110] flex flex-col bg-white overflow-hidden">
            <div className="h-10"></div>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={28} strokeWidth={2.5} />
                </button>

                {/* Gem Counter */}
                <div className="flex items-center gap-1">
                    <img
                        src={IMAGES.icons.trophy}
                        alt="gems"
                        className="w-6 h-6"
                    />
                    <span className="font-bold text-[#1CB0F6]">{gems}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
                {/* Title */}
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="text-2xl font-feather text-[#1CB0F6] text-center mb-6"
                >
                    {questsCompleted} Quest{questsCompleted !== 1 ? "s" : ""} complete!
                </motion.h1>

                {/* Quest Card Images */}
                <motion.div
                    className="flex flex-col items-center gap-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Task 1 - Extend your streak (completed) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full max-w-md"
                    >
                        <img
                            src={IMAGES.quests.tasks}
                            alt="Extend your streak - 1/1 Complete"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Task 2 - Spend 10 minutes learning */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full max-w-md -mt-1"
                    >
                        <img
                            src={IMAGES.quests.task2}
                            alt="Spend 10 minutes learning - 5/10"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Task 3 - Score 90% or higher */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full max-w-md -mt-1"
                    >
                        <img
                            src={IMAGES.quests.task3}
                            alt="Score 90% or higher in 5 lessons - 1/5"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Special Task - December Challenge */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full max-w-md mt-3"
                    >
                        <img
                            src={IMAGES.quests.specialTask}
                            alt="December Challenge - 5/25"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
