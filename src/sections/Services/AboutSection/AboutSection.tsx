import { ChevronRightIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

type Statistic = {
    value: string;
    label: string;
};

type AboutSectionProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    imageSrc?: string;
    videoSrc?: string;
    stats?: Statistic[];
    buttonText?: string;
    link?: string;
    onButtonClick?: () => void;
};

export const AboutSection = ({
    title = "Connecting Families & Nannies",
    subtitle = "About Us",
    description = "We are dedicated to providing families with peace of mind and caregivers with rewarding opportunities. Our subscription-based platform ensures safe, flexible, and reliable childcare solutions tailored to every need.",
    imageSrc = "/assets/img/service-about.png",
    videoSrc = "",
    stats = [
        { value: "10+", label: "Years of Experience" },
        { value: "1,200+", label: "Successful Matches" },
        { value: "500+", label: "Qualified Caregivers" },
    ],
    buttonText = "Learn More About Us",
    link,
    onButtonClick,
}: AboutSectionProps): JSX.Element => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // ✅ close when clicking outside the video
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsVideoOpen(false);
        }
    };

    return (
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[53px] w-full max-w-[1280px] mx-auto px-4 sm:px-5 mt-[60px]">
            {/* Left Image / Video */}
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
                <img
                    className="w-full h-full object-cover rounded-3xl"
                    alt={subtitle}
                    src={imageSrc}
                />

                {videoSrc && videoSrc !== "#" && (
                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition rounded-3xl"
                    >
                        <img
                            src="/assets/img/play-icon.png"
                            alt="Play video"
                            className="w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] hover:scale-110 transition-transform duration-300"
                        />
                    </button>
                )}

                {/* 🎬 Video Modal */}
                {isVideoOpen && (
                   
            
                    <div
                      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
                      onClick={() =>  setIsVideoOpen(false)} // close on outside click
                    >
                      <div
                        className="bg-white rounded-2xl w-full max-w-[800px] relative shadow-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                      >
                        {/* Close button */}
                        <button
                          onClick={() => setIsVideoOpen(false)}
                          className="absolute top-3 right-3 z-50 text-primary-1 hover:text-primary-1/80 transition-colors bg-white rounded-full p-1"
                        >
                          <X className="w-6 h-6 " />
                        </button>
            
                        {/* Video content */}
                        <div className="relative">
                          <video
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            controls
                            autoPlay
                            className="w-full h-[450px] object-cover rounded-t-2xl"
                          />
                        </div>
            
                        <div className="p-5">
                          <h3 className="font-poppins font-semibold text-heading text-lg mb-2">
                            {title}
                          </h3>
                          <p className="font-poppins text-description text-sm">
                            {subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                
                )}
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start gap-[30px] w-full max-w-[667px] text-left">
                {/* Title and Description */}
                <div className="flex flex-col items-start gap-5 sm:gap-10 w-full">
                    <div className="flex items-center gap-[20px] sm:gap-[30px] w-full">
                        <img className="w-[4px] h-[100px] sm:h-[70px]" alt="Line" src="/assets/img/line-1.svg" />

                        <div className="flex flex-col gap-2 flex-1">
                            <div className="flex items-center gap-2.5">
                                <div className="font-normal text-primary-1 text-lg">{subtitle}</div>
                                <img
                                    className="w-[35px] sm:w-[43px] h-[3px]"
                                    alt="Vector"
                                    src="/assets/img/vector-5.svg"
                                />
                            </div>

                            <h2 className="font-semibold text-[#050505] text-xl sm:text-2xl">
                                {title}
                            </h2>
                        </div>
                    </div>

                    <p className="font-normal text-description text-sm sm:text-base leading-[24px] sm:leading-[26px]">
                        {description}
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-[30px] w-full">
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <img
                                    className="hidden sm:block w-px h-[88px] object-cover"
                                    alt="Line"
                                    src="/assets/img/line-02.svg"
                                />
                            )}
                            <div className="flex flex-col items-start">
                                <div className="font-bold text-[#050505] text-[24px] sm:text-[28px]">
                                    {stat.value}
                                </div>
                                <div className="font-normal text-description text-sm sm:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                {/* Button Section */}
                {link ? (
                    <Link to={link}>
                        <Button className="h-14 sm:h-16 px-[35px] sm:px-[55px] py-[14px] sm:py-[18px] bg-primary-1 hover:bg-primary-1/90 rounded-[32px_32px_0px_32px] font-medium text-white text-base sm:text-lg">
                            <span className="flex items-center gap-2.5">
                                {buttonText}
                                <ChevronRightIcon className="w-[7px] h-[10px]" />
                            </span>
                        </Button>
                    </Link>
                ) : (
                    <Button
                        onClick={onButtonClick}
                        className="h-14 sm:h-16 px-[35px] sm:px-[55px] py-[14px] sm:py-[18px] bg-primary-1 hover:bg-primary-1/90 rounded-[32px_32px_0px_32px] font-medium text-white text-base sm:text-lg"
                    >
                        <span className="flex items-center gap-2.5">
                            {buttonText}
                            <ChevronRightIcon className="w-[7px] h-[10px]" />
                        </span>
                    </Button>
                )}
            </div>
        </section>
    );
};
