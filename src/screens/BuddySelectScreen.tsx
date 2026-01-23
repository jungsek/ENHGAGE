import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ProgressBar } from "@/components/common/ProgressBar";
import { Card } from "@/components/common/Card";
import { IMAGES } from "@/constants/assets";
import { useAppStore } from "@/store/useAppStore";

export const BuddySelectScreen = () => {
    const { profile, updateProfile, setStep } = useAppStore();

    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("interests")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <ProgressBar current={3} total={5} />
            </div>

            <div className="flex-1 px-6 pt-4 pb-6 overflow-hidden">
                <h2 className="text-2xl font-feather text-gray-700 mb-2">
                    choose your buddy!
                </h2>
                <p className="text-gray-500 mb-6 font-din font-bold">
                    They'll join you on your journey
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <Card
                        selected={profile.buddy === "olah"}
                        onClick={() => {
                            updateProfile("buddy", "olah");
                            updateProfile("buddyName", "Olah");
                        }}
                        className="flex flex-col items-center p-6"
                    >
                        <img
                            src={IMAGES.olah}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                        />
                        <h3 className="font-extrabold text-lg text-gray-800">
                            Olah
                        </h3>
                        <p className="text-xs text-center text-[#00897B] font-extrabold mt-2">
                            Cheerful & Supportive
                        </p>
                    </Card>

                    <Card
                        selected={profile.buddy === "lylah"}
                        onClick={() => {
                            updateProfile("buddy", "lylah");
                            updateProfile("buddyName", "Lylah");
                        }}
                        className="flex flex-col items-center p-6"
                    >
                        <img
                            src={IMAGES.lylah}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                        />
                        <h3 className="font-extrabold text-lg text-gray-800">
                            Lylah
                        </h3>
                        <p className="text-xs text-center text-[#00897B] font-extrabold mt-2">
                            Bold & Motivating
                        </p>
                    </Card>

                    <Card
                        selected={profile.buddy === "ellah"}
                        onClick={() => {
                            updateProfile("buddy", "ellah");
                            updateProfile("buddyName", "Ellah");
                        }}
                        className="flex flex-col items-center col-span-2 w-1/2 mx-auto p-6"
                    >
                        <img
                            src={IMAGES.ellah}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                        />
                        <h3 className="font-extrabold text-lg text-gray-800">
                            Ellah
                        </h3>
                        <p className="text-xs text-center text-[#00897B] font-extrabold mt-2">
                            Wise & Patient
                        </p>
                    </Card>
                </div>

                <div>
                    <label className="block text-sm font-extrabold text-gray-700 mb-2 uppercase">
                        What should we call your buddy?
                    </label>
                    <input
                        type="text"
                        value={profile.buddyName}
                        onChange={(e) =>
                            updateProfile("buddyName", e.target.value)
                        }
                        className="w-full p-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#00897B] focus:bg-white outline-none font-din text-lg"
                    />
                    <p className="text-xs text-gray-400 mt-2 ml-1 font-bold">
                        Default:{" "}
                        {profile.buddy === "olah"
                            ? "Olah"
                            : profile.buddy === "lylah"
                                ? "Lylah"
                                : profile.buddy === "ellah"
                                    ? "Ellah"
                                    : "Choose a buddy"}
                    </p>
                </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-white">
                <Button
                    variant="primary"
                    disabled={!profile.buddy}
                    onClick={() => setStep("widget")}
                    fullWidth
                >
                    CONTINUE
                </Button>
            </div>
        </div>
    );
};
