import { motion } from "motion/react";
import { Flame, Star, TrendingUp, School } from "lucide-react";
import { MOCK_USER_SCHOOL_STATS, MOCK_INSTITUTIONS } from "@/constants/socialData";
import { useAppStore } from "@/store/useAppStore";

export const UserSchoolCard = () => {
    const { profile } = useAppStore();
    const stats = MOCK_USER_SCHOOL_STATS;
    const userSchool = MOCK_INSTITUTIONS.find(i => i.shortName === "NP") || MOCK_INSTITUTIONS[3];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mb-4"
        >
            <div className="bg-[#00897B] rounded-2xl border-2 border-[#00695C] border-b-4 shadow-lg overflow-hidden">
                {/* Main content */}
                <div className="p-4">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <School size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-din font-bold text-[#b2dfdb] uppercase tracking-wide">
                                    Your School
                                </p>
                                <h3 className="text-lg font-feather text-white">
                                    {userSchool.shortName}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#FFD700] px-3 py-1.5 rounded-xl border-b-2 border-[#B8860B]">
                            <span className="text-xs font-din font-extrabold text-[#8B6914]">
                                #{stats.schoolRank} National
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/20 mb-3" />

                    {/* User Rank Row */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-feather text-white">
                                #{stats.userRankInSchool}
                            </span>
                            <span className="text-sm font-din text-[#b2dfdb]">
                                of {stats.totalUsersInSchool.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#00695C] px-3 py-2 rounded-xl">
                            <Star size={16} className="text-yellow-400" fill="#facc15" />
                            <span className="text-sm font-din font-bold text-white">
                                Top {100 - stats.percentile}%
                            </span>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-2">
                        <div className="flex-1 bg-[#00695C] rounded-xl py-3 px-2 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <TrendingUp size={16} className="text-white" />
                                <span className="font-din font-extrabold text-lg text-white">{stats.weeklyPoints}</span>
                            </div>
                            <p className="text-[10px] font-din text-[#b2dfdb]">This Week</p>
                        </div>
                        <div className="flex-1 bg-[#00695C] rounded-xl py-3 px-2 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Flame size={16} className="text-orange-400" fill="#fb923c" />
                                <span className="font-din font-extrabold text-lg text-white">{profile.streak.current}</span>
                            </div>
                            <p className="text-[10px] font-din text-[#b2dfdb]">Day Streak</p>
                        </div>
                        <div className="flex-1 bg-[#00695C] rounded-xl py-3 px-2 text-center">
                            <span className="font-din font-extrabold text-lg text-white">{stats.contribution}%</span>
                            <p className="text-[10px] font-din text-[#b2dfdb]">Contribution</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
