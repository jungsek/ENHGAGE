import { motion } from "motion/react";

interface StatCardProps {
    icon: string;
    iconBg: string;
    value: string | number;
    label: string;
    valueColor?: string;
    delay?: number;
}

export const StatCard = ({ icon, iconBg, value, label, valueColor = "#4B4B4B", delay = 0 }: StatCardProps) => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        className="bg-white rounded-2xl p-4 border-2 border-gray-200 border-b-4 flex items-center gap-3 h-full"
    >
        <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: iconBg }}
        >
            <img src={icon} className="w-6 h-6" alt="" />
        </div>
        <div className="text-left">
            <p className="text-2xl font-feather" style={{ color: valueColor }}>{value}</p>
            <p className="text-xs font-din text-gray-500">{label}</p>
        </div>
    </motion.div>
);
