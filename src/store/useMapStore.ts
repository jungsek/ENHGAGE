import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserBooking } from '@/constants/programmeData';

export type MapMode = 'discovery' | 'activity';
export type ActivityType = 'walk' | 'run' | 'cycle';
export type SortBy = 'distance' | 'time' | 'popularity';

interface Filters {
    sortBy: SortBy;
    pillarId: number | null;
    maxDistance: number | null; // km
}

interface ActivityState {
    type: ActivityType;
    isActive: boolean;
    isPaused: boolean;
    startTime: number | null;
    elapsedTime: number; // seconds
    distance: number; // km
    route: [number, number][]; // [lat, lng] points
}

interface MapState {
    // Mode
    mode: MapMode;
    setMode: (mode: MapMode) => void;

    // Discovery
    selectedDate: string;
    setSelectedDate: (date: string) => void;
    filters: Filters;
    setFilters: (filters: Partial<Filters>) => void;
    resetFilters: () => void;
    selectedProgrammeId: string | null;
    setSelectedProgrammeId: (id: string | null) => void;

    // Activity
    activity: ActivityState;
    startActivity: (type: ActivityType) => void;
    pauseActivity: () => void;
    resumeActivity: () => void;
    stopActivity: () => void;
    updateActivityRoute: (point: [number, number]) => void;
    updateActivityTime: (elapsed: number) => void;
    updateActivityDistance: (distance: number) => void;

    // Bookings
    bookings: UserBooking[];
    addBooking: (sessionId: string) => void;
    cancelBooking: (bookingId: string) => void;

    // User Location (mock for dev)
    userLocation: [number, number];
    setUserLocation: (loc: [number, number]) => void;
}

const DEFAULT_FILTERS: Filters = {
    sortBy: 'distance',
    pillarId: null,
    maxDistance: null,
};

const DEFAULT_ACTIVITY: ActivityState = {
    type: 'walk',
    isActive: false,
    isPaused: false,
    startTime: null,
    elapsedTime: 0,
    distance: 0,
    route: [],
};

// Default location: Bishan (Central)
const DEFAULT_LOCATION: [number, number] = [1.3526, 103.8352];

const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const useMapStore = create<MapState>()(
    persist(
        (set) => ({
            // Mode
            mode: 'discovery',
            setMode: (mode) => set({ mode }),

            // Discovery
            selectedDate: getTodayString(),
            setSelectedDate: (date) => set({ selectedDate: date }),
            filters: DEFAULT_FILTERS,
            setFilters: (newFilters) => set((state) => ({
                filters: { ...state.filters, ...newFilters }
            })),
            resetFilters: () => set({ filters: DEFAULT_FILTERS }),
            selectedProgrammeId: null,
            setSelectedProgrammeId: (id) => set({ selectedProgrammeId: id }),

            // Activity
            activity: DEFAULT_ACTIVITY,
            startActivity: (type) => set({
                mode: 'activity',
                activity: {
                    ...DEFAULT_ACTIVITY,
                    type,
                    isActive: true,
                    startTime: Date.now()
                }
            }),
            pauseActivity: () => set((state) => ({
                activity: { ...state.activity, isPaused: true }
            })),
            resumeActivity: () => set((state) => ({
                activity: { ...state.activity, isPaused: false }
            })),
            stopActivity: () => set({
                mode: 'discovery',
                activity: DEFAULT_ACTIVITY
            }),
            updateActivityRoute: (point) => set((state) => ({
                activity: { ...state.activity, route: [...state.activity.route, point] }
            })),
            updateActivityTime: (elapsed) => set((state) => ({
                activity: { ...state.activity, elapsedTime: elapsed }
            })),
            updateActivityDistance: (distance) => set((state) => ({
                activity: { ...state.activity, distance }
            })),

            // Bookings
            bookings: [],
            addBooking: (sessionId) => set((state) => {
                if (state.bookings.some(b => b.session_id === sessionId)) return state;
                return {
                    bookings: [...state.bookings, {
                        id: `b${Date.now()}`,
                        session_id: sessionId,
                        booked_at: new Date().toISOString(),
                        status: 'confirmed' as const,
                    }]
                };
            }),
            cancelBooking: (bookingId) => set((state) => ({
                bookings: state.bookings.map(b =>
                    b.id === bookingId ? { ...b, status: 'cancelled' as const } : b
                )
            })),

            // User Location
            userLocation: DEFAULT_LOCATION,
            setUserLocation: (loc) => set({ userLocation: loc }),
        }),
        {
            name: 'enhgage-map-store',
            partialize: (state) => ({
                bookings: state.bookings,
            }),
        }
    )
);
