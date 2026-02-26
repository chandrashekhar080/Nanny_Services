import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showInfo?: boolean;
    startIndex?: number;
    endIndex?: number;
    totalItems?: number;
    className?: string;
}

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    showInfo = false,
    startIndex,
    endIndex,
    totalItems,
    className = "",
}: PaginationProps): JSX.Element => {
    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        
        if (totalPages <= 3) {
            // Show all pages if 3 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Determine what pages to show based on current page position
            if (currentPage <= 2) {
                // Near the beginning: show 1, 2, ..., last
                pages.push(1, 2);
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 1) {
                // Near the end: show 1, ..., last-1, last
                pages.push(1);
                pages.push("...");
                pages.push(totalPages - 1);
                pages.push(totalPages);
            } else {
                // In the middle: show previous, current, ..., last
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push("...");
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    if (totalPages <= 1) {
        return <></>;
    }

    return (
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-200 ${className}`}>
            {showInfo && startIndex !== undefined && endIndex !== undefined && totalItems !== undefined && (
                <div className="[font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description text-center sm:text-left">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, totalItems)} of{" "}
                    {totalItems} entries
                </div>
            )}
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="[font-family:'Poppins',Helvetica] p-2"
                >
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-1">
                    {getPageNumbers().map((page, index) => {
                        if (page === "...") {
                            return (
                                <span
                                    key={`dots-${index}`}
                                    className="[font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description px-2"
                                >
                                    ...
                                </span>
                            );
                        }
                        const pageNum = page as number;
                        return (
                            <Button
                                key={pageNum}
                                variant={currentPage === pageNum ? "default" : "outline"}
                                size="sm"
                                onClick={() => onPageChange(pageNum)}
                                className={`[font-family:'Poppins',Helvetica] text-xs sm:text-sm min-w-[32px] h-8 ${
                                    currentPage === pageNum
                                        ? "bg-primary-1 text-white hover:bg-primary-1"
                                        : ""
                                }`}
                            >
                                {pageNum}
                            </Button>
                        );
                    })}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="[font-family:'Poppins',Helvetica] p-2"
                >
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

