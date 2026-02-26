import React from "react"
import { FaqSection } from "../../sections/Services/FaqSection";
import { ResourcesTitleSection } from "../../sections/Resources/ResourcesTitle";
import { ResourceTabs } from "../../sections/Resources/ResourceTabs";

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
export const Resources = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center relative bg-[#ffffff] max-w-[1280px] mx-auto p-2 sm:p-8">
      <ResourcesTitleSection />
      <ResourceTabs />
      <FaqSection
        subtitle="FAQs"
        // title="FAQs for finding a babysitter"
        titleImage="/assets/img/vector-5.svg"
        items={faqItems}
      />
    </div>
  );
};
