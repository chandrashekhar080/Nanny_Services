import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../AuthLayout";
import { StepInfoRegister } from "./Steps/StepInfoRegister";
import { StepLocation } from "./Steps/StepLocation";
import { StepChildcareRequirements } from "./Steps/StepChildcareRequirements";
import { StepPreferredStartDate } from "./Steps/StepPreferredStartDate";

export const FamilyAcc = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleFinish = () => {
    // Optional: Call API here to save registration data
    navigate("/login"); // Redirect to login page
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepInfoRegister onNext={nextStep} />;
      case 2:
        return <StepLocation onNext={nextStep} onBack={prevStep} />;
      case 3:
        return (
          <StepChildcareRequirements onNext={nextStep} onBack={prevStep} />
        );
      case 4:
        return (
          <StepPreferredStartDate onNext={handleFinish} onBack={prevStep} />
        );
      default:
        return <StepInfoRegister onNext={nextStep} />;
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
