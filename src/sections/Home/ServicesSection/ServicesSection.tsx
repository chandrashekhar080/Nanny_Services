import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

const features = [
  {
    icon: "badge",
    title: "24/7 Supports",
    description:
      "Icon Our subscription model ensures you have unlimited access to our network of developing caregiver connections and premium services 24/7.",
  },
  {
    icon: "/assets/img/group-19.png",
    title: "Flexible schedule",
    description:
      "Icon Enjoy flexible scheduling to fit your busy life with our inclusive team of caregivers who provide short-term care and services.",
  },
  {
    icon: "/assets/img/group-19-1.png",
    title: "Expert Caregivers",
    description:
      "Icon Our platform provides access to qualified families through developing placements and comprehensive vetting services.",
  },
  {
    icon: "/assets/img/group-19-2.png",
    title: "Security and Privacy",
    description:
      "Icon Our flexible subscription-based payment and unlimited support provides background checking and verification privacy services.",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[30px] w-full max-w-[1280px] mb-10 py-5 mx-auto px-5">
      <header className="inline-flex flex-col items-center gap-1.5">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-heading text-2xl text-center tracking-[0] leading-[normal]">
          Our Childcare Service
        </h2>

        <p className="w-full max-w-[830px] [font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm text-center tracking-[0] leading-[normal]">
          We offer subscription-based access to qualified caregivers who can
          meet the unique needs of each individual, whether you&#39;re
          recovering from surgery, need temporary care, or ongoing support.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-[#fefefe] rounded-[5.68px] border-0 shadow-none"
          >
            <CardContent className="flex flex-col items-center gap-[30px] px-[15.81px] sm:px-[10.81px] py-[39.04px]">
              <div className="flex items-center justify-center w-[46.85px] h-[46.85px]">
                {feature.icon === "badge" ? (
                  <div className="relative w-[48.85px] h-[46.85px]">
                    <div className="absolute top-0 left-0 w-[47px] h-[47px] bg-primary-11 rounded-[23.42px]" />
                    <div className="absolute top-3.5 left-[9px] [font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[12.8px] text-center tracking-[0] leading-[normal]">
                      24/7
                    </div>
                  </div>
                ) : (
                  <img
                    className="w-[46.85px] h-[46.85px]"
                    alt={feature.title}
                    src={feature.icon}
                  />
                )}
              </div>

              <div className="flex flex-col items-center gap-2.5 w-full">
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-heading text-lg text-center tracking-[0] leading-[normal]">
                  {feature.title}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm text-center tracking-[0] leading-[normal]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
