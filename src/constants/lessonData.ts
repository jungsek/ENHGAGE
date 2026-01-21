// Sample Lesson Data: ALERT Programme
// First lesson to validate the Learning feature design

import { Lesson } from "@/types/LessonTypes";

// Placeholder illustration URLs - will be replaced with actual assets
const ILLUSTRATIONS = {
    stressed_student: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    person_in_bed: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
    anxiety_thoughts: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=300&fit=crop",
    friendly_doctor: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
    self_check: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
};

export const ALERT_LESSON: Lesson = {
    id: "ALERT-01",
    pillar: "stress_mental",
    programme: "alert",
    title: "Know Your Warning Signs",
    subtitle: "ALERT Programme",
    durationMinutes: 2.5,
    baseXP: 10,
    cards: [
        // Card 1: HOOK
        {
            id: "alert-01-hook",
            type: "hook",
            hookType: "stat",
            text: "1 in 3 youth in Singapore report feeling stressed 'most of the time.' Do you know what signs to look out for?",
            illustration: ILLUSTRATIONS.stressed_student,
        },
        // Card 2: LEARN - Depression
        {
            id: "alert-01-learn-1",
            type: "learn",
            text: "Your mind sends signals when it's struggling. Depression might show up as feeling hopeless, losing interest in things you used to enjoy, or changes in sleep and appetite.",
            illustration: ILLUSTRATIONS.person_in_bed,
        },
        // Card 3: LEARN - Anxiety
        {
            id: "alert-01-learn-2",
            type: "learn",
            text: "Anxiety can feel like constant worry, racing thoughts, or physical symptoms like a tight chest or upset stomach. These feelings lasting more than 2 weeks are worth checking out.",
            illustration: ILLUSTRATIONS.anxiety_thoughts,
        },
        // Card 4: LEARN - Help available
        {
            id: "alert-01-learn-3",
            type: "learn",
            text: "The good news? Help is available at every NHG Polyclinic through the ALERT programme. It's confidential, and you'll work with doctors and counsellors who get it.",
            illustration: ILLUSTRATIONS.friendly_doctor,
        },
        // Card 5: CHECK - Quiz
        {
            id: "alert-01-check",
            type: "check",
            quizType: "multiple_choice",
            question: "Which of these could be a warning sign worth checking out?",
            options: [
                {
                    id: "opt-a",
                    text: "Feeling sad for a day after a bad exam",
                    isCorrect: false,
                },
                {
                    id: "opt-b",
                    text: "Losing interest in friends and hobbies for several weeks",
                    isCorrect: true,
                },
                {
                    id: "opt-c",
                    text: "Feeling nervous before a presentation",
                    isCorrect: false,
                },
                {
                    id: "opt-d",
                    text: "Having trouble sleeping the night before something big",
                    isCorrect: false,
                },
            ],
            feedbackCorrect: "That's right! Persistent changes lasting 2+ weeks are worth discussing with someone.",
            feedbackIncorrect: "Not quite. Short-term reactions to events are normal. Look for changes lasting 2+ weeks.",
        },
        // Card 6: APPLY
        {
            id: "alert-01-apply",
            type: "apply",
            text: "This week, check in with yourself: How have you been sleeping? Eating? Feeling? If something's been off for a while, it's okay to talk to someone.",
            ctaText: "Add 'Self Check-In' to Habits",
            ctaAction: "add_habit",
            illustration: ILLUSTRATIONS.self_check,
        },
        // Card 7: CONNECT
        {
            id: "alert-01-connect",
            type: "connect",
            text: "Need to talk to someone? The ALERT programme at NHG Polyclinics offers free, confidential mental health support for youth.",
            ctaText: "Learn About ALERT →",
            programmeName: "ALERT Programme",
            deepLink: "https://mindline.sg",
        },
    ],
    programmeLink: {
        name: "ALERT Programme",
        deepLink: "https://mindline.sg",
    },
};

// Collection of all lessons
export const ALL_LESSONS: Lesson[] = [
    ALERT_LESSON,
];

// Helper to get lessons by pillar
export const getLessonsByPillar = (pillar: Lesson["pillar"]): Lesson[] => {
    return ALL_LESSONS.filter(lesson => lesson.pillar === pillar);
};
