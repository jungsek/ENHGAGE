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
            "flex flex-col items-center justify-center gap-2",
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
        <img
            src={IMAGES.enhgageFullLogo}
            alt="ENHGAGE Logo"
            className={cn(
                "object-contain",
                size === "large" ? "h-16 -mt-6" : "h-6 -mt-1",
            )}
        />
    </div>
);
