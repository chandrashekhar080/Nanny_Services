import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { ProgressBar } from "../../../../components/ui/progressbar";

interface Props {
    onNext: () => void;
    progressSteps: { id: number; label: string; active: boolean; completed: boolean }[];
}

export const StepInfoRegister: React.FC<Props> = ({ onNext, progressSteps }) => {
    return (
        <div className="inline-flex flex-col items-center gap-8 relative w-full max-w-[790px]">
            <Card className="flex flex-col items-center gap-6 p-8 w-full rounded-xl shadow-[0px_0px_5px_-1px_#00000040] overflow-hidden">
                <CardContent className="flex flex-col items-center gap-8 w-full p-0">
                    {/* Progress Bar Inside Card */}
                    <ProgressBar progressSteps={progressSteps} />

                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-heading text-lg text-center">
                            Join as a Caregiver
                        </h1>
                        <p className="font-normal text-sub-heading text-sm text-center">
                            Create your account and connect with families seeking trusted childcare providers.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            {/* Full Name */}
                            <div className="flex flex-col gap-1.5 w-full">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="Enter your full name" />
                            </div>

                            {/* Phone Number & Email Address in same row */}
                            <div className="flex gap-4 w-full">
                                <div className="flex flex-col gap-1.5 flex-1">
                                    <Label htmlFor="phoneNumber">Phone Number</Label>
                                    <Input id="phoneNumber" placeholder="Enter your phone number" />
                                </div>

                                <div className="flex flex-col gap-1.5 flex-1">
                                    <Label htmlFor="emailAddress">Email Address</Label>
                                    <Input id="emailAddress" placeholder="Enter your email address" />
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-1.5 w-full">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="Enter your location" />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5 w-full">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Create a secure password" />
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-1.5 w-full">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input id="confirmPassword" type="password" placeholder="Re-enter your password" />
                            </div>
                        </div>

                        {/* Next Button */}
                        <Button
                            onClick={onNext}
                            type="button"
                            className="w-full bg-primary-1 hover:bg-primary-1/90 text-white"
                        >
                            Create Account
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
