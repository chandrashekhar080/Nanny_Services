import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";

export const CTAFamily = (): JSX.Element => {
  return (
    <section
      className="
        w-full max-w-[1280px] mx-auto px-5 relative
        mt-[50px] 
        md:mt-[120px]
        lg:mt-[230px] 
      "
    >
      <div className="relative w-full bg-primary-1 rounded-xl flex flex-col md:flex-row overflow-visible">

        <div className="relative w-full md:w-1/2 items-end overflow-visible hidden md:flex">
          <div className="relative w-full h-full">
            <img
              src="/assets/img/cta.png"
              alt="Portrait"
              className="
                absolute bottom-0 z-20 rounded-t-[7.61px] rounded-b-none

                /* tablet size */
                md:h-[400px] md:w-[260px] md:right-[5%]

                /* desktop size */
                lg:h-[450px] lg:w-[374px] lg:right-[8%]

                object-cover
              "
            />

            <img
              src="/assets/img/shine.png"
              alt="Sticker"
              className="
                absolute z-30
                md:right-[5%]
                md:bottom-[20px]
              "
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col relative">
          <div
            className="
              flex flex-col justify-center items-start gap-6
              p-6 md:p-10
            "
          >
            {/* MOBILE STICKER */}
            <img
              src="/assets/img/shine.png"
              alt="Sticker"
              className="
                block md:hidden
                absolute bottom-8 right-8
                z-20
              "
            />

            <h2 className="font-semibold text-white text-[24px] md:text-[30px] leading-snug">
              Reach Your Goals By Becoming Part Of Our Community.
            </h2>

            <p className="text-white text-base opacity-90">
              Let me know if you'd like more options!
            </p>

            <Button className="h-11 bg-white hover:bg-white/90 rounded-[32px] px-5 py-2.5 flex items-center">
              <span className="font-medium text-heading text-base">
                Contact Us
              </span>
              <ChevronRightIcon className="w-[10px] h-[10px] ml-1 stroke-black stroke-2" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
