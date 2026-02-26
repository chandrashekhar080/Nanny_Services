import { useParams } from "react-router-dom";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { ScrollableTabs } from "../../../sections/Common/ScrollableTabs";
import { Check, Clock3 } from 'lucide-react';
import { CaregiverProfileDetail } from "../CaregiverProfileDetail";
import { PiCertificate } from "react-icons/pi";
import { FaRegFaceSmile, FaStar, FaStarHalf } from "react-icons/fa6"
import { ReviewsSection } from "../../../sections/Common/ReviewsSection";


const credentials = [
    { text: "Babysitter" },
    { text: "CPR training" },
    { text: "Comfortable with pets" },
    { text: "Early Childhood Education (ECE)" },
    { text: "Early child development coursework" },
];

const services = [
    "Crafts",
    "Light housecleaning",
    "Cooking/Meal preparation",
    "Swimming supervision",
];

const oneTimeRates = [
    { children: "1 child", rate: "$22/hour" },
    { children: "2 children", rate: "$17/hour" },
    { children: "3 children", rate: "$17/hour" },
    { children: "4 children", rate: "$17/hour" },
];

const ratingCategories = [
    { label: "Cleanliness", value: "4.5", width: "w-[85%]" },
    { label: "Location", value: "4.3", width: "w-[78%]" },
    { label: "Accuracy", value: "4.6", width: "w-[88%]" },
    { label: "Value", value: "4.7", width: "w-[91%]" },
    { label: "Communication", value: "4.4", width: "w-[82%]" },
];

const reviews = [
    {
        image: "/assets/img/image-2.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        image: "/assets/img/image-2.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        image: "/assets/img/image-2.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        image: "/assets/img/image-2.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        image: "/assets/img/image-2.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        image: "/assets/img/image-2.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
];



export const CaregiverDetail = () => {
    const { id } = useParams<{ id: string }>();
    
    // TODO: When data is dynamic, fetch caregiver data based on id
    // Example: const caregiver = useQuery(['caregiver', id], () => fetchCaregiverById(id));
    
    const sections = [
        {
            label: "About",
            content: (
                <div className="inline-flex flex-col items-start gap-2.5">
                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                        About Kaitlin
                    </div>
                    <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#535353] text-base tracking-[0] leading-[26px]">
                        I graduated with a Bachelor&#39;s in Early Childhood Education
                        in 2022. I have 5 years of professional childcare experience
                        in many settings, with all ages, and all types of families! I
                        love creating wonderful memories for the families I work with.
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
                            Credentials
                        </div>
                        <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-description text-base tracking-[0] leading-[26px]">
                            Care does not verify credentials. We recommend asking
                            caregivers for proof.
                        </p>
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
                        Services
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
            label: "Rates",
            content: (
                <div className="flex flex-col items-start gap-5">
                    <div className="w-fit [font-family:'Poppins',Helvetica] font-bold text-[#050505] text-lg tracking-[0] leading-[normal]">
                        Rates
                    </div>

                    <div className="inline-flex items-start gap-8">
                        <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                            Recurring jobs
                        </div>
                        <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-base tracking-[0] leading-[normal]">
                            $17/hour
                        </div>
                    </div>

                    <div className="inline-flex flex-col items-start gap-5">
                        <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                            One-time jobs
                        </div>
                        <div className="flex flex-col items-start gap-2.5 w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-base tracking-[0] leading-[normal]">
                                    1 child
                                </div>
                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-base tracking-[0] leading-[normal]">
                                    $22/hour
                                </div>
                            </div>
                            {oneTimeRates.slice(1).map((rate, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-start gap-8"
                                >
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-base tracking-[0] leading-[normal]">
                                        {rate.children}
                                    </div>
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-base tracking-[0] leading-[normal]">
                                        {rate.rate}
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                Availability
                            </div>
                            <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                Last updated a month ago
                            </div>
                        </div>
                        <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                            Message Kaitlin to confirm their availability.
                        </div>
                    </div>

                    <div className="inline-flex flex-col items-start gap-5">
                        <div className="inline-flex items-center gap-2.5">
                            <Clock3 />
                            <div className="inline-flex flex-col items-start gap-1.5">
                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                    Part-time jobs
                                </div>
                                <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                    Less than 30 hours/week
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2.5">
                            <Clock3 />
                            <div className="inline-flex flex-col items-start gap-1.5">
                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                    Work hours
                                </div>
                                <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                    Mon-Fri - 10am - 1pm
                                </div>
                                <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                    Sat-Sun - unavailable
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            label: "Reviews",
            content: (
                <ReviewsSection
                    title="Reviews"
                    avgRating={4.5}
                    totalReviews={2304}
                    ratingCategories={ratingCategories}
                    reviews={reviews}
                    buttonText="See All 12 Reviews"
                />

            ),
        },
    ];

    return (

        <div className="flex w-full max-w-[1280px] mx-auto px-5">
            <div className="grid grid-cols-12 gap-4 w-full">

                {/* Tabs (MOBILE: SECOND, DESKTOP: FIRST) */}
                <div className="col-span-12 lg:col-span-9 order-2 lg:order-1">
                    <ScrollableTabs sections={sections} />
                </div>

                {/* CARDS (MOBILE: FIRST, DESKTOP: RIGHT SIDE STICKY) */}
                <div className="col-span-12 lg:col-span-3 order-1 lg:order-2">
                    <aside className="w-full lg:sticky lg:top-0">
                        <CaregiverProfileDetail
                            name="Caroline O."
                            experience="8+ Years Experience"
                            location="Austin, Texas"
                            rating={4.5}
                            reviewsCount={2}
                            image="/assets/img/images-5.png"

                            topBadges={["Hired By 12 Families"]}

                            profileBadges={[
                                {
                                    icon: <PiCertificate className="w-6 h-6" />,
                                    title: "Has higher education",
                                    description: "Kaitlin has earned a college degree.",
                                },
                                {
                                    icon: <FaRegFaceSmile className="w-6 h-6" />,
                                    title: "Cares for various age groups",
                                    description:
                                        "Ages 0-11 months, 1-3 years, 4-5 years, 6-11 years, 12+ years.",
                                },
                            ]}

                            education={["College degree", "Liberty University"]}
                            languages={["English"]}
                            extras={["Does not smoke"]}

                            onBook={() => console.log("Booking requested")}
                            onMessage={() => console.log("Message")}
                        />


                    </aside>
                </div>
            </div>
        </div>

    )
};



