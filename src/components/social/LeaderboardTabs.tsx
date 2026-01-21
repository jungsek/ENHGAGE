import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import { LEADERBOARD_CATEGORIES } from "@/constants/socialData";
import { LeaderboardCategory } from "@/types";
import { useAppStore } from "@/store/useAppStore";

export const LeaderboardTabs = () => {
    const { activeLeaderboardCategory, setLeaderboardCategory } = useAppStore();

    return (
        <div className="px-3 mb-3 w-full overflow-hidden">
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
                {LEADERBOARD_CATEGORIES.map((category) => {
                    const isActive = activeLeaderboardCategory === category.id;
                    return (
                        <motion.button
                            key={category.id}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setLeaderboardCategory(category.id as LeaderboardCategory)}
                            className={cn(
                                "flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 font-din font-bold text-sm whitespace-nowrap transition-all",
                                isActive
                                    ? "bg-[#00897B] text-white border-[#00695C] border-b-4 shadow-md"
                                    : "bg-white text-gray-500 border-gray-200 border-b-4 hover:border-gray-300"
                            )}
                        >
                            <span className="text-base">{category.icon}</span>
                            <span>{category.label}</span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};
