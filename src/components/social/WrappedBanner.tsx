import { motion } from "motion/react";
import { Gift, ChevronRight } from "lucide-react";
import { MOCK_WRAPPED_DATA } from "@/constants/socialData";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";

interface WrappedBannerProps {
    onClick: () => void;
}

export const WrappedBanner = ({ onClick }: WrappedBannerProps) => {
    const { profile } = useAppStore();
    const wrapped = MOCK_WRAPPED_DATA;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 my-4"
        >
            <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                className="w-full relative overflow-hidden rounded-2xl border-2 border-b-4 border-purple-300 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-4 shadow-lg"
            >
                {/* Animated background circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />

                {/* Content */}
                <div className="flex items-center gap-4 relative z-10">
                    {/* Mascot */}
                    <motion.div
                        animate={{
                            y: [0, -5, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-white/30"
                    >
                        <img
                            src={
                                profile.buddy === "lylah"
                                    ? IMAGES.lylah
                                    : profile.buddy === "ellah"
                                        ? IMAGES.ellah
                                        : IMAGES.olah
                            }
                            className="w-12 h-12 object-cover"
                            alt="Mascot"
                        />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-0.5">
                            <Gift className="w-5 h-5 text-yellow-300" fill="#fde047" />
                            <h3 className="font-feather text-white text-lg">
                                {wrapped.month} Wrapped
                            </h3>
                        </div>
                        <p className="font-din text-sm text-white/80">
                            See your wellness journey highlights
                        </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="bg-white/20 rounded-full p-2"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </motion.div>
                </div>
            </motion.button>
        </motion.div>
    );
};
