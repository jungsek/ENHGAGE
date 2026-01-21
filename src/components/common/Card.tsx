import React from "react";
import { cn } from "@/components/ui/utils";
import { motion, HTMLMotionProps } from "motion/react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
    selected?: boolean;
    onClick?: () => void;
    variant?: "default" | "outline";
    children?: React.ReactNode;
}

export const Card = ({
    className,
    selected = false,
    onClick,
    children,
    variant = "default",
    ...props
}: CardProps) => {
    // Interactive card styles (button-like behavior if onClick is present)
    const isInteractive = !!onClick;

    return (
        <motion.div
            onClick={onClick}
            whileTap={isInteractive ? { scale: 0.95 } : undefined}
            className={cn(
                "rounded-2xl border-2 transition-all duration-200 relative overflow-hidden",
                // Base styles
                "bg-white border-gray-200",
                // Interactive behavior
                isInteractive && "cursor-pointer active:scale-[0.98]",
                // Unselected interactive state
                !selected && isInteractive && "border-b-4 hover:border-gray-300 active:border-b-2 active:translate-y-[2px]",
                // Selected state (Duolingo style)
                selected && "border-[#00897B] bg-[#E0F2F1] border-b-4 active:border-b-2 active:translate-y-[2px]",
                // Static state
                !isInteractive && "border-b-2",
                className
            )}
            {...props}
        >
            {/* Glossy highlight for premium feel */}
            {
                selected && (
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50" />
                )
            }
            {children}
        </motion.div >
    );
};
