// Main Learning Screen
// Shows lesson list or active lesson flow

import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, ChevronRight, Clock, Zap, Award } from "lucide-react";
import { useLearningStore } from "@/store/useLearningStore";
import { getLessonsByPillar, ALL_LESSONS } from "@/constants/lessonData";
import { PILLAR_CONFIG, ALL_PILLARS } from "@/constants/data";
import { Lesson, LessonResult, CheckCard as CheckCardType, LessonPillar } from "@/types/LessonTypes";

// Component imports
import { LessonHeader } from "@/components/learning/LessonHeader";
import { LessonCompleteScreen } from "@/components/learning/LessonCompleteScreen";
import { QuestCompletedScreen } from "@/components/learning/QuestCompletedScreen";
import { HookCard } from "@/components/learning/HookCard";
import { LearnCard } from "@/components/learning/LearnCard";
import { MultipleChoiceQuiz } from "@/components/learning/MultipleChoiceQuiz";
import { ApplyCard } from "@/components/learning/ApplyCard";
import { ConnectCard } from "@/components/learning/ConnectCard";
import { PillarCertifiedModal } from "@/components/learning/PillarCertifiedModal";
import { CertificateShareModal } from "@/components/learning/CertificateShareModal";
import { AppHeader } from "@/components/common/AppHeader";
import { useAppStore } from "@/store/useAppStore";

import { MascotSpeechBubble } from "@/components/learning/MascotSpeechBubble";

