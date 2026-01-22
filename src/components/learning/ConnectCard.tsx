// ConnectCard - Programme link card
// Links to NHG Health Kampung programmes

import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ConnectCard as ConnectCardType } from "@/types/LessonTypes";
import { Button } from "@/components/common/Button";

interface ConnectCardProps {
    card: ConnectCardType;
    onComplete: () => void;
}

export const ConnectCard: React.FC<ConnectCardProps> = ({ card, onComplete }) => {
    const handleLink = () => {
        if (card.deepLink) {
            window.open(card.deepLink, "_blank");
        }
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
                <div className="w-7 h-7 rounded-full bg-[#00897B] flex items-center justify-center">
                    <ExternalLink size={14} className="text-white" />
                </div>
                <span className="text-[#00897B] font-bold text-sm tracking-wider">
                    CONNECT
                </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Want to learn more?
            </h2>

            {/* Programme Card */}
            <div className="bg-gradient-to-r from-[#E0F2F1] to-[#B2DFDB] rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-[#00695C] mb-2">
                    {card.programmeName}
                </h3>
                <p className="text-gray-700 text-sm">
                    {card.text}
                </p>
            </div>

            {/* Illustration (if available) */}
            {card.illustration && (
                <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                    <img
                        src={card.illustration}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Footer */}
            <div className="mt-auto -mx-6 p-6 border-t border-gray-100 bg-white space-y-3">
                {/* Programme Link Button */}
                <Button
                    variant="outline"
                    fullWidth
                    onClick={handleLink}
                >
                    {card.ctaText}
                </Button>

                {/* Complete Lesson Button */}
                <Button
                    variant="primary"
                    fullWidth
                    onClick={onComplete}
                >
                    COMPLETE LESSON
                </Button>
            </div>
        </motion.div>
    );
};
