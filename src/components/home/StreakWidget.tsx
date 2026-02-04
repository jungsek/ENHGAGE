
// Flame icon from assets
import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import { DEMO_STREAK_CONFIG } from "@/constants/data";
import { IMAGES } from "@/constants/assets";

interface StreakWidgetProps {
    history: boolean[]; // Array of last 7 days
    streakCurrent: number;

}

export const StreakWidget = ({ history, streakCurrent }: StreakWidgetProps) => {
    // Generate day labels for current week (Monday to Sunday)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get current day of week (0 = Sunday, 1 = Monday, etc.)
    const currentDayOfWeek = today.getDay();
    // Convert to Monday-based index (0 = Monday, 6 = Sunday)
    const todayIndex = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

    // Calculate Monday of the current week
    const daysToSubtract = todayIndex;
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysToSubtract);

    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);

        // i is now the direct index: 0 = Monday, 1 = Tuesday, etc.
        const isToday = i === todayIndex;
        const isPast = i < todayIndex;
        const isFuture = i > todayIndex;

        return {
            label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2).toUpperCase(),
            date: d.getDate().toString(),
            isToday,
            isPreviousDay: isPast,
            isFuture,
            historyIndex: i  // Direct mapping: history[0] = Monday, history[6] = Sunday
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
                            day.isFuture && "opacity-40"
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
