import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { ACCENT_COLORS } from "./constants";

interface OverviewCardProps {
    wrapped: WrappedData;
    mascotImage: string;
}

export const OverviewCard = ({ wrapped, mascotImage }: OverviewCardProps) => {
    return (
        <div className="flex flex-col items-center h-full bg-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-20 right-4 w-24 h-24 rounded-full" style={{ backgroundColor: "rgba(0, 128, 128, 0.08)" }} />
            <div className="absolute bottom-32 left-4 w-20 h-20 rounded-full" style={{ backgroundColor: "rgba(0, 128, 128, 0.06)" }} />
            <div className="absolute top-1/3 left-8 w-14 h-14 rounded-full" style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }} />

            {/* TOP Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-6 pt-16 z-10">
                {/* Stats text */}
                <div className="text-center mb-8">
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-sm font-din text-gray-500 mb-1"
                    >
                        You opened ENHGAGE
                    </motion.p>
                    <motion.p
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="text-7xl font-feather"
                        style={{ color: ACCENT_COLORS.teal.accent }}
                    >
                        {wrapped.appOpens}
                    </motion.p>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg font-din text-gray-600"
                    >
                        times this month
                    </motion.p>
                </div>

                {/* Mascot */}
                <motion.div
                    className="flex items-center justify-center mb-6"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                >
                    <img
                        src={mascotImage}
                        className="w-48 h-48 object-contain"
                        alt="Mascot"
                    />
                </motion.div>

                {/* BOTTOM: Comparative text and badge */}
                <div className="text-center flex flex-col items-center px-4 max-w-sm">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-xl font-feather text-gray-800 mb-1">
                            That's more than{" "}
                            <span style={{ color: ACCENT_COLORS.teal.accent }}>{wrapped.appOpensPercentile}%</span>
                            {" "}of users!
                        </p>
                        <p className="text-sm font-din text-gray-500">
                            You're on fire! Keep the momentum going.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                        className="mt-6 px-6 py-3 rounded-2xl inline-block"
                        style={{ backgroundColor: ACCENT_COLORS.gold.accent }}
                    >
                        <p className="font-din font-bold text-sm text-gray-800">
                            Top {100 - wrapped.appOpensPercentile}% Learner
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
