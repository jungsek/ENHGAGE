// Learning Store - Manages lesson state for ENHGAGE Learning feature
import { create } from 'zustand';
import { Lesson, LessonProgress, LessonResult, LessonPillar } from '@/types/LessonTypes';
import { getLessonsByPillar } from '@/constants/lessonData';

// Certificate metadata for certified pillars
export interface PillarCertificate {
    pillarId: LessonPillar;
    certifiedAt: number; // timestamp
}

interface LearningState {
    // Current Lesson State
    currentLesson: Lesson | null;
    lessonProgress: LessonProgress | null;
    isLessonActive: boolean;

    // Lifetime Stats
    totalXP: number;
    completedLessons: string[];
    lessonResults: LessonResult[];

    // Certification State
    certifiedPillars: PillarCertificate[];
    newlyCertifiedPillar: LessonPillar | null; // For triggering celebration modal

    // Actions
    startLesson: (lesson: Lesson) => void;
    nextCard: () => void;
    previousCard: () => void;
    submitAnswer: (cardId: string, optionId: string, isCorrect: boolean) => void;
    completeLesson: () => LessonResult | null;
    exitLesson: () => void;
    clearNewlyCertifiedPillar: () => void;
    isPillarCertified: (pillarId: LessonPillar) => boolean;
    getPillarCertificate: (pillarId: LessonPillar) => PillarCertificate | undefined;
}

export const useLearningStore = create<LearningState>((set, get) => ({
    // Initial State
    currentLesson: null,
    lessonProgress: null,
    isLessonActive: false,
    totalXP: 0,
    completedLessons: [],
    lessonResults: [],
    certifiedPillars: [],
    newlyCertifiedPillar: null,

    // Start a new lesson
    startLesson: (lesson: Lesson) => {
        set({
            currentLesson: lesson,
            isLessonActive: true,
            lessonProgress: {
                lessonId: lesson.id,
                currentCardIndex: 0,
                answers: [],
                startTime: Date.now(),
                correctStreak: 0,
            },
        });
    },

    // Move to next card
    nextCard: () => {
        const { lessonProgress, currentLesson } = get();
        if (!lessonProgress || !currentLesson) return;

        const nextIndex = lessonProgress.currentCardIndex + 1;
        if (nextIndex < currentLesson.cards.length) {
            set({
                lessonProgress: {
                    ...lessonProgress,
                    currentCardIndex: nextIndex,
                },
            });
        }
    },

    // Move to previous card
    previousCard: () => {
        const { lessonProgress } = get();
        if (!lessonProgress) return;

        const prevIndex = Math.max(0, lessonProgress.currentCardIndex - 1);
        set({
            lessonProgress: {
                ...lessonProgress,
                currentCardIndex: prevIndex,
            },
        });
    },

    // Submit answer for a quiz card
    submitAnswer: (cardId: string, optionId: string, isCorrect: boolean) => {
        const { lessonProgress } = get();
        if (!lessonProgress) return;

        const newStreak = isCorrect ? lessonProgress.correctStreak + 1 : 0;

        set({
            lessonProgress: {
                ...lessonProgress,
                answers: [
                    ...lessonProgress.answers,
                    { cardId, selectedOptionId: optionId, isCorrect },
                ],
                correctStreak: newStreak,
            },
        });
    },

    // Complete lesson and calculate results
    completeLesson: () => {
        const { lessonProgress, currentLesson, totalXP, completedLessons, lessonResults, certifiedPillars } = get();
        if (!lessonProgress || !currentLesson) return null;

        // Calculate time taken
        const timeSeconds = Math.floor((Date.now() - lessonProgress.startTime) / 1000);

        // Calculate accuracy
        const totalQuestions = lessonProgress.answers.length;
        const correctAnswers = lessonProgress.answers.filter(a => a.isCorrect).length;
        const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 100;

        // Calculate XP bonuses
        const baseXP = currentLesson.baseXP;
        const accuracyBonus = accuracy === 100 ? 5 : 0;
        const speedBonus = timeSeconds < 90 ? 3 : 0; // Under 90 seconds
        const lessonTotalXP = baseXP + accuracyBonus + speedBonus;

        const result: LessonResult = {
            lessonId: currentLesson.id,
            totalXP: lessonTotalXP,
            baseXP,
            accuracyBonus,
            speedBonus,
            accuracy,
            timeSeconds,
            correctAnswers,
            totalQuestions,
        };

        // New completed lessons list (including this one)
        const newCompletedLessons = [...completedLessons, currentLesson.id];

        // Check if this completion results in a pillar certification
        const pillarId = currentLesson.pillar;
        const pillarLessons = getLessonsByPillar(pillarId);
        const completedPillarLessons = pillarLessons.filter(
            lesson => newCompletedLessons.includes(lesson.id)
        );
        
        // Check if pillar is now fully completed and not already certified
        const isAlreadyCertified = certifiedPillars.some(cert => cert.pillarId === pillarId);
        const isPillarNowComplete = completedPillarLessons.length === pillarLessons.length;
        
        let newCertifiedPillars = certifiedPillars;
        let newlyCertified: LessonPillar | null = null;

        if (isPillarNowComplete && !isAlreadyCertified) {
            newCertifiedPillars = [
                ...certifiedPillars,
                { pillarId, certifiedAt: Date.now() }
            ];
            newlyCertified = pillarId;
        }

        // Update state
        set({
            totalXP: totalXP + lessonTotalXP,
            completedLessons: newCompletedLessons,
            lessonResults: [...lessonResults, result],
            certifiedPillars: newCertifiedPillars,
            newlyCertifiedPillar: newlyCertified,
            isLessonActive: false,
        });

        return result;
    },

    // Exit lesson without completing
    exitLesson: () => {
        set({
            currentLesson: null,
            lessonProgress: null,
            isLessonActive: false,
        });
    },

    // Clear the newly certified pillar (after showing celebration modal)
    clearNewlyCertifiedPillar: () => {
        set({ newlyCertifiedPillar: null });
    },

    // Check if a pillar is certified
    isPillarCertified: (pillarId: LessonPillar) => {
        return get().certifiedPillars.some(cert => cert.pillarId === pillarId);
    },

    // Get certificate data for a pillar
    getPillarCertificate: (pillarId: LessonPillar) => {
        return get().certifiedPillars.find(cert => cert.pillarId === pillarId);
    },
}));
