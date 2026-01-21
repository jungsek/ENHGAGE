// ApplyCard - Micro-action prompt card
// Prompts user to take a real-world action

import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ApplyCard as ApplyCardType } from "@/types/LessonTypes";
import { Button } from "@/components/common/Button";

interface ApplyCardProps {
    card: ApplyCardType;
    onContinue: () => void;
}

export const ApplyCard: React.FC<ApplyCardProps> = ({ card, onContinue }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleAction = () => {
        setIsCompleted(true);
        // Small delay before continuing
        setTimeout(onContinue, 800);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
        >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#1CB0F6] flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-white" />
                </div>
                <span className="text-[#1CB0F6] font-bold text-sm tracking-wider">
                    APPLY
                </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Try this!
            </h2>

            {/* Illustration (if available) */}
            {card.illustration && (
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <img
                        src={card.illustration}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Action Text */}
            <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                    {card.text}
                </p>
            </div>

            {/* CTA Button */}
            <div className="mt-auto pt-6">
                {isCompleted ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center justify-center gap-2 py-4"
                    >
                        <CheckCircle2 size={32} className="text-[#58CC02]" />
                        <span className="text-[#58CC02] font-bold text-lg">
                            Added!
                        </span>
                    </motion.div>
                ) : (
                    <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={handleAction}
                    >
                        {card.ctaText}
                    </Button>
                )}
            </div>
        </motion.div>
    );
};
