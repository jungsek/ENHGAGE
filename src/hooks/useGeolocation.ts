import { useState, useEffect, useCallback, useRef } from 'react';

export type GeolocationPermission = 'granted' | 'denied' | 'prompt' | 'unavailable';

export interface GeolocationState {
    coordinates: [number, number] | null;
    accuracy: number | null;
    heading: number | null;
    speed: number | null;
    timestamp: number | null;
    isLoading: boolean;
    error: string | null;
    permission: GeolocationPermission;
}

interface UseGeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

const DEFAULT_OPTIONS: UseGeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
};

export function useGeolocation(options: UseGeolocationOptions = {}) {
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

    const [state, setState] = useState<GeolocationState>({
        coordinates: null,
        accuracy: null,
        heading: null,
        speed: null,
        timestamp: null,
        isLoading: true,
        error: null,
        permission: 'prompt',
    });

    const watchIdRef = useRef<number | null>(null);

    // Check if geolocation is available
    const isSupported = typeof navigator !== 'undefined' && 'geolocation' in navigator;

    // Success handler for position updates
    const handleSuccess = useCallback((position: GeolocationPosition) => {
        setState((prev) => ({
            ...prev,
            coordinates: [position.coords.latitude, position.coords.longitude],
            accuracy: position.coords.accuracy,
            heading: position.coords.heading,
            speed: position.coords.speed,
            timestamp: position.timestamp,
            isLoading: false,
            error: null,
            permission: 'granted',
        }));
    }, []);

    // Error handler
    const handleError = useCallback((error: GeolocationPositionError) => {
        let errorMessage: string;
        let permission: GeolocationPermission = state.permission;

        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = 'Location access denied';
                permission = 'denied';
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = 'Location unavailable';
                break;
            case error.TIMEOUT:
                errorMessage = 'Location request timed out';
                break;
            default:
                errorMessage = 'Unknown location error';
        }

        setState((prev) => ({
            ...prev,
            isLoading: false,
            error: errorMessage,
            permission,
        }));
    }, [state.permission]);

    // Start watching position
    const startWatching = useCallback(() => {
        if (!isSupported) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: 'Geolocation not supported',
                permission: 'unavailable',
            }));
            return;
        }

        setState((prev) => ({ ...prev, isLoading: true, error: null }));

        watchIdRef.current = navigator.geolocation.watchPosition(
            handleSuccess,
            handleError,
            {
                enableHighAccuracy: mergedOptions.enableHighAccuracy,
                timeout: mergedOptions.timeout,
                maximumAge: mergedOptions.maximumAge,
            }
        );
    }, [isSupported, handleSuccess, handleError, mergedOptions.enableHighAccuracy, mergedOptions.timeout, mergedOptions.maximumAge]);

    // Stop watching position
    const stopWatching = useCallback(() => {
        if (watchIdRef.current !== null) {
            navigator.geolocation.clearWatch(watchIdRef.current);
            watchIdRef.current = null;
        }
    }, []);

    // Request a single position update (useful for recenter)
    const requestPosition = useCallback(() => {
        if (!isSupported) return;

        navigator.geolocation.getCurrentPosition(
            handleSuccess,
            handleError,
            {
                enableHighAccuracy: mergedOptions.enableHighAccuracy,
                timeout: mergedOptions.timeout,
                maximumAge: 0,
            }
        );
    }, [isSupported, handleSuccess, handleError, mergedOptions.enableHighAccuracy, mergedOptions.timeout]);

    // Check permission status (where supported)
    useEffect(() => {
        if (!isSupported) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                permission: 'unavailable',
            }));
            return;
        }

        // Check permissions API if available
        if ('permissions' in navigator) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then((result) => {
                    setState((prev) => ({
                        ...prev,
                        permission: result.state as GeolocationPermission,
                    }));

                    // Listen for permission changes
                    result.onchange = () => {
                        setState((prev) => ({
                            ...prev,
                            permission: result.state as GeolocationPermission,
                        }));
                    };
                })
                .catch(() => {
                    // Permissions API not fully supported, will determine on first request
                });
        }
    }, [isSupported]);

    // Start watching on mount
    useEffect(() => {
        startWatching();

        return () => {
            stopWatching();
        };
    }, [startWatching, stopWatching]);

    return {
        ...state,
        isSupported,
        startWatching,
        stopWatching,
        requestPosition,
    };
}
