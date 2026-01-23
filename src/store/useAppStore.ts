import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OnboardingStep, UserProfile, LeaderboardCategory, TimeFilter } from "@/types";

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
                    current: 7,
                    status: "warm",
                    freezes: 1,
                    history: [true, true, true, true, true, true, false],
                },
                completedQuests: [], // Initialize completedQuests
                dailyRewardClaimed: false,
                lastActiveDate: new Date().toISOString().split('T')[0],
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
                    const newTotalPoints = state.profile.points + amount;
                    let newCurrentXP = (state.profile.currentXP || 0) + amount;
                    let newLevel = state.profile.level || 1;
                    const maxXP = state.profile.maxXP || 500;

                    // Simple leveling logic: overflow XP goes to next level
                    if (newCurrentXP >= maxXP) {
                        newLevel += 1;
                        newCurrentXP = newCurrentXP - maxXP;
                        // For now we keep maxXP constant at 500 as per request
                    }

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
                            current: 7,
                            status: "warm",
                            freezes: 1,
                            history: [true, true, true, true, true, true, false],
                        },
                        completedQuests: [],
                    },
                }),
            checkDailyReset: () =>
                set((state) => {
                    const today = new Date().toISOString().split('T')[0];
                    if (state.profile.lastActiveDate !== today) {
                        return {
                            profile: {
                                ...state.profile,
                                lastActiveDate: today,
                                completedQuests: [],
                                dailyRewardClaimed: false,
                            }
                        };
                    }
                    return state;
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
