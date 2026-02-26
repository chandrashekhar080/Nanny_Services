import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Star } from "lucide-react";
import { EllipsisVertical, Heart } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaHeart } from "react-icons/fa6";

export interface CaregiverBadge {
    text?: string;
    icon?: string;
}

export interface CaregiverData {
    id: number;
    badges?: CaregiverBadge[];
    rating?: string;
    name: string;
    experience: string;
    location: string;
    description: string;
    skills: string[];
    additionalSkills?: string;
    price: string;
    priceUnit: string;
    image: string;
    showWishlist?: boolean;
    showDropdown?: boolean;
    type?: string;
}

interface CaregiverCardProps {
    data: CaregiverData[];
    showRating?: boolean;
    showSkills?: boolean;
    onViewProfile?: (id: number) => void;
    onWishlistToggle?: (id: number) => void;
    onMarkHired?: (id: number) => void;
    onReport?: (id: number) => void;
    onWriteReview?: (id: number) => void;
}

export const CaregiverCard: React.FC<CaregiverCardProps> = ({
    data,
    showRating = true,
    showSkills = true,
    onViewProfile,
    onWishlistToggle,
    onMarkHired,
    onReport,
    onWriteReview,
}) => {
    const [wishlistIds, setWishlistIds] = useState<number[]>([]);
    const [expandedSkills, setExpandedSkills] = useState<Record<number, boolean>>({});

    const toggleWishlist = (id: number) => {
        setWishlistIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
        // Only call callback if passed, optional
        if (onWishlistToggle) onWishlistToggle(id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [font-family:'Poppins',Helvetica] gap-5">
            {data.map((item) => (
                <Card
                    key={item.id}
                    className="bg-white rounded-[10px] shadow-[0px_0px_4px_#00000040] border-0"
                >
                    <CardContent className="p-5">
                        <div className="flex flex-col items-center gap-2.5">
                            {/* IMAGE */}
                            <div className="relative w-full">
                                <img
                                    className="w-full h-[262px] rounded-[10px] object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />

                                {/* TOP RIGHT BUTTONS */}
                                <div className="absolute top-2 right-2 flex gap-2">
                                    {/* Wishlist */}
                                    {item.showWishlist && (
                                        <button
                                            onClick={() => toggleWishlist(item.id)}
                                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                                        >
                                            {wishlistIds.includes(item.id) ? (
                                                <FaHeart className="w-5 h-5 text-primary-1" />
                                            ) : (
                                                <Heart className="w-5 h-5 text-gray-400" />
                                            )}
                                        </button>
                                    )}

                                    {/* Dropdown */}
                                    {item.showDropdown && (
                                        <DropdownMenu.Root>
                                            <DropdownMenu.Trigger asChild>
                                                <button className="p-2 bg-[#0000004D] rounded-full shadow-md hover:bg-[#0000004D] focus-visible:outline-none">
                                                    <EllipsisVertical className="w-5 h-5 text-white" />
                                                </button>
                                            </DropdownMenu.Trigger>

                                            <DropdownMenu.Portal>
                                                <DropdownMenu.Content
                                                    className="bg-white rounded-md shadow-md w-44 p-1"
                                                    sideOffset={5}
                                                >
                                                    <DropdownMenu.Item
                                                        className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-primary-1 hover:border-0 focus-visible:outline-none cursor-pointer"
                                                        onClick={() => onMarkHired?.(item.id)}
                                                    >
                                                        Mark as Hired
                                                    </DropdownMenu.Item>
                                                    <DropdownMenu.Item
                                                        className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-primary-1 hover:border-0 focus-visible:outline-none cursor-pointer"
                                                        onClick={() => onReport?.(item.id)}
                                                    >
                                                        Report
                                                    </DropdownMenu.Item>
                                                    <DropdownMenu.Item
                                                        className="px-3 py-2 text-sm hover:bg-gray-100 hover:text-primary-1 hover:border-0 focus-visible:outline-none cursor-pointer"
                                                        onClick={() => onWriteReview?.(item.id)}
                                                    >
                                                        Write a Review
                                                    </DropdownMenu.Item>
                                                </DropdownMenu.Content>
                                            </DropdownMenu.Portal>
                                        </DropdownMenu.Root>
                                    )}
                                </div>
                            </div>

                            {/* CARD CONTENT */}
                            <div className="flex flex-col items-start w-full gap-4">
                                {/* Badges + Rating */}
                                <div className="flex items-center justify-between w-full gap-2.5 flex-wrap">
                                    <div className="flex items-center gap-1">
                                        {item.badges?.map((badge, i) => (
                                            <React.Fragment key={i}>
                                                {badge.text && (
                                                    <Badge className="px-2.5 py-1.5 bg-primary-50 rounded-md border-[1.5px] border-primary-1 h-auto hover:bg-primary-50">
                                                        <span className="font-medium text-primary-1 text-xs">
                                                            {badge.text}
                                                        </span>
                                                    </Badge>
                                                )}
                                                {badge.icon === "crown" && (
                                                    <img
                                                        src="/assets/img/crown-svgrepo-com.svg"
                                                        alt="crown"
                                                        className="w-[30px] h-[30px]"
                                                    />
                                                )}
                                                {badge.icon === "verified" && (
                                                    <img
                                                        src="/assets/img/verified-check-svgrepo-com.svg"
                                                        alt="verified"
                                                        className="w-[30px] h-[30px]"
                                                    />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    {/* Rating */}
                                    {showRating && item.rating && (
                                        <div className="flex items-center gap-2.5 px-2 py-px bg-primary-1 rounded-[5px] h-[30px] min-w-[66px]">
                                            <Star className="w-3.5 h-3.5 text-white" />
                                            <span className="text-white text-base font-medium">{item.rating}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Name / Experience / Location */}
                                <div className="flex flex-col gap-2.5">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-sm">{item.experience}</p>

                                    <p className="text-sm text-description flex items-center gap-1 font-semibold">
                                        {item.location}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-description line-clamp-2">{item.description}</p>

                                {/* Skills */}
                                {showSkills && (
                                    <div className="flex flex-wrap items-center gap-2">
                                        {item.skills.slice(0, 5).map((skill, i) => (
                                            <Badge
                                                key={i}
                                                variant="outline"
                                                className="px-2 py-1 bg-[#f9f9f9] border-[#d1d1d1]"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}

                                        {!expandedSkills[item.id] && item.skills.length > 5 && (
                                            <button
                                                onClick={() =>
                                                    setExpandedSkills((prev) => ({ ...prev, [item.id]: true }))
                                                }
                                                className="text-primary-1 text-sm font-medium"
                                            >
                                                +{item.skills.length - 5} more
                                            </button>
                                        )}

                                        {expandedSkills[item.id] &&
                                            item.skills.slice(5).map((skill, i) => (
                                                <Badge
                                                    key={i + 5}
                                                    variant="outline"
                                                    className="px-2 py-1 bg-[#f9f9f9] border-[#d1d1d1]"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}

                                        {expandedSkills[item.id] && item.skills.length > 5 && (
                                            <button
                                                onClick={() =>
                                                    setExpandedSkills((prev) => ({ ...prev, [item.id]: false }))
                                                }
                                                className="text-primary-1 text-sm font-medium"
                                            >
                                                Show Less
                                            </button>
                                        )}
                                    </div>
                                )}

                                {/* Price + Button */}
                                <div className="flex items-center justify-between w-full">
                                    <div className="text-2xl font-medium">
                                        {item.price}
                                        <span className="text-[11px]">{item.priceUnit}</span>
                                    </div>
                                    <button
                                        onClick={() => onViewProfile?.(item.id)}
                                        className="text-primary-1 text-lg font-medium"
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
