import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Button } from "../../../components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import * as Slider from "@radix-ui/react-slider";
import { X } from "lucide-react";

// ⭐ Helper function for stars
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-[#FEC00D] text-[18px]" />
      ))}
      {hasHalf && <FaStarHalf className="text-[#FEC00D] text-[18px]" />}
    </div>
  );
};

interface RatingCategory {
  label: string;
  value: string;
  width: string;
}

interface ReviewItem {
  image: string;
  name: string;
  title: string;
  rating: number;
  text: string;
}

interface ReviewsSectionProps {
  title?: string;
  avgRating: number;
  totalReviews: number;
  ratingCategories: RatingCategory[];
  reviews: ReviewItem[];
  buttonText?: string;
}

//Categories
type CategoryKeys = "Professionalism" | "Communication" | "Punctuality" | "Care Quality" | "Cleanliness";
const categories: CategoryKeys[] = ["Professionalism", "Communication", "Punctuality", "Care Quality", "Cleanliness"];

export const ReviewsSection = ({
  title = "Reviews",
  avgRating,
  totalReviews,
  ratingCategories,
  reviews,
  buttonText = "See All Reviews",
}: ReviewsSectionProps): JSX.Element => {

  //Modal form state
  const [formData, setFormData] = useState<{
    name: string;
    designation: string;
    review: string;
  } & Record<CategoryKeys, number>>({
    name: "",
    designation: "",
    review: "",
    Professionalism: 0,
    Communication: 0,
    Punctuality: 0,
    "Care Quality": 0,
    Cleanliness: 0,
  });

  const [overallRating, setOverallRating] = useState(0);

  const handleSubmit = () => {
    console.log("Submitted: ", { ...formData, rating: overallRating });
    alert("Review submitted!");
  };

  return (
    <div className="flex flex-col items-start gap-5 w-full">

      {/* HEADER */}
      <div className="flex items-center justify-between w-full">
        <h2 className="w-fit font-bold text-[#0b0907] text-2xl leading-normal">{title}</h2>

        {/* ADD REVIEW MODAL */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button className="h-auto inline-flex gap-2.5 px-[18px] py-2 bg-primary-1 rounded-[60px] hover:bg-primary-1/90">
              <span className="text-white text-sm font-medium whitespace-nowrap">Add Review</span>
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />

            <Dialog.Content
              className="
                fixed top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-3xl
                max-h-[90vh] overflow-auto
                bg-white rounded-xl shadow-xl p-6 z-[9999]
              "
            >
              {/* TITLE + CLOSE BUTTON */}
              <div className="flex items-center justify-between mb-4">
                <Dialog.Title className="text-lg font-semibold">Add Your Review</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="text-gray-500 hover:text-gray-700 text-2xl">
                    ✕
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description className="text-sm text-gray-500 mt-1">
                Your review helps others hire confidently.
              </Dialog.Description>

              <div className="flex flex-col gap-4 mt-4">

                {/* Name & Designation */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border rounded-lg p-2 w-full sm:w-1/2"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Designation"
                    className="border rounded-lg p-2 w-full sm:w-1/2"
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </div>

                {/* Overall Rating */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Overall Rating: {overallRating}</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`cursor-pointer text-[22px] ${overallRating >= star ? "text-[#FEC00D]" : "text-gray-300"}`}
                        onClick={() => setOverallRating(star)}
                      />
                    ))}
                  </div>
                </div>

                {/* Category Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  {categories.map((category) => (
                    <div key={category} className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        {category}: {formData[category]}
                      </span>
                      <Slider.Root
                        className="relative flex items-center w-full h-5 select-none touch-none"
                        value={[formData[category]]}
                        max={5}
                        step={0.5}
                        onValueChange={(value) =>
                          setFormData({ ...formData, [category]: value[0] })
                        }
                      >
                        <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
                          <Slider.Range className="absolute bg-primary-1 rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb className="block w-5 h-5 bg-primary-1 rounded-full" />
                      </Slider.Root>
                    </div>
                  ))}
                </div>


                {/* Review Text */}
                <textarea
                  placeholder="Write your review..."
                  className="border rounded-lg p-2 w-full h-28"
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                />

                {/* Submit */}
                <Dialog.Close asChild>
                  <Button
                    className="w-full bg-primary-1 text-white rounded-[60px]"
                    onClick={handleSubmit}
                  >
                    Submit Review
                  </Button>
                </Dialog.Close>

              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>

      {/* MAIN WRAPPER */}
      <div className="flex flex-col w-full items-start gap-5 pt-3 overflow-hidden">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center gap-2 min-w-[120px]">
            <div className="text-[#050505] text-[44px] font-bold">{avgRating.toFixed(1)}</div>
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(avgRating)}</div>
              <div className="text-[#222222] text-sm">{totalReviews.toLocaleString()}</div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            {ratingCategories.map((category, index) => (
              <div key={index} className="flex items-center w-full">
                <div className="w-36 text-sm font-medium text-app-primary">{category.label}</div>
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-full h-1 bg-gray-200 rounded">
                    <div className={`${category.width} h-1 bg-primary-1 rounded`} />
                  </div>
                  <div className="text-xs font-semibold text-app-primary">{category.value}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* REVIEW CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {reviews.slice(0, 2).map((review, i) => (
            <div className="flex gap-4 w-full flex-wrap" key={i}>
              <img className="w-full md:w-[200px] md:h-[240px] rounded-[10px] object-cover" src={review.image} alt="review" />
              <div className="flex flex-col gap-3 flex-1">
                <div>
                  <div className="text-[#050505] text-lg font-medium">{review.name}</div>
                  <div className="text-description text-sm">{review.title}</div>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
                <p className="text-description text-base leading-[26px]">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL REVIEWS OFFCANVAS */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="outline" className="inline-flex h-12 gap-2.5 px-8 py-3 mt-5 rounded-[60px] border border-black">
              <span className="text-app-primary text-base font-medium whitespace-nowrap">See All Reviews</span>
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />
            <Dialog.Content className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-lg p-6 z-[9999] overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <Dialog.Title className="text-lg font-semibold">All Reviews</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="text-gray-500 hover:text-gray-700 text-2xl">
                    <X />
                  </button>
                </Dialog.Close>
              </div>
              {reviews.map((review, i) => (
                <div key={i} className="flex gap-4 w-full mb-6 flex-wrap">
                  <img className="w-full md:w-[150px] md:h-[180px] rounded-[10px] object-cover" src={review.image} alt="review" />
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex flex-col">
                      <span className="text-[#050505] font-medium">{review.name}</span>
                      <span className="text-description text-sm">{review.title}</span>
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                    <p className="text-description text-base leading-[26px]">{review.text}</p>
                  </div>
                </div>
              ))}

            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
    </div>
  );
};
