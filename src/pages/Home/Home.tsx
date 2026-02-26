import React from "react";
import { HeroSection } from "../../sections/Home/HeroSection";
import { ServicesSection } from "../../sections/Home/ServicesSection";
import { WhychooseSection } from "../../sections/Home/WhychooseSection";
import { TrustedPartnerSection } from "../../sections/Home/TrustedPartnerSection";
import { CaregiverSection } from "../../sections/Home/CaregiverSection";
import { Newsletter } from "../../sections/Common/Newsletter";


export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center relative">
      <HeroSection />
      <ServicesSection />
      <WhychooseSection />
      <TrustedPartnerSection />
      <CaregiverSection />
      <Newsletter />
    </div>
  );
};
