// Certificate Share Modal - Share certificate to LinkedIn
import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { Award, Briefcase, Share2 } from 'lucide-react';
import { LessonPillar } from '@/types/LessonTypes';
import { PILLAR_CONFIG } from '@/constants/data';
import {
    getCertificateName,
    shareToLinkedInCertification,
    shareToLinkedInPost,
} from '@/utils/linkedinShare';
import linkedinIcon from '@/assets/social_media_icons/linkedin.webp';

interface CertificateShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    pillarId: LessonPillar;
    certifiedAt?: number; // timestamp
}

export const CertificateShareModal: React.FC<CertificateShareModalProps> = ({
    isOpen,
    onClose,
    pillarId,
    certifiedAt,
}) => {
    if (!isOpen) return null;

    const pillarConfig = PILLAR_CONFIG[pillarId];
    const certificateName = getCertificateName(pillarId);
    const certDate = certifiedAt ? new Date(certifiedAt) : new Date();

    const handleAddCertification = () => {
        shareToLinkedInCertification(pillarId, certDate);
    };

    const handleSharePost = () => {
        shareToLinkedInPost(pillarId);
    };

    return createPortal(
        <div
            className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 9999 }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-sm rounded-[2.5rem] border-4 border-gray-900 border-b-[8px] relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <button
                        onClick={onClose}
                        className="text-gray-600 font-semibold text-base"
                    >
                        Close
                    </button>
                    <h2 className="font-bold text-gray-800 text-lg">Share Certificate</h2>
                    <div className="w-10" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center p-6 space-y-6">
                    {/* Certificate Preview Card */}
                    <div
                        className="w-full bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 p-5"
                        style={{ borderColor: pillarConfig.color }}
                    >
                        {/* Icon */}
                        <div
                            className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                            style={{ backgroundColor: `${pillarConfig.color}20` }}
                        >
                            <Award size={24} style={{ color: pillarConfig.color }} />
                        </div>

                        {/* Certificate Name */}
                        <h3
                            className="text-lg font-bold text-center mb-1"
                            style={{ color: pillarConfig.color }}
                        >
                            {certificateName}
                        </h3>

                        {/* Details */}
                        <p className="text-gray-400 text-xs text-center">
                            ENHGAGE by NHG •{' '}
                            {certDate.toLocaleDateString('en-SG', {
                                month: 'short',
                                year: 'numeric',
                            })}
                        </p>
                    </div>

                    {/* Share Options */}
                    <div className="w-full">
                        <h3 className="text-left font-semibold text-gray-500 mb-4 text-sm">
                            Share to LinkedIn
                        </h3>

                        <div className="space-y-3">
                            {/* Add to Profile (Certification) */}
                            <button
                                onClick={handleAddCertification}
                                className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-200 border-b-4 bg-white hover:bg-gray-50 active:border-b-2 active:translate-y-[2px] transition-all text-left"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                                    <Briefcase size={24} className="text-[#0A66C2]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800">Add to Profile</p>
                                    <p className="text-xs text-gray-400">
                                        Add to your Licenses & Certifications
                                    </p>
                                </div>
                                <img
                                    src={linkedinIcon}
                                    alt="LinkedIn"
                                    className="w-6 h-6 object-contain"
                                />
                            </button>

                            {/* Share as Post */}
                            <button
                                onClick={handleSharePost}
                                className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-200 border-b-4 bg-white hover:bg-gray-50 active:border-b-2 active:translate-y-[2px] transition-all text-left"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                                    <Share2 size={24} className="text-[#0A66C2]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800">Share as Post</p>
                                    <p className="text-xs text-gray-400">
                                        Share your achievement with your network
                                    </p>
                                </div>
                                <img
                                    src={linkedinIcon}
                                    alt="LinkedIn"
                                    className="w-6 h-6 object-contain"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};
