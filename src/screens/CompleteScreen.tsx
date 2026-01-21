import React from "react";
import { motion } from "motion/react";
import { User, Activity, Heart, Flame } from "lucide-react";
import { Button } from "@/components/common/Button";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";

export const CompleteScreen = () => {
    const { profile, completeOnboarding } = useAppStore();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white max-w-md mx-auto p-6 relative overflow-hidden">
            {/* Background Confetti Image as Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                    src={IMAGES.confetti}
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-4xl font-feather text-[#58cc02] mb-2">
                    you're all set!
                </h1>
                <div className="my-8 relative inline-block">
                    <img
                        src={
                            profile.buddy === "lylah"
                                ? IMAGES.lylah
                                : profile.buddy === "ellah"
                                    ? IMAGES.ellah
                                    : IMAGES.olah
                        }
                        className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
                    />
                    <motion.div
                        className="absolute -top-4 -right-4 text-4xl"
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        🎉
                    </motion.div>
                </div>

                <div className="bg-white/90 backdrop-blur rounded-2xl border-2 border-gray-200 p-6 text-left shadow-lg mb-8 max-w-xs mx-auto font-din">
                    <div className="flex items-center gap-3 mb-3">
                        <User
                            size={18}
                            className="text-[#00897B]"
                            strokeWidth={3}
                        />
                        <span className="font-bold text-gray-700">
                            {profile.name || "Sarah"}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <Activity
                            size={18}
                            className="text-[#00897B]"
                            strokeWidth={3}
                        />
                        <span className="font-bold text-gray-700 truncate">
                            {profile.interests.length
                                ? "Selected Interests"
                                : "Stress, Fitness, Sleep"}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <Heart
                            size={18}
                            className="text-[#00897B]"
                            strokeWidth={3}
                        />
                        <span className="font-bold text-gray-700">
                            Buddy: {profile.buddyName || "Leo"}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Flame
                            size={18}
                            className="text-orange-500"
                            strokeWidth={3}
                        />
                        <span className="font-bold text-gray-700">
                            Streak: Ready to start!
                        </span>
                    </div>
                </div>

                <p className="text-gray-400 font-bold mb-8 font-din">
                    Let's begin your first quest!
                </p>

                <Button
                    variant="primary"
                    onClick={() => completeOnboarding()}
                    fullWidth
                    className="shadow-xl"
                >
                    START MY JOURNEY
                </Button>
            </motion.div>
        </div>
    );
};
