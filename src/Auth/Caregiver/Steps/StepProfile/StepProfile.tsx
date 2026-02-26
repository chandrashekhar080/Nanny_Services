import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Label } from "../../../../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import { CameraIcon } from "lucide-react";
import { ProgressBar } from "../../../../components/ui/progressbar";

interface Props {
    onNext: () => void;
    onBack: () => void;
    progressSteps: { id: number; label: string; active: boolean; completed: boolean }[];
}

export const StepProfile: React.FC<Props> = ({ onNext, onBack, progressSteps }) => {
    const [profilePic, setProfilePic] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePic(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="inline-flex flex-col items-center gap-8 w-full max-w-[790px]">
            <Card className="flex flex-col items-center gap-6 p-8 w-full rounded-xl shadow-[0px_0px_5px_-1px_#00000040] overflow-hidden">
                <CardContent className="flex flex-col items-center gap-6 w-full p-0">
                    {/* Progress Bar */}
                    <ProgressBar progressSteps={progressSteps} />

                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-heading text-lg text-center">
                            Build Your Caregiver Profile
                        </h1>
                        <p className="font-normal text-sub-heading text-sm text-center">
                            Introduce yourself to families and highlight your childcare skills and experience.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-6 w-full">
                        {/* Profile Picture Upload */}
                        <div className="flex items-center justify-center w-full">
                            <label className="relative w-[120px] h-[120px] cursor-pointer rounded-full flex items-center justify-center bg-[#00000066] hover:bg-[#00000080] transition-colors overflow-hidden">
                                {profilePic ? (
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <CameraIcon className="w-6 h-6 text-white" />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </label>
                        </div>

                        {/* Profile Title */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <Label htmlFor="profileTitle">Profile Title</Label>
                            <Input
                                id="profileTitle"
                                placeholder="e.g., Experienced Nanny & Babysitter (8+ Years)"
                            />
                        </div>

                        {/* About Me */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <Label htmlFor="aboutMe">About Me</Label>
                            <Textarea
                                id="aboutMe"
                                placeholder="Write a short bio about your caregiving style & experience"
                                className="h-[120px] resize-none"
                            />
                        </div>

                        {/* Availability & Duration Preference */}
                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col gap-1.5 flex-1">
                                <Label htmlFor="availability">Availability</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Availability" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="full-time">Full-time</SelectItem>
                                        <SelectItem value="part-time">Part-time</SelectItem>
                                        <SelectItem value="weekends">Weekends</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-1.5 flex-1">
                                <Label htmlFor="duration">Duration Preference</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Duration Preference" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="short-term">Short-term</SelectItem>
                                        <SelectItem value="long-term">Long-term</SelectItem>
                                        <SelectItem value="flexible">Flexible</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Compensation */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <Label>Compensation Expectation</Label>
                            <div className="flex gap-4 w-full">
                                <Select defaultValue="usd">
                                    <SelectTrigger className="w-auto">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="usd">USD</SelectItem>
                                        <SelectItem value="eur">EUR</SelectItem>
                                        <SelectItem value="gbp">GBP</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Input placeholder="Hourly Rate" className="flex-1" />
                                <Input placeholder="Monthly Rate" className="flex-1" />
                            </div>
                        </div>

                        {/* Languages Spoken */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <Label htmlFor="languages">Languages Spoken</Label>
                            <Input
                                id="languages"
                                placeholder="e.g., English, Spanish, French"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 w-full">
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-black border-none"
                                onClick={onBack}
                            >
                                Previous
                            </Button>

                            <Button
                                type="button"
                                className="flex-1 w-full bg-primary-1 hover:bg-primary-1 text-white"
                                onClick={onNext}
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
