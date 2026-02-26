import { Edit2Icon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ProfileProgressbar } from "../../../../sections/Common/ProfileProgressbar";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface MyProfileProps {
    onEditClick?: () => void;
}

const familyInfoData = [
    { label: "Family Name", value: "The Johnson Family" },
    { label: "Location", value: "Austin, Texas" },
    { label: "Subscription Plan", value: "Premium" },
    { label: "Email", value: "email@example.com" },
    { label: "Phone Number", value: "+12-4547-4843" },
];

const childcarePreferencesData = [
    { label: "Number of Children", value: "2" },
    { label: "Children's Age Group", value: "6 & 9 years old" },
    { label: "Schedule & Hours", value: "Mon–Fri, 3 PM – 7 PM" },
    { label: "Preferred Start Date", value: "September 22, 2025" },
    { label: "Duration", value: "Ongoing" },
];

export const MyProfile = ({ onEditClick }: MyProfileProps = {}): JSX.Element => {
    const [showBar, setShowBar] = useState(true);

    const handleEditClick = () => {
        if (onEditClick) {
            onEditClick();
        }
    };

    return (
        <div className="w-full">
            <h3 className="text-lg text-heading font-semibold mb-3 [font-family:'Poppins',Helvetica]">
                My Profile
            </h3>
            <div>
                {showBar && (
                    <ProfileProgressbar
                        title="Welcome To All Around Nanny Services"
                        description="Let's complete your profile so we can connect you with caregivers."
                        progress={35}
                        buttons={[
                            {
                                text: "Skip for Now",
                                onClick: () => setShowBar(false),
                                variant: "secondary",
                            },
                        ]}
                    />
                )}
            </div>
            <div className="flex gap-5 flex-col">
                <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
                    <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 self-stretch">
                            <div className="flex flex-col sm:flex-row items-start gap-2.5 flex-1 w-full sm:w-auto">
                                <div className="flex flex-col w-20 h-20 sm:w-[120px] sm:h-[120px] items-center justify-center gap-2.5 rounded-[150px] bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//frame-1171276177.png)_50%_50%_/_cover] relative flex-shrink-0">
                                    <img src="/assets/img/images-5.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div className="flex flex-col items-start justify-center gap-1 self-stretch">
                                    <h3 className="flex [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-lg sm:text-xl tracking-[0] leading-[normal]">
                                        Caroline O.
                                    </h3>

                                    <p className="flex [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                                    We are a family of four seeking part-time tutoring and childcare support. We value kindness, safety, and learning.
                                    </p>

                                    <p className="flex [font-family:'Poppins',Helvetica] font-medium text-[#8f8f8f] text-sm tracking-[0] leading-[normal]">
                                        Austin , Texas
                                    </p>
                                </div>
                            </div>

                            <Button variant="outline" className="rounded-[60px] border-black w-full sm:w-auto self-stretch sm:self-auto" onClick={handleEditClick}>
                                <Edit2Icon className="w-[18px] h-[18px]" />
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-app-primary text-base text-center tracking-[-0.32px] leading-[19.2px]">
                                    Edit
                                </span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
                    <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between self-stretch gap-3 sm:gap-0">
                            <h2 className="font-semibold text-lg [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                                Family Information
                            </h2>

                            <Button variant="outline" className="rounded-[60px] border-black w-full sm:w-auto">
                                <Edit2Icon className="w-[18px] h-[18px]" />
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-app-primary text-base text-center tracking-[-0.32px] leading-[19.2px]">
                                    Edit
                                </span>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-7 self-stretch">
                            {familyInfoData.map((item, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="flex flex-col items-start gap-3 flex-1">
                                        <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                                            {item.label}
                                        </h3>

                                        <p className="[font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
                            <div className="flex items-start gap-2 self-stretch">
                                <div className="flex flex-col items-start gap-3 flex-1">
                                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                                        Profile Bio
                                    </h3>

                                    <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                                        We are a family of four seeking part-time tutoring and
                                        childcare support. We value kindness, safety, and learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
                    <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between self-stretch gap-3 sm:gap-0">
                            <h2 className="font-semibold text-lg [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                                Childcare Preferences
                            </h2>

                            <Button variant="outline" className="rounded-[60px] border-black w-full sm:w-auto">
                                <Edit2Icon className="w-[18px] h-[18px]" />
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-app-primary text-base text-center tracking-[-0.32px] leading-[19.2px]">
                                    Edit
                                </span>
                            </Button>
                        </div>

                        <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
                            <div className="flex items-start gap-2 self-stretch">
                                <div className="flex flex-col items-start gap-3 flex-1">
                                    <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                                        Childcare Needs
                                    </h3>

                                    <p className="[font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                                        Tutoring, Part-Time Care, Homework Help
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-7 self-stretch">
                            {childcarePreferencesData.map((item, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="flex flex-col items-start gap-3 flex-1">
                                        <h3
                                            className={`[font-family:'Poppins',Helvetica] ${item.label === "Duration" ? "font-semibold" : "font-medium"} text-heading text-base tracking-[0] leading-[normal]`}
                                        >
                                            {item.label}
                                        </h3>

                                        <p className="[font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>


        </div>
    );
};

