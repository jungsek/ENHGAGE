import React from "react";
import { cn } from "@/components/ui/utils";
import { IMAGES } from "@/constants/assets";

export const EnhgageLogo = ({
    className,
    showIcon = true,
    size = "large",
}: {
    className?: string;
    showIcon?: boolean;
    size?: "small" | "large";
}) => (
    <div
        className={cn(
            "flex flex-col items-center justify-center gap-4",
            className,
        )}
    >
        {showIcon && (
            <img
                src={IMAGES.enhgageIcon}
                alt="Enhgage Icon"
                className={cn(
                    "object-contain",
                    size === "large" ? "w-32 h-32" : "w-10 h-10",
                )}
            />
        )}
        <h1
            className={cn(
                "font-feather text-[#00897B] tracking-tighter leading-none",
                size === "large" ? "text-7xl" : "text-xl",
            )}
        >
            E<span className="text-[#1565C0]">NHG</span>AGE
        </h1>
    </div>
);
