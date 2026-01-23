import React from 'react';
import { useMapStore } from '@/store/useMapStore';
import { IMAGES } from '@/constants/assets';

interface ActivityFABProps {
    onClick: () => void;
}

export const ActivityFAB: React.FC<ActivityFABProps> = ({ onClick }) => {
    const { mode } = useMapStore();

    if (mode === 'activity') return null;

    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 border-b-4 active:translate-y-[2px] active:border-b-2 transition-all"
        >
            <img src={IMAGES.icons.dumbbell} alt="Activity" className="w-6 h-6" />
        </button>
    );
};
