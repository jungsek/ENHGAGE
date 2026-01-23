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
        <div className={`flex items-end gap-3 ${className}`}>
            {/* Mascot - compact size */}
            <div className="relative shrink-0 w-16 h-16">
                <img
                    src={mascotFull}
                    alt="Mascot"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Speech Bubble - takes remaining width */}
            <div className="relative flex-1 min-w-0 bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {text}
                </p>
                {/* Tail pointing to mascot - two layers for clean border */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[9px] w-3 h-3 bg-gray-200 rotate-45" />
                <div className="absolute top-1/2 -translate-y-1/2 -left-[6px] w-3 h-3 bg-white rotate-45" />
            </div>
        </div>
    );
};
