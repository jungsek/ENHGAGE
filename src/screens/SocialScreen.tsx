import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { AppHeader } from "@/components/common/AppHeader";
import { LeaderboardHeader } from "@/components/social/LeaderboardHeader";

import { LeaderboardList } from "@/components/social/LeaderboardList";
import { WrappedBanner } from "@/components/social/WrappedBanner";
import { WrappedModal } from "@/components/social/WrappedModal";
import { useAppStore } from "@/store/useAppStore";

export const SocialScreen = () => {
    const { profile } = useAppStore();
    const [showWrappedModal, setShowWrappedModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 max-w-md mx-auto flex flex-col pb-20 overflow-x-hidden" style={{ overflowX: 'hidden' }}>
            {/* Top Bar */}
            <AppHeader
                gems={520}
                streak={profile.streak}
            />

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
                {/* Wrapped Banner */}
                <WrappedBanner onClick={() => setShowWrappedModal(true)} />

                {/* Leaderboard Section */}
                <div className="bg-white rounded-t-3xl -mt-2 pt-2 pb-4">
                    <LeaderboardHeader />

                    {/* Rankings List */}
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
