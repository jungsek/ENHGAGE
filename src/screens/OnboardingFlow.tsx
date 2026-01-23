import React, { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store/useAppStore";
import { WelcomeScreen } from "@/screens/WelcomeScreen";
import { SignInScreen } from "@/screens/SignInScreen";
import { ProfileSetupScreen } from "@/screens/ProfileSetupScreen";
import { InterestsScreen } from "@/screens/InterestsScreen";
import { BuddySelectScreen } from "@/screens/BuddySelectScreen";
import { WidgetScreen } from "@/screens/WidgetScreen";
import { NotificationsScreen } from "@/screens/NotificationsScreen";
import { ConnectHealthScreen } from "@/screens/ConnectHealthScreen";
import { ReferralScreen } from "@/screens/ReferralScreen";
import { CompleteScreen } from "@/screens/CompleteScreen";
import { SplashScreen } from "@/screens/SplashScreen";

export const OnboardingFlow: React.FC = () => {
    const { step, setStep, hasCompletedOnboarding } = useAppStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (hasCompletedOnboarding) {
            navigate("/app/home", { replace: true });
        }
    }, [hasCompletedOnboarding, navigate]);

    // Handle Splash Screen Timer
    useEffect(() => {
        if (step === "splash") {
            const timer = setTimeout(() => {
                if (!hasCompletedOnboarding) {
                    setStep("welcome");
                }
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [step, setStep, hasCompletedOnboarding]);

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-white">
            <AnimatePresence mode="wait">
                {step === "splash" && <SplashScreen key="splash" />}
                {step === "welcome" && <WelcomeScreen key="welcome" />}
                {step === "signin" && <SignInScreen key="signin" />}
                {step === "profile" && <ProfileSetupScreen key="profile" />}
                {step === "interests" && <InterestsScreen key="interests" />}
                {step === "buddy" && <BuddySelectScreen key="buddy" />}
                {step === "widget" && <WidgetScreen key="widget" />}
                {step === "notifications" && <NotificationsScreen key="notifications" />}
                {step === "health" && <ConnectHealthScreen key="health" />}
                {step === "referral" && <ReferralScreen key="referral" />}
                {step === "complete" && <CompleteScreen key="complete" />}
            </AnimatePresence>
        </div>
    );
};
