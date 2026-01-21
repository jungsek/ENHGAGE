// LearnCard - Educational content card with illustration and text
// Shows "NEW INFO" badge like Duolingo's "NEW WORD"

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { LearnCard as LearnCardType } from "@/types/LessonTypes";

interface LearnCardProps {
    card: LearnCardType;
    onContinue: () => void;
}

export const LearnCard: React.FC<LearnCardProps> = ({ card, onContinue }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
            onClick={onContinue}
        >
            {/* New Info Badge */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#CE82FF] flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                </div>
                <span className="text-[#CE82FF] font-bold text-sm tracking-wider">
                    NEW INFO
                </span>
            </div>

            {/* Title (if present) */}
            {card.title && (
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {card.title}
                </h2>
            )}

            {/* Illustration Area */}
            {card.illustration && (
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <img
                        src={card.illustration}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Content Text */}
            <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                    {card.text}
                </p>
            </div>

            {/* Tap to continue hint */}
            <div className="mt-auto pt-8 pb-4 text-center">
                <p className="text-gray-400 text-sm">Tap to continue</p>
            </div>
        </motion.div>
    );
};
