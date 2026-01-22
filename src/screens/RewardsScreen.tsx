import React, { useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { AppHeader } from "@/components/common/AppHeader";
import { IMAGES } from "@/constants/assets";
import { Button } from "@/components/common/Button";
import { motion, AnimatePresence } from "motion/react";
import { Clock } from "lucide-react";
import { useMascot } from "@/hooks/useMascot";

// Mock Data for Rewards
interface Reward {
    id: string;
    title: string;
    description: string;
    cost: number;
    image?: string;
    category: "voucher" | "activity" | "digital";
    partner?: string;
}

const REWARDS: Reward[] = [
    {
        id: "r1",
        title: "$5 FairPrice Voucher",
        description: "Get $5 off your next healthy grocery shop.",
        cost: 1500,
        category: "voucher",
        partner: "NTUC FairPrice"
    },
    {
        id: "r2",
        title: "$5 Watsons Voucher",
        description: "Redeem for health and wellness products.",
        cost: 1500,
        category: "voucher",
        partner: "Watsons"
    },
    {
        id: "r3",
        title: "ActiveSG Gym Pass",
        description: "One-time entry to any ActiveSG gym.",
        cost: 600,
        category: "activity",
        partner: "ActiveSG"
    },
    {
        id: "r4",
        title: "Golden Village Ticket",
        description: "Catch the latest blockbuster.",
        cost: 3500,
        category: "voucher",
        partner: "Golden Village"
    },
    {
        id: "r5",
        title: "Olah Digital Sticker Pack",
        description: "Exclusive stickers for WhatsApp/Telegram.",
        cost: 200,
        category: "digital",
        partner: "ENHGAGE"
    }
];

export const RewardsScreen: React.FC = () => {
    const { profile, addPoints } = useAppStore();
    const { mascotFull } = useMascot();
    const [activeTab, setActiveTab] = useState<"rewards" | "history">("rewards");
    const [selectedCategory, setSelectedCategory] = useState<"all" | "voucher" | "activity" | "digital">("all");
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

            {/* Page Title / Mascot Guide */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-end gap-2">
                {/* Mascot */}
                <div className="relative shrink-0">
                    <img
                        src={mascotFull}
                        alt="Mascot"
                        className="w-20 h-auto object-contain"
                    />
                </div>

                {/* Speech Bubble */}
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-4 mb-2 flex-1">
                    <p className="text-gray-800 font-bold text-sm">
                        Treat yourself for staying healthy!
                    </p>

                    {/* Speech Bubble Tail */}
                    <div className="absolute -left-[9px] bottom-4 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 transform rotate-45 z-10"></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-4">
                {activeTab === "rewards" && (
                    <div className="space-y-6">
                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {["all", "voucher", "activity", "digital"].map((cat) => (
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
                                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-3xl border border-gray-100 shrink-0">
                                        {reward.category === "voucher" ? "🎟️" : reward.category === "activity" ? "🏋️" : "📱"}
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
