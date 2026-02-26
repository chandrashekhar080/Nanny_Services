import React from "react";
import { FaqSection } from "../../sections/Services/FaqSection";
import { ContactForm } from "../../sections/Common/ContactForm/ContactForm";
import { Newsletter } from "../../sections/Common/Newsletter";


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


export const Contact = (): JSX.Element => {
    return (
        <div className="flex flex-col w-full items-center relative">
            <ContactForm />
            <FaqSection
                subtitle="Client Success Story"
                title="FAQs for finding a babysitter"
                titleImage="/assets/img/vector-5.svg"
                items={faqItems}
            />
            <Newsletter />
        </div>
    );
};
