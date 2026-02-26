import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

const testimonials = [
  {
    name: "Marvin McKinney",
    location: "Austin, Texas",
    image: "/assets/img/image-2.png",
    rating: "/assets/img/review.png",
    text: "This platform made finding the right nanny so simple. Within a week, we connected with a caregiver who perfectly matched our needs.",
  },
  {
    name: "Marvin McKinney",
    location: "Brooklyn, NY (Caregiver)",
    image: "/assets/img/image-2.png",
    rating: "/assets/img/review-1.png",
    text: "I love how easy it was to create my profile and apply for jobs. The training videos gave me confidence before meeting families.",
  },
  {
    name: "Cameron Williamson",
    location: "San Diego, CA",
    image: "/assets/img/image-2.png",
    rating: "/assets/img/review.png",
    text: "Highly recommend this platform! Everything from search to connection was seamless, and the support team is incredible.",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-8 sm:gap-10 w-full max-w-[1280px] mx-auto px-4 sm:px-5 mt-[60px]">
      {/* Header */}
      <div className="flex items-center justify-between w-full gap-4 flex-wrap">
        <div className="flex gap-5 flex-col items-start max-w-[399.52px]">
          <div className="flex items-center gap-[30px] w-full">
            <img
              className="w-[7px] h-[90px] mt-[-0.01px] rounded-full flex-shrink-0"
              alt="Line"
              src="/assets/img/line-1.svg"
            />

            <div className="flex flex-col items-start gap-2.5 flex-1">
              <div className="inline-flex items-center gap-2.5">
                <div className="[font-family:'Poppins',Helvetica] font-normal text-primary-1 text-lg">
                  Client Success Story
                </div>

                <img
                  className="w-[45px] h-[3.51px]"
                  alt="Vector"
                  src="/assets/img/vector-5.svg"
                />
              </div>

              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#050505] max-sm:text-xl text-2xl">
                What Our Clients Are Saying!
              </h2>
            </div>
          </div>
        </div>

        {/* Swiper navigation buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-prev h-[55px] w-[55px] rounded-full border border-gray-400 text-gray-400 bg-white shadow-sm hover:bg-primary-1 hover:text-white hover:border-primary-1 transition-all duration-300"
          >
            <MoveLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-next h-[55px] w-[55px] rounded-full border border-gray-400 text-gray-400 bg-white shadow-sm hover:bg-primary-1 hover:text-white hover:border-primary-1 transition-all duration-300"
          >
            <MoveRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card className="flex-shrink-0 w-full md:w-[619.64px] border-0 shadow-none bg-transparent">
              <CardContent className="flex flex-col sm:flex-row items-start sm:items-start gap-6 sm:gap-4 p-0">
                {/* Image */}
                <img
                  className="w-full sm:w-[242px] h-[240px] sm:h-[275px] rounded-[10px] object-cover flex-shrink-0"
                  alt={testimonial.name}
                  src={testimonial.image}
                />

                {/* Text content */}
                <div className="flex flex-col w-full sm:w-[408px] items-start sm:items-start gap-4 sm:gap-5 text-start sm:text-left">
                  <div className="inline-flex flex-col items-start sm:items-start justify-center gap-1">
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#050505] text-lg sm:text-[18px]">
                      {testimonial.name}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-[15px]">
                      {testimonial.location}
                    </p>
                  </div>

                  <img
                    className="w-[120px] sm:w-[140px] h-[18px]"
                    alt="Review"
                    src={testimonial.rating}
                  />

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-[24px] sm:leading-[26px] max-w-[95%] sm:max-w-full">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
