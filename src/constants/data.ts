export const INTERESTS_DATA = [
    {
        id: "mental",
        icon: "🧘",
        title: "Stress & Mental Wellness",
        color: "text-purple-500",
    },
    {
        id: "nutrition",
        icon: "🥗",
        title: "Nutrition & Healthy Eating",
        color: "text-green-500",
    },
    {
        id: "fitness",
        icon: "🏃",
        title: "Physical Activity",
        color: "text-orange-500",
    },
    {
        id: "sleep",
        icon: "😴",
        title: "Sleep & Rest",
        color: "text-indigo-500",
    },
    {
        id: "chronic",
        icon: "💪",
        title: "Chronic Disease Prevention",
        color: "text-red-500",
    },
    {
        id: "caring",
        icon: "👨‍👩‍👧",
        title: "Caring for Others",
        color: "text-pink-500",
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
    }
];

export const OTHER_INSTITUTION_OPTIONS = [
    { value: "working", label: "Working Adult" },
    { value: "other", label: "Other" },
    { value: "prefer_not_to_say", label: "Prefer not to say" }
];

export const DEMO_STREAK_CONFIG = {
    // 0-6 index for Mon-Sun (or whatever the history array represents, usually ending Today)
    // If today is index 6, then index 3 would be 3 days ago.
    frozenIndices: [3] as number[],
    forceFrozenState: true // toggle to easily enable/disable for demo
};
