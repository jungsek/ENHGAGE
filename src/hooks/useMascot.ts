import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";

export const useMascot = () => {
    const { profile } = useAppStore();

    // Default to 'olah' if no buddy is selected or if value is invalid
    const buddyId = profile.buddy || "olah";

    const mascotImages = {
        olah: {
            full: IMAGES.olahFull,
            head: IMAGES.olah,
            happy: IMAGES.olahHappy,
            name: "Olah"
        },
        lylah: {
            full: IMAGES.lylahFull,
            head: IMAGES.lylah,
            happy: IMAGES.lylahHappy,
            name: "Lylah"
        },
        ellah: {
            full: IMAGES.ellahFull,
            head: IMAGES.ellah,
            happy: IMAGES.ellahHappy,
            name: "Ellah"
        }
    };

    const selectedMascot = mascotImages[buddyId as keyof typeof mascotImages] || mascotImages.olah;

    return {
        mascotFull: selectedMascot.full,
        mascotHead: selectedMascot.head,
        mascotHappy: selectedMascot.happy,
        mascotName: selectedMascot.name,
        buddyId // Return the ID in case it's needed for logic
    };
};
