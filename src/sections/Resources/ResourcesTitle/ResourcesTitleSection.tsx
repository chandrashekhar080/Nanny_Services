import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export const ResourcesTitleSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 sm:gap-[70px] w-full max-w-[1280px] mx-auto px-4 sm:px-5 mb-10">
      <div className="flex flex-col items-center gap-10 sm:gap-[70px] w-full">
        {/* Title and Description */}
        <div className="flex flex-col items-center gap-5 sm:gap-10 w-full text-center">
          <div className="flex flex-col items-center gap-2.5 w-full">
            <h1 className="font-poppins font-bold text-heading text-xl sm:text-2xl md:text-3xl text-center leading-snug sm:leading-[normal]">
              Comprehensive Childcare Services for Every Family
            </h1>

            <p className="w-full max-w-[834px] font-poppins font-normal text-sub-heading text-sm sm:text-base text-center leading-relaxed">
              We provide flexible, trusted childcare solutions designed to fit
              your family&apos;s unique needs. From full-time care to
              specialized support, our platform connects you with qualified
              professionals you can count on.
            </p>
          </div>

          {/* Search Box */}
          <div className="flex flex-col w-full max-w-[720px] items-center sm:items-start gap-3 sm:gap-2.5 p-3 sm:p-2.5 bg-[#fefefe] rounded-xl shadow-[0px_0px_14px_#00000040]">
            <div className="flex flex-col sm:flex-row items-center w-full gap-3 sm:gap-0">
              <Input
                type="text"
                placeholder="Search guides, videos, or FAQs"
                className="border-0 shadow-none placeholder:text-[16px] focus-visible:ring-0 font-poppins font-normal text-heading text-lg flex-1 w-full sm:pl-4"
              />

              <Button className="w-full sm:w-auto h-auto px-6 sm:px-[54px] py-3 sm:py-4 bg-primary-1 rounded-lg hover:bg-primary-1/90 transition-colors duration-200">
                <span className="font-poppins font-semibold text-[#fefefe] text-lg tracking-[0.5px] sm:tracking-[0.8px] leading-[18px] whitespace-nowrap">
                  Search
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
