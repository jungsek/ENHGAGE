
import { cn } from "@/components/ui/utils";

export const NavItem = ({
    icon: Icon,

    active,
}: {
    icon: any;

    active?: boolean;
}) => (
    <button className="flex flex-col items-center gap-1 p-2 w-full">
        <div
            className={cn(
                "rounded-xl px-4 py-1",
                active ? "bg-[#E0F2F1]" : "",
            )}
        >
            <Icon
                size={28}
                className={active ? "text-[#00897B]" : "text-gray-400"}
                strokeWidth={active ? 3 : 2.5}
            />
        </div>
    </button>
);
