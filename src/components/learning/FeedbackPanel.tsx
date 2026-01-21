// FeedbackPanel - Bottom overlay showing correct/incorrect feedback
// Green for correct, red for incorrect with CONTINUE button

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flag } from "lucide-react";
import { Button } from "@/components/common/Button";

interface FeedbackPanelProps {
    isCorrect: boolean;
    message: string;
    isVisible: boolean;
    onContinue: () => void;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
    isCorrect,
    message,
    isVisible,
    onContinue,
}) => {
    const bgColor = isCorrect ? "bg-[#D7FFB8]" : "bg-[#FFDFE0]";
    const textColor = isCorrect ? "text-[#58CC02]" : "text-[#EA2B2B]";
    const title = isCorrect ? getRandomCorrectPhrase() : "Incorrect";

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className={`fixed bottom-0 left-0 right-0 ${bgColor} rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[999]`}
                >
                    {/* Header with title and flag */}
                    <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-2xl font-bold ${textColor}`}>
                            {title}
                        </h3>
                        <button
                            className={`${textColor} opacity-60 hover:opacity-100 transition-opacity`}
                            aria-label="Report issue"
                        >
                            <Flag size={20} />
                        </button>
                    </div>

                    {/* Feedback message */}
                    {!isCorrect && (
                        <p className={`${textColor} opacity-80 text-sm mb-4`}>
                            {message}
                        </p>
                    )}

                    {/* Continue Button */}
                    <Button
                        variant={isCorrect ? "secondary" : "danger"}
                        size="lg"
                        fullWidth
                        onClick={onContinue}
                        className={isCorrect ? "" : "bg-[#EA2B2B] border-[#CC2626]"}
                    >
                        CONTINUE
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Random encouraging phrases for correct answers
function getRandomCorrectPhrase(): string {
    const phrases = [
        "Excellent!",
        "Nice!",
        "Great job!",
        "Awesome!",
        "Perfect!",
        "Well done!",
        "You got it!",
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}
