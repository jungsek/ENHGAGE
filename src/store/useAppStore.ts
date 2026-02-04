import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OnboardingStep, UserProfile, LeaderboardCategory, TimeFilter } from "@/types";

// Helper function to generate streak history based on current day of week
// Returns array of 7 booleans - true for each day up to today
// Helper to get the "business date" (starts at 6 AM)
// If it's before 6 AM, it counts as the previous day
const getBusinessDate = (): Date => {
    const now = new Date();
    // Subtract 6 hours to shift the day boundary
    return new Date(now.getTime() - 6 * 60 * 60 * 1000);
};

// Helper to get YYYY-MM-DD string based on business date
const getBusinessDateString = (): string => {
    return getBusinessDate().toISOString().split('T')[0];
};

// Helper function to generate streak history based on current day of week
// Returns array of 7 booleans - true for each day up to today
const getStreakHistoryForToday = (): boolean[] => {
    const today = getBusinessDate();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    // Map to Monday-based week (0 = Monday, 6 = Sunday)
    const mondayBasedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    // Create array where all days up to and including today are true
    return Array.from({ length: 7 }, (_, idx) => idx <= mondayBasedDay);
};

// Get the current streak count (number of days completed this week)
const getCurrentStreakCount = (): number => {
    const today = getBusinessDate();
    const dayOfWeek = today.getDay();
    const mondayBasedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    return mondayBasedDay + 1; // +1 because 0-indexed
};

interface AppState {
    step: OnboardingStep;
    profile: UserProfile;
    // Daily Logic
    checkDailyReset: () => void;
    claimDailyReward: () => void;
    hasCompletedOnboarding: boolean;
    // Leaderboard State
    activeLeaderboardCategory: LeaderboardCategory;
    activeTimeFilter: TimeFilter;
    setStep: (step: OnboardingStep) => void;
    updateProfile: (key: keyof UserProfile, value: any) => void;
    toggleInterest: (interest: string) => void;
    completeOnboarding: () => void;
    resetProfile: () => void;
    // Points Actions
    addPoints: (amount: number) => void;
    // Leaderboard Actions
    setLeaderboardCategory: (category: LeaderboardCategory) => void;
    setTimeFilter: (filter: TimeFilter) => void;
    // Quest Actions
    completeQuest: (questId: string) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            step: "splash",
            hasCompletedOnboarding: false,
            profile: {
                name: "",
                age: "",
                institution: "",
                interests: [],
                buddy: null,
                buddyName: "",
                referralSource: "",
                // Leveling
                level: 3,
                currentXP: 350,
                maxXP: 500,
                points: 2000,
                streak: {
                    current: getCurrentStreakCount(),
                    status: "warm",
                    freezes: 1,
                    history: getStreakHistoryForToday(),
                },
                completedQuests: [], // Initialize completedQuests
                dailyRewardClaimed: false,
                lastActiveDate: getBusinessDateString(),
            },
            // Leaderboard State
            activeLeaderboardCategory: "overall",
            activeTimeFilter: "week",
            setStep: (step) => set({ step }),
            updateProfile: (key, value) =>
                set((state) => ({
                    profile: { ...state.profile, [key]: value },
                })),
            toggleInterest: (interest) =>
                set((state) => {
                    const exists = state.profile.interests.includes(interest);
                    if (exists) {
                        return {
                            profile: {
                                ...state.profile,
                                interests: state.profile.interests.filter((i) => i !== interest),
                            },
                        };
                    } else {
                        if (state.profile.interests.length >= 3) return state;
                        return {
                            profile: {
                                ...state.profile,
                                interests: [...state.profile.interests, interest],
                            },
                        };
                    }
                }),
            completeOnboarding: () => set({ hasCompletedOnboarding: true, step: "home" }),
            // Add points to user profile and handle leveling
            addPoints: (amount) =>
                set((state) => {
                    const newTotalPoints = Math.max(0, state.profile.points + amount);
                    let newCurrentXP = Math.max(0, (state.profile.currentXP || 0) + amount);
                    let newLevel = state.profile.level || 1;
                    const maxXP = state.profile.maxXP || 500;

                    // Simple leveling logic: overflow XP goes to next level
                    if (newCurrentXP >= maxXP) {
                        newLevel += 1;
                        newCurrentXP = newCurrentXP - maxXP;
                        // For now we keep maxXP constant at 500 as per request
                    }

                    // Ensure XP never goes negative
                    newCurrentXP = Math.max(0, newCurrentXP);

                    return {
                        profile: {
                            ...state.profile,
                            points: newTotalPoints,
                            level: newLevel,
                            currentXP: newCurrentXP,
                        },
                    };
                }),
            resetProfile: () =>
                set({
                    step: "splash",
                    hasCompletedOnboarding: false,
                    profile: {
                        name: "",
                        age: "",
                        institution: "",
                        interests: [],
                        buddy: null,
                        buddyName: "",
                        referralSource: "",
                        // Leveling
                        level: 3,
                        currentXP: 350,
                        maxXP: 500,
                        points: 2000,
                        streak: {
                            current: getCurrentStreakCount(),
                            status: "warm",
                            freezes: 1,
                            history: getStreakHistoryForToday(),
                        },
                        completedQuests: [],
                    },
                }),
            checkDailyReset: () =>
                set((state) => {
                    const today = getBusinessDateString();
                    // Always update streak to current day values
                    const updatedStreak = {
                        ...state.profile.streak,
                        current: getCurrentStreakCount(),
                        history: getStreakHistoryForToday(),
                    };

                    if (state.profile.lastActiveDate !== today) {
                        return {
                            profile: {
                                ...state.profile,
                                lastActiveDate: today,
                                completedQuests: [],
                                dailyRewardClaimed: false,
                                streak: updatedStreak,
                            }
                        };
                    }
                    // Even if same day, update streak values
                    return {
                        profile: {
                            ...state.profile,
                            streak: updatedStreak,
                        }
                    };
                }),
            claimDailyReward: () =>
                set((state) => {
                    if (state.profile.dailyRewardClaimed) return state;
                    return {
                        profile: {
                            ...state.profile,
                            dailyRewardClaimed: true,
                            points: state.profile.points + 500 // Award 500 XP
                        }
                    };
                }),
            // Leaderboard Actions
            setLeaderboardCategory: (category) => set({ activeLeaderboardCategory: category }),
            setTimeFilter: (filter) => set({ activeTimeFilter: filter }),
            completeQuest: (questId) =>
                set((state) => ({
                    profile: {
                        ...state.profile,
                        completedQuests: (state.profile.completedQuests || []).includes(questId)
                            ? state.profile.completedQuests
                            : [...(state.profile.completedQuests || []), questId],
                        // Auto award points here if needed? 
                        // For now we assume logic handles points separately or we add it here.
                        // Let's keep it simple: just track completion.
                    },
                })),
        }),
        {
            name: 'enhgage-storage',
        }
    )
);
