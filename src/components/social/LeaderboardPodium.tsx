import { motion } from "motion/react";
import { MOCK_INSTITUTIONS } from "@/constants/socialData";

export const LeaderboardPodium = () => {
    const top3 = MOCK_INSTITUTIONS.slice(0, 3);
    // Order: 2nd, 1st, 3rd for visual layout
    const displayOrder = [
        { ...top3[1], position: 2, medal: "🥈", height: "h-16", color: "from-gray-300 to-gray-400" },
        { ...top3[0], position: 1, medal: "🥇", height: "h-24", color: "from-yellow-300 to-yellow-500" },
        { ...top3[2], position: 3, medal: "🥉", height: "h-12", color: "from-orange-300 to-orange-500" },
    ];

    return (
        <div className="px-4 mb-6">
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl border-2 border-gray-100 border-b-4 p-4 pt-2">
                <div className="flex items-end justify-center gap-2">
                    {displayOrder.map((inst, idx) => (
                        <motion.div
                            key={inst.shortName}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, type: "spring", stiffness: 200 }}
                            className="flex flex-col items-center flex-1"
                            style={{ minWidth: 0 }}
                        >
                            {/* Medal */}
                            <motion.div
                                animate={{
                                    y: inst.position === 1 ? [0, -4, 0] : [0, -2, 0],
                                    scale: inst.position === 1 ? [1, 1.1, 1] : 1,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: idx * 0.2,
                                }}
                                className="text-3xl mb-1"
                            >
                                {inst.medal}
                            </motion.div>

                            {/* School Badge */}
                            <div
                                className={`
                                    w-full py-2 px-3 rounded-xl mb-1 text-center border-2 border-b-4
                                    ${inst.position === 1
                                        ? "bg-gradient-to-b from-yellow-100 to-yellow-200 border-yellow-400 text-yellow-800"
                                        : inst.position === 2
                                            ? "bg-gradient-to-b from-gray-100 to-gray-200 border-gray-400 text-gray-700"
                                            : "bg-gradient-to-b from-orange-100 to-orange-200 border-orange-400 text-orange-800"
                                    }
                                `}
                            >
                                <p className="font-din font-extrabold text-sm">{inst.shortName}</p>
                            </div>

                            {/* Points */}
                            <div className="bg-white border-2 border-gray-200 rounded-lg px-2 py-1 w-full text-center">
                                <p className="font-din font-bold text-xs text-gray-600">
                                    {(inst.points / 1000).toFixed(0)}K
                                </p>
                                <p className="text-[9px] font-din text-gray-400">pts</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
