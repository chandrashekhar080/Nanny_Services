import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";

export const StepLocation = ({
    onNext,
    onBack,
}: {
    onNext: () => void;
    onBack: () => void;
}): JSX.Element => {
    const [selectedLocation, setSelectedLocation] = useState<string | null>("Austin, Texas");

    const handleSelect = (location: string) => {
        setSelectedLocation(location);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const locations = ["Austin, Texas", "New York, NY", "Los Angeles, CA", "Chicago, IL"];

    return (
        <div className="inline-flex flex-col items-center gap-[33px] w-full max-w-[790px]">
            <Card className="w-full rounded-xl overflow-hidden shadow-[0px_0px_5px_-1px_#00000040]">
                <CardContent className="flex flex-col items-center gap-[30px] p-5 sm:p-10">
                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-lg text-center">Location</h1>
                        <p className="text-center text-sm text-black">
                            Tell us where you’re based so we can connect you with caregivers available in your area.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                        <div className="flex flex-col items-start gap-2.5 w-full">
                            {/* Location input */}
                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="location">Enter Location</Label>
                                <Input
                                    id="location"
                                    placeholder="Search your location"
                                    className="w-full"
                                />
                            </div>

                            {/* Selectable Badges */}
                            <div className="flex flex-wrap gap-3 mt-3">
                                {locations.map((location) => {
                                    const isSelected = selectedLocation === location;
                                    return (
                                        <Badge
                                            key={location}
                                            onClick={() => handleSelect(location)}
                                            tabIndex={0}
                                            className={`inline-flex px-3.5 py-2.5 rounded-xl border-[1.5px] cursor-pointer transition-all duration-150 select-none ${isSelected
                                                ? "bg-primary-1 text-white border-primary-1 hover:bg-primary-1 hover:text-white active:bg-primary-1"
                                                : "bg-primary-50 text-primary-1 border-[#ff999a] hover:bg-primary-1 hover:text-white hover:border-primary-1 active:bg-primary-1 active:text-white active:border-primary-1"
                                                } `}
                                            style={{
                                                outline: "none",
                                                boxShadow: "none",
                                                WebkitTapHighlightColor: "transparent",
                                            }}
                                            onFocus={(e) => e.currentTarget.blur()}
                                        >
                                            <span className="font-medium text-sm whitespace-nowrap">{location}</span>
                                        </Badge>

                                    );
                                })}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-between gap-5 w-full">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={onBack}
                                className="w-full bg-gray-100 hover:bg-gray-200 text-black"
                            >
                                Previous
                            </Button>

                            <Button
                                type="submit"
                                className="w-full bg-primary-1 hover:bg-primary-100 text-white"
                            >
                                Continue
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
