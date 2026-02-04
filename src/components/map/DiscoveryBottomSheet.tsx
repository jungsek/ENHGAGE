import React, { useState } from 'react';
import { motion, PanInfo, useDragControls } from 'motion/react';
import { DateSelector } from './DateSelector';
import { ProgrammeCard } from './ProgrammeCard';
import { getSessionsWithDetails } from '@/constants/programmeData';
import { useMapStore } from '@/store/useMapStore';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import handlebarImage from '@/assets/handlebar.webp';

type SheetState = 'collapsed' | 'half' | 'expanded';

const SHEET_HEIGHTS: Record<SheetState, string> = {
    collapsed: '110px',
    half: '65%',
    expanded: '92%',
};

export const DiscoveryBottomSheet: React.FC = () => {
    const [sheetState, setSheetState] = useState<SheetState>('half');
    const { selectedDate, filters } = useMapStore();
    const navigate = useNavigate();
    const dragControls = useDragControls();

    const sessions = getSessionsWithDetails(selectedDate);

    // Group sessions by start hour
    const groupedByTime = sessions.reduce((acc, item) => {
        const hour = item.session.start_time.split(':')[0] + ':00';
        if (!acc[hour]) acc[hour] = [];
        acc[hour].push(item);
        return acc;
    }, {} as Record<string, typeof sessions>);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const velocity = info.velocity.y;
        const offset = info.offset.y;

        if (velocity < -500 || offset < -100) {
            // Swiped up
            if (sheetState === 'collapsed') setSheetState('half');
            else if (sheetState === 'half') setSheetState('expanded');
        } else if (velocity > 500 || offset > 100) {
            // Swiped down
            if (sheetState === 'expanded') setSheetState('half');
            else if (sheetState === 'half') setSheetState('collapsed');
        }
    };

    const activeFiltersCount = (filters.pillarId ? 1 : 0) + (filters.maxDistance ? 1 : 0);

    return (
        <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl z-20 border-t-2 border-gray-200 flex flex-col"
            animate={{ height: SHEET_HEIGHTS[sheetState] }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
        >
            {/* Handle Bar */}
            <div
                className="h-10 flex-shrink-0 flex justify-center items-center cursor-grab active:cursor-grabbing"
                onPointerDown={(e) => dragControls.start(e)}
            >
                <img src={handlebarImage} alt="Drag handle" className="w-12 h-auto" />
            </div>

            {/* Filter Row */}
            <div className="px-4 flex items-center gap-2 overflow-x-auto">
                <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-xl text-sm font-bold text-gray-600 border-2 border-gray-200 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all">
                    <SlidersHorizontal size={16} />
                    {activeFiltersCount > 0 && (
                        <span className="bg-[#008080] text-white text-xs px-1.5 rounded-full">{activeFiltersCount}</span>
                    )}
                </button>

                <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-xl text-sm font-bold text-gray-600 border-2 border-gray-200 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all whitespace-nowrap">
                    Sort by <ChevronDown size={14} />
                </button>

                <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-xl text-sm font-bold text-gray-600 border-2 border-gray-200 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all whitespace-nowrap">
                    Pillar <ChevronDown size={14} />
                </button>

                <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-xl text-sm font-bold text-gray-600 border-2 border-gray-200 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all whitespace-nowrap">
                    Distance <ChevronDown size={14} />
                </button>
            </div>

            {/* Spacer between filters and date selector */}
            <div className="h-4" />

            {/* Date Selector - Only visible when not collapsed */}
            {sheetState !== 'collapsed' && (
                <div className="px-4">
                    <DateSelector />
                </div>
            )}

            {/* Spacer between date selector and programs */}
            {sheetState !== 'collapsed' && <div className="h-4" />}

            {/* Programme List - Only visible when not collapsed */}
            {sheetState !== 'collapsed' && (
                <div className="flex-1 min-h-0 overflow-y-auto px-4">
                    {sessions.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            <p className="font-bold">No programmes found</p>
                            <p className="text-sm">Try adjusting your filters or date</p>
                        </div>
                    ) : (
                        <>
                            {Object.entries(groupedByTime).map(([time, items]) => (
                                <div key={time} className="mb-4">
                                    {/* Time Header */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-bold text-gray-400 uppercase">{time}</span>
                                        <div className="flex-1 h-px bg-gray-200" />
                                    </div>

                                    {/* Programme Cards */}
                                    <div className="space-y-3">
                                        {items.map(({ session, programme, venue, pillar }) => (
                                            programme && venue && pillar && (
                                                <ProgrammeCard
                                                    key={session.id}
                                                    programme={programme}
                                                    venue={venue}
                                                    pillar={pillar}
                                                    session={session}
                                                    onClick={() => navigate(`/app/map/programme/${programme.id}?session=${session.id}`)}
                                                />
                                            )
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {/* Bottom spacer for navbar clearance */}
                            <div className="h-24" />
                        </>
                    )}
                </div>
            )}
        </motion.div>
    );
};
