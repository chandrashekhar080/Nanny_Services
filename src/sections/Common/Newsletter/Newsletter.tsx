import React from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export const Newsletter = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden max-w-[1280px] mx-auto px-5 my-16">
      <div className="flex flex-col items-center gap-2.5 px-4 md:px-[20px] py-8 bg-primary-11 rounded-[20px]">
        <div className="flex flex-col w-full max-w-[648px] items-center gap-5">
          <h2 className="self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-xl text-center tracking-[0] leading-[normal]">
            Subscribe To Our Weekly Newsletter
          </h2>

          <div className="relative w-full">
            <div className="flex w-full">
              <div className="flex flex-col sm:flex-row w-full items-center gap-2">
                {/* Input */}
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-14 sm:h-16 px-6 sm:px-12 py-3.5 bg-white border-0
                    [font-family:'Poppins',Helvetica] font-normal text-description
                    text-base sm:!text-xl
                    placeholder:text-description focus-visible:ring-0 focus-visible:ring-offset-0
                    rounded-[32px] sm:rounded-[32px_0_0_32px]"
                />

                {/* Button */}
                <Button
                  className="h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-[25px] py-1.5 bg-primary-2 hover:bg-primary-2/90
                    [font-family:'Poppins',Helvetica] font-semibold text-white text-base sm:text-xl
                    rounded-[32px] sm:rounded-[0_32px_32px_0]"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>


          <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-sm text-center tracking-[0] leading-[normal]">
            Just the Essentials: Product Launches and Updates, No Spam
          </p>
        </div>
      </div>

      <img
        className="absolute w-[9.69%] h-[46.22%] top-[53.85%] left-[90.31%]"
        alt="Vector"
        src="/assets/img/vector-1.svg"
      />

      <img
        className="absolute w-[13.05%] top-[calc(50.00%_-_137px)] left-[36px] h-[50px] sm:h-[172px] "
        alt="Vector"
        src="/assets/img/vector.svg"
      />
    </section>
  );
};
