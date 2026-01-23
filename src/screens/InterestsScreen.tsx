import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ProgressBar } from "@/components/common/ProgressBar";
import { Card } from "@/components/common/Card";
import { INTERESTS_DATA } from "@/constants/data";
import { useAppStore } from "@/store/useAppStore";
import { IMAGES } from "@/constants/assets";

// Map icon names to actual SVG imports
const getIconSrc = (iconName: string) => {
    const iconMap: Record<string, string> = {
        brain: IMAGES.icons.analytics,
        heart: IMAGES.icons.heart,
        dumbbell: IMAGES.icons.dumbbell,
        bullseye: IMAGES.icons.checkCircle,
        social: IMAGES.icons.social,
    };
    return iconMap[iconName] || IMAGES.icons.heart;
};

export const InterestsScreen = () => {
    const { profile, toggleInterest, setStep } = useAppStore();
    return (
        <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={() => setStep("profile")}
                    className="text-gray-400"
                >
                    <ChevronLeft size={28} strokeWidth={3} />
                </button>
                <ProgressBar current={2} total={5} />
            </div>

            <div className="flex-1 px-6 pt-4">
                <h2 className="text-2xl font-feather text-gray-700 mb-2">
                    what matters most to you?
                </h2>
                <p className="text-gray-500 mb-6 font-din font-bold">
                    Pick up to 3 focus areas
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {INTERESTS_DATA.map((item) => {
                        const isSelected = profile.interests.includes(item.id);
                        return (
                            <Card
                                key={item.id}
                                selected={isSelected}
                                onClick={() => toggleInterest(item.id)}
                                className="flex flex-col items-center justify-center text-center h-32"
                            >
                                <div
                                    className="w-10 h-10 mb-2 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${item.color}20` }}
                                >
                                    <img
                                        src={getIconSrc(item.icon)}
                                        alt={item.title}
                                        className="w-6 h-6"
                                        style={{ filter: isSelected ? 'none' : 'grayscale(50%)' }}
                                    />
                                </div>
                                <span
                                    className={`text-sm font-extrabold leading-tight ${isSelected ? "text-[#00897B]" : "text-gray-600"
                                        }`}
                                >
                                    {item.title}
                                </span>
                            </Card>
                        );
                    })}
                </div>
            </div>

            <div className="p-6 border-t border-gray-100">
                <Button
                    variant="primary"
                    disabled={profile.interests.length === 0}
                    onClick={() => setStep("buddy")}
                    fullWidth
                >
                    CONTINUE
                </Button>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setStep("buddy")}
                        className="text-gray-400 font-extrabold text-sm uppercase hover:text-gray-600 tracking-widest"
                    >
                        Skip
                    </button>
                </div>
            </div>
            <div className="h-20"></div>
        </div>
    );
};
