import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardContent } from "../../../components/ui/card";
import { Link } from "react-router-dom";

export interface ProfileProgressbarButton {
    text: string;
    to?: string; // For Link component
    onClick?: () => void; // For button element
    className?: string; // Custom className
    variant?: "primary" | "secondary"; // Button style variant
}

interface WelcomeCardProps {
    title: string;
    description: string;
    progress: number;
    buttons?: ProfileProgressbarButton[]; // Array of buttons
}

export const ProfileProgressbar = ({
    title,
    description,
    progress,
    buttons = [],
}: WelcomeCardProps) => {
    return (
        <Card className="w-full bg-white-100 rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0 z-10 my-5">
            <CardContent className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 px-4 sm:px-6 py-4">

                {/* CIRCULAR PROGRESSBAR */}
                <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] self-start sm:self-center">
                    <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        styles={buildStyles({
                            textSize: "22px",
                            textColor: "#1A1A1A",
                            pathColor: "#FF999A",
                            trailColor: "#E8E8E8",
                            strokeLinecap: "round",
                        })}
                    />
                </div>

                {/* TEXT + LINKS */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 w-full gap-3 sm:gap-5">

                    {/* TITLE + DESCRIPTION */}
                    <div className="flex flex-col w-full sm:max-w-[70%]">
                        <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
                        <p className="text-sm text-gray-600 leading-normal">{description}</p>
                    </div>

                    {/* ACTION BUTTONS */}
                    {buttons.length > 0 && (
                        <div className="flex items-center justify-start sm:justify-end gap-5 w-full sm:w-auto">
                            {buttons.map((button, index) => {
                                const defaultClassName = button.variant === "primary"
                                    ? "font-poppins font-medium text-primary-1 text-sm sm:text-base"
                                    : "font-poppins font-medium text-heading text-sm sm:text-base";
                                const className = button.className || defaultClassName;

                                if (button.to) {
                                    return (
                                        <Link
                                            key={index}
                                            to={button.to}
                                            className={className}
                                        >
                                            {button.text}
                                        </Link>
                                    );
                                }

                                if (button.onClick) {
                                    return (
                                        <button
                                            key={index}
                                            onClick={button.onClick}
                                            className={className}
                                        >
                                            {button.text}
                                        </button>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    )}

                </div>

            </CardContent>
        </Card>
    );
};
