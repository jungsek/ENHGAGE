import React from "react";

export const MapScreen: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
            <h1 className="text-2xl font-bold font-feather text-gray-700 mb-4">Your Journey Map</h1>
            <p className="text-gray-500">Explore your progress here.</p>
        </div>
    );
};
