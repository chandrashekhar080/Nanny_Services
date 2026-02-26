import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const navigationItems = [
  { label: "Home", href: "/home", active: true },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const badges = [
  { icon: "/assets/img/allergy.png", text: "Health Free" },
  { icon: "/assets/img/cardio-load.png", text: "Hearth Safe" },
  { icon: "/assets/img/family-history.png", text: "Health Care" },
];

export const TopCaregiversSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full h-[813px] relative overflow-hidden bg-[linear-gradient(198deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_100%)]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="mt-[-420px] w-[1060px] h-[1060px] ml-[-200px] bg-style-1 rounded-[530px] blur-[500px] opacity-20" />
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-5">
          <nav className="flex items-center justify-between py-2 rounded-2xl">
            <img
              className="w-[143px] h-[67px]"
              alt="All around american"
              src="/assets/img/all-around-american-nanny-service-1-1.svg"
            />

            <div className="flex items-center gap-6">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center gap-2"
                >
                  <span
                    className={`[font-family:'Poppins',Helvetica] text-base tracking-[0] leading-[normal] ${item.active
                        ? "font-medium text-primary-11"
                        : "font-normal text-heading"
                      }`}
                  >
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-5 h-5 text-heading" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <span className="[font-family:'Poppins',Helvetica] font-normal text-heading text-base tracking-[0] leading-[normal]">
                Login
              </span>
              <Button className="h-12 px-8 py-2 bg-primary-11 rounded-xl [font-family:'Geist',Helvetica] font-bold text-[#ffffff] text-lg tracking-[0] leading-[normal] hover:bg-primary-11/90">
                Join Now
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-[18px] mt-[104px]">
            <div className="flex flex-col w-[720px] gap-[79px]">
              <div className="flex flex-col gap-[39px]">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col">
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#fefefe] text-xs tracking-[4.68px] leading-[normal]">
                      WELCOME TO HOUSE CARE
                    </p>
                    <h1 className="[font-family:'Poppins',Helvetica] font-bold text-heading text-6xl tracking-[0] leading-[normal]">
                      Flexible Childcare When You Need It Most
                    </h1>
                  </div>

                  <p className="w-[552px] [font-family:'Poppins',Helvetica] font-normal text-sub-heading text-lg tracking-[0] leading-[normal]">
                    Connect with trusted caregivers for temporary, part-time,
                    and specialized childcare solutions across America
                  </p>
                </div>

                <div className="flex items-center gap-[13px]">
                  {badges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-[3px]">
                      <img
                        className="w-6 h-6"
                        alt={badge.text}
                        src={badge.icon}
                      />
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-heading text-xs tracking-[0] leading-[normal]">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-[310px] h-[60px] p-[11px] bg-primary-11 rounded-lg [font-family:'Poppins',Helvetica] font-semibold text-[#fefefe] text-base tracking-[0] leading-[normal] hover:bg-primary-11/90">
                Learn How It Works
              </Button>
            </div>

            <div className="relative w-[542.17px] h-[548px]">
              <img
                className="absolute top-0 left-[58px] w-[484px] h-[548px]"
                alt="Caregiver with child"
                src="/assets/img/image.png"
              />

              <div className="absolute top-[395px] left-px w-[186px] h-20 flex items-center bg-[#ffffff] rounded-[20px] shadow-[-10px_10px_30px_#00000014]">
                <div className="flex items-center ml-[19.8px]">
                  <div className="flex items-center justify-center w-[55px] h-[55px] [font-family:'Outfit',Helvetica] font-bold text-[44px] leading-[normal] text-heading tracking-[0]">
                    20
                  </div>
                  <img
                    className="w-px h-[33.27px] mx-[7.9px] object-cover"
                    alt="Line"
                    src="/assets/img/line.svg"
                  />
                  <div className="flex items-center justify-center w-[82px] h-10 [font-family:'Outfit',Helvetica] font-normal text-heading text-base tracking-[0] leading-[normal]">
                    Year of experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[101px] left-1/2 -translate-x-1/2 w-[1280px]">
          <div className="flex flex-col gap-2.5 px-[30px] py-[34px] bg-[#fefefe] rounded-lg shadow-[0px_0px_14px_#00000040]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[26px]">
                <Button
                  variant="ghost"
                  className="w-[300px] h-[60px] px-5 py-0 bg-subtle-grey rounded-lg hover:bg-subtle-grey/80 justify-between"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-neutral-950 text-base text-center tracking-[0] leading-[normal]">
                    Select Date &amp; Times
                  </span>
                  <img
                    className="w-6 h-6"
                    alt="Calendar icon"
                    src="/assets/img/icons.svg"
                  />
                </Button>

                <Button
                  variant="ghost"
                  className="w-[300px] h-[60px] px-5 py-0 bg-subtle-grey rounded-lg hover:bg-subtle-grey/80 justify-between"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-neutral-950 text-base text-center tracking-[0] leading-[normal]">
                    Select Category
                  </span>
                  <img
                    className="w-6 h-6"
                    alt="Dropdown icon"
                    src="/assets/img/icons.svg"
                  />
                </Button>
              </div>

              <div className="flex items-center gap-[39px]">
                <div className="flex items-center gap-[45px]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-grey text-base text-center tracking-[0] leading-[normal]">
                    Search best doctors consultations
                  </span>
                  <img
                    className="w-10 h-10"
                    alt="Search icon"
                    src="/assets/img/icons-1.svg"
                  />
                </div>

                <Button className="w-[110px] h-[60px] p-3.5 bg-primary-11 rounded-lg [font-family:'Poppins',Helvetica] font-semibold text-[#fefefe] text-sm tracking-[0.70px] leading-[18px] hover:bg-primary-11/90">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
