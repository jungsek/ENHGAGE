import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Check, Zap, Heart, Star } from "lucide-react";
import confetti from "canvas-confetti";
import { AppHeader } from "@/components/common/AppHeader";
import { StreakModal } from "@/components/StreakModal";

import { IMAGES } from "@/constants/assets";
import { StreakWidget } from "@/components/home/StreakWidget";
import { Button } from "@/components/common/Button";
import { useAppStore } from "@/store/useAppStore";

export const HomeScreen = () => {
    const { profile } = useAppStore();
    const [showStreakModal, setShowStreakModal] = useState(false);

    useEffect(() => {
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

            {/* Top Bar */}
            <AppHeader
                gems={520}
                streak={profile.streak}
                onStreakClick={() => setShowStreakModal(true)}
            />

            <div className="flex-1 overflow-y-auto">
                {/* Welcome Header */}
                <div className="p-6 pb-8 flex flex-col items-center">
                    <h1 className="text-2xl font-feather text-gray-600 mb-6">
                        good morning, {profile.name || "Sarah"}!
                    </h1>
                    <div className="relative mt-4">
                        <img
                            src={
                                profile.buddy === "lylah"
                                    ? IMAGES.lylahFull
                                    : profile.buddy === "ellah"
                                        ? IMAGES.ellahFull
                                        : IMAGES.olahFull
                            }
                            className="h-48 object-contain z-10 relative"
                        />
                        <div className="absolute -top-6 -right-12 bg-white border-2 border-gray-200 rounded-2xl p-3 shadow-sm font-din z-20 max-w-[140px]">
                            <p className="font-bold text-gray-600 text-sm">
                                Let's crush today! 💪
                            </p>
                            <div className="absolute bottom-3 -left-2 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 transform rotate-45"></div>
                        </div>
                    </div>
                </div>

                {/* Level Progress */}
                <div className="px-6 mb-8 font-din">
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase mb-1">
                        <span>Level 3</span>
                        <span>350/500 XP</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00897B] w-[70%] relative">
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
                                Level 3
                            </span>
                        </div>

                        <div className="relative w-full h-20 flex items-center justify-center mb-2">
                            <div className="relative w-full h-full flex items-center justify-between px-4">
                                {/* Connector Background */}
                                <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-3 bg-gray-200 rounded-full z-0"></div>
                                {/* Connector Progress */}
                                <div className="absolute left-8 w-1/2 top-1/2 -translate-y-1/2 h-3 bg-[#00897B] rounded-full z-0"></div>

                                {/* Node 1 */}
                                <div className="relative z-10 cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-[#00897B] border-b-4 border-[#00695C] flex items-center justify-center text-white active:border-b-0 active:translate-y-[4px] transition-all">
                                        <Check size={20} strokeWidth={4} />
                                    </div>
                                </div>

                                {/* Node 2 */}
                                <div className="relative z-10 cursor-pointer group">
                                    <div className="w-10 h-10 rounded-full bg-[#00897B] border-b-4 border-[#00695C] flex items-center justify-center text-white active:border-b-0 active:translate-y-[4px] transition-all">
                                        <Check size={20} strokeWidth={4} />
                                    </div>
                                </div>

                                {/* Node 3 (Current) */}
                                <div className="relative z-10 cursor-pointer group">
                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-[#FFC800] flex items-center justify-center shadow-sm transform transition-all active:scale-95">
                                        <img src={IMAGES.icons.shieldGold} alt="current" className="w-6 h-6" />
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#FFC800] text-yellow-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide whitespace-nowrap">
                                        Current
                                    </div>
                                </div>

                                {/* Node 4 (Goal) */}
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-100 border-2 border-gray-200 border-b-4 flex items-center justify-center">
                                        <img src={IMAGES.icons.chestGold} alt="goal" className="w-6 h-6 opacity-50 grayscale" />
                                    </div>
                                </div>
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
                        {/* Completed Quest */}
                        <div className="bg-[#58cc02] border-2 border-[#46a302] rounded-2xl p-4 flex items-center justify-between border-b-4 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Check
                                        size={20}
                                        className="text-white"
                                        strokeWidth={4}
                                    />
                                    <span className="font-extrabold text-[#0b4600] text-lg">
                                        Learned: Box Breathing
                                    </span>
                                </div>
                                <span className="text-xs text-[#1e5812] font-bold ml-7">
                                    Stress Module Day 3
                                </span>
                            </div>
                            <span className="font-extrabold text-white text-lg relative z-10">
                                +10 XP
                            </span>
                            {/* Glossy effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                        </div>

                        {/* Active Quest - Walking */}
                        <div className="bg-[#ff9600] border-2 border-[#cb7700] rounded-2xl p-4 flex flex-col justify-center shadow-[0_4px_0_#cb7700] active:translate-y-[4px] active:shadow-none active:border-b-2 transition-all cursor-pointer border-b-4 relative overflow-hidden">
                            <div className="relative z-10 w-full flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <Zap
                                        size={20}
                                        className="text-white fill-white"
                                    />
                                    <span className="font-extrabold text-[#5c3b00] text-lg">
                                        Walk 5,000 steps
                                    </span>
                                </div>
                                <span className="font-extrabold text-white text-xl">
                                    +20
                                </span>
                            </div>

                            <div className="relative z-10 w-full pl-7 pr-2">
                                <div className="relative h-4 w-full bg-black/20 rounded-full mb-1">
                                    <div className="absolute top-0 left-0 h-full w-[65%] bg-white rounded-full border-2 border-transparent"></div>
                                    {/* Buddy Head at end of progress */}
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-8 h-8 rounded-full border-2 border-white bg-[#ff9600] flex items-center justify-center overflow-hidden shadow-sm transform -translate-x-1/2">
                                        <img
                                            src={
                                                profile.buddy === "lylah"
                                                    ? IMAGES.lylah
                                                    : profile.buddy === "ellah"
                                                        ? IMAGES.ellah
                                                        : IMAGES.olah
                                            }
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <span className="text-xs text-[#7e5306] font-bold">
                                    3,241 / 5,000
                                </span>
                            </div>
                            {/* Glossy effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                        </div>

                        {/* Active Quest - Mood */}
                        <div className="bg-[#2cb0fc] border-2 border-[#1899d6] rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_0_#1899d6] active:translate-y-[4px] active:shadow-none active:border-b-2 transition-all cursor-pointer border-b-4 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart
                                        size={20}
                                        className="text-white fill-white"
                                    />
                                    <span className="font-extrabold text-[#004a77] text-lg">
                                        Log your mood
                                    </span>
                                </div>
                                <span className="text-xs text-[#005c93] font-bold ml-7">
                                    How are you feeling?
                                </span>
                            </div>

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="bg-[#1899d6]/30 p-1 rounded-full flex gap-1">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/60 hover:bg-white/40 transition-colors">
                                        <span className="text-sm">😔</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#fbd300] border-2 border-[#cead00] flex items-center justify-center shadow-sm transform scale-110 z-10">
                                        <span className="text-sm">😐</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/60 hover:bg-white/40 transition-colors">
                                        <span className="text-sm">😊</span>
                                    </div>
                                </div>
                                <span className="font-extrabold text-white text-xl">
                                    +5
                                </span>
                            </div>
                            {/* Glossy effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                        </div>

                        {/* Bonus Quest - CHP */}
                        <div className="bg-[#fbd300] border-2 border-[#cead00] rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_0_#cead00] cursor-pointer border-b-4 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Star
                                        size={20}
                                        className="text-white fill-white"
                                    />
                                    <span className="font-extrabold text-[#795700] text-lg">
                                        BONUS: Visit a CHP
                                    </span>
                                </div>
                                <span className="text-xs text-[#8f6d0f] font-bold ml-7">
                                    Attend any CHP event
                                </span>
                            </div>
                            <div className="relative z-10 bg-white px-3 py-1.5 rounded-xl border-2 border-[#e5c300] shadow-sm">
                                <span className="font-extrabold text-[#cead00] text-sm">
                                    +100 XP
                                </span>
                            </div>
                            {/* Glossy effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Continue Learning */}
                <div className="px-6 mb-8">
                    <h2 className="font-bold text-gray-700 text-lg mb-4 font-din flex items-center gap-2">
                        <img src={IMAGES.icons.guidebook} alt="" className="w-5 h-5" />
                        Continue Learning
                    </h2>
                    <div className="bg-[#00897B] rounded-2xl p-4 text-white shadow-[0_4px_0_#00695C] relative overflow-hidden border-b-4 border-[#00695C]">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                        <h3 className="font-extrabold text-xl mb-1 font-feather">
                            Stress Less in 14 Days
                        </h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm font-bold mb-4 font-din">
                            <span>Day 5/14</span>
                            <div className="w-20 h-3 bg-black/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white w-[35%]"></div>
                            </div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 mb-3 backdrop-blur-sm">
                            <p className="font-bold text-sm font-din">
                                Today: "5-4-3-2-1 Grounding"
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            fullWidth
                            className="bg-white text-[#00897B] border-[#00695C] hover:bg-gray-50"
                        >
                            CONTINUE
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};
