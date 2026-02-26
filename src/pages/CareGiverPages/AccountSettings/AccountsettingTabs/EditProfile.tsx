import { CalendarIcon, Camera, Delete, DeleteIcon, ImageIcon, ImagesIcon } from "lucide-react";
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
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../CareGiverDashboard/StatusBadge";
import { MdOutlineDelete } from "react-icons/md";


interface WeekDay {
    name: string;
    enabled: boolean;
    from: string;
    to: string;
}

const keySkills = [
  "CPR & First Aid Trained",
  "Early Learning Activities",
  "Creative Play",
  "Storytelling",
  "Time Management",
  "Strong Communication",
];

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

export const EditProfilecaregiver = ({ onCancel, onSave }: EditProfileProps = {}): JSX.Element => {
    const [formData, setFormData] = useState({
        fullName: "Caroline O.",
        email: "email@example.com",
        phone: "+12-4547-4843",
        location: "Austin, Texas",
        bio: "Write a short bio about your caregiving style & experience",
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

    const [preview, setPreview] = useState(null);


const handleFileChange = (e : any) => {
const file = e.target.files[0];
if (!file) return;


const allowed = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
if (!allowed.includes(file.type)) {
alert("Only PNG, JPG, JPEG, and PDF files are allowed.");
return;
}


if (file.type === "application/pdf") {
setPreview("pdf");
} else {
const url = URL.createObjectURL(file);
setPreview(url);
}
};


const handleRemoveImage = () => {
    setPreview(null);
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

                <Card className="flex flex-col items-start border rounded-[12px] p-6 gap-5 w-full">
                 <h2 className="[font-family:'Poppins',Helvetica] w-full flex items-start font-semibold text-black text-lg tracking-[0] leading-[normal]">
                Personal Information
            </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                        <div className="flex flex-col gap-3">
                            <Label
                                htmlFor="fullName"
                                className="[font-family:'Poppins',Helvetica] font-medium text-heading text-xs tracking-[0] leading-[normal]"
                            >
                                Full Name 
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

                  
                </Card>
            </div>
<Card className="flex flex-col items-start border rounded-[12px] p-6 gap-5 w-full">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                Caregiver Profile
            </h2>
             <div className="flex flex-col gap-3 w-full">
                                    <Label
                                        htmlFor="bio"
                                        className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                                    >
                                       Profile Title
                                    </Label>
                                    <Input
                                        id="bio"
                                        value=""
                                        onChange={(e) => handleInputChange("bio", e.target.value)}
                                        placeholder="e.g., Babysitter with 3+ years experience"
                                        className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                    />
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
                                     value=""
                                     onChange={(e) => handleInputChange("bio", e.target.value)}
                                     placeholder="Write a short bio about your caregiving style & experience"
                                     className="min-h-[130px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                 />
                             </div>
                              <div className="flex flex-col gap-3 w-full">
                                                     <Label
                                                         htmlFor="bio"
                                                         className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                                                     >
                                                         Services Offered
                                                     </Label>
                                                     <Input
                                                         id="bio"
                                                         value=""
                                                         onChange={(e) => handleInputChange("bio", e.target.value)}
                                                         placeholder="Enter Services Offered"
                                                         className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                                     />
                                                 </div>
           
</Card>
<Card className="flex flex-col items-start border rounded-[12px] p-6 gap-5 w-full">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
               Availability & Job Preferences
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
                       Availability
                    </Label>

                    <Select value={formData.ageGroups} onValueChange={(value) => handleInputChange("ageGroups", value)}>
                        <SelectTrigger className="w-full h-[45px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                            <SelectValue
                                placeholder="Select Availability"
                                className="[font-family:'Poppins',Helvetica] font-normal text-description text-xs tracking-[0] leading-[normal]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            {/* <SelectItem value="0-2">Full Time</SelectItem>
                            <SelectItem value="3-5">Part Time</SelectItem> */}
                            {/* <SelectItem value="6-9">6-9 years</SelectItem>
                            <SelectItem value="10-12">10-12 years</SelectItem> */}
                            {/* <SelectItem value="13+">13+ years</SelectItem> */}
                        </SelectContent>
                    </Select>
                </div>
 <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
                      Select Duration Preference
                    </Label>

                    <Select value={formData.ageGroups} onValueChange={(value) => handleInputChange("ageGroups", value)}>
                        <SelectTrigger className="w-full h-[45px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                            <SelectValue
                                placeholder="Select Availability"
                                className="[font-family:'Poppins',Helvetica] font-normal text-description text-xs tracking-[0] leading-[normal]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            {/* <SelectItem value="0-2">Full Time</SelectItem>
                            <SelectItem value="3-5">Part Time</SelectItem> */}
                            {/* <SelectItem value="6-9">6-9 years</SelectItem>
                            <SelectItem value="10-12">10-12 years</SelectItem> */}
                            {/* <SelectItem value="13+">13+ years</SelectItem> */}
                        </SelectContent>
                    </Select>
                </div>
               
            </div>

            <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex items-start gap-5 w-full">
                    <div className="flex flex-col items-start gap-3 flex-1">
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[normal]">
                            Compensation Expectation
                        </h3>

                        <div className="w-full">
                            <div className="flex flex-col sm:flex-row gap-5 w-full items-start sm:items-center justify-between sm:gap-0">
                                <div className="flex flex-col items-start gap-1.5">
                                    {/* <div className="font-semibold text-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                       USD
                                    </div> */}
                                     <div className="flex flex-col items-start sm:items-end justify-center gap-2.5 w-full sm:w-auto">
                                    <div className="flex flex-col items-start sm:items-end justify-center gap-4 w-full sm:w-auto">
                                        <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                                            <SelectTrigger className="h-auto px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                                                <SelectValue className="text-heading text-sm [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="utc-8">
                                                   USD
                                                </SelectItem>
                                                <SelectItem value="utc-5">
                                                   INR
                                                </SelectItem>
                                                <SelectItem value="utc+5:30">
                                                  USD
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                </div>
                                 <div className="flex flex-col items-start gap-1.5">

                                    {/* <div className="font-normal text-sub-heading text-sm [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                       Hourly Rate
                                    </div> */}

                                      <div className="flex flex-col items-start sm:items-end justify-center gap-2.5 w-full sm:w-auto">
                                    <div className="flex flex-col items-start sm:items-end justify-center gap-4 w-full sm:w-auto">
                                       <Input
                                                         id="bio"
                                                         value={""}
                                                         onChange={(e) => handleInputChange("bio", e.target.value)}
                                                         placeholder="Hourly Rate"
                                                         className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                                     />
                                    </div>
                                    </div>
                                </div>
                                 <div className="flex flex-col items-start gap-1.5">

                                    {/* <div className="font-normal text-sub-heading text-sm [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                       Monthly Rate
                                    </div> */}

                                <div className="flex flex-col items-start sm:items-end justify-center gap-2.5 w-full sm:w-auto">
                                    <div className="flex flex-col items-start sm:items-end justify-center gap-4 w-full sm:w-auto">
                                       <Input
                                                         id="bio"
                                                         value={""}
                                                         onChange={(e) => handleInputChange("bio", e.target.value)}
                                                         placeholder="Monthly Rate"
                                                         className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                                     />
                                    </div>
                                </div>


                                </div>

                               
                            </div>
                              <div className="flex flex-col sm:flex-row w-full items-start sm:items-center sm:mt-5 justify-between gap-4 sm:gap-0">
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
                            <div className="flex flex-col w-full items-start gap-4 sm:gap-5 mt-8 sm:mt-5">
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
</Card>
<Card className="flex flex-col items-start border rounded-[12px] p-6 gap-5 w-full">
            <div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
                <h2>Services Offered</h2>
                <div className="w-full flex flex-col items-start gap-3">
                    <Label htmlFor="preferredStartDate" className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
                      Services Offered
                    </Label>

                    <div className="relative w-full">
                        <Input
                            id="preferredStartDate"
                            type="text"
                            value={""}
                            placeholder="Enter or Choose Services Offered"
                            onChange={(e) => handleInputChange("preferredStartDate", e.target.value)}
                            className="w-full h-[45px] px-4 pr-12 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs [font-family:'Poppins',Helvetica] font-normal text-heading text-xs cursor-pointer"
                        />
                    </div>
                </div>

            
            </div>
            </Card>

            <Card className="flex flex-col items-start border rounded-[12px] p-6 gap-5 w-full">
                <h2>Skills & Experience</h2>
                 <div className="flex items-center gap-5">
                     <div className="w-full flex flex-col gap-3">
                                                     <Label
                                                         htmlFor="bio"
                                                         className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                                                     >
                                                         Years of Experience
                                                     </Label>
                                                     <Input
                                                         id="bio"
                                                         value={formData.bio}
                                                         onChange={(e) => handleInputChange("bio", e.target.value)}
                                                         placeholder="e.g., 5+ years"
                                                         className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                                     />
                                                 </div>
                                                  <div className="flex flex-col items-start gap-3 flex-1 w-full sm:w-auto">
                    <Label className="[font-family:'Poppins',Helvetica] font-medium text-sub-heading text-xs tracking-[0] leading-[normal]">
Age Groups Worked With
                    </Label>

                    <Select value={formData.ageGroups} onValueChange={(value) => handleInputChange("ageGroups", value)}>
                        <SelectTrigger className="w-full h-[45px] px-4 py-3 bg-white rounded-lg border border-solid border-[#cfd4dc] shadow-shadow-xs">
                            <SelectValue
                                placeholder="Select Age Groups"
                                className="[font-family:'Poppins',Helvetica] font-normal text-description text-xs tracking-[0] leading-[normal]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            {/* <SelectItem value="0-2">Full Time</SelectItem>
                            <SelectItem value="3-5">Part Time</SelectItem> */}
                            {/* <SelectItem value="6-9">6-9 years</SelectItem>
                            <SelectItem value="10-12">10-12 years</SelectItem> */}
                            {/* <SelectItem value="13+">13+ years</SelectItem> */}
                        </SelectContent>
                    </Select>
                </div>
                 </div>
                   <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
                               <div className="flex items-start gap-2 self-stretch">
                                 <div className="flex flex-col items-start gap-3">
                                   <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                                   Skills
                                   </h3>
                 
                                   <p className="[font-family:'Poppins',Helvetica] grid grid-cols-4 max-md:grid-cols-2 gap-2 font-normal text-description-b text-base tracking-[0] leading-[normal]">
                                     {/* Add availability data here */}
                                     {keySkills.map((service) => (
                                       <p>
                                         <Badge text={service} />
                                       </p>
                                     ))}
                                   </p>
                                 </div>
                               </div>
                             </div>
                              <div className="flex flex-col gap-3 w-full">
                                                     <Label
                                                         htmlFor="bio"
                                                         className="[font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]"
                                                     >
                                                         Skills Summary
                                                     </Label>
                                                     <Input
                                                         id="bio"
                                                         value={""}
                                                         onChange={(e) => handleInputChange("bio", e.target.value)}
                                                         placeholder="Short paragraph about strengths (e.g., “CPR certified, excellent at creating fun learning activities, strong multitasker.”)"
                                                         className="h-[45px] px-4 py-[13px] bg-white rounded-md border border-[#dedede] [font-family:'Poppins',Helvetica] font-normal text-[#6f6f6f] text-xs resize-none"
                                                     />
                                                 </div>

                </Card>
                <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
<CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
<div className="flex flex-col items-start gap-3 w-full">
<h2 className="font-semibold mb-5 text-lg [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
Skills & Experience
</h2>


{/* Upload Box */}
<label className="w-full h-52 border rounded-[12px] flex flex-col justify-center items-center p-5 cursor-pointer bg-white hover:bg-gray-50">
<input type="file" accept="image/*,application/pdf" className="hidden" onChange={handleFileChange} />
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
<path d="M1.99282 64.5644C2.67934 68.7119 6.28281 71.875 10.625 71.875H63.125C67.9576 71.875 71.875 67.9576 71.875 63.125V46.4567M1.99282 64.5644C1.91534 64.0963 1.875 63.6154 1.875 63.125V10.625C1.875 5.79251 5.79251 1.875 10.625 1.875H63.125C67.9576 1.875 71.875 5.79251 71.875 10.625V46.4567M1.99282 64.5644L18.7083 47.8488C21.6835 45.2457 26.0346 44.9609 29.3238 47.1536L31.5515 48.6385C34.7216 50.7521 38.8958 50.5709 41.8713 48.1909L53.4567 38.9221C56.4098 36.5596 60.5232 36.3745 63.6623 38.3993C64.0101 38.6237 64.3198 38.9015 64.6125 39.1946L71.875 46.4567M32.5 23.75C32.5 28.5826 28.5826 32.5 23.75 32.5C18.9175 32.5 15 28.5826 15 23.75C15 18.9175 18.9175 15 23.75 15C28.5826 15 32.5 18.9175 32.5 23.75Z" stroke="#6F6F6F" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className="text-xs font-medium text-center text-gray-500 mt-1">
   Drag & Drop files here or click below to upload <br />
(GIF, JPG or PNG up to 20 MB each)
</span>
<span className="text-lg mt-2 font-bold text-[#FF999A]">Upload Image</span>
</label>


{/* Preview */}
{preview && (
<div className="mt-3 w-44 h-52 border rounded-[12px] p-2 flex justify-center items-center bg-gray-100">
{preview === "pdf" ? (
<p className="text-sm text-gray-600">PDF Uploaded</p>
) : (
    <div className="relative">
<img src={preview} alt="Preview" className="w-full h-full object-cover rounded-[10px]" />
<span  className="absolute top-2 right-2 cursor-pointer"><MdOutlineDelete size={32} onClick={() => handleRemoveImage()}/></span>
</div>
)}
</div>
)}
</div>
</CardContent>
</Card>


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
