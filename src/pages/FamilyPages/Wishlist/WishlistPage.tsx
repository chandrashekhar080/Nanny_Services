import { useNavigate } from "react-router-dom";
import { CaregiverCard, CaregiverData } from "../../../sections/Common/Caregivercard/Caregivercard";

export const WhislistPage = () => {
    const navigate = useNavigate();
    // Mock data for demonstration
    const caregivers: CaregiverData[] = [
        {
            id: 1,
            name: "Caroline O.",
            badges: [
                { text: "", icon: "verified" },
                { text: "", icon: "crown" },
            ],
            experience: "8+ Years Experience",
            location: "Houston, TX",
            description:
                "Specializes in newborn care and part-time babysitting with flexible schedule.",
            skills: ["Newborn care", "Part-time"],
            price: "$20",
            priceUnit: "/hour",
            image: "/assets/img/images-5.png",
            rating: "4.7",
            showWishlist: true,
            showDropdown: true,
        },
        {
            id: 2,
            name: "Caroline O.",
            badges: [
                { text: "", icon: "verified" },
                { text: "", icon: "crown" },
            ],
            experience: "8+ Years Experience",
            location: "Houston, TX",
            description:
                "Specializes in newborn care and part-time babysitting with flexible schedule.",
            skills: ["Newborn care", "Part-time"],
            price: "$20",
            priceUnit: "/hour",
            image: "/assets/img/images-5.png",
            rating: "4.7",
            showWishlist: true,
            showDropdown: true,
        },
        {
            id: 3,
            name: "Caroline O.",
            badges: [
                { text: "", icon: "verified" },
                { text: "", icon: "crown" },
            ],
            experience: "8+ Years Experience",
            location: "Houston, TX",
            description:
                "Specializes in newborn care and part-time babysitting with flexible schedule.",
            skills: ["Newborn care", "Part-time"],
            price: "$20",
            priceUnit: "/hour",
            image: "/assets/img/images-5.png",
            rating: "4.7",
            showWishlist: true,
            showDropdown: true,
        },
        {
            id: 4,
            name: "Caroline O.",
            badges: [
                { text: "", icon: "verified" },
                { text: "", icon: "crown" },
            ],
            experience: "8+ Years Experience",
            location: "Houston, TX",
            description:
                "Specializes in newborn care and part-time babysitting with flexible schedule.",
            skills: ["Newborn care", "Part-time"],
            price: "$20",
            priceUnit: "/hour",
            image: "/assets/img/images-5.png",
            rating: "4.7",
            showWishlist: true,
            showDropdown: true,
        },
    ];

    return (
        <div className="max-w-[1280px] [font-family:'Poppins',Helvetica] mx-auto px-5 py-10">
           
            <CaregiverCard
                data={caregivers}
                showRating
                showSkills
                onViewProfile={(id) => navigate(`/family/care-givers/profile/${id}`)}
                onWishlistToggle={() => { }}
                onMarkHired={() => { }}
                onReport={() => { }}
                onWriteReview={() => { }}
            />
           
        </div>
    );
};
