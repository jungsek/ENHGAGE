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
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-6 pt-16 z-10">

                {/* Streak Stats Section */}
                <div className="text-center mb-8">
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="font-feather font-bold leading-none text-white text-7xl md:text-[80px]"
                    >
                        {wrapped.longestStreak}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-base md:text-lg font-din text-gray-800 text-center mt-2"
                    >
                        was your longest streak.
                    </motion.p>
                </div>

                {/* Mascot Section */}
                <motion.div
                    className="flex justify-center mb-10"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                >
                    <img
                        src={mascotImage}
                        className="w-48 h-48 object-contain"
                        alt="Mascot"
                    />
                </motion.div>

                {/* Bottom Text Section */}
                <div className="text-center flex flex-col items-center px-4 max-w-sm">
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
                        className="text-sm md:text-base font-din text-gray-500 text-center"
                    >
                        Can you keep the flame lit?
                    </motion.p>
                </div>
            </div>
        </div>
    );
};
