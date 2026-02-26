import React, { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

const navigationTabs = [
    { label: "Overview", active: true },
    { label: "Credentials", active: false },
    { label: "Services", active: false },
    { label: "Rates", active: false },
    { label: "Availability", active: false },
    { label: "Reviews", active: false },
];

const credentials = [
    { icon: "/assets/img/frame-2147239804.svg", text: "Babysitter" },
    { icon: "/assets/img/frame-2147239804.svg", text: "CPR training" },
    { icon: "/assets/img/frame-2147239804.svg", text: "Comfortable with pets" },
    { icon: "/assets/img/frame-2147239804.svg", text: "Early Childhood Education (ECE)" },
    { icon: "/assets/img/frame-2147239804.svg", text: "Early child development coursework" },
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
    { label: "Cleanliness", value: 4.8, width: "w-[110px]" },
    { label: "Accuracy", value: 4.8, width: "w-[110px]" },
    { label: "Communication", value: 4.8, width: "w-[110px]" },
    { label: "Location", value: 4.8, width: "w-[110px]" },
    { label: "Value", value: 4.8, width: "w-[110px]" },
];

const reviews = [
    {
        image: "/assets/img/image-1.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        reviewImage: "/assets/img/review-1.png",
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        image: "/assets/img/image-1.png",
        name: "Marvin McKinney",
        title: "Front End Developer",
        reviewImage: "/assets/img/review.png",
        text: "Lorem ipsum dolor sit amet, consectetur labore do adipiscing elit, sed do eiusmod -tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const profileBadges = [
    {
        icon: "/assets/img/degree-diploma-certificate-svgrepo-com.svg",
        title: "Has higher education",
        description: "Kaitlin has earned a college degree.",
    },
    {
        icon: "/assets/img/emoji-smile-svgrepo-com.svg",
        title: "Cares for various age groups",
        description:
            "Ages 0-11 months, 1-3 years, 4-5 years, 6-11 years and 12+ years, up to 4 children.",
    },
];

export const CaregiverDetail = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <section className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-start gap-8 px-20 py-5 w-full">
                <div className="flex items-start gap-9 w-full">
                    <div className="flex flex-col items-start justify-center gap-5 flex-1">
                        <nav className="flex flex-col items-start gap-8 w-full">
                            <div className="inline-flex items-start pt-3 pb-0 px-0">
                                {navigationTabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(tab.label)}
                                        className={`inline-flex items-center justify-center gap-2.5 ${index === 0 ? "pl-0 pr-4" : "px-4"
                                            } pt-3 pb-0 bg-[#ffffff] cursor-pointer`}
                                    >
                                        <div className="inline-flex flex-col items-start gap-2.5">
                                            <div
                                                className={`${tab.active
                                                    ? "font-semibold text-primary-1"
                                                    : "font-normal text-description"
                                                    } w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-base tracking-[0] leading-[22.4px] whitespace-nowrap`}
                                            >
                                                {tab.label}
                                            </div>
                                            {tab.active && (
                                                <div className="w-full h-0.5 bg-primary-1" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </nav>

                        <div className="flex flex-col items-start gap-10 pt-3 pb-0 px-0 w-full">
                            <div className="inline-flex flex-col items-start gap-2.5">
                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                    About Kaitlin
                                </div>
                                <p className="w-[829px] [font-family:'Poppins',Helvetica] font-medium text-[#535353] text-base tracking-[0] leading-[26px]">
                                    I graduated with a Bachelor&#39;s in Early Childhood Education
                                    in 2022. I have 5 years of professional childcare experience
                                    in many settings, with all ages, and all types of families! I
                                    love creating wonderful memories for the families I work with.
                                </p>
                            </div>

                            <Separator className="w-full" />

                            <div className="flex flex-col items-start gap-8 w-full">
                                <div className="inline-flex flex-col items-start gap-2.5">
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                        Credentials
                                    </div>
                                    <p className="w-[829px] [font-family:'Poppins',Helvetica] font-medium text-description text-base tracking-[0] leading-[26px]">
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
                                                    <img
                                                        className="w-6 h-6"
                                                        alt="Credential icon"
                                                        src={credential.icon}
                                                    />
                                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-base tracking-[0] leading-[normal]">
                                                        {credential.text}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Separator className="w-full" />

                            <div className="flex flex-col items-start gap-5 w-full">
                                <div className="inline-flex flex-col items-start gap-2.5">
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                        Services
                                    </div>
                                    <div className="inline-flex items-start gap-2.5">
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

                            <Separator className="w-full" />

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
                                        <img className="w-6 h-6" alt="Clock" src="/assets/img/clock.svg" />
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
                                        <img className="w-6 h-6" alt="Clock" src="/assets/img/clock.svg" />
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

                            <Separator className="w-full" />

                            <div className="flex flex-col items-start gap-5 w-full">
                                <div className="flex items-center justify-between w-full">
                                    <h2 className="w-fit [font-family:'Poppins',Helvetica] font-bold text-[#0b0907] text-2xl tracking-[0] leading-[normal]">
                                        Reviews
                                    </h2>
                                    <Button className="h-auto inline-flex gap-2.5 px-[18px] py-2 bg-primary-1 rounded-[60px] hover:bg-primary-1/90">
                                        <span className="mt-[-1.00px] text-primary-0 text-sm tracking-[-0.28px] leading-[22.4px] [font-family:'Poppins',Helvetica] font-medium text-center whitespace-nowrap">
                                            Add Review
                                        </span>
                                    </Button>
                                </div>

                                <div className="flex flex-col w-[878px] items-start gap-5 pt-3 pb-0 px-0 overflow-hidden">
                                    <div className="flex items-center gap-[86px] w-full">
                                        <div className="inline-flex flex-col items-center justify-center gap-2">
                                            <div className="inline-flex items-center">
                                                <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#050505] text-[44px] tracking-[0] leading-[normal]">
                                                    4.5
                                                </div>
                                            </div>
                                            <div className="inline-flex items-start justify-center gap-2">
                                                <div className="inline-flex items-start">
                                                    {[...Array(4)].map((_, i) => (
                                                        <img
                                                            key={i}
                                                            className="w-[23px] h-[23px]"
                                                            alt="Star"
                                                            src="/assets/img/star.svg"
                                                        />
                                                    ))}
                                                    <img
                                                        className="w-[23px] h-[23px]"
                                                        alt="Star half"
                                                        src="/assets/img/star-half.svg"
                                                    />
                                                </div>
                                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#222222] text-sm tracking-[0] leading-5 whitespace-nowrap">
                                                    2,304
                                                </div>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-start gap-12">
                                            <div className="inline-flex flex-col items-start gap-2">
                                                {ratingCategories.slice(0, 3).map((category, index) => (
                                                    <div key={index} className="inline-flex items-center">
                                                        <div className="w-36 [font-family:'Poppins',Helvetica] font-medium text-app-primary text-sm tracking-[0] leading-[normal]">
                                                            {category.label}
                                                        </div>
                                                        <div className="items-center gap-3 inline-flex">
                                                            <div className="w-[114px] h-1 bg-neutral-04 rounded">
                                                                <div
                                                                    className={`${category.width} h-1 bg-primary-1 rounded`}
                                                                />
                                                            </div>
                                                            <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-app-primary text-xs tracking-[0] leading-[26px] whitespace-nowrap">
                                                                {category.value}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="inline-flex flex-col items-start gap-2">
                                                {ratingCategories.slice(3).map((category, index) => (
                                                    <div key={index} className="inline-flex items-center">
                                                        <div className="w-36 [font-family:'Poppins',Helvetica] font-medium text-app-primary text-sm tracking-[0] leading-[normal]">
                                                            {category.label}
                                                        </div>
                                                        <div className="items-center gap-3 inline-flex">
                                                            <div className="w-[114px] h-1 bg-neutral-04 rounded">
                                                                <div
                                                                    className={`${category.width} h-1 bg-primary-1 rounded`}
                                                                />
                                                            </div>
                                                            <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-app-primary text-xs tracking-[0] leading-[26px] whitespace-nowrap">
                                                                {category.value}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[1269.33px] h-[255px] mr-[-391.33px] relative">
                                        <div className="flex w-[620px] items-center gap-4 absolute top-0 left-[650px]">
                                            <img
                                                className="w-[238.3px] h-[275px] mb-[-20.00px] ml-[-10.00px] rounded-[10px] object-cover"
                                                alt="Review user"
                                                src={reviews[1].image}
                                            />
                                            <div className="flex flex-col w-[408px] items-start gap-5 mr-[-26.36px]">
                                                <div className="items-center inline-flex flex-col gap-1">
                                                    <div className="w-fit mt-[-1.00px] text-[#050505] text-xl flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium tracking-[0] leading-[normal]">
                                                        {reviews[1].name}
                                                    </div>
                                                    <div className="flex items-center justify-center w-fit [font-family:'Poppins',Helvetica] font-normal text-description text-base tracking-[0] leading-6 whitespace-nowrap">
                                                        {reviews[1].title}
                                                    </div>
                                                </div>
                                                <img
                                                    className="w-[140px] h-[19.11px] mt-[-4921.36px] mr-[-3222.30px]"
                                                    alt="Review stars"
                                                    src={reviews[1].reviewImage}
                                                />
                                                <p className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-description text-base tracking-[0] leading-[26px]">
                                                    {reviews[1].text}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 left-0 w-[620px] h-[255px] flex">
                                            <div className="flex w-[619.64px] h-[255px] items-center gap-4">
                                                <img
                                                    className="w-[232px] h-[275px] mb-[-20.00px] rounded-[10px] object-cover"
                                                    alt="Review user"
                                                    src={reviews[0].image}
                                                />
                                                <div className="flex flex-col w-[408px] items-start gap-5 mr-[-26.36px]">
                                                    <div className="items-start inline-flex flex-col gap-1">
                                                        <div className="w-fit mt-[-1.00px] text-[#050505] text-lg flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium tracking-[0] leading-[normal]">
                                                            {reviews[0].name}
                                                        </div>
                                                        <div className="flex items-center justify-center w-fit [font-family:'Poppins',Helvetica] font-normal text-description text-sm tracking-[0] leading-6 whitespace-nowrap">
                                                            {reviews[0].title}
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="w-[140px] h-[19.11px]"
                                                        alt="Review stars"
                                                        src={reviews[0].reviewImage}
                                                    />
                                                    <p className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-description text-base tracking-[0] leading-[26px]">
                                                        {reviews[0].text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="h-auto inline-flex h-12 gap-2.5 px-8 py-3 rounded-[60px] border border-solid border-black"
                                    >
                                        <span className="text-app-primary text-base tracking-[-0.32px] leading-[19.2px] [font-family:'Poppins',Helvetica] font-medium text-center whitespace-nowrap">
                                            See All 12 Reviews
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="inline-flex flex-col items-start justify-center gap-5">
                        <Card className="inline-flex flex-col items-start gap-2.5 p-5 bg-[#ffffff] rounded-xl border border-solid border-[#f1f1f1] shadow-shadows">
                            <CardContent className="flex flex-col w-[326px] items-start gap-4 p-0">
                                <div className="flex flex-col items-start gap-6 w-full">
                                    <div className="flex flex-col items-start gap-3 w-full">
                                        <div className="flex items-center gap-3 w-full">
                                            <div className="flex flex-col w-[120px] h-[120px] items-center justify-center gap-2.5 px-4 py-[47px] rounded-xl bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),url(../frame-1171276177.png)_50%_50%_/_cover]">
                                                <Badge className="inline-flex items-center justify-center gap-[5.53px] px-[7.38px] py-[5.53px] bg-[#ffffffb2] rounded-[5.53px] hover:bg-[#ffffffb2]">
                                                    <span className="mt-[-0.92px] [font-family:'Poppins',Helvetica] font-medium text-heading text-[9.2px] tracking-[0] leading-[normal]">
                                                        1/3
                                                    </span>
                                                </Badge>
                                            </div>

                                            <div className="flex flex-col items-start gap-2.5 flex-1">
                                                <div className="flex flex-col items-start gap-1 w-full">
                                                    <div className="flex items-center justify-between w-full">
                                                        <div className="w-fit mt-[-1.00px] text-[#050505] text-xl flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium tracking-[0] leading-[normal]">
                                                            Caroline O.
                                                        </div>
                                                        <img
                                                            className="w-6 h-6"
                                                            alt="Heart"
                                                            src="/assets/img/heart.svg"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-sm tracking-[0] leading-[normal]">
                                                        8+ Years Experience
                                                    </div>
                                                    <div className="text-description text-sm flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium tracking-[0] leading-[normal]">
                                                        Austin , Texas
                                                    </div>
                                                    <div className="inline-flex items-center gap-1">
                                                        <div className="inline-flex items-center gap-0.5">
                                                            <img
                                                                className="w-5 h-[19.11px]"
                                                                alt="Review stars"
                                                                src="/assets/img/review-2.png"
                                                            />
                                                            <div className="flex items-center justify-center w-[22px] h-[21px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-sm tracking-[0] leading-[normal]">
                                                                4.5
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center w-[22px] h-[21px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-description text-sm tracking-[0] leading-[normal]">
                                                            (2)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-1.5">
                                            <Badge className="inline-flex flex-col items-center justify-center gap-2.5 px-1.5 py-1 bg-primary-100 rounded-[5px] border border-solid border-[#ff999a] hover:bg-primary-100">
                                                <span className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-primary-1 text-[10px] tracking-[0] leading-[normal]">
                                                    Hired By 12 Families
                                                </span>
                                            </Badge>
                                            <img
                                                className="w-5 h-5"
                                                alt="Verified check"
                                                src="/assets/img/verified-check-svgrepo-com.svg"
                                            />
                                            <img
                                                className="w-5 h-5"
                                                alt="Crown"
                                                src="/assets/img/crown-svgrepo-com.svg"
                                            />
                                        </div>

                                        <div className="w-[350px] h-[117px] mr-[-24.00px] relative">
                                            {profileBadges.map((badge, index) => (
                                                <div
                                                    key={index}
                                                    className={`inline-flex items-center gap-4 absolute ${index === 0 ? "top-0" : "top-[54px]"
                                                        } left-0 ${index === 1 ? "w-[350px]" : ""}`}
                                                >
                                                    <img
                                                        className="w-6 h-6"
                                                        alt="Badge icon"
                                                        src={badge.icon}
                                                    />
                                                    <div
                                                        className={`${index === 1 ? "flex-1" : "w-fit"
                                                            } mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal ${index === 0
                                                                ? "text-transparent"
                                                                : "text-[#050505]"
                                                            } text-sm tracking-[0] ${index === 0 ? "leading-[14px]" : "leading-[normal]"}`}
                                                    >
                                                        {index === 0 ? (
                                                            <>
                                                                <span className="font-semibold text-[#050505]">
                                                                    {badge.title}
                                                                    <br />
                                                                </span>
                                                                <span className="text-[#1e1e1e]">
                                                                    {badge.description}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span
                                                                    className="font-semibold"
                                                                >
                                                                    {badge.title}
                                                                    <br />
                                                                </span>
                                                                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0]">
                                                                    {badge.description}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-4 w-full">
                                    <Button className="h-auto flex h-12 gap-2.5 px-8 py-3 w-full bg-primary-1 rounded-[60px] hover:bg-primary-1/90">
                                        <span className="text-[#ffffff] text-base tracking-[-0.32px] leading-[19.2px] [font-family:'Poppins',Helvetica] font-medium text-center whitespace-nowrap">
                                            Request Booking
                                        </span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-auto flex h-12 gap-2.5 px-8 py-3 w-full rounded-[60px] border border-solid border-[#ff999a]"
                                    >
                                        <span className="text-primary-1 text-base tracking-[-0.32px] leading-[19.2px] [font-family:'Poppins',Helvetica] font-medium text-center whitespace-nowrap">
                                            Message
                                        </span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="inline-flex flex-col items-start gap-2.5 p-5 bg-[#ffffff] rounded-xl border border-solid border-[#f1f1f1] shadow-shadows">
                            <CardContent className="flex flex-col w-[326px] items-start gap-4 p-0">
                                <div className="flex flex-col items-start gap-4 w-full">
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                        Education
                                    </div>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <div className="flex flex-col items-start gap-3 w-full">
                                            <div className="inline-flex flex-col items-start justify-center gap-1.5">
                                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                                    College degree
                                                </div>
                                                <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                                    Liberty University
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-4 w-full">
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                        Languages
                                    </div>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <div className="flex flex-col items-start gap-3 w-full">
                                            <div className="inline-flex flex-col items-start justify-center gap-1.5">
                                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                                    English
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-4 w-full">
                                    <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-base tracking-[0] leading-[normal]">
                                        Additional details
                                    </div>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <div className="flex flex-col items-start gap-3 w-full">
                                            <div className="inline-flex flex-col items-start justify-center gap-1.5">
                                                <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-sm tracking-[0] leading-[normal]">
                                                    Does not smoke
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </section>
    );
};
