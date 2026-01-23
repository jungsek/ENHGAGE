import React, { useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { AppHeader } from "@/components/common/AppHeader";
import { IMAGES } from "@/constants/assets";
import { Button } from "@/components/common/Button";
import { motion, AnimatePresence } from "motion/react";
import { Clock } from "lucide-react";

import { REWARDS, Reward } from "@/constants/rewardsData";
import { MascotSpeechBubble } from "@/components/learning/MascotSpeechBubble";

export const RewardsScreen: React.FC = () => {
    const { profile, addPoints } = useAppStore();

    const [activeTab] = useState<"rewards" | "history">("rewards");
    const [selectedCategory, setSelectedCategory] = useState<"all" | "voucher" | "activity" | "digital" | "experience">("all");
    const [showRedemptionSuccess, setShowRedemptionSuccess] = useState<Reward | null>(null);

    const filteredRewards = REWARDS.filter(r =>
        selectedCategory === "all" ? true : r.category === selectedCategory
    );

    const handleRedeem = (reward: Reward) => {
        if (profile.points >= reward.cost) {
            // Deduct points (simulated by adding negative points for now if no deduct method exists, 
            // or we should update store. For now we will just show success modal as per plan instructions to mock logc first)
            // Ideally we need a deductPoints method in useAppStore.
            // For this iteration, let's assume we can add negative points or just show the UI flow.
            // Let's actually verify if we can add negative points. addPoints takes a number.
            addPoints(-reward.cost);
            setShowRedemptionSuccess(reward);
        } else {
            alert("Not enough points!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pb-24">
            {/* Header */}
            <AppHeader
                gems={profile.points}
                streak={profile.streak}
            />

            {/* Spacer at top for breathing room */}
            <div className="h-10" />

            {/* Content Text with Mascot Speech Bubble */}
            <div className="">
                <MascotSpeechBubble text="Earn more points by completing lessons! Spend your points to redeem rewards." className="px-6 mb-6" />
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-4">
                {activeTab === "rewards" && (
                    <div className="space-y-6">
                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {["all", "voucher", "activity", "digital", "experience"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat as any)}
                                    className={`px-4 py-2 rounded-xl text-xs font-extrabold font-din uppercase whitespace-nowrap border-2 transition-all
                                        ${selectedCategory === cat
                                            ? "bg-[#E0F2F1] border-[#00897B] text-[#00897B]"
                                            : "bg-white border-gray-200 text-gray-400 hover:border-gray-300"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Rewards Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            {filteredRewards.map((reward) => (
                                <div key={reward.id} className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 relative overflow-hidden group">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl border border-gray-100 shrink-0 overflow-hidden p-2">
                                        {reward.image ? (
                                            <img
                                                src={reward.image}
                                                alt={reward.title}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <span>{reward.category === "voucher" ? "🎟️" : reward.category === "activity" ? "🏋️" : reward.category === "digital" ? "📱" : "🌟"}</span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{reward.partner}</span>
                                                <h3 className="font-bold text-gray-800 leading-tight mb-1">{reward.title}</h3>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="flex items-center gap-1 bg-[#FFF8E1] px-2 py-1 rounded-lg border border-[#FFE082]">
                                                    <img src={IMAGES.icons.trophy} className="w-3 h-3" alt="pts" />
                                                    <span className="text-xs font-extrabold text-[#FFA000]">{reward.cost}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{reward.description}</p>

                                        <Button
                                            size="sm"
                                            fullWidth
                                            className={`h-9 text-xs ${profile.points < reward.cost ? "bg-gray-200 border-gray-300 text-gray-400 pointer-events-none" : "bg-white border-[#00897B] text-[#00897B] hover:bg-[#E0F2F1]"}`}
                                            variant={profile.points < reward.cost ? "secondary" : "outline"}
                                            onClick={() => handleRedeem(reward)}
                                        >
                                            {profile.points < reward.cost ? "NOT ENOUGH POINTS" : "REDEEM"}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "history" && (
                    <div className="text-center py-10 opacity-50">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-4">
                            <Clock className="text-gray-400" />
                        </div>
                        <p className="font-din font-bold text-gray-400">No redemption history yet.</p>
                    </div>
                )}
                {/* Spacer to prevent content being cut off by bottom navbar */}
                <div className="h-24" />
            </div>

            {/* Redemption Success Modal */}
            <AnimatePresence>
                {showRedemptionSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setShowRedemptionSuccess(null)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-3xl p-6 w-full max-w-sm relative z-10 text-center shadow-xl"
                        >
                            <div className="w-20 h-20 bg-[#E0F2F1] rounded-full mx-auto flex items-center justify-center mb-4 text-4xl animate-bounce">
                                🎁
                            </div>
                            <h2 className="text-2xl font-feather text-[#00897B] mb-2">Enjoy your reward!</h2>
                            <p className="text-gray-500 text-sm mb-6">
                                You successfully redeemed <strong>{showRedemptionSuccess.title}</strong> for {showRedemptionSuccess.cost} points.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-200 mb-6">
                                <p className="text-xs text-gray-400 font-mono font-bold uppercase mb-1">Voucher Code</p>
                                <p className="text-xl font-mono font-bold text-gray-800 tracking-widest">ENH-8823-X9Y</p>
                            </div>
                            <Button fullWidth onClick={() => setShowRedemptionSuccess(null)}>
                                AWESOME!
                            </Button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
