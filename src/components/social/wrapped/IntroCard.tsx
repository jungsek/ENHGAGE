import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { ACCENT_COLORS } from "./constants";

interface IntroCardProps {
    wrapped: WrappedData;
    mascotImage: string;
    profileName: string;
}

export const IntroCard = ({ wrapped, mascotImage, profileName }: IntroCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center px-6 bg-white">
            {/* Decorative teal circles */}
            <div className="absolute top-16 left-4 w-32 h-32 rounded-full" style={{ backgroundColor: ACCENT_COLORS.teal.bg }} />
            <div className="absolute bottom-24 right-2 w-48 h-48 rounded-full" style={{ backgroundColor: ACCENT_COLORS.teal.bg }} />
            <div className="absolute top-1/3 right-8 w-20 h-20 rounded-full" style={{ backgroundColor: ACCENT_COLORS.gold.bg }} />

            {/* Header */}
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-sm font-din font-bold tracking-widest mb-4"
                style={{ color: ACCENT_COLORS.teal.accent }}
            >
                {wrapped.month.toUpperCase()} {wrapped.year} WRAPPED
            </motion.p>

            {/* Large Mascot */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                className="relative z-10"
            >
                <img
                    src={mascotImage}
                    className="h-48 object-contain drop-shadow-lg"
                    alt="Mascot"
                />
            </motion.div>

            {/* Year text behind mascot effect */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-7xl font-feather -mt-8 relative z-0"
                style={{ color: ACCENT_COLORS.teal.light, opacity: 0.3 }}
            >
                {wrapped.year}
            </motion.div>

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-feather text-gray-800 mt-4 mb-2"
            >
                Hey {profileName || "there"}!
            </motion.h2>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base font-din text-gray-600"
            >
                Let's see what you accomplished in {wrapped.month}.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-sm font-din text-gray-400"
            >
                Tap to continue
            </motion.p>
        </div>
    );
};
