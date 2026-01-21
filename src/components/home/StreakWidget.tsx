import React from "react";
// Flame icon from assets
import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import { DEMO_STREAK_CONFIG } from "@/constants/data";
import { IMAGES } from "@/constants/assets";

interface StreakWidgetProps {
    history: boolean[]; // Array of last 7 days
    streakCurrent: number;
    streakStatus: "cold" | "warm" | "hot";
}

export const StreakWidget = ({ history, streakCurrent, streakStatus }: StreakWidgetProps) => {
    // Generate day labels ending with Today
    const today = new Date();
    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(today.getDate() - (6 - i));
        return {
            label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2).toUpperCase(), // MO, TU...
            isToday: i === 6,
            index: i
        };
    });

    return (
        <div className="px-6 mb-8 w-full">
            {/* Header Section */}
            <div className="flex items-center gap-2 mb-4">
                <img
                    src={IMAGES.icons.flame}
                    alt="streak"
                    className="w-6 h-6"
                />
                <h2 className="text-xl font-bold text-orange-500 font-din">
                    {streakCurrent} Day Streak!
                </h2>
            </div>

            {/* Days Grid */}
            <div className="flex justify-between items-center w-full px-2">
                {days.map((day, idx) => {
                    const isCompleted = history[idx];
                    const isFrozen = DEMO_STREAK_CONFIG.forceFrozenState && DEMO_STREAK_CONFIG.frozenIndices.includes(idx);

                    return (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            {/* Day Label */}
                            <span className={cn(
                                "text-xs font-bold font-din uppercase tracking-wide",
                                day.isToday ? "text-orange-500" : "text-gray-400"
                            )}>
                                {day.label}
                            </span>

                            {/* Indicator Image */}
                            <motion.div
                                className="relative cursor-pointer w-[45px] h-[45px] flex items-center justify-center p-0.5"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                {isFrozen ? (
                                    <img
                                        src={IMAGES.icons.checkFreeze}
                                        alt="Frozen"
                                        className="w-full h-full object-contain drop-shadow-sm"
                                    />
                                ) : isCompleted ? (
                                    <img
                                        src={IMAGES.icons.checkDone}
                                        alt="Completed"
                                        className="w-full h-full object-contain drop-shadow-sm"
                                    />
                                ) : (
                                    <img
                                        src={IMAGES.icons.check}
                                        alt="Incomplete"
                                        className="w-full h-full object-contain opacity-50"
                                    />
                                )}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
