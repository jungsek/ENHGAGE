
import { ChevronLeft, Bell, Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ProgressBar } from "@/components/common/ProgressBar";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";

export const NotificationsScreen = () => {
    const { profile, setStep } = useAppStore();
    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("widget")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <ProgressBar current={4} total={5} />
            </div>

            <div className="flex-1 px-6 flex flex-col items-center pt-8 text-center">
                <div className="relative mb-6">
                    <img
                        src={
                            profile.buddy === "lylah"
                                ? IMAGES.lylah
                                : profile.buddy === "ellah"
                                    ? IMAGES.ellah
                                    : IMAGES.olah
                        }
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full shadow-lg border-4 border-white">
                        <Bell size={24} fill="currentColor" strokeWidth={3} />
                    </div>
                </div>

                <h2 className="text-2xl font-feather text-gray-700 mb-4">
                    stay on track with {profile.buddyName}!
                </h2>

                <div className="bg-gray-50 rounded-2xl p-6 w-full text-left space-y-4 mb-8 font-din">
                    <p className="font-extrabold text-gray-600 mb-2">
                        Get friendly reminders to:
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="text-green-500">
                            <Check size={24} strokeWidth={4} />
                        </div>
                        <span className="text-gray-600 font-bold">
                            Complete your daily quests
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-green-500">
                            <Check size={24} strokeWidth={4} />
                        </div>
                        <span className="text-gray-600 font-bold">
                            Maintain your streak
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-green-500">
                            <Check size={24} strokeWidth={4} />
                        </div>
                        <span className="text-gray-600 font-bold">
                            Celebrate your wins
                        </span>
                    </div>
                </div>

                <div className="w-full mt-auto mb-8">
                    <Button
                        variant="primary"
                        onClick={() => setStep("referral")}
                        fullWidth
                    >
                        ENABLE NOTIFICATIONS
                    </Button>
                    <button
                        onClick={() => setStep("referral")}
                        className="mt-6 block w-full text-[#00897B] font-extrabold text-sm uppercase tracking-widest"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
};
