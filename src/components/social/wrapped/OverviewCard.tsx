import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { ACCENT_COLORS } from "./constants";

interface OverviewCardProps {
    wrapped: WrappedData;
    mascotImage: string;
}

export const OverviewCard = ({ wrapped, mascotImage }: OverviewCardProps) => {
    return (
        <div className="grid h-full bg-white relative" style={{ gridTemplateRows: "auto 1fr auto" }}>
            {/* Decorative circles */}
            <div className="absolute top-20 right-4 w-24 h-24 rounded-full" style={{ backgroundColor: "rgba(0, 128, 128, 0.08)" }} />
            <div className="absolute bottom-32 left-4 w-20 h-20 rounded-full" style={{ backgroundColor: "rgba(0, 128, 128, 0.06)" }} />
            <div className="absolute top-1/3 left-8 w-14 h-14 rounded-full" style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }} />

            {/* TOP: Stats text */}
            <div className="px-6 text-center flex flex-col justify-center" style={{ marginTop: "74px", marginBottom: "161px" }}>
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

            {/* MIDDLE: Mascot */}
            <div className="flex items-center justify-center" style={{ marginTop: "-119px", marginBottom: "-119px", height: "301px", zIndex: 0 }}>
                <motion.img
                    src={mascotImage}
                    className="h-40 object-contain"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                    alt="Mascot"
                />
            </div>

            {/* BOTTOM: Comparative text and badge */}
            <div 
                className="pb-12 text-center flex flex-col items-center"
                style={{ paddingLeft: 50, paddingRight: 50, marginTop: 100, marginBottom: 100, height: 170 }}
            >
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
                    className="mt-4 px-6 py-3 rounded-2xl inline-block"
                    style={{ backgroundColor: ACCENT_COLORS.gold.accent }}
                >
                    <p className="font-din font-bold text-sm text-gray-800">
                        Top {100 - wrapped.appOpensPercentile}% Learner
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
