import { cn } from "@/components/ui/utils";
import { TIME_FILTERS } from "@/constants/socialData";
import { TimeFilter } from "@/types";
import { useAppStore } from "@/store/useAppStore";

export const TimeFilterPills = () => {
    const { activeTimeFilter, setTimeFilter } = useAppStore();

    return (
        <div className="px-3 mb-4 w-full">
            <div className="flex items-center gap-0.5 bg-gray-100 p-1 rounded-xl">
                {TIME_FILTERS.map((filter) => {
                    const isActive = activeTimeFilter === filter.id;
                    return (
                        <button
                            key={filter.id}
                            onClick={() => setTimeFilter(filter.id as TimeFilter)}
                            className={cn(
                                "flex-1 text-xs font-din font-bold py-1.5 px-2 rounded-lg transition-all",
                                isActive
                                    ? "bg-white text-[#00897B] shadow-sm"
                                    : "text-gray-400 hover:text-gray-600"
                            )}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
