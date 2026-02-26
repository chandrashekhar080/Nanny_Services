import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

export interface NavigationItem {
    label: string;
    id: string;
    isDelete?: boolean;
}

interface SidebarNavigationProps {
    items: NavigationItem[];
    activeId: string;
    onItemClick: (id: string) => void;
    className?: string;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
    items,
    activeId,
    onItemClick,
    className = "",
}) => {
    return (
        <nav className={`flex w-full lg:w-[290px] flex-shrink-0 lg:sticky lg:top-4 lg:self-start lg:z-10 ${className}`}>
            <Card className="w-full shadow-[0px_0px_4px_#00000040]">
                <CardContent className="p-4 sm:p-5">
                    <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible lg:overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {items.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => onItemClick(item.id)}
                                    className={`flex h-10 items-center justify-between px-3 sm:px-4 py-[9px] rounded-lg transition-colors flex-shrink-0 ${
                                        isActive
                                            ? "bg-primary-12 text-primary-1"
                                            : "bg-white hover:bg-gray-50"
                                    }`}
                                >
                                    <span
                                        className={`text-sm leading-5 truncate min-w-0 [font-family:'Poppins',Helvetica] ${
                                            isActive
                                                ? "font-medium text-primary-1"
                                                : item.isDelete
                                                    ? "font-normal text-primary-1"
                                                    : "font-normal text-[#050505]"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                    {!item.isDelete && <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 lg:ml-0 flex-shrink-0" />}
                                </button>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </nav>
    );
};

