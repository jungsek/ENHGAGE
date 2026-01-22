import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { IMAGES } from "@/constants/assets";

interface ActivityCardProps {
    wrapped: WrappedData;
    mascotImage: string;
}

export const ActivityCard = ({ wrapped, mascotImage }: ActivityCardProps) => {
    return (
        <div
            className="flex flex-col h-full items-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${IMAGES.backgrounds.activity})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* Floating Dumbbell Icon (Top Right) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="absolute -top-10 -right-10 w-64 h-64 rounded-full flex items-center justify-center"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                }}
            >
                <img
                    src={IMAGES.icons.dumbbell}
                    className="w-32 h-32 opacity-20"
                    alt="Dumbbell"
                    style={{ filter: "brightness(0) invert(1) opacity(0.6)" }}
                />
            </motion.div>

            {/* Secondary Floating Dumbbell Icon (Left) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute top-1/3 -left-10 w-48 h-48 rounded-full flex items-center justify-center"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                }}
            >
                <img
                    src={IMAGES.icons.dumbbell}
                    className="w-20 h-20 opacity-10 rotate-45"
                    alt="Dumbbell"
                    style={{ filter: "brightness(0) invert(1) opacity(0.6)" }}
                />
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-8 pt-12">

                {/* Mascot Section */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                    className="relative mb-10"
                >
                    <img
                        src={mascotImage}
                        className="w-56 h-56 object-contain drop-shadow-2xl"
                        alt="Mascot"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="text-center space-y-2 max-w-sm"
                >
                    <p className="text-xl font-din text-gray-700 font-medium leading-tight">
                        Your top activity was
                    </p>

                    <p className="text-3xl font-feather font-bold" style={{ color: "#d97706" }}>
                        {wrapped.topActivity}
                    </p>

                    <div className="pt-4 pb-2">
                        <p className="text-lg font-din text-gray-600">
                            And you earned
                        </p>
                        <div className="flex items-baseline justify-center gap-2">
                            <span className="text-4xl font-feather font-bold text-gray-800">
                                {wrapped.totalSteps.toLocaleString()}
                            </span>
                            <span className="text-xl font-din text-gray-600">
                                steps
                            </span>
                        </div>
                    </div>

                    <p className="text-base font-din text-gray-500 italic mt-6">
                        That's like walking from Sentosa to NP!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
