import React from "react";
import { cn } from "@/components/ui/utils";
import { motion, HTMLMotionProps } from "motion/react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    uppercase?: boolean;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            fullWidth = false,
            leftIcon,
            rightIcon,
            uppercase = true,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center font-din font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none relative";

        const variants = {
            primary:
                "bg-[#00897B] text-white border-[#00695C] border-b-4 active:border-b-0 active:translate-y-[4px] hover:bg-[#26A69A]",
            secondary:
                "bg-[#58cc02] text-white border-[#46a302] border-b-4 active:border-b-0 active:translate-y-[4px] hover:bg-[#61e002]",
            outline:
                "bg-white text-gray-700 border-2 border-gray-200 border-b-4 active:border-b-0 active:translate-y-[4px] hover:bg-gray-50",
            ghost: "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-0 shadow-none",
            danger: "bg-red-500 text-white border-red-600 border-b-4 active:border-b-0 active:translate-y-[4px] hover:bg-red-400",
        };

        const sizes = {
            sm: "h-10 text-xs rounded-lg px-4",
            md: "h-12 text-sm rounded-xl px-6",
            lg: "h-14 text-base rounded-2xl px-8",
            icon: "h-12 w-12 rounded-xl p-0 flex items-center justify-center",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    uppercase && "uppercase",
                    className
                )}
                {...props}
            >
                {leftIcon && (
                    <div className="absolute left-4 flex items-center justify-center">
                        {leftIcon}
                    </div>
                )}
                {children}
                {rightIcon && (
                    <div className="absolute right-4 flex items-center justify-center">
                        {rightIcon}
                    </div>
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
