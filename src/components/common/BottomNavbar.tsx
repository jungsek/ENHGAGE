import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "@/constants/assets";

type NavItem = {
    path: string;
    icon: string;
    label: string; // Used for aria-label or tooltip if needed, though Duolingo usually just shows icons
};

export const BottomNavbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems: NavItem[] = [
        { path: "/app/home", icon: IMAGES.icons.home, label: "Home" },
        { path: "/app/learn", icon: IMAGES.icons.learn, label: "Learn" },
        { path: "/app/map", icon: IMAGES.icons.map, label: "Map" },
        { path: "/app/social", icon: IMAGES.icons.social, label: "Social" },
        { path: "/app/rewards", icon: IMAGES.icons.rewards, label: "Rewards" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-2 py-2 pb-safe z-50 overflow-hidden">
            <div className="flex justify-between items-center max-w-md mx-auto px-2">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);

                    return (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                relative p-2 rounded-xl transition-transform active:scale-95
                ${isActive ? "bg-blue-50 border-2 border-blue-100" : "hover:bg-gray-50"}
              `}
                            aria-label={item.label}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className={`
                  w-8 h-8 transition-all
                  ${isActive ? "opacity-100 scale-110" : "opacity-40 grayscale"}
                `}
                            />
                            {isActive && (
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
