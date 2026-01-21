// HookCard - Attention-grabbing intro card
// Full illustration with stat/question text

import React from "react";
import { motion } from "motion/react";
import { HookCard as HookCardType } from "@/types/LessonTypes";

interface HookCardProps {
    card: HookCardType;
    onContinue: () => void;
}

export const HookCard: React.FC<HookCardProps> = ({ card, onContinue }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
            onClick={onContinue}
        >
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

            {/* Hook Text */}
            <div className="flex-1 px-2">
                <p className="text-xl font-bold text-gray-800 leading-relaxed">
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
