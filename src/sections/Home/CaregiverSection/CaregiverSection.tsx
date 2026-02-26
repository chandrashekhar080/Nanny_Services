import React, { useRef, useState, useEffect } from "react";
import { StarIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


const caregivers = [
  {
    name: "Maria Rodriguez",
    image: "/assets/img/2.png",
    rating: "4.5",
    description:
      "Distinguished early childhood specialist known for her compassionate approach to temporary and part-time childcare solutions.",
  },
  {
    name: "Sarah Johnson",
    image: "/assets/img/2-2.png",
    rating: "4.5",
    description:
      "Experienced special needs caregiver specializing in flexible schedules and individualized care plans for children with unique requirements.",
  },
  {
    name: "Jennifer Chen",
    image: "/assets/img/2-2.png",
    rating: "4.5",
    description:
      "Certified childcare provider with expertise in tutoring support and temporary care solutions for busy families.",
  },
  {
    name: "Amanda Lee",
    image: "/assets/img/2-2.png",
    rating: "4.5",
    description:
      "Dedicated caregiver providing compassionate, flexible childcare and academic support.",
  },
  {
    name: "Maria Rodriguez",
    image: "/assets/img/2.png",
    rating: "4.5",
    description:
      "Distinguished early childhood specialist known for her compassionate approach to temporary and part-time childcare solutions.",
  },
  {
    name: "Sarah Johnson",
    image: "/assets/img/2-2.png",
    rating: "4.5",
    description:
      "Experienced special needs caregiver specializing in flexible schedules and individualized care plans for children with unique requirements.",
  },
  {
    name: "Jennifer Chen",
    image: "/assets/img/2-2.png",
    rating: "4.5",
    description:
      "Certified childcare provider with expertise in tutoring support and temporary care solutions for busy families.",
  },
  {
    name: "Amanda Lee",
    image: "/assets/img/2-2.png",
    rating: "4.5",
    description:
      "Dedicated caregiver providing compassionate, flexible childcare and academic support.",
  },
];

export const CaregiverSection = (): JSX.Element => {
  const swiperRef = useRef<any>(null);
  // Active page index for pagination bar
  const [activePage, setActivePage] = useState(0);
  // currentSlidesPerView tracks how many slides visible (so we can compute pages)
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState<number>(1);

  // base widths as in your design (first long, others short)
  const baseWidths = ["w-[112.29px]", "w-[39.39px]", "w-[39.39px]", "w-[39.39px]"];

  const getPaginationWidths = (perView: number) => {
    const pages = Math.max(1, Math.ceil(caregivers.length / perView));
    const widths: string[] = [];
    for (let i = 0; i < pages; i++) {
      widths.push(baseWidths[i] ?? "w-[39.39px]");
    }
    return widths;
  };

  const paginationWidths = getPaginationWidths(currentSlidesPerView);

  const handleSlideChange = (swiper: any) => {
    const realIndex = swiper.realIndex ?? 0;
    const perView = typeof swiper.params.slidesPerView === "number" ? swiper.params.slidesPerView : 1;
    const page = Math.floor(realIndex / perView);
    setActivePage(page);
  };

  const handleBeforeInit = (swiper: any) => {
    swiperRef.current = swiper;
    const perView = typeof swiper.params.slidesPerView === "number" ? swiper.params.slidesPerView : 1;
    setCurrentSlidesPerView(perView);
  };

  useEffect(() => {
    const updatePerView = () => {
      const w = window.innerWidth;
      if (w >= 900) setCurrentSlidesPerView(3);
      else if (w >= 668) setCurrentSlidesPerView(2);
      else setCurrentSlidesPerView(1);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  return (
    <section className="flex flex-col items-center gap-[30px] pt-[50px] w-full max-w-[1280px] mx-auto px-5">
      {/* Header */}
      <header className="inline-flex flex-col items-center gap-1.5">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-heading text-2xl text-center">
          Top &amp; Best Caregivers
        </h2>

        <p className="max-w-[830px] [font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm text-center">
          We offer specialized childcare services tailored to meet the unique
          needs of each individual. Whether you're looking for temporary care or
          ongoing support.
        </p>
      </header>

      {/* Slider */}
      <div className="w-full">
        <div className="flex flex-col items-start gap-[20px] sm:gap-[40px] mx-auto w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            onBeforeInit={handleBeforeInit}
            onSlideChange={handleSlideChange}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {caregivers.map((caregiver, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <Card className="flex flex-col border-0 shadow-none bg-transparent w-full h-full">
                  <CardContent className="flex flex-col justify-between p-0 h-full">
                    {/* Top section */}
                    <div className="flex flex-col flex-grow">
                      <div className="relative w-full">
                        <img
                          className="w-full h-[291.18px] rounded-[7.61px] object-cover"
                          alt={caregiver.name}
                          src={caregiver.image}
                        />
                        <Badge className="absolute top-px left-0 flex items-center justify-center gap-[6.76px] pl-[13.52px] pr-[6.76px] py-[6.76px] bg-[#40404080] rounded-[10px_0px_10px_0px] backdrop-blur-[2px] border-0">
                          <div className="flex items-center gap-1.5">
                            <StarIcon className="w-[13px] h-3 text-[#fefefe]" />
                            <span className="[font-family:'Poppins',Helvetica] font-bold text-[#fefefe] text-[13.1px]">
                              {caregiver.rating}
                            </span>
                          </div>
                        </Badge>
                      </div>

                      <div className="flex flex-col items-start gap-[9.52px] flex-grow mt-[38.06px]">
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base">
                          {caregiver.name}
                        </h3>
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-sub-heading text-sm">
                          {caregiver.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Button (stays aligned) */}
                    <Button className="h-[51.38px] w-full mt-[38.06px] rounded-[6.82px] shadow-[0px_0px_3.81px_#00000040] bg-primary-11 hover:bg-primary-11/90">
                      <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#fefefe] text-base">
                        Connect Now
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>



          <div className="flex items-center justify-between w-full mt-6 flex-wrap gap-3">

            <div className="flex items-center gap-[4px] flex-shrink">
              {paginationWidths
                .slice(
                  Math.max(0, Math.min(activePage - 1, paginationWidths.length - 4)),
                  Math.max(4, Math.min(activePage + 3, paginationWidths.length))
                )
                .map((w, i) => {
                  const actualIndex =
                    Math.max(0, Math.min(activePage - 1, paginationWidths.length - 4)) + i;
                  const isActive = actualIndex === activePage;

                  return (
                    <div
                      key={actualIndex}
                      onClick={() => swiperRef.current?.slideTo(actualIndex)}
                      className={`cursor-pointer h-[3.35px] rounded-[5.16px] transition-all duration-300
              ${isActive ? "bg-primary-11" : "bg-sub-heading opacity-30"}
              ${isActive
                          ? "w-[50px] sm:w-[75px]"
                          : "w-[18px] sm:w-[28px]"
                        }`}
                    />
                  );
                })}
            </div>
            <nav className="flex items-center justify-center gap-[10px] sm:gap-[14.27px] flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:bg-transparent"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img
                  alt="Previous"
                  src="/assets/img/frame-608.svg"
                  className="w-[28px] sm:w-[32px]"
                />
              </Button>

              <span className="[font-family:'Poppins',Helvetica] font-medium text-[15px] sm:text-[17.1px] text-center leading-[25.7px] whitespace-nowrap text-heading tracking-[0]">
                {activePage + 1}
              </span>

              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:bg-transparent"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img alt="Next" src="/assets/img/frame-609.svg" className="w-[28px] sm:w-[32px]" />
              </Button>
            </nav>
          </div>


        </div>
      </div>
    </section>
  );
};
