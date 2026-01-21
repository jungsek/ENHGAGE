import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Gem, Flame } from "lucide-react";
import { cn } from "@/components/ui/utils";
import { EnhgageLogo } from "@/components/common/EnhgageLogo";
import { LeaderboardHeader } from "@/components/social/LeaderboardHeader";
import { LeaderboardTabs } from "@/components/social/LeaderboardTabs";
import { TimeFilterPills } from "@/components/social/TimeFilterPills";
import { LeaderboardPodium } from "@/components/social/LeaderboardPodium";
import { UserSchoolCard } from "@/components/social/UserSchoolCard";
import { LeaderboardList } from "@/components/social/LeaderboardList";
import { WrappedBanner } from "@/components/social/WrappedBanner";
import { WrappedModal } from "@/components/social/WrappedModal";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";

export const SocialScreen = () => {
    const { profile } = useAppStore();
    const [showWrappedModal, setShowWrappedModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 max-w-md mx-auto flex flex-col pb-20 overflow-x-hidden" style={{ overflowX: 'hidden' }}>
            {/* Top Bar */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b-2 border-gray-100 px-4 py-2 flex items-center justify-between font-din">
                <div className="flex items-center gap-2">
                    <EnhgageLogo size="small" showIcon={false} />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Gem
                            className="w-6 h-6 text-[#00897B] fill-[#00897B]"
                            strokeWidth={2}
                        />
                        <span className="font-extrabold text-[#00897B]">
                            520
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Flame
                            size={24}
                            className={
                                profile.streak.status === "hot"
                                    ? "text-orange-600 fill-orange-600 animate-pulse"
                                    : profile.streak.status === "warm"
                                        ? "text-orange-500 fill-orange-500"
                                        : "text-gray-400"
                            }
                        />
                        <span
                            className={cn(
                                "font-extrabold",
                                profile.streak.status === "hot"
                                    ? "text-orange-600"
                                    : profile.streak.status === "warm"
                                        ? "text-orange-400"
                                        : "text-gray-400",
                            )}
                        >
                            {profile.streak.current}
                        </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                        <img
                            src={IMAGES.icons.profile}
                            alt="profile"
                            className="w-8 h-8 opacity-40 grayscale"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
                {/* Wrapped Banner */}
                <WrappedBanner onClick={() => setShowWrappedModal(true)} />

                {/* Leaderboard Section */}
                <div className="bg-white rounded-t-3xl -mt-2 pt-2 pb-4">
                    <LeaderboardHeader />
                    <LeaderboardTabs />
                    <TimeFilterPills />

                    {/* User's School Card */}
                    <UserSchoolCard />

                    {/* Top 3 Podium */}
                    <LeaderboardPodium />

                    {/* Full Rankings List */}
                    <LeaderboardList />
                </div>
            </div>

            {/* Wrapped Modal */}
            <AnimatePresence>
                {showWrappedModal && (
                    <WrappedModal
                        isOpen={showWrappedModal}
                        onClose={() => setShowWrappedModal(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
