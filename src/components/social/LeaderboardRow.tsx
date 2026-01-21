import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import { InstitutionRanking } from "@/types";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface LeaderboardRowProps {
    institution: InstitutionRanking;
    isUserSchool?: boolean;
    index: number;
}

export const LeaderboardRow = ({ institution, isUserSchool = false, index }: LeaderboardRowProps) => {
    const TrendIcon = institution.trend === "up"
        ? TrendingUp
        : institution.trend === "down"
            ? TrendingDown
            : Minus;

    const trendColor = institution.trend === "up"
        ? "text-green-500"
        : institution.trend === "down"
            ? "text-red-500"
            : "text-gray-300";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "flex items-center gap-3 p-3 rounded-2xl border-2 transition-all",
                isUserSchool
                    ? "bg-[#E0F2F1] border-[#00897B] border-b-4 shadow-[0_0_20px_rgba(0,137,123,0.2)]"
                    : "bg-white border-gray-100 border-b-4 hover:border-gray-200"
            )}
        >
            {/* Rank Circle */}
            <div className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center font-din font-extrabold text-sm",
                isUserSchool
                    ? "bg-[#00897B] text-white"
                    : "bg-gray-100 text-gray-500"
            )}>
                {institution.rank}
            </div>

            {/* School Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className={cn(
                        "font-din font-bold",
                        isUserSchool ? "text-[#00695C]" : "text-gray-700"
                    )}>
                        {institution.shortName}
                    </span>
                    {isUserSchool && (
                        <span className="text-[10px] font-din font-extrabold text-white bg-[#00897B] px-1.5 py-0.5 rounded uppercase">
                            You
                        </span>
                    )}
                </div>
                <span className="text-xs font-din text-gray-400">
                    {institution.participants.toLocaleString()} active
                </span>
            </div>

            {/* Points & Trend */}
            <div className="text-right">
                <span className={cn(
                    "font-din font-extrabold",
                    isUserSchool ? "text-[#00695C]" : "text-gray-700"
                )}>
                    {institution.points.toLocaleString()}
                </span>
                <div className={cn("flex items-center gap-0.5 justify-end text-xs", trendColor)}>
                    <TrendIcon size={12} />
                    {institution.trendAmount && (
                        <span className="font-din font-bold">{institution.trendAmount}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
