import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Pagination } from "../../../../sections/Common/Pagination";

interface LoginActivityItem {
    id: string;
    dateTime: string;
    device: string;
    os: string;
    browser: string;
    ip: string;
    location: string;
    status: "success" | "failed";
}

const mockLoginActivities: LoginActivityItem[] = [
    {
        id: "1",
        dateTime: "2024-01-15 14:30:25",
        device: "Desktop",
        os: "Windows 11",
        browser: "Chrome 120.0",
        ip: "192.168.1.100",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "2",
        dateTime: "2024-01-14 09:15:42",
        device: "Mobile",
        os: "iOS 17.2",
        browser: "Safari 17.0",
        ip: "192.168.1.101",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "3",
        dateTime: "2024-01-13 18:45:10",
        device: "Desktop",
        os: "Windows 10",
        browser: "Chrome 119.0",
        ip: "203.0.113.45",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "4",
        dateTime: "2024-01-12 11:20:33",
        device: "Tablet",
        os: "iPadOS 17.1",
        browser: "Safari 17.0",
        ip: "192.168.1.102",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "5",
        dateTime: "2024-01-11 16:55:18",
        device: "Desktop",
        os: "macOS 14.2",
        browser: "Firefox 121.0",
        ip: "192.168.1.103",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "6",
        dateTime: "2024-01-10 08:30:55",
        device: "Mobile",
        os: "Android 14",
        browser: "Chrome Mobile 120.0",
        ip: "198.51.100.25",
        location: "Dallas, Texas, US",
        status: "success",
    },
    {
        id: "7",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "8",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "9",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "10",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "1",
        dateTime: "2024-01-15 14:30:25",
        device: "Desktop",
        os: "Windows 11",
        browser: "Chrome 120.0",
        ip: "192.168.1.100",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "2",
        dateTime: "2024-01-14 09:15:42",
        device: "Mobile",
        os: "iOS 17.2",
        browser: "Safari 17.0",
        ip: "192.168.1.101",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "3",
        dateTime: "2024-01-13 18:45:10",
        device: "Desktop",
        os: "Windows 10",
        browser: "Chrome 119.0",
        ip: "203.0.113.45",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "4",
        dateTime: "2024-01-12 11:20:33",
        device: "Tablet",
        os: "iPadOS 17.1",
        browser: "Safari 17.0",
        ip: "192.168.1.102",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "5",
        dateTime: "2024-01-11 16:55:18",
        device: "Desktop",
        os: "macOS 14.2",
        browser: "Firefox 121.0",
        ip: "192.168.1.103",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "6",
        dateTime: "2024-01-10 08:30:55",
        device: "Mobile",
        os: "Android 14",
        browser: "Chrome Mobile 120.0",
        ip: "198.51.100.25",
        location: "Dallas, Texas, US",
        status: "success",
    },
    {
        id: "7",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "8",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "9",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "10",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "1",
        dateTime: "2024-01-15 14:30:25",
        device: "Desktop",
        os: "Windows 11",
        browser: "Chrome 120.0",
        ip: "192.168.1.100",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "2",
        dateTime: "2024-01-14 09:15:42",
        device: "Mobile",
        os: "iOS 17.2",
        browser: "Safari 17.0",
        ip: "192.168.1.101",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "3",
        dateTime: "2024-01-13 18:45:10",
        device: "Desktop",
        os: "Windows 10",
        browser: "Chrome 119.0",
        ip: "203.0.113.45",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "4",
        dateTime: "2024-01-12 11:20:33",
        device: "Tablet",
        os: "iPadOS 17.1",
        browser: "Safari 17.0",
        ip: "192.168.1.102",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "5",
        dateTime: "2024-01-11 16:55:18",
        device: "Desktop",
        os: "macOS 14.2",
        browser: "Firefox 121.0",
        ip: "192.168.1.103",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "6",
        dateTime: "2024-01-10 08:30:55",
        device: "Mobile",
        os: "Android 14",
        browser: "Chrome Mobile 120.0",
        ip: "198.51.100.25",
        location: "Dallas, Texas, US",
        status: "success",
    },
    {
        id: "7",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "8",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "9",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "10",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "1",
        dateTime: "2024-01-15 14:30:25",
        device: "Desktop",
        os: "Windows 11",
        browser: "Chrome 120.0",
        ip: "192.168.1.100",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "2",
        dateTime: "2024-01-14 09:15:42",
        device: "Mobile",
        os: "iOS 17.2",
        browser: "Safari 17.0",
        ip: "192.168.1.101",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "3",
        dateTime: "2024-01-13 18:45:10",
        device: "Desktop",
        os: "Windows 10",
        browser: "Chrome 119.0",
        ip: "203.0.113.45",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "4",
        dateTime: "2024-01-12 11:20:33",
        device: "Tablet",
        os: "iPadOS 17.1",
        browser: "Safari 17.0",
        ip: "192.168.1.102",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "5",
        dateTime: "2024-01-11 16:55:18",
        device: "Desktop",
        os: "macOS 14.2",
        browser: "Firefox 121.0",
        ip: "192.168.1.103",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "6",
        dateTime: "2024-01-10 08:30:55",
        device: "Mobile",
        os: "Android 14",
        browser: "Chrome Mobile 120.0",
        ip: "198.51.100.25",
        location: "Dallas, Texas, US",
        status: "success",
    },
    {
        id: "7",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "8",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
    {
        id: "9",
        dateTime: "2024-01-09 22:15:40",
        device: "Desktop",
        os: "Windows 11",
        browser: "Edge 120.0",
        ip: "203.0.113.46",
        location: "Unknown Location",
        status: "failed",
    },
    {
        id: "10",
        dateTime: "2024-01-08 13:40:22",
        device: "Desktop",
        os: "Linux Ubuntu 22.04",
        browser: "Chrome 120.0",
        ip: "192.168.1.104",
        location: "Austin, Texas, US",
        status: "success",
    },
];

export const LoginActivity = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [dateTimeFilter, setDateTimeFilter] = useState<Date | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filter and search logic
    const filteredActivities = useMemo(() => {
        let filtered = mockLoginActivities;

        // Search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (activity) =>
                    activity.device.toLowerCase().includes(query) ||
                    activity.os.toLowerCase().includes(query) ||
                    activity.browser.toLowerCase().includes(query) ||
                    activity.ip.toLowerCase().includes(query) ||
                    activity.location.toLowerCase().includes(query) ||
                    activity.dateTime.toLowerCase().includes(query)
            );
        }

        // Status filter
        if (statusFilter !== "all") {
            filtered = filtered.filter((activity) => activity.status === statusFilter);
        }

        // Date Time filter
        if (dateTimeFilter) {
            const filterDate = dateTimeFilter;
            filtered = filtered.filter((activity) => {
                const activityDate = new Date(activity.dateTime);
                // Compare year, month, day, hour, and minute
                return (
                    activityDate.getFullYear() === filterDate.getFullYear() &&
                    activityDate.getMonth() === filterDate.getMonth() &&
                    activityDate.getDate() === filterDate.getDate() &&
                    activityDate.getHours() === filterDate.getHours() &&
                    activityDate.getMinutes() === filterDate.getMinutes()
                );
            });
        }

        return filtered;
    }, [searchQuery, statusFilter, dateTimeFilter]);

    // Pagination logic
    const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedActivities = filteredActivities.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    const handleFilterChange = () => {
        setCurrentPage(1);
    };

    const formatDateTime = (dateTime: string) => {
        const date = new Date(dateTime);
        return date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="w-full px-2 sm:px-0">
            <style>{`
                /* DatePicker Custom Styles to match Input */
                .login-activity-datepicker .rs-input-group {
                    border-radius: 9999px !important;
                    border: 1px solid hsl(var(--input)) !important;
                    background-color: transparent !important;
                    padding: 0.25rem 0.75rem !important;
                    font-size: 0.875rem !important;
                    font-family: 'Poppins', Helvetica !important;
                    height: 36px !important;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
                    transition: all 0.2s !important;
                    outline: none !important;
                    color: hsl(var(--description)) !important;
                }
                .login-activity-datepicker .rs-picker-toggle {
                    border-radius: 9999px !important;
                    border: 1px solid hsl(var(--input)) !important;
                    background-color: transparent !important;
                    padding: 0.25rem 0.75rem !important;
                    font-size: 0.875rem !important;
                    font-family: 'Poppins', Helvetica !important;
                    height: 36px !important;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
                    transition: all 0.2s !important;
                    outline: none !important;
                }
                .login-activity-datepicker .rs-picker-toggle:hover {
                    border-color: hsl(var(--input)) !important;
                }
                .login-activity-datepicker .rs-picker-toggle:focus,
                .login-activity-datepicker .rs-picker-toggle:focus-visible,
                .login-activity-datepicker .rs-picker-toggle:active,
                .login-activity-datepicker .rs-picker-toggle.rs-picker-toggle-active {
                    outline: none !important;
                    box-shadow: 0 0 0 1px hsl(var(--ring)) !important;
                    border-color: hsl(var(--input)) !important;
                }
                .login-activity-datepicker .rs-picker-toggle::before,
                .login-activity-datepicker .rs-picker-toggle::after {
                    display: none !important;
                }
                .login-activity-datepicker .rs-picker-toggle-value {
                    font-family: 'Poppins', Helvetica !important;
                    font-size: 0.875rem !important;
                }
                .login-activity-datepicker .rs-picker-toggle-placeholder {
                    font-family: 'Poppins', Helvetica !important;
                    font-size: 0.875rem !important;
                    color: hsl(var(--muted-foreground)) !important;
                }
            `}</style>
            <h3 className="text-base sm:text-lg pb-3 text-heading font-semibold [font-family:'Poppins',Helvetica]">
                Login Activity
            </h3>
            {/* Filters and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-description w-4 h-4 z-10" />
                    <Input
                        type="text"
                        placeholder="Search Anything..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            handleFilterChange();
                        }}
                        className="pl-10 rounded-full [font-family:'Poppins',Helvetica] text-sm w-full text-description placeholder:text-description"
                    />
                </div>

                {/* Status Filter */}
                <div className="flex-1">
                    <Select
                        value={statusFilter}
                        onValueChange={(value) => {
                            setStatusFilter(value);
                            handleFilterChange();
                        }}
                    >
                        <SelectTrigger className="w-full rounded-full [font-family:'Poppins',Helvetica] text-sm text-description">
                            <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="success">Success</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Date Time Filter */}
                <div className="flex-1">
                    <DatePicker
                        value={dateTimeFilter}
                        onChange={(value: Date | null) => {
                            setDateTimeFilter(value);
                            handleFilterChange();
                        }}
                        format="MM/dd/yyyy hh:mm aa"
                        showMeridian
                        placeholder="Select Date & Time"
                        style={{
                            width: "100%",
                        }}
                        className="login-activity-datepicker w-full"
                    />
                </div>
            </div>
            <Card className="bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
                <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col gap-4">


                        {/* Table with horizontal scroll */}
                        <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0" style={{ WebkitOverflowScrolling: "touch" }}>
                            <div className="min-w-[800px]">
                                <table className="w-full border-separate border-spacing-0">
                                    <thead>
                                        <tr className="border-none" style={{ backgroundColor: "#F3F3F3" }}>
                                            <th className="text-left py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm whitespace-nowrap rounded-tl-lg">
                                                Date & Time
                                            </th>
                                            <th className="text-left py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm whitespace-nowrap">
                                                Device / OS
                                            </th>
                                            <th className="text-left py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm whitespace-nowrap">
                                                Browser
                                            </th>
                                            <th className="text-left py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm whitespace-nowrap">
                                                IP
                                            </th>
                                            <th className="text-left py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm whitespace-nowrap">
                                                Location
                                            </th>
                                            <th className="text-left py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm whitespace-nowrap rounded-tr-lg">
                                                Result
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedActivities.length > 0 ? (
                                            paginatedActivities.map((activity, index) => {
                                                const isLastRow = index === paginatedActivities.length - 1;
                                                return (
                                                    <tr
                                                        key={activity.id}
                                                        className={`transition-colors ${isLastRow ? "" : "border-b border-gray-100"}`}
                                                        style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#FFF5F5" }}
                                                    >
                                                        <td className={`py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description whitespace-nowrap ${isLastRow ? "rounded-bl-lg" : ""}`}>
                                                            {formatDateTime(activity.dateTime)}
                                                        </td>
                                                        <td className="py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description">
                                                            <div className="flex flex-col min-w-[120px]">
                                                                <span className="font-medium text-heading whitespace-nowrap">
                                                                    {activity.device}
                                                                </span>
                                                                <span className="text-xs text-gray-500 whitespace-nowrap">
                                                                    {activity.os}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description whitespace-nowrap">
                                                            {activity.browser}
                                                        </td>
                                                        <td className="py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description whitespace-nowrap">
                                                            {activity.ip}
                                                        </td>
                                                        <td className="py-3 px-2 sm:px-4 [font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description whitespace-nowrap">
                                                            {activity.location}
                                                        </td>
                                                        <td className={`py-3 px-2 sm:px-4 whitespace-nowrap ${isLastRow ? "rounded-br-lg" : ""}`}>
                                                            <span
                                                                className={`px-2 py-1 rounded text-xs [font-family:'Poppins',Helvetica] font-medium ${activity.status === "success"
                                                                        ? "bg-green-100 text-green-700"
                                                                        : "bg-red-100 text-red-700"
                                                                    }`}
                                                            >
                                                                {activity.status === "success"
                                                                    ? "Success"
                                                                    : "Failed"}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr style={{ backgroundColor: "#ffffff" }}>
                                                <td
                                                    colSpan={6}
                                                    className="py-8 px-4 text-center [font-family:'Poppins',Helvetica] text-xs sm:text-sm text-description rounded-bl-lg rounded-br-lg"
                                                >
                                                    No login activities found matching your filters.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            showInfo={true}
                            startIndex={startIndex}
                            endIndex={endIndex}
                            totalItems={filteredActivities.length}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
