import React from "react";
import { CheckIcon } from "lucide-react";

const features = [
  {
    text: "Find or offer reliable childcare with confidence",
  },
  {
    text: "Secure platform with background-verified caregivers",
  },
  {
    text: "Manage jobs, payments, and schedules in one place",
  },
];

export const WelcomeSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-full flex items-center bg-[url(/assets/img/login-bg.png)] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="flex flex-col items-start gap-[23px] ml-[81px] w-[584px] relative z-10">
        <header className="flex flex-col items-start self-stretch w-full">
          <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#fefefe] text-xs tracking-[4.68px] leading-normal uppercase">
            WELCOME TO ALL AROUND NANNY SERVICES
          </p>

          <h1 className="w-[584px] [font-family:'Poppins',Helvetica] font-bold text-white-100 text-[40px] tracking-[0] leading-normal">
            Welcome Back to All <br /> Around Nanny Services
          </h1>
        </header>

        <p className="w-[552px] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-normal">
          Connecting families with trusted caregivers, safely and simply.
        </p>

        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-start gap-[200px] flex-[0_0_auto]"
          >
            <div className="inline-flex flex-col items-start gap-2.5 flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2.5 flex-[0_0_auto]">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-white-100" />
                </div>

                <p className="w-fit [font-family:'Poppins',Helvetica] font-medium text-white-100 text-base tracking-[0] leading-normal">
                  {feature.text}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="w-[295px] h-6" />
      </div>
    </section>

  );
};
