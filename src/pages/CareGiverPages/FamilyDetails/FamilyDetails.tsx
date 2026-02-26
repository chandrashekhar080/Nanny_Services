import { useParams } from "react-router-dom";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { ScrollableTabs } from "../../../sections/Common/ScrollableTabs";
import { Check, Clock3 } from 'lucide-react';
// import { CaregiverProfileDetail } from "../";
import { PiCertificate } from "react-icons/pi";
import { FaRegFaceSmile, FaStar, FaStarHalf } from "react-icons/fa6"
import { ReviewsSection } from "../../../sections/Common/ReviewsSection";
import { CaregiverProfileDetail } from "../../FamilyPages/CaregiverProfileDetail";
import CaregiverProfileDetail1 from "../../FamilyPages/CaregiverProfileDetail/CaregiverProfileDetail";


const credentials = [
    { text: "Meal Preparation" },
    { text: "Homework Help " },
    { text: "School Pickup" },
    { text: "Light Housekeeping" },
];

const services = [
    "3+ Years",
    "Toddler (1–3 years) ",
    "School Age (6–12 years) ",
    " Part-Time",
];



export const FamilyDetail = () => {
    const { id } = useParams<{ id: string }>();
    
    // TODO: When data is dynamic, fetch caregiver data based on id
    // Example: const caregiver = useQuery(['caregiver', id], () => fetchCaregiverById(id));
    
    const sections = [
        {
            label: "About",
            content: (
                <div className="inline-flex flex-col items-start gap-2.5">
                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                        About Job
                    </div>
                    <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#535353] text-base tracking-[0] leading-[26px]">
                     Looking for someone reliable with good communication skills. Must be comfortable with pets.
                    </p>
                </div>
            ),
        },
        {
            label: "Credentials",
            content: (
                <div className="flex flex-col items-start gap-8 w-full">
                    <div className="inline-flex flex-col items-start gap-2.5">
                        <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                            Duties & Responsibilities
                        </div>
                       
                    </div>

                    <div className="inline-flex flex-col items-start gap-5">
                        {credentials.map((credential, index) => (
                            <div
                                key={index}
                                className="items-start gap-[200px] inline-flex"
                            >
                                <div className="inline-flex flex-col items-start gap-2.5">
                                    <div className="inline-flex items-center gap-2.5">
                                        <Check />
                                        <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-base tracking-[0] leading-[normal]">
                                            {credential.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            label: "Services",
            content: (
                <div className="inline-flex flex-col items-start gap-2.5">
                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                        Additional Details
                    </div>
                    <div className="flex items-start gap-2.5 flex-wrap">
                        {services.map((service, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="inline-flex items-center justify-center gap-[5.53px] px-[7.38px] py-[5.53px] bg-primary-100 rounded-[5.53px] border-[0.92px] border-solid border-[#ff999a]"
                            >
                                <span className="mt-[-0.92px] [font-family:'Poppins',Helvetica] font-medium text-primary-1 text-xs tracking-[0] leading-[normal]">
                                    {service}
                                </span>
                            </Badge>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            label: "Availability",
            content: (
                <div className="flex flex-col items-start gap-5 w-full">
                    <div className="inline-flex flex-col items-start gap-2.5">
                        <div className="inline-flex items-center gap-2.5">
                            <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                Schedule & Hours
                            </div>
                          
                        </div>
                        <div className="flex gap-2 w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12 6L12 12L18 12" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Mon-Fir, 3am-7pm
                        </div>
                    </div>

                  
                </div>
            ),
        },
    ];

    return (

        <div className="flex w-full [font-family:'Poppins',Helvetica] max-w-[1280px] mx-auto px-5 mb-12 mt-10">
            <div className="grid grid-cols-12 gap-4 w-full">

                {/* Tabs (MOBILE: SECOND, DESKTOP: FIRST) */}
                <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
                    <ScrollableTabs sections={sections} />
                </div>

                {/* CARDS (MOBILE: FIRST, DESKTOP: RIGHT SIDE STICKY) */}
                <div className="col-span-12 lg:col-span-3 order-1 lg:order-2">
                    <aside className="w-full lg:sticky lg:top-0">
                        <CaregiverProfileDetail1
                   
  initials="JF"
  name="Johnson Family"
  location="New York, NY"
  rate="$20/Hr"
  tags={["Part-Time", "Child Care"]}

                        
                        />


                    </aside>
                </div>
            </div>
        </div>

    )
};



