
import { motion } from "motion/react";
import { EnhgageLogo } from "@/components/common/EnhgageLogo";

export const SplashScreen = () => (
    <motion.div
        className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
        >
            <EnhgageLogo size="large" />
        </motion.div>
    </motion.div>
);
