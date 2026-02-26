import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ProfileProgressbar } from "../../Common/ProfileProgressbar/ProfileProgressbar";
import { useState } from "react";

export const HeroFamily = (): JSX.Element => {
  const [showBar, setShowBar] = useState(true);
  return (
    <section className="flex flex-col w-full relative overflow-hidden ">
      <div className="absolute inset-0 bg-[linear-gradient(198deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_100%)]">
        <div className="mt-[-420px] w-[1060px] h-[1060px] ml-[-200px] bg-style-1 rounded-[530px] blur-[500px] opacity-20" />
      </div>
      <img
        src="/assets/img/shape.png"
        alt="Decorative shape"
        className="absolute top-0 left-1/2 -translate-x-[80%] opacity-90 pointer-events-none"
      />
      <div className="relative w-full max-w-[1280px] mx-auto px-5">
        {showBar && (
          <ProfileProgressbar
            title="Welcome To All Around Nanny Services"
            description="Let's complete your profile so we can connect you with caregivers."
            progress={35}
            buttons={[
              {
                text: "Complete Profile",
                to: "/family/account-settings",
                variant: "primary",
              },
              {
                text: "Skip for Now",
                onClick: () => setShowBar(false),
                variant: "secondary",
              },
            ]}
          />
        )}
        <div className="flex flex-col lg:flex-row items-center gap-[18px] mt-0 md:mt-[30px]">

          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full lg:w-[800px] gap-[25px] sm:gap-[79px] ">
            <div className="flex flex-col gap-[10px] sm:gap-[30px]">
              <div className="flex flex-col gap-[10px] sm:gap-[30px]">
                <div className="flex flex-col">
                  <p className="font-poppins text-[#fefefe] text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[3px] sm:tracking-[4px] md:tracking-[4.68px] uppercase">
                    WELCOME TO HOUSE CARE
                  </p>
                  <h1 className="font-poppins font-bold text-heading text-2xl sm:text-6xl tracking-[0] leading-tight sm:leading-[normal]">
                    Flexible Childcare
                  </h1>
                  <h1 className="font-poppins font-bold text-heading text-2xl sm:text-6xl tracking-[0] leading-tight sm:leading-[normal]">
                    When You Need It Most
                  </h1>
                </div>

                <p className="w-full max-w-[552px] font-poppins text-sub-heading text-base sm:text-lg tracking-[0] leading-[normal]">
                  Connect with trusted caregivers for temporary, part-time, and
                  specialized childcare solutions across America
                </p>
              </div>
            </div>

            <Link to={`${location.pathname.includes('family') ? '/family' : `${location.pathname.includes('care-giver') ? '/care-giver' : '/join-now}'}`}`}>
              <Button className="w-[280px] h-[60px] p-[11px] bg-primary-11 rounded-lg font-poppins font-semibold text-[#fefefe] text-base hover:bg-primary-11/90">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {/* RIGHT COLUMN – image + badge */}
          <div className="hidden lg:block relative w-[648.17px] h-[548px]">
            <img
              className="absolute top-0 left-[58px] w-[484px] h-[548px]"
              alt="Caregiver with child"
              src="/assets/img/image.png"
            />

            <div className="absolute top-[395px] left-0 w-[186px] h-20 flex items-center bg-[#ffffff] rounded-[20px] shadow-[-10px_10px_30px_#00000014]">
              <div className="flex items-center ml-[19.8px]">
                <div className="flex items-center justify-center w-[55px] h-[55px] font-outfit font-bold text-[44px] text-heading">
                  20
                </div>
                <img
                  className="w-px h-[33.27px] mx-[7.9px] object-cover"
                  alt="Line"
                  src="/assets/img/line.svg"
                />
                <div className="w-[82px] h-10 flex items-center justify-center font-outfit text-base text-heading">
                  Year of experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};