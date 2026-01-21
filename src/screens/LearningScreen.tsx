// Main Learning Screen
// Shows lesson list or active lesson flow

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, ChevronRight, Clock, Zap } from "lucide-react";
import { useLearningStore } from "@/store/useLearningStore";
import { ALL_LESSONS } from "@/constants/lessonData";
import { Lesson, LessonResult, CheckCard as CheckCardType } from "@/types/LessonTypes";

// Component imports
import { LessonHeader } from "@/components/learning/LessonHeader";
import { HookCard } from "@/components/learning/HookCard";
import { LearnCard } from "@/components/learning/LearnCard";
import { MultipleChoiceQuiz } from "@/components/learning/MultipleChoiceQuiz";
import { ApplyCard } from "@/components/learning/ApplyCard";
import { ConnectCard } from "@/components/learning/ConnectCard";
import { LessonCompleteScreen } from "@/components/learning/LessonCompleteScreen";

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
    } = useLearningStore();

    // Toggle body class to hide navbar
    React.useEffect(() => {
        if (isLessonActive) {
            document.body.classList.add("hide-navbar");
        } else {
            document.body.classList.remove("hide-navbar");
        }
        return () => document.body.classList.remove("hide-navbar");
    }, [isLessonActive]);

    const [lessonResult, setLessonResult] = useState<LessonResult | null>(null);
    const [showCompleteScreen, setShowCompleteScreen] = useState(false);

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

    // Handle claiming XP and returning to lesson list
    const handleClaimXP = () => {
        exitLesson();
        setLessonResult(null);
        setShowCompleteScreen(false);
    };

    // Render current card based on type
    const renderCurrentCard = () => {
        if (!currentLesson || !lessonProgress) return null;

        const currentCard = currentLesson.cards[lessonProgress.currentCardIndex];
        if (!currentCard) return null;

        switch (currentCard.type) {
            case "hook":
                return <HookCard card={currentCard} onContinue={nextCard} />;
            case "learn":
                return <LearnCard card={currentCard} onContinue={nextCard} />;
            case "check":
                return (
                    <MultipleChoiceQuiz
                        card={currentCard as CheckCardType}
                        onAnswer={(optionId, isCorrect) => submitAnswer(currentCard.id, optionId, isCorrect)}
                        onContinue={nextCard}
                    />
                );
            case "apply":
                return <ApplyCard card={currentCard} onContinue={nextCard} />;
            case "connect":
                return <ConnectCard card={currentCard} onComplete={handleCompleteLesson} />;
            default:
                return null;
        }
    };

    // Show completion screen
    if (showCompleteScreen && lessonResult) {
        return (
            <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
                <LessonCompleteScreen
                    result={lessonResult}
                    onClaimXP={handleClaimXP}
                />
            </div>
        );
    }

    // Show active lesson
    if (isLessonActive && currentLesson && lessonProgress) {
        return (
            <div className="fixed inset-0 z-[100] flex flex-col bg-white overflow-y-auto">
                {/* Header with progress */}
                <LessonHeader
                    currentCard={lessonProgress.currentCardIndex + 1}
                    totalCards={currentLesson.cards.length}
                    correctStreak={lessonProgress.correctStreak}
                    onClose={handleExitLesson}
                />

                {/* Card Content */}
                <div className="flex-1 px-6 py-4 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lessonProgress.currentCardIndex}
                            className="h-full"
                        >
                            {renderCurrentCard()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        );
    }

    // Show lesson list (default view)
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white px-6 py-6 border-b border-gray-100">
                <h1 className="text-2xl font-bold font-feather text-gray-800">
                    Learn
                </h1>
                <p className="text-gray-500 mt-1">
                    Micro-lessons to boost your health knowledge
                </p>
            </div>

            {/* Lessons List */}
            <div className="p-6 space-y-4">
                {ALL_LESSONS.map((lesson) => (
                    <LessonTile
                        key={lesson.id}
                        lesson={lesson}
                        onStart={handleStartLesson}
                    />
                ))}

                {/* Coming Soon Placeholder */}
                {ALL_LESSONS.length < 3 && (
                    <div className="p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-white">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                                <BookOpen size={24} className="text-gray-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-400">More lessons coming soon!</h3>
                                <p className="text-sm text-gray-300">16 more programmes to explore</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Lesson Tile Component
interface LessonTileProps {
    lesson: Lesson;
    onStart: (lesson: Lesson) => void;
}

const LessonTile: React.FC<LessonTileProps> = ({ lesson, onStart }) => {
    const { completedLessons } = useLearningStore();
    const isCompleted = completedLessons.includes(lesson.id);

    // Get pillar color
    const getPillarColor = (pillar: Lesson["pillar"]) => {
        const colors = {
            stress_mental: "#CE82FF",
            nutrition: "#58CC02",
            fitness: "#FF6B6B",
            chronic_disease: "#FFC800",
            caregiver: "#1CB0F6",
            community: "#00897B",
        };
        return colors[pillar] || "#00897B";
    };

    const pillarColor = getPillarColor(lesson.pillar);

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => onStart(lesson)}
            className="w-full p-4 rounded-2xl border-2 border-b-4 border-gray-200 bg-white hover:border-gray-300 transition-all text-left"
        >
            <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${pillarColor}20` }}
                >
                    <BookOpen size={24} style={{ color: pillarColor }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                    {/* Subtitle */}
                    <p
                        className="text-xs font-bold tracking-wider mb-1"
                        style={{ color: pillarColor }}
                    >
                        {lesson.subtitle?.toUpperCase() || lesson.programme.toUpperCase()}
                    </p>

                    {/* Title */}
                    <h3 className="font-bold text-gray-800">
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

                {/* Completed badge or arrow */}
                {isCompleted ? (
                    <div className="w-8 h-8 rounded-full bg-[#58CC02] flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                    </div>
                ) : (
                    <ChevronRight size={24} className="text-gray-300" />
                )}
            </div>
        </motion.button>
    );
};
