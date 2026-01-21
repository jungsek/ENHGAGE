import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OnboardingStep, UserProfile, LeaderboardCategory, TimeFilter } from "@/types";

interface AppState {
    step: OnboardingStep;
    profile: UserProfile;
    hasCompletedOnboarding: boolean;
    // Leaderboard State
    activeLeaderboardCategory: LeaderboardCategory;
    activeTimeFilter: TimeFilter;
    setStep: (step: OnboardingStep) => void;
    updateProfile: (key: keyof UserProfile, value: any) => void;
    toggleInterest: (interest: string) => void;
    completeOnboarding: () => void;
    resetProfile: () => void;
    // Leaderboard Actions
    setLeaderboardCategory: (category: LeaderboardCategory) => void;
    setTimeFilter: (filter: TimeFilter) => void;
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
                streak: {
                    current: 7,
                    status: "warm",
                    freezes: 1,
                    history: [true, true, true, true, true, true, false],
                },
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
                        streak: {
                            current: 7,
                            status: "warm",
                            freezes: 1,
                            history: [true, true, true, true, true, true, false],
                        },
                    },
                }),
            // Leaderboard Actions
            setLeaderboardCategory: (category) => set({ activeLeaderboardCategory: category }),
            setTimeFilter: (filter) => set({ activeTimeFilter: filter }),
        }),
        {
            name: 'enhgage-storage',
        }
    )
);
