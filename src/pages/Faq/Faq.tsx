import React from "react";
import { FaqSection } from "../../sections/Services/FaqSection";
const faqItems = [
    {
        id: "item-1",
        question: "What is the typical duration to resolve a case?",
        answer:
            "We typically resolve most cases within 1-2 weeks depending on the complexity and the details provided.",
        defaultOpen: true,
    },
    {
        id: "item-2",
        question: "Can I request a specific caregiver?",
        answer:
            "Yes, families can specify caregiver preferences based on experience, qualifications, and schedule.",
    },
    {
        id: "item-3",
        question: "Is there a subscription fee?",
        answer:
            "Yes, our subscription ensures secure matching, background checks, and customer support for families and caregivers.",
    },
];

export const Faq = (): JSX.Element => {
    return (
        <div className="flex flex-col w-full items-center relative max-w-[1280px] mx-auto px-4 sm:px-5 mt-[60px]">
            <h2 className="self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#050505] text-2xl tracking-[0] leading-[normal] text-center">
                FAQs
            </h2>
            <FaqSection
                items={faqItems}
            />
        </div>
    );
};
