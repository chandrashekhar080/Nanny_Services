import React from "react";
import { HeroSection } from "../../sections/Services/HeroSection/HeroSection";
import { FeaturedBabysittersSection } from "../../sections/Services/FeaturedBabysittersSection";
import { AboutSection } from "../../sections/Services/AboutSection";
import { TestimonialsSection } from "../../sections/Services/TestimonialsSection";
import { FaqSection } from "../../sections/Services/FaqSection";


const faqItems = [
  {
    id: "item-1",
    question: "What is the typical duration to resolve a case?",
    answer:
      "We typically resolve most cases within 1–2 weeks depending on complexity and provided details.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "Can I request a specific caregiver?",
    answer:
      "Yes, families can request caregivers based on experience, qualifications, and scheduling preferences.",
  },
  {
    id: "item-3",
    question: "Is there a subscription fee?",
    answer:
      "Yes, our subscription includes verified caregivers, background checks, and ongoing support.",
  },
];


export const Services = (): JSX.Element => {
    return (
        <div className="flex flex-col w-full items-center relative bg-[#ffffff]">
            <HeroSection />
            <FeaturedBabysittersSection />
            <AboutSection
                title="Connecting Families & Nannies"
                subtitle="About Us"
                description="We are dedicated to providing families with peace of mind and caregivers with rewarding opportunities. Our subscription-based platform ensures safe, flexible, and reliable childcare solutions tailored to every need. From full-time support to specialized care, we make finding the right match simple and secure."
                imageSrc="/assets/img/service-about.png"
                videoSrc="/assets/img/service-video.mp4"
                stats={[
                    { value: "10+", label: "Years of Experience" },
                    { value: "1,200+", label: "Successful Matches" },
                    { value: "500+", label: "Qualified Caregivers" },
                ]}
                buttonText="Learn More About Us"
                link="/about"
            />
            <TestimonialsSection />
            <FaqSection
                subtitle="FAQs"
                title="FAQs for finding a babysitter"
                titleImage="/assets/img/vector-5.svg"
                items={faqItems}
            />
        </div>
    );
};
