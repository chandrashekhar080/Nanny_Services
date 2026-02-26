import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

export const StepPreferredStartDate = ({
    onNext,
    onBack,
}: {
    onNext: () => void;
    onBack: () => void;
}): JSX.Element => {
    const [startDate, setStartDate] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // prevent page reload
        if (startDate) {
            onNext(); // or navigate to login page
        } else {
            alert("Please select a start date"); // optional validation
        }
    };




    return (
        <div className="inline-flex flex-col items-center gap-[33px] w-full max-w-[790px]">
            <style>
                {`
                    /* Hide native date input calendar icon */
                    input[type="date"]::-webkit-calendar-picker-indicator {
                        opacity: 0;
                        position: absolute;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    input[type="date"] {
                        color-scheme: light;
                    }
                `}
            </style>

            <Card className="w-full rounded-xl overflow-visible shadow-[0px_0px_5px_-1px_#00000040]">
                <CardContent className="flex flex-col items-center gap-[30px] p-5 sm:p-10">
                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-lg text-center">Preferred Start Date</h1>
                        <p className="text-center text-sm text-black">
                            Let us know when you’d like childcare services to begin. This helps us match you
                            with caregivers available on your schedule.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                        {/* Date Input */}
                        <div className="flex flex-col gap-2.5 w-full relative">
                            <Label htmlFor="startDate">Preferred Start Date</Label>
                            <div className="relative w-full">
                                <Input
                                    id="startDate"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full pl-4 pr-12 py-3 h-10 rounded-lg border border-[#cfd4dc] shadow-[0px_1px_2px_0px_#1018280D] focus-visible:ring-0 focus-visible:outline-none cursor-pointer bg-transparent"
                                />
                                <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 pointer-events-none z-10" />
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
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
