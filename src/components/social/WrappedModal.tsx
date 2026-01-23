import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MOCK_WRAPPED_DATA } from "@/constants/socialData";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";
import { ACCENT_COLORS } from "./wrapped/constants";
import { IntroCard } from "./wrapped/IntroCard";
import { OverviewCard } from "./wrapped/OverviewCard";
import { StreakCard } from "./wrapped/StreakCard";
import { ActivityCard } from "./wrapped/ActivityCard";
import { CommunityCard } from "./wrapped/CommunityCard";
import { SummaryCard } from "./wrapped/SummaryCard";
import { ShareSummaryModal } from "./wrapped/ShareSummaryModal";

interface WrappedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WrappedModal = ({ isOpen, onClose }: WrappedModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const { profile } = useAppStore();
    const wrapped = MOCK_WRAPPED_DATA;

    const getMascotImage = () => {
        return profile.buddy === "lylah"
            ? IMAGES.lylahFull
            : profile.buddy === "ellah"
                ? IMAGES.ellahFull
                : IMAGES.olahFull;
    };

    const mascotImage = getMascotImage();

    const storyCards = [
        // Card 1: Intro/Opening
        {
            id: "intro",
            content: (
                <IntroCard
                    wrapped={wrapped}
                    mascotImage={mascotImage}
                    profileName={profile.name}
                />
            ),
        },
        // Card 2: Overview Stats
        {
            id: "overview",
            content: (
                <OverviewCard
                    wrapped={wrapped}
                    mascotImage={mascotImage}
                />
            ),
        },
        // Card 3: Streak (Coral Theme - Duolingo Style)
        {
            id: "streak",
            content: (
                <StreakCard
                    wrapped={wrapped}
                    mascotImage={mascotImage}
                />
            ),
        },
        // Card 4: Activity (Mint/Teal Theme)
        {
            id: "activity",
            content: (
                <ActivityCard
                    wrapped={wrapped}
                    mascotImage={mascotImage}
                />
            ),
        },
        // Card 5: Community (Slate Blue Theme)
        {
            id: "community",
            content: (
                <CommunityCard
                    wrapped={wrapped}
                    mascotImage={mascotImage}
                />
            ),
        },
        // Card 6: Summary/Share (Final Card)
        {
            id: "summary",
            content: (
                <SummaryCard
                    wrapped={wrapped}
                    mascotImage={mascotImage}
                    onShare={() => setIsShareModalOpen(true)}
                />
            ),
        },
    ];

    const handleTap = (e: React.MouseEvent) => {
        const x = e.clientX;
        const width = window.innerWidth;

        if (x < width / 3) {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        } else {
            if (currentIndex < storyCards.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                onClose();
            }
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-white"
                        onClick={handleTap}
                    >
                        {/* Progress Bars */}
                        <div className="absolute top-4 left-4 right-4 flex gap-1.5 z-20">
                            {storyCards.map((_, index) => (
                                <div
                                    key={index}
                                    className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden"
                                >
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: ACCENT_COLORS.teal.accent }}
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: index < currentIndex ? "100%" : index === currentIndex ? "100%" : "0%",
                                        }}
                                        transition={{ duration: index === currentIndex ? 5 : 0 }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="absolute top-10 right-4 z-20 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border-2 border-gray-200 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all"
                            style={{ left: '332px', top: '30px' }}
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Story Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={storyCards[currentIndex].id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 pt-10"
                            >
                                {storyCards[currentIndex].content}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation dots */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20" style={{ left: '-2px', top: '47px' }}>
                            {storyCards.map((_, index) => (
                                <div
                                    key={index}
                                    className="h-2 rounded-full transition-all duration-300"
                                    style={{
                                        width: index === currentIndex ? 32 : 8,
                                        backgroundColor: index === currentIndex ? ACCENT_COLORS.teal.accent : "#E5E5E5",
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isShareModalOpen && (
                    <ShareSummaryModal
                        isOpen={isShareModalOpen}
                        onClose={() => setIsShareModalOpen(false)}
                        data={wrapped}
                        mascotImage={mascotImage}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
