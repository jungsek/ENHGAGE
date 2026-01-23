import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Link2, MoreHorizontal } from 'lucide-react';
import { WrappedData } from "@/types";
import shareSummaryImage from "@/assets/backgrounds/share-summary.png";
import instagramIcon from "@/assets/social_media_icons/instagram.png";
import linkedinIcon from "@/assets/social_media_icons/linkedin.png";
import whatsappIcon from "@/assets/social_media_icons/whatsapp.png";
import tiktokIcon from "@/assets/social_media_icons/tiktok.png";

// Reuse FontStyles if needed, but since it's imported in App, we might not need it here if this was a separate file. 
// However, since we are adding this to App.tsx via edit/write, I'll just create the component code block to be inserted.

export const ShareSummaryModal = ({
    isOpen,
    onClose,
    // data, // Unused for now as we switched to static screenshot

    // mascotImage // Unused for now as we switched to static screenshot
}: {
    isOpen: boolean;
    onClose: () => void;
    data: WrappedData;
    mascotImage: string;
}) => {
    if (!isOpen) return null;

    const handleCopyLink = () => {
        // Copy a shareable link to clipboard
        navigator.clipboard.writeText('https://enhgage.app/share/my-streak-summary');
        // Could add a toast notification here
    };

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" style={{ zIndex: 9999 }} onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-sm rounded-[2.5rem] border-4 border-gray-900 border-b-[8px] relative overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <button onClick={onClose} className="text-gray-600 font-semibold text-base">
                        Close
                    </button>
                    <h2 className="font-bold text-gray-800 text-lg">Share Summary</h2>
                    <div className="w-10" /> {/* Spacer for centering */}
                </div>

                {/* Content */}
                <div className="flex flex-col items-center relative z-0 p-6 space-y-6">
                    {/* Screenshot Container */}
                    <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-200 relative">
                        <img
                            src={shareSummaryImage}
                            alt="Streak Summary"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Share Options */}
                    <div className="w-full">
                        <h3 className="text-left font-semibold text-gray-500 mb-4 text-sm">Share to</h3>

                        {/* Row 1: Social Media Icons */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            {/* Instagram */}
                            <button className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-black/10 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all overflow-hidden">
                                    <img src={instagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-500">Instagram</span>
                            </button>

                            {/* LinkedIn */}
                            <button className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-black/10 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all overflow-hidden">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 object-contain" />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-500">LinkedIn</span>
                            </button>

                            {/* WhatsApp */}
                            <button className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-black/10 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all overflow-hidden">
                                    <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-500">WhatsApp</span>
                            </button>

                            {/* TikTok */}
                            <button className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-black/10 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all overflow-hidden">
                                    <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 object-contain" />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-500">TikTok</span>
                            </button>
                        </div>

                        {/* Row 2: Copy Link & More */}
                        <div className="flex justify-start gap-3">
                            {/* Copy Link */}
                            <button onClick={handleCopyLink} className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-black/10 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all">
                                    <Link2 size={32} className="text-gray-600" />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-500">Copy Link</span>
                            </button>

                            {/* More */}
                            <button className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-black/10 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all">
                                    <MoreHorizontal size={32} className="text-gray-600" />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-500">More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};
