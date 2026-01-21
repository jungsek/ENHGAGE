import React from "react";

export const ProfileScreen: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
            <h1 className="text-2xl font-bold font-feather text-gray-700 mb-4">My Profile</h1>
            <p className="text-gray-500">Manage your account and settings.</p>
        </div>
    );
};
