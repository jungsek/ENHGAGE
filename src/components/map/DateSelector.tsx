import React from 'react';
import { useMapStore } from '@/store/useMapStore';

const DATES = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
        dateString: date.toISOString().split('T')[0],
        dayName: i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
    };
});

export const DateSelector: React.FC = () => {
    const { selectedDate, setSelectedDate } = useMapStore();

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {DATES.map((d) => {
                const isSelected = selectedDate === d.dateString;
                return (
                    <button
                        key={d.dateString}
                        onClick={() => setSelectedDate(d.dateString)}
                        className={`flex flex-col items-center min-w-[60px] px-3 py-2 rounded-xl border-2 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all ${isSelected
                                ? 'bg-[#E0F2F1] text-[#008080] border-[#008080]'
                                : 'bg-gray-100 text-gray-600 border-gray-200 border-b-gray-300 hover:bg-gray-200'
                            }`}
                    >
                        <span className="text-xs font-bold uppercase">{d.dayName}</span>
                        <span className="text-lg font-extrabold">{d.dayNum}</span>
                        <span className="text-[10px] opacity-75">{d.month}</span>
                    </button>
                );
            })}
        </div>
    );
};
