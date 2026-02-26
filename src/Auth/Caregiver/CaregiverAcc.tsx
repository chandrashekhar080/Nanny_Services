import React, { useState } from "react";
import { AuthLayout } from "../AuthLayout";
import { StepInfoRegister } from "./Steps/StepInfoRegister";
import { StepProfile } from "./Steps/StepProfile/StepProfile";
import { StepAvailability } from "./Steps/StepAvailability";
import { StepServicesOffered } from "./Steps/StepServicesOffered";
import { StepSkillsNExperience } from "./Steps/StepSkillsNExperience";
import { StepCertifications } from "./Steps/StepCertifications";
import { useNavigate } from "react-router-dom";

export const CaregiverAcc = (): JSX.Element => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleFinish = () => {
        navigate("/login"); // Redirect to login page
    };

    const steps = [
        { id: 1, label: "Info" },
        { id: 2, label: "Profile" },
        { id: 3, label: "Availability" },
        { id: 4, label: "Services Offered" },
        { id: 5, label: "Skills & Experience" },
        { id: 6, label: "Certifications" },
    ];

    const progressSteps = steps.map((s) => ({
        ...s,
        active: s.id === step,
        completed: s.id < step,
    }));

    const renderStep = () => {
        switch (step) {
            case 1:
                return <StepInfoRegister onNext={nextStep} progressSteps={progressSteps} />;
            case 2:
                return <StepProfile onNext={nextStep} onBack={prevStep} progressSteps={progressSteps} />;
            case 3:
                return <StepAvailability onNext={nextStep} onBack={prevStep} progressSteps={progressSteps} />;
            case 4:
                return <StepServicesOffered onNext={nextStep} onBack={prevStep} progressSteps={progressSteps} />;
            case 5:
                return <StepSkillsNExperience onNext={nextStep} onBack={prevStep} progressSteps={progressSteps} />;
            case 6:
                return <StepCertifications onNext={handleFinish} onBack={prevStep} progressSteps={progressSteps} />
            default:
                return <StepInfoRegister onNext={nextStep} progressSteps={progressSteps} />;
        }
    };

    return (
        <AuthLayout>
            <div className="flex flex-col w-full min-h-screen items-center px-0 sm:px-6 pt-5 gap-10">
                {renderStep()}
            </div>
        </AuthLayout>
    );
};
