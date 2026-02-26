import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partnerFeatures = [
  { icon: "/assets/img/partner-1.png", label: "Certified" },
  { icon: "/assets/img/partner-2.png", label: "Passport" },
  { icon: "/assets/img/partner-3.png", label: "Screened/Ins" },
  { icon: "/assets/img/partner-4.png", label: "Registered" },
  { icon: "/assets/img/partner-1.png", label: "Certified" },
  { icon: "/assets/img/partner-2.png", label: "Passport" },
  { icon: "/assets/img/partner-3.png", label: "Screened/Ins" },
  { icon: "/assets/img/partner-4.png", label: "Registered" },
];

export const TrustedPartnerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[30px] w-full max-w-[1280px] py-[50px] mx-auto px-5">
      {/* Title */}
      <div className="flex flex-col max-w-[830px] items-center gap-1.5 text-center">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#0f0e0e] text-2xl tracking-[-0.72px] leading-[28.8px]">
          Trusted by 200+ Families
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm tracking-[0.14px] leading-[normal]">
          Whether you&#39;re seeking a caregiver for part-time or planning your
          next temporary childcare solution, let our expert team help you find
          the perfect match.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="w-full"
      >
        {partnerFeatures.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-3xl py-6 w-full">
              <img
                className="h-[48px] w-auto object-contain"
                alt={feature.label}
                src={feature.icon}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
