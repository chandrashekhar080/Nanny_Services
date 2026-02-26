import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";


const formFields = [
    { id: "fullName", label: "Full Name / Family Name", placeholder: "Enter your full name or family name" },
    { id: "email", label: "Email Address", placeholder: "Enter your email" },
    { id: "password", label: "Password", placeholder: "Create a secure password", type: "password" },
    { id: "confirmPassword", label: "Confirm Password", placeholder: "Re-enter your password", type: "password" },
];

export const StepInfoRegister = ({ onNext }: { onNext: () => void }): JSX.Element => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div className="inline-flex flex-col items-center gap-[33px] w-full max-w-[790px]">
            <Card className="w-full rounded-xl overflow-hidden shadow-[0px_0px_5px_-1px_#00000040]">
                <CardContent className="flex flex-col items-center gap-[30px] p-5 sm:p-10">
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-lg text-center">Create Your Family Account</h1>
                        <p className="text-center text-sm text-black">
                            Start your journey by sharing essential details about your household and childcare needs. This helps us connect you with the most suitable caregivers.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                        {formFields.map((field) => (
                            <div key={field.id} className="flex flex-col gap-2 w-full">
                                <Label htmlFor={field.id}>{field.label}</Label>
                                <Input id={field.id} type={field.type || "text"} 
                                
                                 />
                            </div>
                        ))}

                        <Button type="submit" className="w-full bg-primary-1 hover:bg-primary-100 text-white">
                            Continue
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
