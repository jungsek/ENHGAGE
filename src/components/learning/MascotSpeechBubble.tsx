// MascotSpeechBubble - Reusable speech bubble component with mascot
// Used in lesson cards to make mascot appear to be "speaking" the text

import React from "react";
import { useMascot } from "@/hooks/useMascot";

interface MascotSpeechBubbleProps {
    text: string;
    className?: string;
}

export const MascotSpeechBubble: React.FC<MascotSpeechBubbleProps> = ({ text, className = "" }) => {
    const { mascotFull } = useMascot();

    return (
        <div className={`flex items-start gap-3 ${className}`}>
            {/* Mascot */}
            <div className="relative shrink-0 w-24 h-24">
                <img
                    src={mascotFull}
                    alt="Mascot"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Speech Bubble */}
            <div className="relative flex-1 bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 shadow-sm font-din">
                <p className="font-bold text-gray-700 text-base leading-relaxed whitespace-pre-line">
                    {text}
                </p>
                {/* Arrow pointing to mascot */}
                <div className="absolute top-4 -left-2 w-4 h-4 bg-white border-l-2 border-b-2 border-gray-200 transform rotate-45"></div>
            </div>
        </div>
    );
};
