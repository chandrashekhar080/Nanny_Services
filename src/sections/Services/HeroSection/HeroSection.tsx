import React from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { MapPinIcon } from "lucide-react";

export const HeroSection = (): JSX.Element => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-5">
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-[18px] relative">
                {/* Left Content */}
                <div className="flex flex-col w-full lg:w-[720px] items-start gap-6 lg:gap-[30px] relative">
                    <div className="flex flex-col items-start gap-6 lg:gap-[39px] relative w-full">
                        <div className="flex flex-col items-start gap-2.5 relative w-full">
                            <div className="flex flex-col items-start relative w-full">
                                <h1 className="relative self-stretch mt-[-1px] [font-family:'Poppins',Helvetica] font-bold text-[#050505] text-2xl lg:text-6xl tracking-[0] leading-9 lg:leading-[88px]">
                                    Comprehensive Childcare Services for Every Family
                                </h1>
                            </div>

                            <p className="relative w-full lg:w-[552px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                                We provide flexible, trusted childcare solutions designed to fit
                                your family&apos;s unique needs. From full-time care to
                                specialized support, our platform connects you with qualified
                                professionals you can count on.
                            </p>
                        </div>
                    </div>

                    {/* Search Box */}
                    <div className="flex flex-col items-start gap-2.5 p-5 relative w-full bg-[#fefefe] rounded-xl shadow-[0_0_14px_#00000040]">
                        <div className="flex flex-col lg:flex-row items-center justify-around gap-4 lg:gap-[53px] relative w-full">
                            <div className="flex flex-col lg:flex-row items-center justify-between pl-0 pr-0 py-0 relative w-full lg:flex-1 lg:grow">
                                <div className="inline-flex items-center gap-1 relative w-full lg:w-auto">
                                    <MapPinIcon className="relative w-5 h-6 text-[#050505]" />
                                    <Input
                                        type="text"
                                        placeholder="Search by location"
                                        className="relative w-full lg:w-fit [font-family:'Poppins',Helvetica] font-normal text-[#050505] text-base tracking-[0] leading-[normal] border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                                    />
                                </div>

                                <Button className="inline-flex h-[60px] items-center justify-center gap-2.5 px-[74px] py-3.5 relative w-full lg:w-auto bg-primary-1 rounded-lg hover:bg-primary-1/90 mt-4 lg:mt-0">
                                    <span className="relative flex items-center justify-center w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#fefefe] text-base tracking-[0.8px] leading-[18px] whitespace-nowrap">
                                        Search
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative w-full lg:flex-1 lg:grow h-auto lg:h-[511px] flex flex-row justify-center gap-4 lg:block">
                    {/* Base Image */}
                    <img
                        className="w-[60%] sm:w-[55%] md:w-[50%] lg:w-[350px] h-[300px] sm:h-[380px] md:h-[420px] lg:h-[511px] rounded-[10px] object-cover"
                        alt="Main Image"
                        src="/assets/img/image-01.png"
                    />

                    {/* Second Image (non-overlapping in mobile/tablet) */}
                    <img
                        className="w-[35%] sm:w-[33%] md:w-[30%] lg:absolute lg:top-[35px] lg:left-[366px] lg:w-[129px] h-[280px] sm:h-[350px] md:h-[390px] lg:h-[441px] rounded-[10px] object-cover"
                        alt="Second Image"
                        src="/assets/img/image-02.png"
                    />
                </div>
            </div>
        </section>
    );
};
