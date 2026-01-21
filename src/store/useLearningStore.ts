// Learning Store - Manages lesson state for ENHGAGE Learning feature
import { create } from 'zustand';
import { Lesson, LessonProgress, LessonResult } from '@/types/LessonTypes';

interface LearningState {
    // Current Lesson State
    currentLesson: Lesson | null;
    lessonProgress: LessonProgress | null;
    isLessonActive: boolean;

    // Lifetime Stats
    totalXP: number;
    completedLessons: string[];
    lessonResults: LessonResult[];

    // Actions
    startLesson: (lesson: Lesson) => void;
    nextCard: () => void;
    previousCard: () => void;
    submitAnswer: (cardId: string, optionId: string, isCorrect: boolean) => void;
    completeLesson: () => LessonResult | null;
    exitLesson: () => void;
}

export const useLearningStore = create<LearningState>((set, get) => ({
    // Initial State
    currentLesson: null,
    lessonProgress: null,
    isLessonActive: false,
    totalXP: 0,
    completedLessons: [],
    lessonResults: [],

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
        const { lessonProgress, currentLesson, totalXP, completedLessons, lessonResults } = get();
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

        // Update state
        set({
            totalXP: totalXP + lessonTotalXP,
            completedLessons: [...completedLessons, currentLesson.id],
            lessonResults: [...lessonResults, result],
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
}));
