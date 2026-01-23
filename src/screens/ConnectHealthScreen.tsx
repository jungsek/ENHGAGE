
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";
import { ProgressBar } from "@/components/common/ProgressBar";

export const ConnectHealthScreen = () => {
    const { setStep } = useAppStore();
    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("notifications")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <ProgressBar current={5} total={6} />
            </div>

            <div className="h-10"></div>

            <div className=" px-6 flex flex-col items-center justify-center text-center">
                <img
                    src={IMAGES.appleHealth}
                    className="w-24 h-24 mx-auto object-contain shadow-lg rounded-xl"
                    alt="Apple Health"
                />
                <div style={{ marginTop: "20px", paddingTop: "20px", paddingBottom: "10px" }} className="bg-white border-2 border-gray-200 border-b-4 rounded-3xl p-8 mb-8 w-64 relative font-din r-b-0">
                    <div className="mt-10">
                        <h3 className="font-extrabold text-gray-700 text-xl mb-2">
                            Connect Health
                        </h3>
                        <p className="text-gray-500 font-bold text-sm">
                            Sync your steps and activity to earn XP automatically!
                        </p>
                    </div>
                </div>

                <div className="space-y-4 w-full max-w-xs mb-8">
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border-2 border-gray-200 border-b-4 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                            <img src={IMAGES.icons.run} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-gray-800 text-sm">Track Activity</p>
                            <p className="text-gray-500 text-xs">Auto-import your workouts</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border-2 border-gray-200 border-b-4 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-xl">
                            👣
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-gray-800 text-sm">Count Steps</p>
                            <p className="text-gray-500 text-xs">Hit your daily goals</p>
                        </div>
                    </div>
                </div>

                <div className="h-20"></div>

                <Button
                    variant="primary"
                    onClick={() => setStep("referral")}
                    fullWidth
                >
                    CONNECT APPLE HEALTH
                </Button>
                <button
                    onClick={() => setStep("referral")}
                    className="mt-6 text-[#00897B] font-extrabold text-sm uppercase tracking-widest"
                >
                    Not Now
                </button>
            </div>
        </div>
    );
};