export const LearningScreen: React.FC = () => {
    const {
        currentLesson,
        lessonProgress,
        isLessonActive,
        startLesson,
        nextCard,
        submitAnswer,
        completeLesson,
        exitLesson,
        completedLessons,
        newlyCertifiedPillar,
        clearNewlyCertifiedPillar,
        isPillarCertified,
        getPillarCertificate,
    } = useLearningStore();

    const { profile, addPoints } = useAppStore();
    const navigate = useNavigate();


    // Sort pillars based on user preferences (preferred pillars first)
    const sortedPillars = useMemo(() => {
        const preferredPillars = profile.interests as LessonPillar[];
        const remainingPillars = ALL_PILLARS.filter(p => !preferredPillars.includes(p));
        return [...preferredPillars, ...remainingPillars];
    }, [profile.interests]);

    // Group lessons by pillar in sorted order
    const groupedLessons = useMemo(() => {
        return sortedPillars.map(pillarId => ({
            pillar: PILLAR_CONFIG[pillarId],
            lessons: getLessonsByPillar(pillarId),
        })).filter(group => group.lessons.length > 0);
    }, [sortedPillars]);

    // Toggle body class to hide navbar
    useEffect(() => {
        if (isLessonActive) {
            document.body.classList.add("hide-navbar");
        } else {
            document.body.classList.remove("hide-navbar");
        }
        return () => document.body.classList.remove("hide-navbar");
    }, [isLessonActive]);

    // Check for deep link to lesson
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const lessonId = searchParams.get("lessonId");

        if (lessonId && !isLessonActive) {
            const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
            if (lesson) {
                // Clear the param so it doesn't persist if they navigate back
                window.history.replaceState({}, '', '/app/learn');
                startLesson(lesson);
            }
        }
    }, []);

    const [lessonResult, setLessonResult] = useState<LessonResult | null>(null);
    const [showCompleteScreen, setShowCompleteScreen] = useState(false);
    const [showQuestScreen, setShowQuestScreen] = useState(false);

    // Certification modal states
    const [showCertifiedModal, setShowCertifiedModal] = useState(false);
    const [certifiedPillarToShow, setCertifiedPillarToShow] = useState<LessonPillar | null>(null);
    const [showShareModal, setShowShareModal] = useState(false);
    const [sharePillarId, setSharePillarId] = useState<LessonPillar | null>(null);

    // Handle lesson start
    const handleStartLesson = (lesson: Lesson) => {
        startLesson(lesson);
    };

    // Handle lesson exit
    const handleExitLesson = () => {
        const confirmed = window.confirm("Are you sure you want to exit? Your progress will be lost.");
        if (confirmed) {
            exitLesson();
            setLessonResult(null);
            setShowCompleteScreen(false);
        }
    };

    // Handle lesson completion
    const handleCompleteLesson = () => {
        const result = completeLesson();
        if (result) {
            setLessonResult(result);
            setShowCompleteScreen(true);
        }
    };

    // Handle claiming XP and showing quest screen
    const handleClaimXP = () => {
        // Add earned XP to user's points
        if (lessonResult) {
            addPoints(lessonResult.totalXP);
        }
        setShowCompleteScreen(false);
        setShowQuestScreen(true);
    };

    // Handle closing quest screen and returning to lesson list
    const handleCloseQuestScreen = () => {
        exitLesson();
        setLessonResult(null);
        setShowQuestScreen(false);

        // Check if there's a newly certified pillar to celebrate
        if (newlyCertifiedPillar) {
            setCertifiedPillarToShow(newlyCertifiedPillar);
            setShowCertifiedModal(true);
        }
    };

    // Handle certified modal actions
    const handleCertifiedShareToLinkedIn = () => {
        if (certifiedPillarToShow) {
            setSharePillarId(certifiedPillarToShow);
            setShowCertifiedModal(false);
            setShowShareModal(true);
            clearNewlyCertifiedPillar();
        }
    };

    const handleCertifiedDismiss = () => {
        setShowCertifiedModal(false);
        setCertifiedPillarToShow(null);
        clearNewlyCertifiedPillar();
    };

    const handleShareModalClose = () => {
        setShowShareModal(false);
        setSharePillarId(null);
    };

    // Handle clicking on a certified pillar badge to share
    const handleCertifiedBadgeClick = (pillarId: LessonPillar) => {
        setSharePillarId(pillarId);
        setShowShareModal(true);
    };

    // Render current card based on type
    const renderCurrentCard = () => {
        if (!currentLesson || !lessonProgress) return null;

        const currentCard = currentLesson.cards[lessonProgress.currentCardIndex];
        if (!currentCard) return null;

        // Check if this is the last card
        const isLastCard = lessonProgress.currentCardIndex === currentLesson.cards.length - 1;

        // If it's the last card, continue action should complete the lesson
        const handleContinue = isLastCard ? handleCompleteLesson : nextCard;

        switch (currentCard.type) {
            case "hook":
                return <HookCard card={currentCard} onContinue={handleContinue} />;
            case "learn":
                return <LearnCard card={currentCard} onContinue={handleContinue} />;
            case "check":
                return (
                    <MultipleChoiceQuiz
                        card={currentCard as CheckCardType}
                        onAnswer={(optionId, isCorrect) => submitAnswer(currentCard.id, optionId, isCorrect)}
                        onContinue={handleContinue}
                    />
                );
            case "apply":
                return <ApplyCard card={currentCard} onContinue={handleContinue} />;
            case "connect":
                return <ConnectCard card={currentCard} onComplete={handleCompleteLesson} />;
            default:
                return null;
        }
    };


    // Show pillar certification modal
    if (showCertifiedModal && certifiedPillarToShow) {
        return (
            <PillarCertifiedModal
                pillarId={certifiedPillarToShow}
                onShareToLinkedIn={handleCertifiedShareToLinkedIn}
                onDismiss={handleCertifiedDismiss}
            />
        );
    }

    // Show quest screen after claiming XP
    if (showQuestScreen) {
        return createPortal(
            <QuestCompletedScreen
                questsCompleted={1}
                gems={profile.points}
                onClose={handleCloseQuestScreen}
            />,
            document.body
        );
    }

    // Show completion screen if lesson is done
    if (showCompleteScreen && lessonResult) {
        return createPortal(
            <LessonCompleteScreen
                result={lessonResult}
                onClaim={handleClaimXP}
            />,
            document.body
        );
    }

    // Show active lesson
    if (isLessonActive && currentLesson && lessonProgress) {
        return createPortal(
            <div className="fixed inset-0 z-[100] flex flex-col bg-white overflow-y-auto overscroll-none touch-pan-y">
                {/* Header with progress */}
                <LessonHeader
                    currentCard={lessonProgress.currentCardIndex + 1}
                    totalCards={currentLesson.cards.length}
                    correctStreak={lessonProgress.correctStreak}
                    onClose={handleExitLesson}
                />

                {/* Card Content */}
                <div className="flex-1 px-6 py-4 overflow-y-auto pb-safe">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lessonProgress.currentCardIndex}
                            className="h-full"
                        >
                            {renderCurrentCard()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>,
            document.body
        );
    }

    // Show lesson list (default view)
    return (
        <>
            {/* Share Certificate Modal - renders on top of content */}
            {showShareModal && sharePillarId && (
                <CertificateShareModal
                    isOpen={showShareModal}
                    onClose={handleShareModalClose}
                    pillarId={sharePillarId}
                    certifiedAt={getPillarCertificate(sharePillarId)?.certifiedAt}
                />
            )}

            <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
                {/* Header */}
                <AppHeader
                    gems={profile.points}
                    streak={profile.streak}
                    onPointsClick={() => navigate("/app/rewards")}
                />
                {/* Spacer at top for breathing room */}
                <div className="h-10" />
                {/* Content Text with Mascot Speech Bubble */}
                <div className="">
                    <MascotSpeechBubble text="Pick a lesson to start learning! Complete the lesson to earn points and gems, and unlock more lessons." className="px-6 mb-6" />
                </div>

                {/* Lessons List - Grouped by Pillar */}
                <div className="p-6 space-y-6">
                    {groupedLessons.map((group) => {
                        const isPreferred = profile.interests.includes(group.pillar.id);
                        const isCertified = isPillarCertified(group.pillar.id);

                        return (
                            <div key={group.pillar.id} className="space-y-3">
                                {/* Pillar Section Header */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-1 h-6 rounded-full"
                                        style={{ backgroundColor: group.pillar.color }}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2
                                                className="text-sm font-bold tracking-wide"
                                                style={{ color: group.pillar.color }}
                                            >
                                                {group.pillar.title.toUpperCase()}
                                            </h2>
                                            {isPreferred && (
                                                <span
                                                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                                    style={{
                                                        backgroundColor: `${group.pillar.color}20`,
                                                        color: group.pillar.color
                                                    }}
                                                >
                                                    YOUR PICK
                                                </span>
                                            )}
                                            {isCertified && (
                                                <button
                                                    onClick={() => handleCertifiedBadgeClick(group.pillar.id)}
                                                    className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFC800] text-white hover:bg-[#FFD633] transition-colors"
                                                >
                                                    <Award size={10} />
                                                    CERTIFIED
                                                </button>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {group.lessons.length} {group.lessons.length === 1 ? 'lesson' : 'lessons'}
                                        </p>
                                    </div>
                                </div>

                                {/* Lessons in this pillar */}
                                <div className="space-y-3">
                                    {group.lessons.map((lesson, index) => {
                                        // Check if locked: locked if logic:
                                        // 1. Not the first lesson in the pillar
                                        // 2. Previous lesson is NOT completed
                                        let isLocked = false;
                                        if (index > 0) {
                                            const prevLesson = group.lessons[index - 1];
                                            const isPrevCompleted = completedLessons.includes(prevLesson.id);
                                            if (!isPrevCompleted) {
                                                isLocked = true;
                                            }
                                        }

                                        return (
                                            <LessonTile
                                                key={lesson.id}
                                                lesson={lesson}
                                                isLocked={isLocked}
                                                onStart={handleStartLesson}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                    {/* Spacer to prevent content being cut off by bottom navbar */}
                    <div className="h-24" />
                </div>
            </div>
        </>
    );
};

// Lesson Tile Component
interface LessonTileProps {
    lesson: Lesson;
    isLocked?: boolean;
    onStart: (lesson: Lesson) => void;
}

const LessonTile: React.FC<LessonTileProps> = ({ lesson, isLocked = false, onStart }) => {
    const { completedLessons } = useLearningStore();
    const isCompleted = completedLessons.includes(lesson.id);

    // Get pillar color from centralized config
    const pillarColor = PILLAR_CONFIG[lesson.pillar]?.color || "#00897B";

    // Handle click based on lock state
    const handleClick = () => {
        if (!isLocked) {
            onStart(lesson);
        }
    };

    return (
        <motion.button
            whileTap={!isLocked ? { scale: 0.98 } : {}}
            onClick={handleClick}
            disabled={isLocked}
            className={`w-full p-4 rounded-2xl border-2 border-b-4 transition-all text-left relative overflow-hidden
                ${isLocked
                    ? "bg-gray-50 border-gray-200 cursor-not-allowed opacity-80"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
        >
            <div className={`flex items-center gap-4 ${isLocked ? "opacity-50" : ""}`}>
                {/* Icon */}
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors"
                    style={{
                        backgroundColor: isLocked ? "#E5E7EB" : `${pillarColor}20`
                    }}
                >
                    <BookOpen size={24} style={{ color: isLocked ? "#9CA3AF" : pillarColor }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                    {/* Subtitle */}
                    <p
                        className="text-xs font-bold tracking-wider mb-1"
                        style={{ color: isLocked ? "#9CA3AF" : pillarColor }}
                    >
                        {lesson.subtitle?.toUpperCase() || lesson.programme.toUpperCase()}
                    </p>

                    {/* Title */}
                    <h3 className={`font-bold ${isLocked ? "text-gray-400" : "text-gray-800"}`}>
                        {lesson.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock size={12} />
                            {lesson.durationMinutes} min
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Zap size={12} />
                            +{lesson.baseXP} XP
                        </span>
                    </div>
                </div>

                {/* Right Action */}
                <div className="flex items-center justify-center w-8">
                    {isCompleted ? (
                        <div className="w-8 h-8 rounded-full bg-[#58CC02] flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                        </div>
                    ) : isLocked ? (
                        <div className="w-8 h-8 flex items-center justify-center text-gray-300">
                            {/* Small Lock Icon Overlay */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                    ) : (
                        <ChevronRight size={24} className="text-gray-300" />
                    )}
                </div>
            </div>
        </motion.button>
    );
};
