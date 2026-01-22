export type OnboardingStep =
    | "splash"
    | "welcome"
    | "signin"
    | "profile"
    | "interests"
    | "buddy"
    | "widget"
    | "notifications"
    | "referral"
    | "complete"
    | "home";

export type UserProfile = {
    name: string;
    age: string;
    institution: string;
    interests: string[];
    buddy: "olah" | "lylah" | "ellah" | null;
    buddyName: string;
    referralSource: string;
    streak: {
        current: number;
        status: "cold" | "warm" | "hot";
        freezes: number;
        history: boolean[]; // Last 7 days, true = completed
    };
};

// Leaderboard Types
export type LeaderboardCategory = "overall" | "movement" | "nutrition" | "mindfulness" | "community";
export type TimeFilter = "week" | "month" | "semester" | "allTime";

export interface InstitutionRanking {
    rank: number;
    name: string;
    shortName: string;
    points: number;
    participants: number;
    trend: "up" | "down" | "same";
    trendAmount?: number;
    logoColor?: string;
    logo?: string;
}

export interface UserSchoolStats {
    schoolRank: number;
    userRankInSchool: number;
    totalUsersInSchool: number;
    percentile: number;
    weeklyPoints: number;
    contribution: number;
}

// Wrapped Types
export interface WrappedData {
    month: string;
    year: number;
    appOpens: number;
    appOpensPercentile: number;
    longestStreak: number;
    streakSaves: number;
    closeCalls: number;
    topActivity: string;
    totalSteps: number;
    stepsComparison: string;
    badgesEarned: number;
    highFivesGiven: number;
    highFivesReceived: number;
    schoolContribution: number;
}
