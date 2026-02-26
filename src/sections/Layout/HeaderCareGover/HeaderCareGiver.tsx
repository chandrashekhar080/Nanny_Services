import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    MenuIcon,
    XIcon,
    HomeIcon,
    SearchIcon,
    MessageCircleIcon,
    BriefcaseIcon,
    HeartIcon,
    ChevronDownIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";

const navigationItems = [
    { label: "Home", icon: HomeIcon, path: "/care-giver" },
    { label: "Browse Families", icon: SearchIcon, path: "/care-giver/familys" },
    { label: "My Jobs", icon: BriefcaseIcon, path: "/care-giver/dashboard" },
    { label: "Messages", icon: MessageCircleIcon, path: "/care-giver/messages" },
    { label: "Notification", icon: HeartIcon, path: "/care-giver/notifications" },
];

const profileDropdown = [
    { label: "Earnings & Payments", path: "/care-giver/earnings-payments" },
    { label: "Account & Settings", path: "/care-giver/account-settings" },
    { label: "Help", path: "/care-giver/help-center" },
    { label: "Logout", path: "/logout" },
];

export const HeaderCareGiver = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            // Don't close if clicking on a link
            if (target.closest('a')) {
                return;
            }
            if (profileRef.current && !profileRef.current.contains(target)) {
                setIsProfileOpen(false);
            }
        };
        if (isProfileOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isProfileOpen]);

    const handleDropDown = (label: string, path: string | null) => {
    setIsProfileOpen(false); // close dropdown first

    if (label === "Logout") {
        localStorage.setItem("UserType", "");
        navigate("/login");
        return; // stop further logs
    }

    if (path) {
        navigate(path);
    }
};

    return (
        <header className={`flex flex-col w-full ${ location.pathname === "/care-giver" ? "bg-white" :"bg-white"}`}>
            <div className="relative w-full max-w-[1280px] mx-auto px-5">
                <nav className="flex items-center justify-between py-3 rounded-2xl relative">

                    {/* Logo left */}
                    <Link to="/care-giver">
                        <img className="w-[143px] h-[90px]" alt="All around american" src="/assets/img/logo.png" />
                    </Link>

                    <div className="flex gap-5">

                        {/* Desktop center navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigationItems.map((item, i) => {
                                const isActive = location.pathname === item.path; // ✅ FIXED ACTIVE STATE

                                return (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        className={`flex flex-col items-center gap-1 text-sm [font-care-giver:'Poppins',Helvetica] 
                                            ${isActive ? "text-primary-11 font-medium" : "text-heading"}
                                            hover:text-primary-11 hover:no-underline`}
                                    >
                                        <item.icon className="w-6 h-6" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop right: Profile + Upgrade */}
                        <div className="hidden lg:flex items-center gap-5">

                            {/* Profile Dropdown */}
                            <div className="relative" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen((prev) => !prev)}
                                    className="flex items-center gap-2 focus:outline-none"
                                >
                                    <Avatar className="w-[34px] h-[34px] bg-gray-100 p-2 rounded-full">
                                        <AvatarFallback className="[font-care-giver:'Poppins',Helvetica] font-medium text-primary-11 text-xs">
                                            CA
                                        </AvatarFallback>
                                    </Avatar>
                                    <ChevronDownIcon
                                        className={`w-4 h-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-[180px] bg-white shadow-lg rounded-xl border border-gray-100 z-50 p-3">
                                        <ul className="space-y-2">
                                            {profileDropdown.map((item, i) => (
                                                <li key={i} onClick={(e) => e.stopPropagation()}>
                                                    <Link
                                                       to={item.path || "#"}
    onClick={(e) => {
        e.preventDefault();   // stop Link default behavior for Logout
        handleDropDown(item.label, item.path);
    }}
                                                        className="[font-care-giver:'Poppins',Helvetica] block w-full text-left text-[14px] text-black hover:bg-gray-100 p-2 rounded-md hover:text-primary-1 focus:outline-none"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <Button onClick={() => navigate("/care-giver/subscription")} className="h-12 px-8 py-2 bg-primary-11 rounded-xl [font-care-giver:'Geist',Helvetica] font-bold text-white text-lg hover:bg-primary-11/90">
                                Upgrade
                            </Button>
                        </div>
                    </div>

                    {/* Mobile right: Profile + Menu */}
                    <div className="lg:hidden flex items-center gap-3">

                        {/* Profile Dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setIsProfileOpen((prev) => !prev)}
                                className="flex items-center gap-1 focus:outline-none"
                            >
                                <Avatar className="w-8 h-8 bg-gray-100 p-1.5 rounded-full">
                                    <AvatarFallback className="[font-care-giver:'Poppins',Helvetica] font-medium text-primary-11 text-xs">
                                        CA
                                    </AvatarFallback>
                                </Avatar>
                                <ChevronDownIcon
                                    className={`w-4 h-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-[160px] bg-white shadow-lg rounded-xl border border-gray-100 z-50 p-2">
                                    <ul className="space-y-1">
                                        {profileDropdown.map((item, i) => (
                                            <li key={i} onClick={(e) => e.stopPropagation()}>
                                                <Link
                                                    to={item.path || "#"}
    onClick={(e) => {
        e.preventDefault();   // stop Link default behavior for Logout
        handleDropDown(item.label, item.path);
    }}
                                                    className="[font-care-giver:'Poppins',Helvetica] block w-full text-left text-[13px] text-black hover:bg-gray-100 p-1 rounded-md focus:outline-none"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Icon */}
                        {!isMenuOpen && (
                            <button
                                className="focus:outline-none z-40"
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <MenuIcon className="w-7 h-7 text-heading" />
                            </button>
                        )}
                    </div>

                    {/* Mobile Sidebar */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog">
                            <div
                                className="absolute inset-0 bg-black/40"
                                onClick={() => setIsMenuOpen(false)}
                            ></div>

                            <div className="fixed left-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="absolute top-4 right-4 bg-white rounded-full p-1 focus:outline-none"
                                >
                                    <XIcon className="w-7 h-7 text-heading" />
                                </button>

                                <ul className="flex flex-col p-6 space-y-3 mt-12">
                                    {navigationItems.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 text-base py-2 px-2 [font-care-giver:'Poppins',Helvetica] text-heading hover:text-primary-11"
                                            >
                                                <item.icon className="w-6 h-6" />
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}

                                    <li>
                                        <Button onClick={() => navigate("/care-giver/subscription")} className="h-12 w-full mt-4 bg-primary-11 text-white text-base rounded-xl hover:bg-primary-11/90">
                                            Upgrade
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};
