import { LessonPillar } from "@/types/LessonTypes";

// Centralized Pillar Configuration - Single source of truth for all pillar data
export const PILLAR_CONFIG: Record<LessonPillar, {
    id: LessonPillar;
    title: string;
    icon: string;
    color: string;
}> = {
    stress_mental: {
        id: "stress_mental",
        title: "Stress & Mental Wellness",
        icon: "brain",
        color: "#CE82FF",
    },
    nutrition: {
        id: "nutrition",
        title: "Nutrition & Healthy Eating",
        icon: "heart",
        color: "#58CC02",
    },
    fitness: {
        id: "fitness",
        title: "Fitness & Physical Activity",
        icon: "dumbbell",
        color: "#FF6B6B",
    },
    chronic_disease: {
        id: "chronic_disease",
        title: "Chronic Disease Prevention",
        icon: "bullseye",
        color: "#FFC800",
    },
    caregiver: {
        id: "caregiver",
        title: "Caregiver Skills",
        icon: "heart",
        color: "#1CB0F6",
    },
    community: {
        id: "community",
        title: "Community Leadership",
        icon: "social",
        color: "#00897B",
    },
};

// Ordered array of all pillar IDs for iteration
export const ALL_PILLARS: LessonPillar[] = [
    "stress_mental",
    "nutrition",
    "fitness",
    "chronic_disease",
    "caregiver",
    "community",
];

// Interests data for onboarding - uses pillar IDs for consistency
export const INTERESTS_DATA = [
    {
        id: "stress_mental",
        icon: "brain",
        title: "Stress & Mental Wellness",
        color: "#CE82FF",
    },
    {
        id: "nutrition",
        icon: "heart",
        title: "Nutrition & Healthy Eating",
        color: "#58CC02",
    },
    {
        id: "fitness",
        icon: "dumbbell",
        title: "Fitness & Physical Activity",
        color: "#FF6B6B",
    },
    {
        id: "chronic_disease",
        icon: "bullseye",
        title: "Chronic Disease Prevention",
        color: "#FFC800",
    },
    {
        id: "caregiver",
        icon: "heart",
        title: "Caregiver Skills",
        color: "#1CB0F6",
    },
    {
        id: "community",
        icon: "social",
        title: "Community Leadership",
        color: "#00897B",
    },
];

export const REFERRAL_OPTIONS = [
    "Friend or family",
    "School / Institution",
    "Social media",
    "NHG / Community Health Post",
    "15M Social Movement",
    "News or article",
    "Other",
];

export const INSTITUTIONS_DATA = [
    {
        label: "Polytechnics",
        options: [
            { value: "NP", label: "Ngee Ann Polytechnic (NP)" },
            { value: "NYP", label: "Nanyang Polytechnic (NYP)" },
            { value: "TP", label: "Temasek Polytechnic (TP)" },
            { value: "SP", label: "Singapore Polytechnic (SP)" },
            { value: "RP", label: "Republic Polytechnic (RP)" }
        ]
    },
    {
        label: "Universities",
        options: [
            { value: "NUS", label: "National University of Singapore (NUS)" },
            { value: "NTU", label: "Nanyang Technological University (NTU)" },
            { value: "SMU", label: "Singapore Management University (SMU)" },
            { value: "SIT", label: "Singapore Institute of Technology (SIT)" },
            { value: "SUSS", label: "Singapore University of Social Sciences (SUSS)" }
        ]
    },
    {
        label: "ITE",
        options: [
            { value: "ITE", label: "Institute of Technical Education (ITE)" },
        ]
    },
];

export const OTHER_INSTITUTION_OPTIONS = [
    { value: "working", label: "Working Adult" },
    { value: "other", label: "Other" },
    { value: "prefer_not_to_say", label: "Prefer not to say" }
];

export const DEMO_STREAK_CONFIG = {
    // 0-6 index for Mon-Sun (or whatever the history array represents, usually ending Today)
    // If today is index 6, then index 3 would be 3 days ago.
    frozenIndices: [0] as number[],
    forceFrozenState: true // toggle to easily enable/disable for demo
};
