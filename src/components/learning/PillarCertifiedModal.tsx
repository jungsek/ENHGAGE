// Pillar Certified Modal - Celebration screen when user completes all lessons in a pillar
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Button } from "@/components/common/Button";
import { useMascot } from "@/hooks/useMascot";
import { LessonPillar } from "@/types/LessonTypes";
import { PILLAR_CONFIG } from "@/constants/data";
import { getCertificateName } from "@/utils/linkedinShare";
import { Award } from "lucide-react";

interface PillarCertifiedModalProps {
    pillarId: LessonPillar;
    onShareToLinkedIn: () => void;
    onDismiss: () => void;
}

export const PillarCertifiedModal: React.FC<PillarCertifiedModalProps> = ({
    pillarId,
    onShareToLinkedIn,
    onDismiss,
}) => {
    const { mascotHappy, mascotName } = useMascot();
    const pillarConfig = PILLAR_CONFIG[pillarId];
    const certificateName = getCertificateName(pillarId);

    // Trigger confetti on mount
    useEffect(() => {
        // First burst
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.3 },
            colors: [pillarConfig.color, '#FFC800', '#58CC02', '#1CB0F6'],
        });

        // Second burst after delay
        const timer = setTimeout(() => {
            confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.5, x: 0.3 },
                colors: [pillarConfig.color, '#FFC800'],
            });
            confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.5, x: 0.7 },
                colors: [pillarConfig.color, '#58CC02'],
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [pillarConfig.color]);

    return createPortal(
        <div className="fixed inset-0 z-[120] flex flex-col bg-white overflow-hidden">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 overflow-y-auto">
                {/* Mascot Celebration */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                    className="relative mb-6"
                >
                    <motion.img
                        src={mascotHappy}
                        alt={mascotName}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 3, -3, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="h-48 object-contain"
                    />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-feather text-center mb-2"
                    style={{ color: pillarConfig.color }}
                >
                    You're Certified!
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500 text-center mb-6"
                >
                    You completed all lessons in {pillarConfig.title}
                </motion.p>

                {/* Certificate Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
                    className="w-full max-w-sm bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-b-4 p-6 mb-8"
                    style={{ borderColor: pillarConfig.color }}
                >
                    {/* Certificate Icon */}
                    <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${pillarConfig.color}20` }}
                    >
                        <Award size={32} style={{ color: pillarConfig.color }} />
                    </div>

                    {/* Certificate Name */}
                    <h2
                        className="text-xl font-bold text-center mb-2"
                        style={{ color: pillarConfig.color }}
                    >
                        {certificateName}
                    </h2>

                    {/* Issuer & Date */}
                    <p className="text-gray-400 text-sm text-center">
                        Issued by ENHGAGE
                    </p>
                    <p className="text-gray-400 text-sm text-center">
                        {new Date().toLocaleDateString('en-SG', {
                            month: 'long',
                            year: 'numeric',
                        })}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="w-full max-w-sm space-y-3"
                >
                    {/* Primary: Share to LinkedIn */}
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={onShareToLinkedIn}
                        className="bg-[#00897B] hover:bg-[#00796B] text-white border-b-4 border-[#00695C] active:border-b-0 py-4 text-xl shadow-[#00695C]"
                    >
                        SHARE TO LINKEDIN
                    </Button>

                    {/* Secondary: Done */}
                    <button
                        onClick={onDismiss}
                        className="w-full py-3 text-gray-400 font-bold text-sm hover:text-gray-600 transition-colors"
                    >
                        DONE
                    </button>
                </motion.div>
            </div>
        </div>,
        document.body
    );
};
