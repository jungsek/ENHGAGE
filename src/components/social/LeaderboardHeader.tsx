import { motion } from "motion/react";
import { Timer, Trophy } from "lucide-react";
import { getCurrentCompetitionPeriod } from "@/constants/socialData";
import { useEffect, useState } from "react";

export const LeaderboardHeader = () => {
    const period = getCurrentCompetitionPeriod();
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const diff = period.endDate.getTime() - now.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        };
        updateTimer();
        const interval = setInterval(updateTimer, 60000);
        return () => clearInterval(interval);
    }, [period.endDate]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-3"
        >
            <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center border-b-2 border-yellow-600">
                    <Trophy className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-lg font-feather text-gray-700">
                    IHL Leaderboard
                </h1>
            </div>
            <div className="flex items-center justify-between pl-10">
                <span className="text-xs font-din font-bold text-gray-400">
                    {period.label}
                </span>
                <div className="flex items-center gap-1 bg-[#00897B]/10 px-2.5 py-1 rounded-full">
                    <Timer className="w-3.5 h-3.5 text-[#00897B]" />
                    <span className="text-[11px] font-din font-bold text-[#00897B]">
                        {timeLeft} left
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
