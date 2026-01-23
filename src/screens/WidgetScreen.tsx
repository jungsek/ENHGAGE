
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";

export const WidgetScreen = () => {
    const { profile, setStep } = useAppStore();
    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("buddy")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <div className="flex-1"></div>
                {/* Fake loading bar for widget graphic */}
                <div className="w-16 h-2 bg-gray-200 rounded-full flex gap-0.5 overflow-hidden">
                    <div className="bg-gray-400 w-full h-full"></div>
                    <div className="bg-gray-200 w-1/4 h-full"></div>
                </div>
            </div>

            <div className="flex-1 px-6 flex flex-col items-center justify-center text-center">
                <div className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl p-6 mb-8 w-64 relative font-din">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                        <img
                            src={
                                profile.buddy === "lylah"
                                    ? IMAGES.lylah
                                    : profile.buddy === "ellah"
                                        ? IMAGES.ellah
                                        : IMAGES.olah
                            }
                            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                        />
                    </div>
                    <div className="mt-6">
                        <h3 className="font-extrabold text-gray-700 text-lg">
                            "I'll cheer you on from your home screen!"
                        </h3>
                    </div>
                </div>

                {/* Mock Phone Widget */}
                <div className="w-48 h-24 bg-gray-900 rounded-2xl p-3 flex items-center gap-3 shadow-2xl mb-8 border-4 border-gray-800">
                    <div className="bg-gray-800 rounded-lg h-full w-full flex items-center p-2 gap-2 font-din">
                        <img
                            src={
                                profile.buddy === "lylah"
                                    ? IMAGES.lylah
                                    : profile.buddy === "ellah"
                                        ? IMAGES.ellah
                                        : IMAGES.olah
                            }
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col text-left">
                            <span className="text-white font-bold text-xs">
                                Let's go!
                            </span>
                            <span className="text-orange-500 font-bold text-xs">
                                🔥 1 Day
                            </span>
                        </div>
                    </div>
                </div>

                <Button
                    variant="primary"
                    onClick={() => setStep("notifications")}
                    fullWidth
                >
                    ADD WIDGET
                </Button>
                <button
                    onClick={() => setStep("notifications")}
                    className="mt-6 text-[#00897B] font-extrabold text-sm uppercase tracking-widest"
                >
                    Not Now
                </button>
            </div>
        </div>
    );
};
