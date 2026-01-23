
import { motion } from "motion/react";

export const ProgressBar = ({
    current,
    total,
}: {
    current: number;
    total: number;
}) => {
    const progress = Math.min((current / total) * 100, 100);
    return (
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-[#58cc02] rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Highlight strip on top for glossy effect */}
                <div className="absolute top-1 left-2 right-2 h-1 bg-white/30 rounded-full"></div>
            </motion.div>
        </div>
    );
};
