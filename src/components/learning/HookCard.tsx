// HookCard - Attention-grabbing intro card
// Full illustration with stat/question text

import React from "react";
import { motion } from "motion/react";
import { HookCard as HookCardType } from "@/types/LessonTypes";
import { Button } from "@/components/common/Button";
import { MascotSpeechBubble } from "./MascotSpeechBubble";

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

            {/* Hook Text with Mascot Speech Bubble */}
            <div className="flex-1 px-2">
                <MascotSpeechBubble text={card.text} />
            </div>

            {/* Continue Button Footer */}
            <div className="mt-auto -mx-6 p-6 border-t border-gray-100 bg-white">
                <Button variant="primary" fullWidth onClick={onContinue}>
                    CONTINUE
                </Button>
            </div>
        </motion.div>
    );
};
