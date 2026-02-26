import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Badge } from "../../../../components/ui/badge";
import { ProgressBar } from "../../../../components/ui/progressbar"; // ✅ Added ProgressBar import

interface Props {
    onNext: () => void;
    onBack: () => void;
    progressSteps: { id: number; label: string; active: boolean; completed: boolean }[];
}

const suggestedOptions = [
    "Infant & Newborn Care",
    "Tutoring & Homework Help",
    "Meal Preparation",
    "School Drop-off & Pickup",
    "Light Housekeeping",
    "Overnight Support",
];

export const StepServicesOffered: React.FC<Props> = ({
    onNext,
    onBack,
    progressSteps,
}) => {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredOptions = suggestedOptions.filter(
        (option) =>
            option.toLowerCase().includes(query.toLowerCase()) &&
            !selected.includes(option)
    );

    const handleAdd = (option: string) => {
        if (!selected.includes(option)) {
            setSelected([...selected, option]);
            setQuery("");
            setShowDropdown(false);
        }
    };

    const handleRemove = (option: string) => {
        setSelected(selected.filter((item) => item !== option));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && query.trim() !== "") {
            e.preventDefault();
            handleAdd(query.trim());
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="inline-flex flex-col items-center gap-8 w-full max-w-[790px]">
            <Card className="w-full rounded-xl overflow-hidden shadow-[0px_0px_5px_-1px_#00000040]">
                <CardContent className="flex flex-col items-center gap-[30px] p-5 sm:p-10 w-full">
                    {/* Progress Bar */}
                    <ProgressBar progressSteps={progressSteps} />

                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-lg text-center">Services Offered</h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                        {/* Input + Dropdown */}
                        <div ref={dropdownRef} className="relative flex flex-col gap-2.5 w-full">
                            <Label htmlFor="requirements">Enter or Choose Services Offered</Label>
                            <Input
                                id="requirements"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setShowDropdown(true);
                                }}
                                onFocus={() => setShowDropdown(true)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type to add or select from suggestions"
                                className="w-full focus-visible:ring-0 focus-visible:outline-none"
                            />

                            {/* Dropdown */}
                            {showDropdown && filteredOptions.length > 0 && (
                                <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-48 overflow-y-auto z-10">
                                    {filteredOptions.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() => handleAdd(option)}
                                            className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary-1 hover:text-white transition-colors"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Selected Badges */}
                            {selected.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {selected.map((opt) => (
                                        <Badge
                                            key={opt}
                                            onClick={() => handleRemove(opt)}
                                            style={{
                                                outline: "none",
                                                boxShadow: "none",
                                                WebkitTapHighlightColor: "transparent",
                                            }}
                                            className="bg-primary-1 text-white border border-primary-1 px-3 py-2 rounded-xl cursor-pointer hover:bg-primary-1 focus:bg-primary-1 active:bg-primary-1"
                                        >
                                            {opt} ✕
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Suggested Section */}
                        <div className="flex flex-col gap-3 w-full">
                            <Label className="text-sm">Suggested</Label>
                            <div className="flex flex-wrap gap-3">
                                {suggestedOptions.slice(0, 5).map((option) => {
                                    const isActive = selected.includes(option);
                                    return (
                                        <Badge
                                            key={option}
                                            onClick={() => handleAdd(option)}
                                            tabIndex={-1}
                                            style={{
                                                outline: "none",
                                                boxShadow: "none",
                                                WebkitTapHighlightColor: "transparent",
                                            }}
                                            className={`cursor-pointer rounded-xl px-4 py-2 text-sm border select-none transition-all ${isActive
                                                ? "bg-primary-1 text-white border-primary-1 hover:bg-primary-1"
                                                : "bg-primary-50 text-primary-1 border-[#ff999a] hover:bg-primary-1 hover:text-white hover:border-primary-1"
                                                }`}
                                        >
                                            {option}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={onBack}
                                className="w-full sm:w-1/2 bg-gray-100 hover:bg-gray-200 text-black border-none"
                            >
                                Previous
                            </Button>

                            <Button
                                type="submit"
                                className="w-full sm:w-1/2 bg-primary-1 hover:bg-primary-100 text-white"
                            >
                                Next
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
