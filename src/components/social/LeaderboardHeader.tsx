import { motion } from "motion/react";
import { IMAGES } from "@/constants/assets";

export const LeaderboardHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-3"
        >
            <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 flex items-center justify-center">
                    <img src={IMAGES.icons.leaderboard} alt="Leaderboard" className="w-6 h-6" />
                </div>
                <h1 className="text-lg font-feather text-gray-700">
                    IHL Leaderboard
                </h1>
            </div>
        </motion.div>
    );
};
