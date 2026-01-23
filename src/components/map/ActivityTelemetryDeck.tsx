import React, { useEffect, useState } from 'react';
import { Pause, Play, Square } from 'lucide-react';
import { useMapStore } from '@/store/useMapStore';

interface ActivityTelemetryDeckProps {
    onStop: () => void;
}

const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const formatPace = (distanceKm: number, seconds: number): string => {
    if (distanceKm === 0 || seconds === 0) return '--:--';
    const paceSecondsPerKm = seconds / distanceKm;
    const mins = Math.floor(paceSecondsPerKm / 60);
    const secs = Math.floor(paceSecondsPerKm % 60);
    return `${mins}'${secs.toString().padStart(2, '0')}"`;
};

export const ActivityTelemetryDeck: React.FC<ActivityTelemetryDeckProps> = ({ onStop }) => {
    const { activity, pauseActivity, resumeActivity, updateActivityTime } = useMapStore();
    const [elapsed, setElapsed] = useState(activity.elapsedTime);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (activity.isActive && !activity.isPaused && activity.startTime) {
            interval = setInterval(() => {
                const newElapsed = Math.floor((Date.now() - activity.startTime!) / 1000);
                setElapsed(newElapsed);
                updateActivityTime(newElapsed);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [activity.isActive, activity.isPaused, activity.startTime]);

    const activityLabels: Record<string, string> = {
        walk: 'Walk',
        run: 'Run',
        cycle: 'Cycle',
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 rounded-t-3xl z-20 p-6 pb-10 text-white" style={{ backgroundColor: '#9f9f9fff' }}>
            {/* Activity Type */}
            <div className="text-center mb-4">
                <span className="text-lg font-bold text-white/80">{activityLabels[activity.type]}</span>
            </div>

            {/* Telemetry Row */}
            <div className="flex justify-around mb-8">
                <div className="text-center">
                    <p className="text-3xl font-extrabold font-mono">{formatTime(elapsed)}</p>
                    <p className="text-xs text-white/60 uppercase mt-1">Time</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-extrabold font-mono text-[#FF7F50]">
                        {formatPace(activity.distance, elapsed)}
                    </p>
                    <p className="text-xs text-white/60 uppercase mt-1">Avg. Pace</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-extrabold font-mono">{activity.distance.toFixed(2)}</p>
                    <p className="text-xs text-white/60 uppercase mt-1">km</p>
                </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center gap-6">
                {/* Pause/Resume Button */}
                <button
                    onClick={() => activity.isPaused ? resumeActivity() : pauseActivity()}
                    className="w-16 h-16 bg-[#00897B] rounded-full flex items-center justify-center border-b-4 border-[#3a3a3a] active:translate-y-[4px] active:border-b-0 transition-all"
                >
                    {activity.isPaused ? (
                        <Play size={28} className="text-white ml-1" fill="white" />
                    ) : (
                        <Pause size={28} className="text-white" />
                    )}
                </button>

                {/* Stop Button */}
                <button
                    onClick={onStop}
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center border-b-4 border-red-700 active:translate-y-[4px] active:border-b-0 transition-all"
                >
                    <Square size={24} className="text-white" fill="white" />
                </button>
            </div>
        </div>
    );
};
