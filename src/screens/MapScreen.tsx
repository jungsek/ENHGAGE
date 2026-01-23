import React, { useState, useEffect } from 'react';
import { MapContainerComponent } from '@/components/map/MapContainer';
import { DiscoveryBottomSheet } from '@/components/map/DiscoveryBottomSheet';
import { ActivityFAB } from '@/components/map/ActivityFAB';
import { SportSelectorModal } from '@/components/map/SportSelectorModal';
import { ActivityTelemetryDeck } from '@/components/map/ActivityTelemetryDeck';
import { useMapStore } from '@/store/useMapStore';
import { useGeolocation } from '@/hooks/useGeolocation';
import { Crosshair } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const MapScreen: React.FC = () => {
    const { mode, stopActivity, setUserLocation } = useMapStore();
    const [showSportSelector, setShowSportSelector] = useState(false);
    const [showActivitySummary, setShowActivitySummary] = useState(false);

    // Live location tracking
    const { coordinates, isLoading, permission, error, requestPosition } = useGeolocation();

    // Update store whenever live coordinates change
    useEffect(() => {
        if (coordinates) {
            setUserLocation(coordinates);
        }
    }, [coordinates, setUserLocation]);

    const handleRecenter = () => {
        // Request fresh position and recenter map
        requestPosition();
    };

    const handleStopActivity = () => {
        setShowActivitySummary(true);
        stopActivity();
    };

    return (
        <div className="relative w-full flex-1 bg-gray-100" style={{ height: 'calc(100vh - 90px)', minHeight: '500px' }}>
            {/* Map */}
            <MapContainerComponent />

            {/* Re-center Button */}
            <button
                onClick={handleRecenter}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 border-b-4 active:translate-y-[2px] active:border-b-2 transition-all"
            >
                <Crosshair size={20} className="text-gray-600" />
            </button>

            {/* Geolocation Error Feedback */}
            {(error || permission === 'denied') && (
                <div className="absolute top-4 left-4 right-16 z-20 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded shadow-md text-sm">
                    {error || 'Location permission denied'}
                </div>
            )}

            {/* Discovery Mode UI */}
            {mode === 'discovery' && (
                <>
                    <DiscoveryBottomSheet />
                    <ActivityFAB onClick={() => setShowSportSelector(true)} />
                </>
            )}

            {/* Activity Mode UI */}
            {mode === 'activity' && (
                <ActivityTelemetryDeck onStop={handleStopActivity} />
            )}

            {/* Sport Selector Modal */}
            <SportSelectorModal
                isOpen={showSportSelector}
                onClose={() => setShowSportSelector(false)}
            />

            {/* Activity Summary Modal - simplified for now */}
            {showActivitySummary && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowActivitySummary(false)}
                >
                    <div
                        className="bg-white rounded-3xl p-6 w-full max-w-sm text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-5xl mb-4">🎉</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Activity Complete!</h2>
                        <p className="text-gray-500 mb-6">Great job on your workout!</p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div>
                                <p className="text-2xl font-bold text-[#008080]">12:45</p>
                                <p className="text-xs text-gray-400">Duration</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#008080]">1.2 km</p>
                                <p className="text-xs text-gray-400">Distance</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#FF7F50]">+25</p>
                                <p className="text-xs text-gray-400">Points</p>
                            </div>
                        </div>

                        <Button
                            variant="primary"
                            fullWidth
                            onClick={() => setShowActivitySummary(false)}
                        >
                            Done
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
