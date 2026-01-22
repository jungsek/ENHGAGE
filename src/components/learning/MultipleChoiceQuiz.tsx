// MultipleChoiceQuiz - Card grid selection quiz
// Matches Duolingo style with selectable image cards

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { CheckCard } from "@/types/LessonTypes";
import { FeedbackPanel } from "./FeedbackPanel";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { cn } from "@/components/ui/utils";

interface MultipleChoiceQuizProps {
    card: CheckCard;
    onAnswer: (optionId: string, isCorrect: boolean) => void;
    onContinue: () => void;
}

export const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({
    card,
    onAnswer,
    onContinue,
}) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSelect = (optionId: string) => {
        if (showFeedback) return; // Don't allow selection after answering
        setSelectedId(optionId);
    };

    const handleCheck = () => {
        if (!selectedId) return;

        const option = card.options.find(o => o.id === selectedId);
        if (!option) return;

        setIsCorrect(option.isCorrect);
        setShowFeedback(true);
        onAnswer(selectedId, option.isCorrect);
    };

    const handleContinue = () => {
        setShowFeedback(false);
        onContinue();
    };

    const handleRetry = () => {
        setShowFeedback(false);
        // Keep selection or clear it? Duolingo usually keeps it.
        // We just hide feedback to let user select again.
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
        >
            {/* New Word / Quiz Badge */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#CE82FF] flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                </div>
                <span className="text-[#CE82FF] font-bold text-sm tracking-wider">
                    QUIZ
                </span>
            </div>

            {/* Question */}
            <h2 className="text-xl font-bold text-gray-800 mb-6">
                {card.question}
            </h2>

            <div className="grid grid-cols-2 gap-3">
                {card.options.map((option, index) => (
                    <Card
                        key={option.id}
                        variant="default"
                        selected={selectedId === option.id && !showFeedback}
                        onClick={() => handleSelect(option.id)}
                        animate={{
                            // Shake animation for wrong answer
                            x: showFeedback && selectedId === option.id && !isCorrect
                                ? [0, -10, 10, -10, 10, 0]
                                : 0
                        }}
                        transition={{
                            delay: index * 0.05,
                            x: { duration: 0.4 }
                        }}
                        // @ts-ignore - motion props for Card
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={cn(
                            "flex flex-col items-center justify-center gap-2 h-auto min-h-[128px] text-center p-4",
                            // Correct answer revealed
                            showFeedback && option.isCorrect && "border-[#58CC02] bg-[#D7FFB8] border-b-4",
                            // Wrong answer selected
                            showFeedback && selectedId === option.id && !option.isCorrect && "border-[#EA2B2B] bg-[#FFDFE0] border-b-4",
                            // Unselected after answering
                            showFeedback && selectedId !== option.id && !option.isCorrect && "opacity-50"
                        )}
                    >
                        {/* Illustration (if available) */}
                        {option.illustration && (
                            <img
                                src={option.illustration}
                                alt=""
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                        )}

                        {/* Option Text */}
                        <span className={cn(
                            "text-sm font-bold leading-tight",
                            showFeedback && option.isCorrect && "text-[#58CC02]",
                            showFeedback && selectedId === option.id && !option.isCorrect && "text-[#EA2B2B]",
                            !showFeedback && selectedId === option.id ? "text-[#00897B]" : "text-gray-700",
                            !showFeedback && selectedId !== option.id && "text-gray-700"
                        )}>
                            {option.text}
                        </span>
                    </Card>
                ))}
            </div>

            {/* Check Button (shown when not yet answered) */}
            {!showFeedback && (
                <div className="mt-auto -mx-6 p-6 border-t border-gray-100 bg-white">
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={handleCheck}
                        disabled={!selectedId}
                        className={cn(
                            !selectedId && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        CHECK
                    </Button>
                </div>
            )}

            {/* Feedback Panel */}
            <FeedbackPanel
                isCorrect={isCorrect}
                message={isCorrect ? card.feedbackCorrect : card.feedbackIncorrect}
                isVisible={showFeedback}
                onContinue={handleContinue}
                onRetry={!isCorrect ? handleRetry : undefined}
            />
        </motion.div>
    );
};
