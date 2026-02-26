import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Switch } from "../../../../components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { ProgressBar } from "../../../../components/ui/progressbar";

interface Props {
    onNext: () => void;
    onBack: () => void;
    progressSteps: { id: number; label: string; active: boolean; completed: boolean }[];
}

interface WeekDay {
    name: string;
    enabled: boolean;
    from: string;
    to: string;
}

const initialWeekDays: WeekDay[] = [
    { name: "Monday", enabled: true, from: "09:00", to: "17:00" },
    { name: "Tuesday", enabled: true, from: "09:00", to: "17:00" },
    { name: "Wednesday", enabled: true, from: "09:00", to: "17:00" },
    { name: "Thursday", enabled: true, from: "09:00", to: "17:00" },
    { name: "Friday", enabled: true, from: "09:00", to: "17:00" },
    { name: "Saturday", enabled: false, from: "09:00", to: "17:00" },
    { name: "Sunday", enabled: false, from: "09:00", to: "17:00" },
];

export const StepAvailability: React.FC<Props> = ({
    onNext,
    onBack,
    progressSteps,
}) => {
    const [weekDays, setWeekDays] = useState<WeekDay[]>(initialWeekDays);

    const handleToggleDay = (index: number, checked: boolean) => {
        const updated = [...weekDays];
        updated[index].enabled = checked;
        setWeekDays(updated);
    };

    const handleTimeChange = (index: number, field: "from" | "to", value: string) => {
        const updated = [...weekDays];
        updated[index][field] = value;
        setWeekDays(updated);
    };

    const openTimePicker = (id: string, enabled: boolean) => {
        if (!enabled) return; // prevent clicking if disabled
        const el = document.getElementById(id) as HTMLInputElement | null;
        if (el && typeof (el as any).showPicker === "function") {
            (el as any).showPicker();
        } else {
            el?.focus();
        }
    };

    return (
        <div className="inline-flex flex-col items-center gap-8 w-full max-w-[790px]">
            <Card className="flex flex-col items-center gap-6 p-6 sm:p-8 w-full rounded-xl shadow-[0px_0px_5px_-1px_#00000040] overflow-hidden">
                <CardContent className="flex flex-col items-center gap-6 w-full p-0">
                    {/* Progress Bar */}
                    <ProgressBar progressSteps={progressSteps} />

                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-heading text-lg text-center">
                            Availability
                        </h1>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col w-full gap-6">
                        {/* Business Hours */}
                        <div className="flex items-center justify-between w-full flex-wrap gap-3">
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-semibold text-heading text-base">
                                    Business hours
                                </h3>
                                <p className="font-normal text-sub-heading text-sm">
                                    Set active hours when you are available to connect.
                                </p>
                            </div>
                            <Switch defaultChecked className="data-[state=checked]:bg-primary-1" />
                        </div>

                        {/* Timezone Selector */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-semibold text-heading text-base">Timezone</h3>
                                <p className="font-normal text-sub-heading text-sm">
                                    Set your timezone
                                </p>
                            </div>
                            <Select defaultValue="ist">
                                <SelectTrigger className="w-full sm:w-[454px] h-auto px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                                    <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pacific">(UTC-8:00) Pacific Time</SelectItem>
                                    <SelectItem value="eastern">(UTC-5:00) Eastern Time</SelectItem>
                                    <SelectItem value="ist">(UTC+5:30) India Standard Time</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Editable Weekdays */}
                        <div className="flex flex-col gap-4 w-full">
                            {weekDays.map((day, index) => (
                                <div
                                    key={day.name}
                                    className="flex flex-col sm:flex-row items-center justify-between w-full gap-3"
                                >
                                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                        <Switch
                                            checked={day.enabled}
                                            onCheckedChange={(checked) => handleToggleDay(index, checked)}
                                            className="data-[state=checked]:bg-primary-1"
                                        />
                                        <span className="font-medium text-heading text-sm">
                                            {day.name}
                                        </span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                        {/* From */}
                                        <div
                                            onClick={() => openTimePicker(`from-${index}`, day.enabled)}
                                            className={`flex items-center justify-between w-full sm:w-[217px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs transition-all ${!day.enabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                                                }`}
                                        >
                                            <span className="font-normal text-description text-sm">From</span>
                                            <input
                                                id={`from-${index}`}
                                                type="time"
                                                value={day.from}
                                                onChange={(e) =>
                                                    handleTimeChange(index, "from", e.target.value)
                                                }
                                                disabled={!day.enabled}
                                                className="bg-transparent border-none outline-none text-heading text-sm text-right w-[80px] cursor-pointer disabled:cursor-not-allowed"
                                            />
                                        </div>

                                        {/* To */}
                                        <div
                                            onClick={() => openTimePicker(`to-${index}`, day.enabled)}
                                            className={`flex items-center justify-between w-full sm:w-[217px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs transition-all ${!day.enabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                                                }`}
                                        >
                                            <span className="font-normal text-description text-sm">To</span>
                                            <input
                                                id={`to-${index}`}
                                                type="time"
                                                value={day.to}
                                                onChange={(e) =>
                                                    handleTimeChange(index, "to", e.target.value)
                                                }
                                                disabled={!day.enabled}
                                                className="bg-transparent border-none outline-none text-heading text-sm text-right w-[80px] cursor-pointer disabled:cursor-not-allowed"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Outside Business Hours */}
                        <div className="flex items-center justify-between w-full flex-wrap gap-3">
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-semibold text-heading text-base">
                                    Outside business hours
                                </h3>
                                <p className="font-normal text-sub-heading text-sm">
                                    Set your timezone
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="w-[120px] h-auto px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs"
                            >
                                Set up
                            </Button>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <Button
                                variant="outline"
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-black border-none"
                                onClick={onBack}
                            >
                                Previous
                            </Button>
                            <Button
                                className="flex-1 bg-primary-1 hover:bg-primary-1/90 text-white"
                                onClick={onNext}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
