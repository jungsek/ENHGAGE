import React from "react";
import { EnhgageLogo } from "@/components/common/EnhgageLogo";
import { Button } from "@/components/common/Button";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";

export const WelcomeScreen = () => {
    const { setStep } = useAppStore();

    return (
        <div className="min-h-screen flex flex-col p-6 items-center justify-center bg-white max-w-md mx-auto">
            <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
                <EnhgageLogo size="large" />

                {/* Collaboration Info Section */}
                <div className="flex flex-col items-center justify-center gap-6 w-full animate-in fade-in zoom-in duration-700">
                    <span className="text-gray-400 font-din font-bold text-xs uppercase tracking-widest">
                        in collaboration with
                    </span>
                    <img
                        src={IMAGES.nhgLogo}
                        alt="NHG Health"
                        className="h-20 object-contain"
                    />
                </div>

                <div className="text-center px-4">
                    <p className="text-gray-400 text-lg font-din font-bold leading-tight">
                        Enhancing Youth Participation & Real-World Health
                        Engagement
                    </p>
                </div>
            </div>
            <div className="w-full space-y-3 pb-8">
                <Button
                    variant="primary"
                    onClick={() => setStep("signin")}
                    fullWidth
                >
                    GET STARTED
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setStep("signin")}
                    fullWidth
                >
                    I ALREADY HAVE AN ACCOUNT
                </Button>
            </div>
        </div>
    );
};
