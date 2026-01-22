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
    // Generate day labels for current week (Monday to Sunday)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate Monday of the current week
    // Day 0 is Sunday, 1 is Monday. We want 1 (Mon) to be start.
    const currentDay = today.getDay(); // 0-6
    const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;

    const monday = new Date(today);
    monday.setDate(today.getDate() - daysToSubtract);

    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);

        // Calculate offset from today to map to history array
        // history is [Today-6, ..., Today] (length 7)
        const diffTime = d.getTime() - today.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
        const historyIndex = 6 + diffDays;

        return {
            label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2).toUpperCase(),
            date: d.getDate().toString(),
            isToday: diffDays === 0,
            isPreviousDay: diffDays < 0,
            isFuture: diffDays > 0,
            historyIndex
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
            <div className="grid grid-cols-7 w-full" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {days.map((day, idx) => {
                    // Check if we have history for this day
                    const hasHistory = day.historyIndex >= 0 && day.historyIndex < history.length;
                    const isCompleted = hasHistory ? history[day.historyIndex] : false;
                    const isFrozen = DEMO_STREAK_CONFIG.forceFrozenState &&
                        hasHistory &&
                        DEMO_STREAK_CONFIG.frozenIndices.includes(day.historyIndex);

                    return (
                        <div key={idx} className={cn(
                            "flex flex-col items-center gap-1",
                            day.isPreviousDay && "opacity-40 grayscale"
                        )}>
                            {/* Date Number */}
                            <span className={cn(
                                "text-[10px] font-bold font-din mb-0.5",
                                day.isToday ? "text-orange-500" : "text-gray-400"
                            )}>
                                {day.date}
                            </span>

                            {/* Day Label */}
                            <span className={cn(
                                "text-[10px] font-bold font-din uppercase tracking-wide mb-1",
                                day.isToday ? "text-orange-500" : "text-gray-400"
                            )}>
                                {day.label}
                            </span>

                            {/* Indicator Image */}
                            <motion.div
                                className="relative cursor-pointer w-[38px] h-[38px] flex items-center justify-center p-0.5"
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
