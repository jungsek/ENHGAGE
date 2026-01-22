import { motion } from "motion/react";
import { MOCK_WRAPPED_DATA } from "@/constants/socialData";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";

interface WrappedBannerProps {
    onClick: () => void;
}

export const WrappedBanner = ({ onClick }: WrappedBannerProps) => {
    const { profile } = useAppStore();
    const wrapped = MOCK_WRAPPED_DATA;

    const getMascotImage = () => {
        return profile.buddy === "lylah"
            ? IMAGES.lylah
            : profile.buddy === "ellah"
                ? IMAGES.ellah
                : IMAGES.olah;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 my-4"
        >
            <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                className="w-full relative overflow-hidden rounded-2xl bg-white p-4 border-2 border-gray-200 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all shadow-sm"
            >
                {/* Decorative accent shapes (circles per brand guidelines) */}
                <div 
                    className="absolute -top-8 -right-8 w-28 h-28 rounded-full"
                    style={{ backgroundColor: "rgba(0, 128, 128, 0.08)" }}
                />
                <div 
                    className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full"
                    style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }}
                />

                {/* Content */}
                <div className="flex items-center gap-4 relative z-10">
                    {/* Mascot with teal background */}
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                            rotate: [0, 3, -3, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                        style={{ backgroundColor: "#008080" }}
                    >
                        <img
                            src={getMascotImage()}
                            className="w-12 h-12 object-cover"
                            alt="Mascot"
                        />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-0.5">
                            <div 
                                className="w-6 h-6 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: "#FFD700" }}
                            >
                                <img src={IMAGES.icons.chest} className="w-4 h-4" alt="" />
                            </div>
                            <h3 className="font-feather text-gray-800 text-lg">
                                {wrapped.month} Wrapped
                            </h3>
                        </div>
                        <p className="font-din text-sm text-gray-500">
                            See your wellness journey highlights
                        </p>
                    </div>

                    {/* Arrow with teal accent */}
                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="rounded-xl p-2.5"
                        style={{ backgroundColor: "#008080" }}
                    >
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.div>
                </div>
            </motion.button>
        </motion.div>
    );
};
