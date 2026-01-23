
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ProgressBar } from "@/components/common/ProgressBar";
import { cn } from "@/components/ui/utils";
import { REFERRAL_OPTIONS } from "@/constants/data";
import { useAppStore } from "@/store/useAppStore";

export const ReferralScreen = () => {
    const { profile, updateProfile, setStep } = useAppStore();
    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("notifications")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <ProgressBar current={5} total={5} />
            </div>

            <div className="flex-1 px-6 pt-4">
                <h2 className="text-2xl font-feather text-gray-700 mb-6">
                    one quick question...
                </h2>
                <p className="text-gray-500 text-lg mb-6 font-din font-bold">
                    How did you hear about us?
                </p>

                <div className="space-y-3 font-din">
                    {REFERRAL_OPTIONS.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() =>
                                updateProfile("referralSource", option)
                            }
                            className={cn(
                                "flex items-center gap-3 p-4 border-2 border-b-4 rounded-xl cursor-pointer transition-all group active:border-b-2 active:translate-y-[2px]",
                                profile.referralSource === option
                                    ? "border-[#00897B] bg-[#E0F2F1] border-b-[#00897B]"
                                    : "border-gray-200 hover:bg-gray-50",
                            )}
                        >
                            <div
                                className={cn(
                                    "w-5 h-5 rounded-full border-2",
                                    profile.referralSource === option
                                        ? "border-[#00897B] bg-[#00897B]"
                                        : "border-gray-300 group-hover:border-[#00897B]",
                                )}
                            ></div>
                            <span
                                className={cn(
                                    "font-bold",
                                    profile.referralSource === option
                                        ? "text-[#00897B]"
                                        : "text-gray-600",
                                )}
                            >
                                {option}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 border-t border-gray-100">
                <Button
                    variant="primary"
                    disabled={!profile.referralSource}
                    onClick={() => setStep("complete")}
                    fullWidth
                >
                    CONTINUE
                </Button>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setStep("complete")}
                        className="text-gray-400 font-extrabold text-sm uppercase hover:text-gray-600 tracking-widest"
                    >
                        Skip
                    </button>
                </div>
            </div>
        </div>
    );
};
