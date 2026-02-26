import { CalendarIcon, Clock3 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const EditJob = (): JSX.Element => {
    const [formData, setFormData] = useState({
        jobStatus: "Open",
        jobTitle: "Full-Time Nanny for Newborn (0–6 months)",
        location: "Brooklyn, NY",
        careType: "Full-Time",
        numberOfChildren: "1",
        childrenAgeGroup: "(0–12 months)",
        scheduleDate: "2025-10-01",
        scheduleTime: "08:30",
        startDate: "2025-10-01",
        duration: "Ongoing",
        duties:
            "Feeding & bottle prep · Sleep routine establishment · Light baby laundry · Overnight monitoring",
        experienceLevel: "3+ Years",
        compensation: "$100/hr",
        additionalNotes:
            "Prefer caregiver with newborn sleep-training experience and flexible for occasional weekend coverage. Background check required.",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // TODO: Add API call to update job details
        alert("Job details updated successfully!");
    };

    return (
        <section className="inline-flex flex-col items-center gap-[33px] w-full px-4 sm:px-6">
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
            <Card className="w-full max-w-[840px] rounded-xl shadow-[0px_0px_5px_-1px_#00000040] border-0">
                <CardContent className="flex flex-col items-center gap-[30px] p-5 sm:p-8 md:p-10">
                    <header className="flex flex-col items-start gap-1.5 self-stretch w-full">
                        <h1 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-heading text-base sm:text-lg tracking-[0] leading-[normal]">
                            Edit your job
                        </h1>
                        <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm sm:text-base tracking-[0] leading-[normal]">
                            Jobs with more detail attract more applicants
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 self-stretch w-full">
                        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 self-stretch w-full">
                            <div className="gap-6 sm:gap-8 flex flex-col items-start self-stretch w-full">
                                <div className="gap-4 sm:gap-5 flex flex-col items-start self-stretch w-full">
                                    <div className="flex flex-col items-start gap-5 self-stretch w-full">
                                        <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                            <Label htmlFor="jobStatus" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                Job Status
                                            </Label>
                                            <Select value={formData.jobStatus} onValueChange={(value) => handleInputChange("jobStatus", value)}>
                                                <SelectTrigger className="items-center gap-2 px-4 py-3 self-stretch w-full bg-white rounded-lg border border-solid border-[#ededed] h-auto">
                                                    <SelectValue placeholder="Select job status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Open">Open</SelectItem>
                                                    <SelectItem value="Closed">Closed</SelectItem>
                                                    <SelectItem value="Paused">Paused</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                            <Label htmlFor="jobTitle" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                Job Title
                                            </Label>
                                            <Input
                                                id="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                                                placeholder="e.g., Full-Time Nanny for 2 Children"
                                                className="items-center gap-2 px-4 py-3 self-stretch w-full bg-white rounded-lg border border-solid border-[#ededed] h-auto [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                            />
                                        </div>

                                        <div className="self-stretch w-full flex flex-col items-start">
                                            <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                                <Label htmlFor="location" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    Location
                                                </Label>
                                                <Input
                                                    id="location"
                                                    value={formData.location}
                                                    onChange={(e) => handleInputChange("location", e.target.value)}
                                                    placeholder="e.g., Austin, Texas"
                                                    className="items-center gap-2 px-4 py-3 self-stretch w-full bg-white rounded-lg border border-solid border-[#ededed] h-auto [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-4 sm:gap-5 self-stretch w-full">
                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 self-stretch w-full">
                                            <div className="flex-col items-start flex-1 grow flex w-full">
                                                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                                    <Label className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                        Care Type
                                                    </Label>
                                                    <Select value={formData.careType} onValueChange={(value) => handleInputChange("careType", value)}>
                                                        <SelectTrigger className="flex h-[50px] items-center justify-between p-4 self-stretch w-full bg-white rounded-[10px] border border-solid border-[#ededed]">
                                                            <SelectValue placeholder="Select care type" className="[font-family:'Poppins',Helvetica] font-normal text-heading text-xs tracking-[0.12px] leading-[normal]" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Full-Time">
                                                                Full-Time
                                                            </SelectItem>
                                                            <SelectItem value="Part-Time">
                                                                Part-Time
                                                            </SelectItem>
                                                            <SelectItem value="Occasional">
                                                                Occasional
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="gap-1.5 flex-1 grow flex flex-col items-start w-full">
                                                <Label htmlFor="numberOfChildren" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    Number of Children
                                                </Label>
                                                <Input
                                                    id="numberOfChildren"
                                                    type="number"
                                                    min="1"
                                                    value={formData.numberOfChildren}
                                                    onChange={(e) => handleInputChange("numberOfChildren", e.target.value)}
                                                    placeholder="e.g., 2"
                                                    className="flex h-[50px] items-end gap-[350px] p-4 self-stretch w-full bg-white rounded-[10px] border border-solid border-[#ededed] [font-family:'Poppins',Helvetica] font-normal text-heading text-xs tracking-[0.12px] leading-[normal]"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 self-stretch w-full">
                                            <div className="flex-col items-start flex-1 grow flex w-full">
                                                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                                    <Label className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                        Children&apos;s Age Group
                                                    </Label>
                                                    <Select value={formData.childrenAgeGroup} onValueChange={(value) => handleInputChange("childrenAgeGroup", value)}>
                                                        <SelectTrigger className="flex h-[50px] items-center justify-between p-4 self-stretch w-full bg-white rounded-[10px] border border-solid border-[#ededed]">
                                                            <SelectValue placeholder="Select age group" className="[font-family:'Poppins',Helvetica] font-normal text-heading text-xs tracking-[0.12px] leading-[normal]" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="(0–12 months)">
                                                                (0–12 months)
                                                            </SelectItem>
                                                            <SelectItem value="(1–3 years)">
                                                                (1–3 years)
                                                            </SelectItem>
                                                            <SelectItem value="(4–6 years)">
                                                                (4–6 years)
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="gap-1.5 flex-1 grow flex flex-col items-start w-full">
                                                <Label className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    Schedule & Hours
                                                </Label>
                                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                                    <div className="relative flex-1 w-full">
                                                        <Input
                                                            id="scheduleDate"
                                                            type="date"
                                                            value={formData.scheduleDate}
                                                            onChange={(e) => handleInputChange("scheduleDate", e.target.value)}
                                                            placeholder="Select Date"
                                                            className="w-full pl-4 pr-12 py-3 h-[50px] rounded-[10px] border border-solid border-[#ededed] shadow-[0px_1px_2px_0px_#1018280D] focus-visible:ring-0 focus-visible:outline-none cursor-pointer bg-white [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                                        />
                                                        <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 pointer-events-none z-10" />
                                                    </div>
                                                    <div className="relative flex-1 w-full">
                                                        <Input
                                                            id="scheduleTime"
                                                            type="time"
                                                            value={formData.scheduleTime}
                                                            onChange={(e) => handleInputChange("scheduleTime", e.target.value)}
                                                            placeholder="Select Time"
                                                            className="w-full pl-4 pr-12 py-3 h-[50px] rounded-[10px] border border-solid border-[#ededed] shadow-[0px_1px_2px_0px_#1018280D] focus-visible:ring-0 focus-visible:outline-none cursor-pointer bg-white [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                                        />
                                                        <Clock3 className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 pointer-events-none z-10" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 self-stretch w-full">
                                            <div className="gap-1.5 flex-1 grow flex flex-col items-start w-full">
                                                <Label htmlFor="startDate" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    Start Date
                                                </Label>
                                                <div className="relative w-full">
                                                    <Input
                                                        id="startDate"
                                                        type="date"
                                                        value={formData.startDate}
                                                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                                                        className="w-full pl-4 pr-12 py-3 h-[50px] rounded-[10px] border border-solid border-[#ededed] shadow-[0px_1px_2px_0px_#1018280D] focus-visible:ring-0 focus-visible:outline-none cursor-pointer bg-white [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                                    />
                                                    <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 pointer-events-none z-10" />
                                                </div>
                                            </div>

                                            <div className="flex-col items-start flex-1 grow flex w-full">
                                                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                                    <Label className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                        Duration
                                                    </Label>
                                                    <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                                                        <SelectTrigger className="flex h-[50px] items-center justify-between p-4 self-stretch w-full bg-white rounded-[10px] border border-solid border-[#ededed]">
                                                            <SelectValue placeholder="Select duration" className="[font-family:'Poppins',Helvetica] font-normal text-heading text-xs tracking-[0.12px] leading-[normal]" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Ongoing">Ongoing</SelectItem>
                                                            <SelectItem value="Temporary">
                                                                Temporary
                                                            </SelectItem>
                                                            <SelectItem value="Fixed Term">
                                                                Fixed Term
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 self-stretch w-full">
                                            <div className="gap-1.5 flex-1 grow flex flex-col items-start w-full">
                                                <Label htmlFor="duties" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    Duties & Responsibilities
                                                </Label>
                                                <Input
                                                    id="duties"
                                                    value={formData.duties}
                                                    onChange={(e) => handleInputChange("duties", e.target.value)}
                                                    placeholder="e.g., Meal preparation, homework help, light housekeeping"
                                                    className="items-center gap-2 px-4 py-3 self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-[#ededed] h-auto [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                                />
                                            </div>

                                            <div className="flex-col items-start flex-1 grow flex w-full">
                                                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                                    <Label className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                        Experience Level Required
                                                    </Label>
                                                    <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange("experienceLevel", value)}>
                                                        <SelectTrigger className="flex h-[50px] items-center justify-between p-4 self-stretch w-full bg-white rounded-[10px] border border-solid border-[#ededed]">
                                                            <SelectValue placeholder="Select experience level" className="[font-family:'Poppins',Helvetica] font-normal text-heading text-xs tracking-[0.12px] leading-[normal]" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="3+ Years">3+ Years</SelectItem>
                                                            <SelectItem value="5+ Years">5+ Years</SelectItem>
                                                            <SelectItem value="Entry Level">
                                                                Entry Level
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                            <Label htmlFor="compensation" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                Compensation
                                            </Label>
                                            <Input
                                                id="compensation"
                                                type="text"
                                                value={formData.compensation}
                                                onChange={(e) => handleInputChange("compensation", e.target.value)}
                                                placeholder="e.g., $20-25/hour or $3,000/month"
                                                className="items-center gap-2 px-4 py-3 self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-[#ededed] h-auto [font-family:'Poppins',Helvetica] font-normal text-heading text-sm"
                                            />
                                        </div>

                                        <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                                            <div className="inline-flex items-center gap-1.5">
                                                <Label htmlFor="additionalNotes" className="mt-[-1.00px] font-medium text-sub-heading text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    Additional Notes
                                                </Label>
                                                <span className="font-normal text-description text-sm [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                    (Optional)
                                                </span>
                                            </div>
                                            <Textarea
                                                id="additionalNotes"
                                                value={formData.additionalNotes}
                                                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                                                placeholder="Any additional information about the job, family, or requirements..."
                                                className="h-[120px] items-start gap-2 p-4 self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-[#ededed] [font-family:'Poppins',Helvetica] font-normal text-heading text-sm resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                                    <div className="flex self-stretch w-full items-center justify-center rounded-lg">
                                        <Button 
                                            type="submit"
                                            className="flex gap-2 px-5 py-3 w-full bg-primary-1 overflow-hidden border border-solid border-[#ff999a] shadow-shadow-xs items-center justify-center rounded-lg h-auto hover:bg-primary-1/90"
                                        >
                                            <span className="w-fit mt-[-1.00px] font-medium text-white text-sm sm:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                                                Save Details
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};
