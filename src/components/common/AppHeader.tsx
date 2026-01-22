import { cn } from "@/components/ui/utils";
import { EnhgageLogo } from "@/components/common/EnhgageLogo";
import { IMAGES } from "@/constants/assets";

interface AppHeaderProps {
    gems?: number;
    streak: {
        current: number;
        status: "cold" | "warm" | "hot";
    };
    onStreakClick?: () => void;
    onProfileClick?: () => void;
    onPointsClick?: () => void;
}

export const AppHeader = ({
    gems = 520,
    streak,
    onStreakClick,
    onProfileClick,
    onPointsClick,
}: AppHeaderProps) => {
    return (
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b-2 border-gray-100 px-4 py-2 flex items-center justify-between font-din">
            <div className="flex items-center gap-2">
                <EnhgageLogo size="small" showIcon={false} />
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="flex items-center gap-1 active:scale-95 transition-transform"
                    onClick={onPointsClick}
                >
                    <img
                        src={IMAGES.icons.trophy}
                        alt="gems"
                        className="w-6 h-6"
                    />
                    <span className="font-extrabold text-[#00897B]">
                        {gems}
                    </span>
                </button>
                <button
                    className="flex items-center gap-1 active:scale-95 transition-transform"
                    onClick={onStreakClick}
                >
                    <img
                        src={IMAGES.icons.flame}
                        alt="streak"
                        className={`w-6 h-6 ${streak.status === "hot"
                            ? "animate-pulse"
                            : streak.status === "cold"
                                ? "opacity-50 grayscale"
                                : ""
                            }`}
                    />
                    <span
                        className={cn(
                            "font-extrabold",
                            streak.status === "hot"
                                ? "text-orange-600"
                                : streak.status === "warm"
                                    ? "text-orange-400"
                                    : "text-gray-400",
                        )}
                    >
                        {streak.current}
                    </span>
                </button>
                <button
                    onClick={onProfileClick}
                    className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center overflow-hidden active:scale-95 transition-transform"
                >
                    <img
                        src={IMAGES.icons.profile}
                        alt="profile"
                        className="w-8 h-8 opacity-40 grayscale"
                    />
                </button>
            </div>
        </div>
    );
};
