import { motion } from "motion/react";
import { WrappedData } from "@/types";
import { IMAGES } from "@/constants/assets";


interface CommunityCardProps {
    wrapped: WrappedData;
    mascotImage: string;
}

export const CommunityCard = ({ wrapped, mascotImage }: CommunityCardProps) => {
    return (
        <div
            className="flex flex-col h-full bg-white relative overflow-hidden"
            style={{
                backgroundImage: `url(${IMAGES.backgrounds.community})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* White circle top left (decorative) */}
            <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-white/80" />

            {/* Floating Timer Icon (Top Right) */}
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
                    src={IMAGES.icons.timer}
                    className="w-32 h-32 opacity-20"
                    alt="Timer"
                />
            </motion.div>

            {/* Secondary Floating Timer Icon (Left) */}
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
                    src={IMAGES.icons.timer}
                    className="w-20 h-20 opacity-10 rotate-45"
                    alt="Timer"
                />
            </motion.div>

            {/* Center Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-6 md:px-8 relative z-10">
                {/* Mascot */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                    className="relative mb-6 md:mb-8"
                >
                    <img
                        src={mascotImage}
                        className="w-48 h-48 object-contain"
                        alt="Mascot"
                    />
                </motion.div>

                {/* Text Content - now inside center area */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-center space-y-2 md:space-y-4 max-w-sm"
                >
                    <p className="text-lg md:text-2xl font-feather text-gray-700 leading-snug">
                        Congrats, you spent <span className="text-[#6A5ACD] font-bold">{wrapped.learningMinutes} minutes</span> learning this year!
                    </p>

                    <p className="text-base md:text-lg font-din text-gray-600 leading-normal">
                        That's more time than Olah spent practicing his dance moves!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
