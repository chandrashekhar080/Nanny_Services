import React, { useState } from "react";
import { Newsletter } from "../../sections/Common/Newsletter";
import { Breadcrumb } from "../../sections/Common/Breadcrumb";
import { TestimonialsSection } from "../../sections/Services/TestimonialsSection";
import { AboutSection } from "../../sections/Services/AboutSection";
import { StatisticsSection } from "../../sections/Common/StatisticsSection";
import { OurTeamSection } from "../../sections/Common/OurTeamSection";
import { VideoFullSection } from "../../sections/Common/VideoSection";


export const About = (): JSX.Element => {


    return (
        <div className="flex flex-col gap-5 w-full items-center relative bg-[#ffffff]">
            <Breadcrumb title="About Us"
                backgroundImage="/assets/img/about-bread.png" />
            <AboutSection
                title="Connecting Families & Nannies"
                subtitle="About Us"
                description="We are dedicated to providing families with peace of mind and caregivers with rewarding opportunities. Our subscription-based platform ensures safe, flexible, and reliable childcare solutions tailored to every need. From full-time support to specialized care, we make finding the right match simple and secure."
                imageSrc="/assets/img/about-2.png"
                videoSrc="/assets/img/service-video.mp4"
                stats={[
                    { value: "10+", label: "Years of Experience" },
                    { value: "1,200+", label: "Successful Matches" },
                    { value: "500+", label: "Qualified Caregivers" },
                ]}
                buttonText="Learn More"
                link="/services"
            />
            
           
            <VideoFullSection />

            <OurTeamSection />
            <TestimonialsSection />
            <StatisticsSection />
            <Newsletter />
        </div>
    );
};
