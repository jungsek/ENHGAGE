// MultipleChoiceQuiz - Card grid selection quiz
// Matches Duolingo style with selectable image cards

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { CheckCard } from "@/types/LessonTypes";
import { FeedbackPanel } from "./FeedbackPanel";
import { Button } from "@/components/common/Button";
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

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">
                {card.options.map((option, index) => (
                    <motion.button
                        key={option.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            // Shake animation for wrong answer
                            x: showFeedback && selectedId === option.id && !isCorrect
                                ? [0, -10, 10, -10, 10, 0]
                                : 0
                        }}
                        transition={{
                            delay: index * 0.05,
                            x: { duration: 0.4 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSelect(option.id)}
                        disabled={showFeedback}
                        className={cn(
                            "p-4 rounded-2xl border-2 border-b-4 transition-all duration-200",
                            "flex flex-col items-center justify-center gap-2 min-h-[120px]",
                            // Default state
                            !selectedId && !showFeedback && "border-gray-200 bg-white hover:bg-gray-50",
                            // Selected state (before checking)
                            selectedId === option.id && !showFeedback && "border-[#1CB0F6] bg-[#DDF4FF] border-b-4",
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
                            "text-sm font-semibold text-center",
                            showFeedback && option.isCorrect && "text-[#58CC02]",
                            showFeedback && selectedId === option.id && !option.isCorrect && "text-[#EA2B2B]",
                            !showFeedback && "text-gray-700"
                        )}>
                            {option.text}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Check Button (shown when not yet answered) */}
            {!showFeedback && (
                <div className="mt-auto pt-6">
                    <Button
                        variant="secondary"
                        size="lg"
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
            />
        </motion.div>
    );
};
