import React from "react";

const features = [
  {
    icon: "/assets/img/icon-1.png",
    title: "Experienced Providers",
    description:
      "Over 1000+ verified caregivers in our network specializing in temporary and flexible childcare solutions tailored to your family's unique needs.",
  },
  {
    icon: "/assets/img/icon-2.png",
    title: "Ongoing Assistance 24/7",
    description:
      "24/7 customer support and educational resources including training videos to help you select the perfect caregiver for your specific requirements.",
  },
  {
    icon: "/assets/img/icon-3.png",
    title: "Continuous Support",
    description:
      "Unlimited access to our platform with flexible subscription options, secure messaging, video chat capabilities, and comprehensive safety verification.",
  },
];

const images = [
  { src: "/assets/img/images-01.png", alt: "Images", className: "rounded-[10px] object-cover w-full h-full" },
  { src: "/assets/img/images-02.png", alt: "Images", className: "rounded-[10px] object-cover w-full h-full" },
  { src: "/assets/img/images-03.png", alt: "Images", className: "rounded-[10px] object-cover w-full h-full" },
];

export const WhychooseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f6f6f6] py-8 sm:py-10">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[71px] items-start">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8 lg:gap-[50px] pt-6 lg:pt-[39px]">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:gap-5">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-1 h-[118px] lg:[133px] bg-primary-11 flex-shrink-0" />
                <div className="flex flex-col gap-[5px] flex-1">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="font-outfit text-primary-11 text-base lg:text-lg">
                      Why Choose Us
                    </span>
                    <img
                      className="w-[30px] lg:w-[41.89px] h-[2.5px] lg:h-[3.51px]"
                      alt="Vector"
                      src="/assets/img/vector-2.svg"
                    />
                  </div>
                  <h2 className="font-poppins font-semibold text-heading text-lg sm:text-xl lg:text-2xl">
                    Your Trusted Partner for Temporary Childcare Success
                  </h2>
                </div>
              </div>
              <p className="font-poppins text-sub-heading text-sm sm:text-base leading-[22px] sm:leading-[26px]">
                Transform your childcare needs with our comprehensive subscription platform.
                Enjoy verified caregivers, educational resources, and flexible scheduling
                solutions designed for modern families.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 lg:gap-5">
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[51.2px] lg:h-[55px] flex-shrink-0"
                    alt={feature.title}
                    src={feature.icon}
                  />
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="font-poppins font-medium text-heading text-sm sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="font-poppins text-description text-xs sm:text-sm leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE COLLAGE */}
          <div
            className="
              grid 
              grid-cols-2 
              gap-3 sm:gap-4 lg:gap-[22px]
              w-full
              aspect-[4/3] sm:aspect-[5/4]
              lg:aspect-auto lg:h-[630px]
            "
          >
            {/* Large image (2 rows tall) */}
            <div className="row-span-2 relative overflow-hidden rounded-[10px]">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                src={images[0].src}
                alt={images[0].alt}
              />
            </div>

            {/* Two smaller images */}
            {images.slice(1).map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-[10px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                  src={img.src}
                  alt={img.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
