import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import confetti from "canvas-confetti";
import { AppHeader } from "@/components/common/AppHeader";
import { StreakModal } from "@/components/StreakModal";

import { IMAGES } from "@/constants/assets";
import { StreakWidget } from "@/components/home/StreakWidget";
import { Button } from "@/components/common/Button";
import { useAppStore } from "@/store/useAppStore";
import { DAILY_QUESTS } from "@/constants/questData";
import { QuestItem } from "@/components/home/QuestItem";
import { REWARDS, Reward } from "@/constants/rewardsData";
import { DailyRewardModal } from "@/components/home/DailyRewardModal";
import { ALERT_LESSON } from "@/constants/lessonData";

export const HomeScreen = () => {
    const { profile } = useAppStore();
    const navigate = useNavigate();
    const [showStreakModal, setShowStreakModal] = useState(false);
    const [isHappyMascot, setIsHappyMascot] = useState(false);
    const prevLevelRef = useRef(profile.level);

    useEffect(() => {
        if (profile.level > prevLevelRef.current) {
            // Level Up Triggered!
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                zIndex: 200,
            });
            setIsHappyMascot(true);
        }
        prevLevelRef.current = profile.level;
    }, [profile.level]);
    const [dailyReward, setDailyReward] = useState<Reward | null>(null);
    const [showRewardModal, setShowRewardModal] = useState(false);

    useEffect(() => {
        useAppStore.getState().checkDailyReset();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.2 },
        });
    }, []);

    return (
        <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col pb-20">
            <AnimatePresence>
                {showStreakModal && (
                    <StreakModal
                        isOpen={showStreakModal}
                        onClose={() => setShowStreakModal(false)}
                        streak={profile.streak}
                    />
                )}
            </AnimatePresence>

            <DailyRewardModal
                isOpen={showRewardModal}
                onClose={() => setShowRewardModal(false)}
                reward={dailyReward}
            />

            {/* Top Bar */}
            <AppHeader
                gems={profile.points}
                streak={profile.streak}
                onStreakClick={() => setShowStreakModal(true)}
                onPointsClick={() => navigate("/app/rewards")}
            />

            <div className="flex-1 overflow-y-auto">
                {/* Welcome Header */}
                <div className="p-6 pb-8 flex flex-col items-center">
                    <h1 className="text-2xl font-feather text-gray-600 mb-6">
                        good morning, {profile.name || "Sarah"}!
                    </h1>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <motion.div
                            className="relative flex-shrink-0"
                            animate={isHappyMascot ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={
                                    isHappyMascot
                                        ? IMAGES.mascotHappy
                                        : profile.buddy === "lylah"
                                            ? IMAGES.lylahFull
                                            : profile.buddy === "ellah"
                                                ? IMAGES.ellahFull
                                                : IMAGES.olahFull
                                }
                                className="h-32 object-contain z-10 relative"
                            />
                        </motion.div>
                        {/* Speech Bubble */}
                        <div className="relative bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 shadow-sm font-din max-w-[180px]">
                            <p className="font-bold text-gray-700 text-base leading-relaxed whitespace-pre-line">
                                Let's crush today! 💪
                            </p>
                            {/* Arrow pointing to mascot */}
                            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 transform rotate-45"></div>
                        </div>
                    </div>
                </div>

                {/* Level Progress */}
                <div className="px-6 mb-8 font-din">
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase mb-1">
                        <span>Level {profile.level}</span>
                        <span>{profile.currentXP}/{profile.maxXP} XP</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#00897B] relative transition-all duration-1000 ease-out"
                            style={{ width: `${(profile.currentXP / profile.maxXP) * 100}%` }}
                        >
                            <div className="absolute top-1 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Streak Widget (New) */}
                <StreakWidget
                    history={profile.streak.history}
                    streakCurrent={profile.streak.current}
                    streakStatus={profile.streak.status}
                />

                {/* Today's Progress Section */}
                <div className="px-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-gray-700 text-lg font-din flex items-center gap-2">
                            <img src={IMAGES.icons.checkCircle} alt="" className="w-5 h-5" />
                            Today's Progress
                        </h2>
                        <span className="text-[#00897B] font-extrabold font-din">
                            2/4
                        </span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 pb-6 shadow-[0_4px_0_#e5e7eb] relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-extrabold text-[#00897B] uppercase tracking-widest font-din">
                                Your Journey
                            </span>
                            <span className="text-xs font-bold text-gray-400 font-din">
                                Level {profile.level}
                            </span>
                        </div>

                        <div className="relative w-full h-20 flex items-center justify-center mb-2">
                            <div className="relative w-full h-full flex items-center justify-between px-4">
                                {/* Connector Background */}
                                <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-3 bg-gray-200 rounded-full z-0"></div>
                                {/* Connector Progress */}
                                <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-3 z-0 pointer-events-none">
                                    <div
                                        className="h-full bg-[#00897B] rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${Math.max(0, Math.min(100, ((profile.completedQuests?.length || 0) - 1) * 33.33))}%` }}
                                    ></div>
                                </div>

                                {/* Journey Nodes */}
                                {[0, 1, 2, 3].map((index) => {
                                    const completedCount = profile.completedQuests?.length || 0;
                                    const isCompleted = index < completedCount;
                                    const isCurrent = index === completedCount;
                                    const isRewardNode = index === 3;
                                    const canClaimReward = isRewardNode && completedCount >= 4 && !profile.dailyRewardClaimed;
                                    const isClaimed = isRewardNode && profile.dailyRewardClaimed;

                                    // Render Reward Node (Last Node)
                                    if (isRewardNode) {
                                        return (
                                            <div
                                                key={index}
                                                className={`relative z-10 cursor-pointer group transition-all transform ${canClaimReward ? 'scale-110 animate-bounce' : ''}`}
                                                onClick={() => {
                                                    if (canClaimReward) {
                                                        const randomReward = REWARDS[Math.floor(Math.random() * REWARDS.length)];
                                                        setDailyReward(randomReward);
                                                        setShowRewardModal(true);

                                                        useAppStore.getState().claimDailyReward();
                                                        confetti({
                                                            particleCount: 150,
                                                            spread: 70,
                                                            origin: { y: 0.6 }
                                                        });
                                                    }
                                                }}
                                            >
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-b-4 transition-colors ${canClaimReward
                                                    ? 'bg-[#FFC800] border-[#e5b800] active:translate-y-[4px] active:border-b-0'
                                                    : isClaimed
                                                        ? 'bg-[#58cc02] border-[#46a302]'
                                                        : 'bg-gray-100 border-gray-200'
                                                    }`}>
                                                    {isClaimed ? (
                                                        <Check size={24} className="text-white" strokeWidth={4} />
                                                    ) : (
                                                        <img
                                                            src={IMAGES.icons.chest}
                                                            alt="goal"
                                                            className={`w-6 h-6 ${canClaimReward ? '' : 'opacity-50 grayscale'}`}
                                                        />
                                                    )}
                                                </div>
                                                {canClaimReward && (
                                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#FFC800] text-yellow-900 text-[10px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wide whitespace-nowrap animate-pulse shadow-sm">
                                                        Claim!
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    // Render Standard Nodes
                                    return (
                                        <div key={index} className="relative z-10 cursor-pointer group">
                                            {isCompleted ? (
                                                <div className="w-10 h-10 rounded-full bg-[#00897B] border-b-4 border-[#00695C] flex items-center justify-center text-white transition-all transform hover:scale-105">
                                                    <Check size={20} strokeWidth={4} />
                                                </div>
                                            ) : isCurrent ? (
                                                <div className="relative">
                                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-[#FFC800] flex items-center justify-center shadow-sm transform transition-all scale-105">
                                                        <img src={IMAGES.icons.shieldGold} alt="current" className="w-6 h-6" />
                                                    </div>
                                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#FFC800] text-yellow-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide whitespace-nowrap">
                                                        Current
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-4 h-4 rounded-full bg-gray-200 border-2 border-gray-300"></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 font-din font-bold text-center">
                            You're almost at the next milestone!
                        </p>


                    </div>
                </div>

                {/* Daily Quests */}
                <div className="px-6 mb-8">
                    <h2 className="font-bold text-gray-700 text-lg mb-4 font-din flex items-center gap-2">
                        <img src={IMAGES.icons.dumbbell} alt="" className="w-5 h-5" />
                        Daily Quests
                    </h2>

                    <div className="space-y-3 font-din">
                        {DAILY_QUESTS.map((quest) => (
                            <QuestItem
                                key={quest.id}
                                quest={quest}
                                isCompleted={(profile.completedQuests || []).includes(quest.id)}
                                onClick={(q) => {
                                    // Handle click - ideally toggle completion for demo purposes or navigate
                                    // For now, let's just complete it if it's not completed
                                    if (!(profile.completedQuests || []).includes(q.id)) {
                                        useAppStore.getState().completeQuest(q.id);
                                        // Also add XP
                                        useAppStore.getState().addPoints(q.xp);
                                    }
                                }}
                                profile={profile}
                            />
                        ))}
                    </div>
                </div>

                {/* Continue Learning */}
                <div className="px-6 mb-8">
                    <h2 className="font-bold text-gray-700 text-lg mb-4 font-din flex items-center gap-2">
                        <img src={IMAGES.icons.guidebook} alt="" className="w-5 h-5" />
                        Continue Learning
                    </h2>
                    <div
                        className="bg-[#00897B] rounded-2xl p-4 text-white shadow-[0_4px_0_#00695C] relative overflow-hidden border-b-4 border-[#00695C] cursor-pointer active:translate-y-[2px] active:shadow-none transition-all"
                        onClick={() => navigate(`/app/learn?lessonId=${ALERT_LESSON.id}`)}
                    >
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                        <h3 className="font-extrabold text-xl mb-1 font-feather">
                            {ALERT_LESSON.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm font-bold mb-4 font-din">
                            <span>Day 1/3</span>
                            <div className="w-20 h-3 bg-black/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white w-[35%]"></div>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 mb-3 backdrop-blur-sm">
                            <p className="font-bold text-sm font-din">
                                Today: "{(ALERT_LESSON.cards[0] as any).text}"
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            fullWidth
                            className="bg-white text-[#00897B] border-[#00695C] hover:bg-gray-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/app/learn?lessonId=${ALERT_LESSON.id}`);
                            }}
                        >
                            CONTINUE
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};
