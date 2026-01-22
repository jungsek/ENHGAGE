import { motion } from "motion/react";
import { cn } from "@/components/ui/utils";
import { InstitutionRanking } from "@/types";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { IMAGES } from "@/constants/assets";

interface LeaderboardRowProps {
    institution: InstitutionRanking;
    isUserSchool?: boolean;
    index: number;
}

export const LeaderboardRow = ({ institution, isUserSchool = false, index }: LeaderboardRowProps) => {
    const rank = index + 1;
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

    const getRankDisplay = () => {
        const RANK_ICONS: Record<number, string> = {
            1: IMAGES.icons.medalFirst,
            2: IMAGES.icons.medalSecond,
            3: IMAGES.icons.medalThird,
        };

        if (RANK_ICONS[rank]) {
            return <img src={RANK_ICONS[rank]} alt={`${rank}`} className="w-8 h-8 object-contain" />;
        }

        // For rank 4+, show number in a grey circle
        return (
            <div className="w-[28px] h-[28px] shrink-0 rounded-full flex items-center justify-center">
                <span className={cn(
                    "font-din font-extrabold text-xs translate-y-[1px]",
                    isUserSchool ? "text-[#00695C]" : "text-gray-500"
                )}>
                    {rank}
                </span>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "flex items-center gap-3 p-3 rounded-2xl border-2 transition-all hover:bg-gray-50",
                isUserSchool
                    ? "bg-[#E0F2F1] border-[#00897B]/30" // Prominent teal highlight for user's row
                    : "border-transparent"
            )}
        >
            {/* Rank Indicator */}
            <div className={cn(
                "w-8 h-8 flex items-center justify-center shrink-0 overflow-hidden", // Fixed size to w-8 to match medals
                rank > 3 ? "font-din font-bold" : ""
            )}>
                {getRankDisplay()}
            </div>

            {/* School Icon */}
            {institution.logo ? (
                <div className="w-10 h-10 rounded-full shrink-0 shadow-sm overflow-hidden bg-white">
                    <img
                        src={institution.logo}
                        alt={institution.shortName}
                        className="w-full h-full object-contain"
                    />
                </div>
            ) : (
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-din font-bold text-sm shadow-sm"
                    style={{ backgroundColor: institution.logoColor }}
                >
                    {institution.shortName.substring(0, 2)}
                </div>
            )}

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
                        <span className="text-[10px] font-din font-extrabold text-[#00897B] bg-[#E0F2F1] px-1.5 py-0.5 rounded uppercase">
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
