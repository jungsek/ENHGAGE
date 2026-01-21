import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ProgressBar } from "@/components/common/ProgressBar";
import { INSTITUTIONS_DATA, OTHER_INSTITUTION_OPTIONS } from "@/constants/data";
import { useAppStore } from "@/store/useAppStore";

export const ProfileSetupScreen = () => {
    const { profile, updateProfile, setStep } = useAppStore();

    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("signin")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <ProgressBar current={1} total={5} />
            </div>

            <div className="flex-1 px-6 pt-4">
                <h2 className="text-2xl font-feather text-gray-700 mb-2">
                    let's get to know you
                </h2>

                <div className="space-y-6 mt-8">
                    <div>
                        <label className="block text-sm font-extrabold text-gray-700 mb-2 uppercase">
                            Nickname
                        </label>
                        <input
                            type="text"
                            placeholder="What should we call you?"
                            className="w-full p-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#00897B] focus:bg-white outline-none transition-all font-din text-lg placeholder:text-gray-400"
                            value={profile.name}
                            onChange={(e) =>
                                updateProfile("name", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-extrabold text-gray-700 mb-2 uppercase">
                            Age
                        </label>
                        <div className="relative">
                            <select
                                className="w-full p-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#00897B] outline-none appearance-none font-din text-lg text-gray-700"
                                value={profile.age}
                                onChange={(e) =>
                                    updateProfile("age", e.target.value)
                                }
                            >
                                <option value="">Select your age</option>
                                <option value="13-17">13-17</option>
                                <option value="18-24">18-24</option>
                                <option value="25-34">25-34</option>
                                <option value="35+">35+</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                ▼
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-extrabold text-gray-700 mb-2 uppercase">
                            Institution (Optional)
                        </label>
                        <div className="relative">
                            <select
                                className="w-full p-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-[#00897B] outline-none appearance-none font-din text-lg text-gray-700"
                                value={profile.institution}
                                onChange={(e) =>
                                    updateProfile("institution", e.target.value)
                                }
                            >
                                <option value="">Select institution</option>
                                {INSTITUTIONS_DATA.map((group) => (
                                    <optgroup key={group.label} label={group.label}>
                                        {group.options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                                {OTHER_INSTITUTION_OPTIONS.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                ▼
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 border-t border-gray-100">
                <Button
                    variant="primary"
                    disabled={!profile.name || !profile.age}
                    onClick={() => setStep("interests")}
                    fullWidth
                >
                    CONTINUE
                </Button>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setStep("interests")}
                        className="text-gray-400 font-extrabold text-sm uppercase hover:text-gray-600 tracking-widest"
                    >
                        Skip
                    </button>
                </div>
            </div>
        </div>
    );
};
