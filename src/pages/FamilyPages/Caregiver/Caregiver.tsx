import { useNavigate } from "react-router-dom";
import { FilterSection } from "../../../sections/Common/FilterSection";
import { CaregiverCard } from "../../../sections/Common/Caregivercard/Caregivercard";
import { SearchbarSection } from "../../../sections/Common/Searchbar/SearchbarSection";

const locationOptions = [
    { id: "within-5km", label: "Within 5 km", checked: true },
    { id: "5-10km", label: "5 – 10 km" },
    { id: "10-20km", label: "10 – 20 km" },
];

const priceRangeOptions = [
    { id: "0-10000", label: "₹0 – ₹10,000", checked: true },
    { id: "10001-25000", label: "₹10,001 – ₹25,000" },
    { id: "25001-50000", label: "₹25,001 – ₹50,000" },
    { id: "50000", label: "₹50,000+" },
];

const experienceOptions = [
    { id: "0-2years", label: "0 – 2 years", checked: true },
    { id: "2-5years", label: "2 – 5 years" },
    { id: "5-10years", label: "5 – 10 years" },
    { id: "10years", label: "10+ years" },
];

const availabilityOptions = [
    { id: "this-weekend", label: "Available this weekend", checked: true },
    { id: "next-7days", label: "Available next 7 days", checked: false },
    { id: "in-30days", label: "Available in 30 days", checked: false },
    { id: "custom-dates", label: "Custom dates", checked: false },
];

const ratingOptions = [
    { id: "4.5-above", label: "4.5 & above", checked: true },
    { id: "4.0-4.4", label: "4.0 – 4.4", checked: false },
    { id: "3.5-3.9", label: "3.5 – 3.9", checked: false },
    { id: "below-3.5", label: "Below 3.5", checked: false },
];



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
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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

export const Caregiver = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full max-w-[1280px] mx-auto px-5 items-center relative">
            <div className="w-full max-w-[880px] my-5">
                <SearchbarSection />
            </div>
            <div className="grid grid-cols-12 gap-4">
                {/* FILTERS */}
                <div className="col-span-12 lg:col-span-3">
                    <FilterSection
                        heading="Product Filters"
                        groups={[
                            { title: "Location", options: locationOptions },
                            {
                                title: "Price Range",
                                subtitle: "(Per Event or Day)",
                                options: priceRangeOptions,
                            },
                            {
                                title: "Experience",
                                subtitle: "(For Photographers, Makeup Artists, etc.)",
                                options: experienceOptions,
                            },
                            { title: "Availability", options: availabilityOptions },
                            { title: "Rating", options: ratingOptions },
                        ]}
                    />
                </div>

                {/* CARDS */}
                <div className="col-span-12 lg:col-span-9">
                    <CaregiverCard
                        data={babysitterData}
                        showRating={true}
                        showSkills={true}
                        onViewProfile={(id) => navigate(`/family/care-givers/profile/${id}`)}
                    />
                </div>
            </div>
        </div>
    );
};
