import { MapPinIcon } from "lucide-react";
import React from "react";
import { CaregiverCard } from "../../Common/Caregivercard/Caregivercard";
import { SearchbarSection } from "../../Common/Searchbar/SearchbarSection";

const babysitterData = [
  {
    id: 1,
    badges: [{ text: "New", icon: "crown" }],
    rating: "4.9",
    name: "Caroline O.",
    experience: "8+ Years Experience • Hired By 12 Families In Your Area",
    location: "Austin , Texas",
    description:
      "Compassionate And Dependable Caregiver With Extensive Experience In Infant And Toddler Care...",
    skills: ["Infant care", "Meal prep", "Homework help", "Travel support"],
    additionalSkills: "+4",
    price: "$200",
    priceUnit: "/Day",
    image: "/assets/img/images-5.png",
  },

  {
    id: 2,
    badges: [
      { text: "POPULAR", icon: "verified" },
      { text: "", icon: "crown" },
    ],
    rating: "4.9",
    name: "Caroline O.",
    experience: "8+ Years Experience • Hired By 12 Families In Your Area",
    location: "Austin , Texas",
    description:
      "Compassionate And Dependable Caregiver With Extensive Experience...",
    skills: ["Infant care", "Meal prep", "Homework help", "Travel support"],
    additionalSkills: "+4",
    price: "$200",
    priceUnit: "/Day",
    image: "/assets/img/images-5.png",
  },

  {
    id: 3,
    badges: [
      { text: "RECOMMENDED", icon: "verified" },
      { text: "", icon: "crown" },
    ],
    rating: "4.9",
    name: "Caroline O.",
    experience: "8+ Years Experience • Hired By 12 Families In Your Area",
    location: "Austin , Texas",
    description:
      "Compassionate And Dependable Caregiver With Extensive Experience...",
    skills: ["Infant care", "Meal prep", "Homework help", "Travel support"],
    additionalSkills: "+4",
    price: "$200",
    priceUnit: "/Day",
    image: "/assets/img/images-5.png",
  },
];

export const FeaturedBabysittersSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[30px] w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-[60px]">
      <div className="flex flex-col items-start justify-center gap-5 w-full">
        <h2 className="font-semibold text-[#050505] text-2xl">
          Here are some babysitters near you:
        </h2>
        <SearchbarSection />
      </div>

      {/* Cards */}
      <CaregiverCard
        data={babysitterData}
        showRating={true}
        showSkills={true}
        onViewProfile={(id) => console.log("View profile:", id)}
      />
    </section>
  );
};
