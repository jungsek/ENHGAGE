import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNavbar } from "@/components/common/BottomNavbar";

export const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-24 overflow-x-hidden w-full main-content-wrapper" style={{ overflowX: 'hidden' }}>
            <div className="max-w-md mx-auto min-h-screen relative bg-white sm:shadow-xl sm:border-x border-gray-100 overflow-x-hidden" style={{ overflowX: 'hidden' }}>
                <Outlet />
            </div>
            <BottomNavbar />
        </div>
    );
};
