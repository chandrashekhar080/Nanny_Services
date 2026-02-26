import { CalendarIcon, Camera } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { Switch } from "../../../../components/ui/switch";
import { Textarea } from "../../../../components/ui/textarea";

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

interface EditProfileProps {
    onCancel?: () => void;
    onSave?: () => void;
}

export const EditProfile = ({ onCancel, onSave }: EditProfileProps = {}): JSX.Element => {
    const [formData, setFormData] = useState({
        fullName: "Caroline O.",
        email: "email@example.com",
        phone: "+12-4547-4843",
        location: "Austin, Texas",
        bio: "We are a family of four seeking part-time tutoring and childcare support. We value kindness, safety, and learning.",
        profileImage: "/assets/img/images-5.png",
        childcareNeeds: "",
        ageGroups: "",
        numberOfChildren: "2",
        timezone: "utc-8",
        preferredStartDate: "",
        duration: "",
    });

    const [weekDays, setWeekDays] = useState<WeekDay[]>(initialWeekDays);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, profileImage: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

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
        if (!enabled) return;
        const el = document.getElementById(id) as HTMLInputElement | null;
        if (el && typeof (el as any).showPicker === "function") {
            (el as any).showPicker();
        } else {
            el?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Profile updated:", { formData, weekDays });
        // TODO: Add API call to save profile details
        alert("Profile updated successfully!");
        if (onSave) {
            onSave();
        }
    };

    const handleCancelClick = () => {
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <>
            <style>
                {`
                    /* Hide native date/datetime/time input calendar icons */
                    input[type="date"]::-webkit-calendar-picker-indicator,
                    input[type="datetime-local"]::-webkit-calendar-picker-indicator,
                    input[type="time"]::-webkit-calendar-picker-indicator {
                        opacity: 0;
                        position: absolute;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    input[type="date"],
                    input[type="datetime-local"],
                    input[type="time"] {
                        color-scheme: light;
                    }
                `}
            </style>
            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5 p-4 sm:p-6 md:p-[30px] w-full bg-white rounded-[22px]">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                Personal Information
            </h2>

            <div className="flex flex-col items-center gap-5 w-full">
                <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                    {formData.profileImage ? (
                        <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(../frame-1171276177.png)] bg-cover bg-center flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                    )}
                    <label
                        htmlFor="profileImage"
                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 transition-opacity cursor-pointer"
                    >
                        <Camera className="w-6 h-6 text-white" />
                    </label>
                    <input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </div>

                <div className="flex flex-col items-start gap-5 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="fullName"
                                className="[font-family:'Poppins',Helvetica] font-medium text-heading text-xs tracking-[0] leading-[normal]"
                            >
                                Full Name / Family Name
                            </Label>
                            <Input
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                placeholder="Enter your full name or family name"
                                className="h-[45px] px-4 py-3 bg-white rounded-lg border border-[#dedede] shadow-shadow-xs [font-family:'Poppins',Helvetica] font-normal text-description text-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="email"
                                className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                            >
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="Enter your email"
                                className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="phone"
                                className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                            >
                                Phone Number
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="Enter your mobile number"
                                className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="location"
                                className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                            >
                                Location
                            </Label>
                            <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => handleInputChange("location", e.target.value)}
                                placeholder="City, State"
                                className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <Label
                            htmlFor="bio"
                            className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                        >
                            Bio
                        </Label>
                        <Textarea
                            id="bio"
                            value={formData.bio}
                            onChange={(e) => handleInputChange("bio", e.target.value)}
                            placeholder="Enter bio here"
                            className="min-h-[130px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                        />
                    </div>
                </div>
            </div>

            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                Care Preferences
            </h2>

            <div className="flex items-start gap-5 w-full">
                <div className="flex flex-col items-start gap-3 flex-1">
                    <Label className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]">
                        Childcare Needs
                    </Label>

                    <Select value={formData.childcareNeeds} onValueChange={(value) => handleInputChange("childcareNeeds", value)}>
                        <SelectTrigger className="w-full h-[45px] px-4 py-[13px] bg-[#ffffff] rounded-md border border-solid border-[#dedede]">
                            <SelectValue
                                placeholder="Select Childcare Needs"
                                className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="tutoring">Tutoring</SelectItem>
                            <SelectItem value="part-time">Part-Time Care</SelectItem>
                            <SelectItem value="homework">Homework Help</SelectItem>
                            <SelectItem value="full-time">Full-Time Care</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
                        Age Groups
                    </Label>

                    <Select value={formData.ageGroups} onValueChange={(value) => handleInputChange("ageGroups", value)}>
                        <SelectTrigger className="w-full h-[45px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                            <SelectValue
                                placeholder="Select Age Groups"
                                className="[font-family:'Poppins',Helvetica] font-normal text-description text-xs tracking-[0] leading-[normal]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-9">6-9 years</SelectItem>
                            <SelectItem value="10-12">10-12 years</SelectItem>
                            <SelectItem value="13+">13+ years</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label htmlFor="numberOfChildren" className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]">
                        Number of Children
                    </Label>

                    <Input
                        id="numberOfChildren"
                        type="number"
                        min="1"
                        value={formData.numberOfChildren}
                        onChange={(e) => handleInputChange("numberOfChildren", e.target.value)}
                        placeholder="Enter Number of Children"
                        className="w-full h-[45px] px-4 py-[13px] bg-[#ffffff] rounded-md border border-solid border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-description text-xs tracking-[0] leading-[normal]"
                    />
                </div>
            </div>

            <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex items-start gap-5 w-full">
                    <div className="flex flex-col items-start gap-3 flex-1">
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                            Availability
                        </h3>

                        <div className="w-full">
                            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4 sm:gap-0">
                                <div className="flex flex-col items-start gap-1.5">
                                    <div className="font-semibold text-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                        Timezone
                                    </div>

                                    <div className="font-normal text-sub-heading text-sm [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                        Set your timezone
                                    </div>
                                </div>

                                <div className="flex flex-col items-start sm:items-end justify-center gap-2.5 w-full sm:w-auto">
                                    <div className="flex flex-col items-start sm:items-end justify-center gap-4 w-full sm:w-auto">
                                        <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                                            <SelectTrigger className="w-full sm:w-[454px] h-auto px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                                                <SelectValue className="text-heading text-sm [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="utc-8">
                                                    (UTC-8:00) Pacific Time
                                                </SelectItem>
                                                <SelectItem value="utc-5">
                                                    (UTC-5:00) Eastern Time
                                                </SelectItem>
                                                <SelectItem value="utc+5:30">
                                                    (UTC+5:30) India Standard Time
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full items-start gap-4 sm:gap-5 mt-8 sm:mt-[71px]">
                                {weekDays.map((day, index) => (
                                    <div
                                        key={`day-${index}`}
                                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <Switch
                                                checked={day.enabled}
                                                onCheckedChange={(checked) => handleToggleDay(index, checked)}
                                                className="data-[state=checked]:bg-primary-1"
                                            />

                                            <span className="text-sm [font-family:'Poppins',Helvetica] font-medium text-heading tracking-[0] leading-[normal]">
                                                {day.name}
                                            </span>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
                                            <div
                                                onClick={() => openTimePicker(`from-${index}`, day.enabled)}
                                                className={`flex flex-col w-full sm:w-[217px] h-[51px] items-end justify-center gap-2.5 ${!day.enabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                            >
                                                <div className="flex flex-col items-end justify-center gap-4 flex-1 w-full">
                                                    <div className="flex items-center gap-2 px-4 py-3 flex-1 w-full bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                                                        <div className="flex items-center justify-between flex-1">
                                                            <span className="text-description text-sm [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
                                                                From
                                                            </span>

                                                            <input
                                                                id={`from-${index}`}
                                                                type="time"
                                                                value={day.from}
                                                                onChange={(e) => handleTimeChange(index, "from", e.target.value)}
                                                                disabled={!day.enabled}
                                                                className="bg-transparent border-none outline-none text-heading text-sm text-right w-[80px] cursor-pointer disabled:cursor-not-allowed [font-family:'Poppins',Helvetica]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                onClick={() => openTimePicker(`to-${index}`, day.enabled)}
                                                className={`flex flex-col w-full sm:w-[217px] h-[51px] items-end justify-center gap-2.5 ${!day.enabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                            >
                                                <div className="flex flex-col items-end justify-center gap-4 flex-1 w-full">
                                                    <div className="flex items-center gap-2 px-4 py-3 flex-1 w-full bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                                                        <div className="flex items-center justify-between flex-1">
                                                            <span className="text-description text-sm [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
                                                                To
                                                            </span>

                                                            <input
                                                                id={`to-${index}`}
                                                                type="time"
                                                                value={day.to}
                                                                onChange={(e) => handleTimeChange(index, "to", e.target.value)}
                                                                disabled={!day.enabled}
                                                                className="bg-transparent border-none outline-none text-heading text-sm text-right w-[80px] cursor-pointer disabled:cursor-not-allowed [font-family:'Poppins',Helvetica]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label htmlFor="preferredStartDate" className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
                        Preferred Start Date
                    </Label>

                    <div className="relative w-full">
                        <Input
                            id="preferredStartDate"
                            type="date"
                            value={formData.preferredStartDate}
                            onChange={(e) => handleInputChange("preferredStartDate", e.target.value)}
                            className="w-full h-[45px] px-4 pr-12 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs [font-family:'Poppins',Helvetica] font-normal text-heading text-xs cursor-pointer"
                        />
                        <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-[18px] h-[18px] pointer-events-none" />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
                        Duration
                    </Label>

                    <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                        <SelectTrigger className="w-full h-[45px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                            <SelectValue
                                placeholder="Select Duration"
                                className="[font-family:'Poppins',Helvetica] font-normal text-description text-xs tracking-[0] leading-[normal]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="3-months">3 Months</SelectItem>
                            <SelectItem value="6-months">6 Months</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 self-stretch w-full mt-5">
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancelClick}
                    className="flex gap-2 px-5 py-3 w-full sm:w-auto bg-white overflow-hidden border border-solid border-[#ededed] shadow-shadow-xs items-center justify-center rounded-lg h-auto"
                >
                    <span className="w-fit mt-[-1.00px] font-medium text-heading text-sm sm:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                        Cancel
                    </span>
                </Button>
                <Button
                    type="submit"
                    className="flex gap-2 px-5 py-3 w-full sm:w-auto bg-primary-1 overflow-hidden border border-solid border-[#ff999a] shadow-shadow-xs items-center justify-center rounded-lg h-auto hover:bg-primary-1/90"
                >
                    <span className="w-fit mt-[-1.00px] font-medium text-white text-sm sm:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                        Save Changes
                    </span>
                </Button>
            </div>
        </form>
        </>
    );
};
