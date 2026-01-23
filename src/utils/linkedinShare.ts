// LinkedIn Share Utilities for Certificate Sharing
import { LessonPillar } from '@/types/LessonTypes';
import { PILLAR_CONFIG } from '@/constants/data';

// Certificate names for each pillar
export const CERTIFICATE_NAMES: Record<LessonPillar, string> = {
    stress_mental: 'Certified Mental Wellness Advocate',
    nutrition: 'Certified Nutrition Champion',
    fitness: 'Certified Fitness Enthusiast',
    chronic_disease: 'Certified Health Guardian',
    caregiver: 'Certified Caregiver',
    community: 'Certified Community Leader',
};

// Get the display name for a pillar certificate
export const getCertificateName = (pillarId: LessonPillar): string => {
    return CERTIFICATE_NAMES[pillarId];
};

// Get the pillar display title
export const getPillarTitle = (pillarId: LessonPillar): string => {
    return PILLAR_CONFIG[pillarId]?.title || pillarId;
};

// Generate a certificate URL (placeholder for now, can be replaced with actual verification URL)
export const getCertificateUrl = (pillarId: LessonPillar, userId?: string): string => {
    const baseUrl = 'https://enhgage.app/certificate';
    const certId = userId ? `${userId}-${pillarId}` : pillarId;
    return `${baseUrl}/${certId}`;
};

/**
 * Build LinkedIn "Add to Profile" URL for adding a certification
 * This adds the certificate to the user's Licenses & Certifications section
 * 
 * @see https://www.linkedin.com/pulse/how-add-credential-your-linkedin-profile-andr%C3%A9-gon%C3%A7alves-phd/
 */
export const buildLinkedInCertificationUrl = (
    pillarId: LessonPillar,
    certificationDate: Date = new Date()
): string => {
    const baseUrl = 'https://www.linkedin.com/profile/add';
    const params = new URLSearchParams({
        startTask: 'CERTIFICATION_NAME',
        name: getCertificateName(pillarId),
        organizationName: 'ENHGAGE by NHG',
        issueYear: certificationDate.getFullYear().toString(),
        issueMonth: (certificationDate.getMonth() + 1).toString(),
        certUrl: getCertificateUrl(pillarId),
    });

    return `${baseUrl}?${params.toString()}`;
};

/**
 * Build LinkedIn Share URL for sharing as a post
 * Opens the share dialog with pre-filled certificate URL
 */
export const buildLinkedInShareUrl = (
    pillarId: LessonPillar
): string => {
    const baseUrl = 'https://www.linkedin.com/sharing/share-offsite/';
    const certificateUrl = getCertificateUrl(pillarId);

    const params = new URLSearchParams({
        url: certificateUrl,
    });

    return `${baseUrl}?${params.toString()}`;
};

/**
 * Generate share text for LinkedIn post
 */
export const getLinkedInShareText = (pillarId: LessonPillar): string => {
    const certName = getCertificateName(pillarId);
    return `I just earned my "${certName}" certificate on ENHGAGE! 🎉 Learning about health and wellness one lesson at a time.`;
};

/**
 * Open LinkedIn certification add page in new tab
 */
export const shareToLinkedInCertification = (
    pillarId: LessonPillar,
    certificationDate?: Date
): void => {
    const url = buildLinkedInCertificationUrl(pillarId, certificationDate);
    window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Open LinkedIn share dialog in new tab
 */
export const shareToLinkedInPost = (pillarId: LessonPillar): void => {
    const url = buildLinkedInShareUrl(pillarId);
    window.open(url, '_blank', 'noopener,noreferrer');
};
