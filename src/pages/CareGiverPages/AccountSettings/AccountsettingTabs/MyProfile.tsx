import { Edit2Icon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ProfileProgressbar } from "../../../../sections/Common/ProfileProgressbar";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegComment, FaStar } from "react-icons/fa6";
import { Badge } from "../../CareGiverDashboard/StatusBadge";

interface MyProfileProps {
  onEditClick?: () => void;
}

const familyInfoData = [
  { label: "Full Name", value: "Jessica Martinez" },
  { label: "Email Address", value: "email@example.com" },
  { label: "Phone Number", value: "+12-4547-4843" },
  { label: "Location", value: "Austin, Texas" },
  { label: "Subscription Plan", value: "Premium" },
];

// const childcarePreferencesData = [
//   { label: "Number of Children", value: "2" },
//   { label: "Children's Age Group", value: "6 & 9 years old" },
//   { label: "Schedule & Hours", value: "Mon–Fri, 3 PM – 7 PM" },
//   { label: "Preferred Start Date", value: "September 22, 2025" },
//   { label: "Duration", value: "Ongoing" },
// ];

const availablities = [
  "Full-Time",
  "Part-Time",
  "Temporary",
  "Overnight",
  "Friday",
];
const servicesOffered = [
  "Infant & Newborn Care",
  "Tutoring & Homework Help",
  "Meal Preparation",
  "School Drop-off & Pickup",
  "Light Housekeeping",
  "Special Needs Care",
  "Mother’s Helper",
];
const keySkills = [
  "CPR & First Aid Trained",
  "Early Learning Activities",
  "Creative Play & Storytelling",
  "Time Management",
  "Strong Communication",
];

export const MyProfile = ({
  onEditClick,
}: MyProfileProps = {}): JSX.Element => {
  const [showBar, setShowBar] = useState(true);

  const handleEditClick = () => {
    if (onEditClick) {
      onEditClick();
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-lg text-heading font-semibold mb-3 [font-family:'Poppins',Helvetica]">
          My Profile
        </h3>
        <Button
          variant="outline"
          className="rounded-[60px] border-black w-full sm:w-auto self-stretch sm:self-auto"
          onClick={handleEditClick}
        >
          <Edit2Icon className="w-[18px] h-[18px]" />
          <span className="[font-family:'Poppins',Helvetica] font-medium text-app-primary text-base text-center tracking-[-0.32px] leading-[19.2px]">
            Edit
          </span>
        </Button>
      </div>

      <div>
        {showBar && (
          <ProfileProgressbar
            title="Add 3 more items to reach 'Excellent' status"
            description="Let's get started by completing your profile so we can connect you with the right families."
            progress={78}
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
        {/* personal Info */}
        <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
          <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 self-stretch">
              <div className="flex flex-col sm:flex-row items-start gap-2.5 flex-1 w-full sm:w-auto">
                <div className="flex flex-col w-20 h-20 sm:w-[120px] sm:h-[120px] items-center justify-center gap-2.5 rounded-[150px] bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//frame-1171276177.png)_50%_50%_/_cover] relative flex-shrink-0">
                  <img
                    src="/assets/img/images-5.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 self-stretch">
                  <h3 className="flex [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-lg sm:text-xl tracking-[0] leading-[normal]">
                    Experienced Nanny & Babysitter (8+ Years)
                  </h3>

                  <p className="flex [font-family:'Poppins',Helvetica] font-medium text-description-b text-base tracking-[0] leading-[normal]">
                    8+ years experience
                  </p>

                  <p className="flex [font-family:'Poppins',Helvetica] text-sm tracking-[0] leading-[normal] gap-1 items-center text-black font-normal">
                    <span>
                      <IoLocationOutline size={20}/>
                    </span>
                    Springfield, IL
                    <span>
                      <FaRegComment size={16}/>
                    </span>{" "}
                    English
                  </p>
                  <p className="flex items-center [font-family:'Poppins',Helvetica] gap-1 font-normal text-[#050505] text-sm tracking-[0] ">
                    <span>
                      <FaStar size={20} className="text-yellow-400" />
                    </span>
                    4.5 <span className="text-gray-400">(2)</span> 
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/*caregiver info */}
        <Card className="self-stretch bg-white rounshadow-[0px_0px_6px_#0000001a] border-0">
          <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between self-stretch gap-3 sm:gap-0">
              <h2 className="font-semibold text-lg [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                Personal Information
              </h2>
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
          </CardContent>
        </Card>
        {/*Availability*/}

        <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
          <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between self-stretch gap-3 sm:gap-0">
              <h2 className="font-semibold text-lg [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                Availability
              </h2>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="flex flex-col items-start gap-3 flex-1">
                  <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                    Availability
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] flex items-center gap-5 font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    {/* Add availability data here */}
                    {availablities.map((availability) => (
                      <p>
                        <Badge text={availability} />
                      </p>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="flex flex-col items-start gap-3 flex-1">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                    Schedule
                  </h3>

                  <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    Mon–Fri, 9 AM – 6 PM (Flexible weekends)
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3 flex-1">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                    Duration Preference
                  </h3>

                  <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    Ongoing
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                  Rates
                </h3>
                <div className="flex items-start gap-3 flex-1">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                    Hourly
                  </h3>

                  <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    $17/hour
                  </p>
                </div>
                <div className="flex items-start gap-3 flex-1">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                    Monthly
                  </h3>

                  <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    $1780/Monthly
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
          <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                    Services Offered
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] grid grid-cols-4 max-md:grid-cols-2 gap-2 font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    {/* Add availability data here */}
                    {servicesOffered.map((service) => (
                      <p>
                        <Badge text={service} />
                      </p>
                    ))}
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
                Skills & Experience
              </h2>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="fleded-[20px] x flex-col items-start gap-3 flex-1">
                  <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                    Years of Experience
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    8+ years
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="flex flex-col items-start gap-3 flex-1">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base tracking-[0] leading-[normal]">
                    Age Groups Worked With
                  </h3>

                  <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    <ul className="list list-disc ml-6">
                      <li>Toddler (1–3 years)</li>
                      <li> Preschool (3–5 years)</li>
                      <li>Infant (0–12 months) </li>
                      <li> School Age (6–12 years)</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                    Key Skills
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

            <div className="flex flex-col items-start gap-4 sm:gap-7 self-stretch">
              <div className="flex items-start gap-2 self-stretch">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-medium text-base [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                    Skills Summary
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] grid grid-cols-4 max-md:grid-cols-2 gap-2 font-normal text-description-b text-base tracking-[0] leading-[normal]">
                    CPR certified, excellent at creating fun learning
                    activities, strong multitasker.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="self-stretch bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
          <CardContent className="flex flex-col items-start gap-5 p-4 sm:p-6">
            <div className="flex flex-col items-start justify-between self-stretch gap-3 sm:gap-0">
              <h2 className="font-semibold mb-5 text-lg [font-family:'Poppins',Helvetica] text-heading tracking-[0] leading-[normal]">
                Certifications{" "}
              </h2>
             <div className="w-44 h-52 border rounded-[12px] flex justify-center items-center p-5">
              <img src="/assets/img/cert.png" alt="Certifications" className="w-full h-full"/>
             </div>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
