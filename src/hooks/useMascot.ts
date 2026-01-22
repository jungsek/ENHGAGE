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
            name: "Olah"
        },
        lylah: {
            full: IMAGES.lylahFull,
            head: IMAGES.lylah,
            name: "Lylah"
        },
        ellah: {
            full: IMAGES.ellahFull,
            head: IMAGES.ellah,
            name: "Ellah"
        }
    };

    const selectedMascot = mascotImages[buddyId as keyof typeof mascotImages] || mascotImages.olah;

    return {
        mascotFull: selectedMascot.full,
        mascotHead: selectedMascot.head,
        mascotName: selectedMascot.name,
        buddyId // Return the ID in case it's needed for logic
    };
};
