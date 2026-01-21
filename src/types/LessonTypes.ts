// Lesson Types for ENHGAGE Learning Feature
// Follows Duolingo-inspired micro-learning card structure

export type LessonPillar =
    | "stress_mental"
    | "nutrition"
    | "fitness"
    | "chronic_disease"
    | "caregiver"
    | "community";

export type CardType = "hook" | "learn" | "check" | "apply" | "connect";

export type QuizType =
    | "multiple_choice"
    | "word_build"
    | "image_selection"
    | "true_false"
    | "matching"
    | "scenario"
    | "poll";

// Base Card Interface
interface BaseCard {
    id: string;
    type: CardType;
}

// Hook Card - Attention-grabbing intro
export interface HookCard extends BaseCard {
    type: "hook";
    hookType: "question" | "stat" | "scenario" | "myth_buster";
    text: string;
    illustration?: string;
}

// Learn Card - Educational content
export interface LearnCard extends BaseCard {
    type: "learn";
    title?: string;
    text: string;
    illustration?: string;
}

// Quiz Option for multiple choice
export interface QuizOption {
    id: string;
    text: string;
    illustration?: string;
    isCorrect: boolean;
}

// Check Card - Interactive quiz/poll
export interface CheckCard extends BaseCard {
    type: "check";
    quizType: QuizType;
    question: string;
    options: QuizOption[];
    feedbackCorrect: string;
    feedbackIncorrect: string;
    illustration?: string;
}

// Apply Card - Real-world micro-action
export interface ApplyCard extends BaseCard {
    type: "apply";
    text: string;
    ctaText: string;
    ctaAction?: "add_habit" | "reminder" | "done";
    illustration?: string;
}

// Connect Card - Link to NHG programme
export interface ConnectCard extends BaseCard {
    type: "connect";
    text: string;
    ctaText: string;
    programmeName: string;
    deepLink?: string;
    illustration?: string;
}

// Union type for all card types
export type LessonCard = HookCard | LearnCard | CheckCard | ApplyCard | ConnectCard;

// Main Lesson interface
export interface Lesson {
    id: string;
    pillar: LessonPillar;
    programme: string;
    title: string;
    subtitle?: string;
    durationMinutes: number;
    baseXP: number;
    cards: LessonCard[];
    programmeLink?: {
        name: string;
        healthKampungId?: string;
        deepLink?: string;
    };
}

// Lesson Progress tracking
export interface LessonProgress {
    lessonId: string;
    currentCardIndex: number;
    answers: { cardId: string; selectedOptionId: string; isCorrect: boolean }[];
    startTime: number;
    correctStreak: number;
}

// Lesson Result after completion
export interface LessonResult {
    lessonId: string;
    totalXP: number;
    baseXP: number;
    accuracyBonus: number;
    speedBonus: number;
    accuracy: number; // Percentage
    timeSeconds: number;
    correctAnswers: number;
    totalQuestions: number;
}

// Learning State for Zustand store
export interface LearningState {
    currentLesson: Lesson | null;
    lessonProgress: LessonProgress | null;
    totalXP: number;
    completedLessons: string[];
    lessonResults: LessonResult[];
}

// Learning Actions for Zustand store
export interface LearningActions {
    startLesson: (lesson: Lesson) => void;
    nextCard: () => void;
    previousCard: () => void;
    submitAnswer: (cardId: string, optionId: string, isCorrect: boolean) => void;
    completeLesson: () => LessonResult;
    exitLesson: () => void;
}
