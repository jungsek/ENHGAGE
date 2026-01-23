import { Quest, UserProfile } from "@/types";
import { Check, Zap, Heart, Star, Book, Droplets, Moon, Brain } from "lucide-react";
import { IMAGES } from "@/constants/assets";

interface QuestItemProps {
    quest: Quest;
    isCompleted: boolean;
    onClick: (quest: Quest) => void;
    profile: UserProfile; // Passed to access buddy info if needed
}

export const QuestItem = ({ quest, isCompleted, onClick, profile }: QuestItemProps) => {
    // Icon mapping
    const getIcon = () => {
        const props = { size: 20, className: "text-white fill-white" };
        switch (quest.icon) {
            case 'check': return <Check {...props} strokeWidth={4} className="text-white" />;
            case 'zap': return <Zap {...props} />;
            case 'heart': return <Heart {...props} />;
            case 'star': return <Star {...props} />;
            case 'book': return <Book {...props} />;
            case 'water': return <Droplets {...props} />;
            case 'moon': return <Moon {...props} />;
            case 'brain': return <Brain {...props} />;
            default: return <Star {...props} />;
        }
    };

    // Render based on quest type

    // 1. Completed Quest Style
    if (quest.type === 'completed' || isCompleted) {
        return (
            <div className="bg-[#58cc02] border-2 border-[#46a302] rounded-2xl p-4 flex items-center justify-between border-b-4 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                        <Check size={20} className="text-white" strokeWidth={4} />
                        <span className="font-extrabold text-[#0b4600] text-lg">
                            {quest.title}
                        </span>
                    </div>
                    <span className="text-xs text-[#1e5812] font-bold ml-7">
                        {quest.subtitle}
                    </span>
                </div>
                <span className="font-extrabold text-white text-lg relative z-10">
                    +{quest.xp} XP
                </span>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            </div>
        );
    }

    // 2. Bonus Quest Style
    if (quest.type === 'bonus') {
        return (
            <div
                onClick={() => onClick(quest)}
                className="bg-[#fbd300] border-2 border-[#cead00] rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_0_#cead00] cursor-pointer border-b-4 relative overflow-hidden active:translate-y-[4px] active:shadow-none active:border-b-2 transition-all"
            >
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                        {getIcon()}
                        <span className="font-extrabold text-[#795700] text-lg">
                            {quest.title}
                        </span>
                    </div>
                    <span className="text-xs text-[#8f6d0f] font-bold ml-7">
                        {quest.subtitle}
                    </span>
                </div>
                <div className="relative z-10 bg-white px-3 py-1.5 rounded-xl border-2 border-[#e5c300] shadow-sm">
                    <span className="font-extrabold text-[#cead00] text-sm">
                        +{quest.xp} XP
                    </span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            </div>
        );
    }

    // 3. Progress Bar Style
    if (quest.uiType === 'progress-bar' && quest.progress) {
        // Calculate progress percentage
        const progressPercent = Math.min(100, Math.round((quest.progress.current / quest.progress.total) * 100));

        return (
            <div
                onClick={() => onClick(quest)}
                className="rounded-2xl p-4 flex flex-col justify-center shadow-[0_4px_0_var(--border-color)] active:translate-y-[4px] active:shadow-none active:border-b-2 transition-all cursor-pointer border-b-4 relative overflow-hidden"
                style={{
                    backgroundColor: quest.colorTheme.bg,
                    borderColor: quest.colorTheme.border,
                    ['--border-color' as any]: quest.colorTheme.border
                }}
            >
                <div className="relative z-10 w-full flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        {getIcon()}
                        <span className="font-extrabold text-lg" style={{ color: quest.colorTheme.text }}>
                            {quest.title}
                        </span>
                    </div>
                    <span className="font-extrabold text-white text-xl">
                        +{quest.xp}
                    </span>
                </div>

                <div className="relative z-10 w-full pl-7 pr-2">
                    <div className="relative h-4 w-full bg-black/20 rounded-full mb-1">
                        <div
                            className="absolute top-0 left-0 h-full bg-white rounded-full border-2 border-transparent"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                        {/* Buddy Head at end of progress (only if progress > 0) */}
                        {progressPercent > 0 && (
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden shadow-sm transform -translate-x-1/2"
                                style={{
                                    left: `${progressPercent}%`,
                                    backgroundColor: quest.colorTheme.bg
                                }}
                            >
                                <img
                                    src={
                                        profile.buddy === "lylah"
                                            ? IMAGES.lylah
                                            : profile.buddy === "ellah"
                                                ? IMAGES.ellah
                                                : IMAGES.olah
                                    }
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <span className="text-xs font-bold" style={{ color: quest.colorTheme.text }}> // Use a darker shade or the text color
                        {quest.progress.current.toLocaleString()} / {quest.progress.total.toLocaleString()}
                    </span>
                </div>
                {/* Glossy effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            </div>
        );
    }

    // 4. Mood Selector Style (Simplified for generic usage if needed, or keeping it specific)
    if (quest.uiType === 'mood-selector') {
        return (
            <div
                onClick={() => onClick(quest)}
                className="rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_0_var(--border-color)] active:translate-y-[4px] active:shadow-none active:border-b-2 transition-all cursor-pointer border-b-4 relative overflow-hidden"
                style={{
                    backgroundColor: quest.colorTheme.bg,
                    borderColor: quest.colorTheme.border,
                    ['--border-color' as any]: quest.colorTheme.border
                }}
            >
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                        {getIcon()}
                        <span className="font-extrabold text-lg" style={{ color: quest.colorTheme.text }}>
                            {quest.title}
                        </span>
                    </div>
                    <span className="text-xs font-bold ml-7" style={{ color: quest.colorTheme.text }}>
                        {quest.subtitle}
                    </span>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <div className="bg-black/10 p-1 rounded-full flex gap-1">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/60 hover:bg-white/40 transition-colors">
                            <span className="text-sm">😔</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#fbd300] border-2 border-[#cead00] flex items-center justify-center shadow-sm transform scale-110 z-10">
                            <span className="text-sm">😐</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/60 hover:bg-white/40 transition-colors">
                            <span className="text-sm">😊</span>
                        </div>
                    </div>
                    <span className="font-extrabold text-white text-xl">
                        +{quest.xp}
                    </span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            </div>
        );
    }

    // Default Simple Style
    return (
        <div
            onClick={() => onClick(quest)}
            className="rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_0_var(--border-color)] active:translate-y-[4px] active:shadow-none active:border-b-2 transition-all cursor-pointer border-b-4 relative overflow-hidden"
            style={{
                backgroundColor: quest.colorTheme.bg,
                borderColor: quest.colorTheme.border,
                ['--border-color' as any]: quest.colorTheme.border
            }}
        >
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                    {getIcon()}
                    <span className="font-extrabold text-lg" style={{ color: quest.colorTheme.text }}>
                        {quest.title}
                    </span>
                </div>
                <span className="text-xs font-bold ml-7" style={{ color: quest.colorTheme.text }}>
                    {quest.subtitle}
                </span>
            </div>
            <span className="font-extrabold text-white text-xl relative z-10">
                +{quest.xp}
            </span>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
        </div>
    );
};
