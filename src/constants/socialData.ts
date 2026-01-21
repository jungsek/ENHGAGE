import { InstitutionRanking, UserSchoolStats, WrappedData } from "@/types";

// Institution Rankings Mock Data
export const MOCK_INSTITUTIONS: InstitutionRanking[] = [
    {
        rank: 1,
        name: "National University of Singapore",
        shortName: "NUS",
        points: 245890,
        participants: 3247,
        trend: "up",
        trendAmount: 2,
        logoColor: "#003D7C",
    },
    {
        rank: 2,
        name: "Nanyang Technological University",
        shortName: "NTU",
        points: 238456,
        participants: 2891,
        trend: "down",
        trendAmount: 1,
        logoColor: "#C8102E",
    },
    {
        rank: 3,
        name: "Singapore Polytechnic",
        shortName: "SP",
        points: 198234,
        participants: 2156,
        trend: "up",
        trendAmount: 4,
        logoColor: "#0054A6",
    },
    {
        rank: 4,
        name: "Ngee Ann Polytechnic",
        shortName: "NP",
        points: 187650,
        participants: 1943,
        trend: "same",
        logoColor: "#00897B",
    },
    {
        rank: 5,
        name: "Republic Polytechnic",
        shortName: "RP",
        points: 176234,
        participants: 1756,
        trend: "up",
        trendAmount: 1,
        logoColor: "#E84E0F",
    },
    {
        rank: 6,
        name: "Temasek Polytechnic",
        shortName: "TP",
        points: 165890,
        participants: 1623,
        trend: "down",
        trendAmount: 2,
        logoColor: "#006838",
    },
    {
        rank: 7,
        name: "Singapore Management University",
        shortName: "SMU",
        points: 145678,
        participants: 1234,
        trend: "same",
        logoColor: "#002855",
    },
    {
        rank: 8,
        name: "Singapore Institute of Technology",
        shortName: "SIT",
        points: 132456,
        participants: 987,
        trend: "up",
        trendAmount: 3,
        logoColor: "#1E3C6E",
    },
];

// User's School Stats (NP as default)
export const MOCK_USER_SCHOOL_STATS: UserSchoolStats = {
    schoolRank: 4,
    userRankInSchool: 47,
    totalUsersInSchool: 1943,
    percentile: 97,
    weeklyPoints: 485,
    contribution: 0.26,
};

// Leaderboard Category Tabs
export const LEADERBOARD_CATEGORIES = [
    { id: "overall" as const, label: "Overall", icon: "🏆" },
    { id: "movement" as const, label: "Movement", icon: "🏃" },
    { id: "nutrition" as const, label: "Nutrition", icon: "🥗" },
    { id: "mindfulness" as const, label: "Mindfulness", icon: "🧘" },
    { id: "community" as const, label: "Community", icon: "🤝" },
];

// Time Filter Options
export const TIME_FILTERS = [
    { id: "week" as const, label: "This Week" },
    { id: "month" as const, label: "This Month" },
    { id: "semester" as const, label: "This Semester" },
    { id: "allTime" as const, label: "All Time" },
];

// Mock Wrapped Data
export const MOCK_WRAPPED_DATA: WrappedData = {
    month: "January",
    year: 2026,
    appOpens: 47,
    appOpensPercentile: 78,
    longestStreak: 23,
    streakSaves: 2,
    closeCalls: 5,
    topActivity: "Walking",
    totalSteps: 156789,
    stepsComparison: "That's like walking from NP to Sentosa... 12 times! 🏝️",
    badgesEarned: 3,
    highFivesGiven: 34,
    highFivesReceived: 28,
    schoolContribution: 0.67,
};

// Competition Period Info
export const getCurrentCompetitionPeriod = () => {
    const now = new Date();
    const weekNumber = Math.ceil(now.getDate() / 7);
    const monthName = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();
    return {
        label: `Week ${weekNumber} of ${monthName} ${year}`,
        endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay())),
    };
};
