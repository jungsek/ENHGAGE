import { InstitutionRanking, UserSchoolStats, WrappedData } from "@/types";

import { IMAGES } from "@/constants/assets";

// Institution Rankings Mock Data
export const MOCK_INSTITUTIONS: InstitutionRanking[] = [
    { rank: 1, name: "National University of Singapore", shortName: "NUS", points: 245890, participants: 3247, trend: "up", trendAmount: 2, logoColor: "#003D7C", logo: IMAGES.schools.nus },
    { rank: 2, name: "Nanyang Technological University", shortName: "NTU", points: 238456, participants: 2891, trend: "down", trendAmount: 1, logoColor: "#C8102E", logo: IMAGES.schools.ntu },
    { rank: 3, name: "Singapore Polytechnic", shortName: "SP", points: 198234, participants: 2156, trend: "up", trendAmount: 4, logoColor: "#0054A6", logo: IMAGES.schools.sp },
    { rank: 4, name: "Ngee Ann Polytechnic", shortName: "NP", points: 187650, participants: 1943, trend: "same", logoColor: "#00897B", logo: IMAGES.schools.np },
    { rank: 5, name: "Republic Polytechnic", shortName: "RP", points: 176234, participants: 1756, trend: "up", trendAmount: 1, logoColor: "#E84E0F", logo: IMAGES.schools.rp },
    { rank: 6, name: "Temasek Polytechnic", shortName: "TP", points: 165890, participants: 1623, trend: "down", trendAmount: 2, logoColor: "#006838", logo: IMAGES.schools.tp },
    { rank: 7, name: "Singapore Management University", shortName: "SMU", points: 145678, participants: 1234, trend: "same", logoColor: "#002855", logo: IMAGES.schools.smu },
    { rank: 8, name: "Singapore Institute of Technology", shortName: "SIT", points: 132456, participants: 987, trend: "up", trendAmount: 3, logoColor: "#1E3C6E", logo: IMAGES.schools.sit },
    { rank: 9, name: "Nanyang Polytechnic", shortName: "NYP", points: 128900, participants: 1540, trend: "up", trendAmount: 1, logoColor: "#D2232A", logo: IMAGES.schools.nyp },
    { rank: 10, name: "Singapore University of Social Sciences", shortName: "SUSS", points: 110500, participants: 850, trend: "same", logoColor: "#173252", logo: IMAGES.schools.suss },
    { rank: 11, name: "Institute of Technical Education", shortName: "ITE", points: 98700, participants: 3500, trend: "up", trendAmount: 5, logoColor: "#EC1C24", logo: IMAGES.schools.ite },
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
    learningMinutes: 981,
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
