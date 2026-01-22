import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { IMAGES } from "@/constants/assets";
import { StatCard } from "./StatCard";

interface StreakCardProps {
    wrapped: WrappedData;
    mascotImage: string;
}

export const StreakCard = ({ wrapped, mascotImage }: StreakCardProps) => {
    return (
        <div
            className="flex flex-col h-full overflow-hidden"
            style={{
                backgroundImage: `url(${IMAGES.backgrounds.streaks})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Top section - flexible height */}
            <div
                className="relative flex flex-col items-center justify-center px-6 flex-1 min-h-0"
                style={{
                    paddingTop: "40px",
                    paddingBottom: "8px"
                }}
            >
                {/* Decorative dot indicators (Duolingo carousel style) */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-2"
                >
                </motion.div>

                {/* Streak number */}
                {/* Using responsive font size */}
                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="font-feather font-bold leading-none text-white text-7xl md:text-[80px]"
                >
                    {wrapped.longestStreak}
                </motion.p>

                {/* Supporting text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg font-din text-gray-800 text-center mt-2"
                >
                    was your longest streak.
                </motion.p>
            </div>

            {/* Mascot overlapping the boundary */}
            <div className="relative z-10 -mt-16 md:-mt-20 flex justify-center shrink-0">
                <motion.img
                    src={mascotImage}
                    className="h-28 md:h-36 object-contain drop-shadow-lg"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                    alt="Mascot"
                />
            </div>

            {/* Bottom section */}
            <div className="flex-1 px-6 pt-0 pb-6 -mt-4 flex flex-col items-center justify-start min-h-0">
                {/* Encouragement copy */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl font-feather text-gray-800 text-center mb-1"
                >
                    Okay, hot stuff!
                </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm md:text-base font-din text-gray-500 text-center mb-4"
                >
                    Can you keep the flame lit?
                </motion.p>
            </div>
        </div>
    );
};
