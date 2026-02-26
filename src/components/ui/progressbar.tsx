import React from "react";
import { CheckIcon } from "lucide-react";

interface Step {
    id: number;
    label?: string;
    active: boolean;
    completed: boolean;
}

interface ProgressBarProps {
    progressSteps: Step[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progressSteps }) => {
    return (
        <div className="w-full flex items-center">
            {progressSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                    {/* Circle */}
                    <div className="relative z-10">
                        <div
                            className={`w-[31.52px] h-[31.52px] rounded-[15.76px] flex items-center justify-center ${step.completed
                                ? "bg-primary-1"
                                : step.active
                                    ? "border-[1.97px] border-solid border-[#ff999a]"
                                    : "border-[1.97px] border-solid border-[#bfbfbf]"
                                }`}
                        >
                            {step.completed && <CheckIcon className="w-5 h-5 text-white" />}
                            {step.active && !step.completed && (
                                <div className="w-2.5 h-2.5 bg-primary-1 rounded-[4.92px]" />
                            )}
                        </div>
                    </div>

                    {/* Connector line */}
                    {index < progressSteps.length - 1 && (
                        <div
                            className={`flex-1 h-[1.97px] ${step.completed
                                ? "bg-primary-1"
                                : step.active
                                    ? "bg-[#bfbfbf]"
                                    : "bg-[#bfbfbf]"
                                }`}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
