import React from "react";

export const SubscriptionTitleSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto] px-4 mb-10 w-full max-w-[1280px] mx-auto">
      <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-heading text-xl md:text-2xl text-center tracking-[0.24px] leading-[normal]">
        <span className="text-[#050505] tracking-[0.06px]">
          Choose the Right{" "}
        </span>
        <span className="text-[#ff999a] tracking-[0.06px]">Plan</span>
        <span className="text-[#050505] tracking-[0.06px]"> for You</span>
      </h2>
      <p className="relative w-full max-w-[700px] [font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm text-center tracking-[0.14px] leading-[normal]">
        Flexible options for families and caregivers. Get unlimited access,
        secure messaging, and exclusive resources tailored to your needs.
      </p>
    </section>
  );
};
