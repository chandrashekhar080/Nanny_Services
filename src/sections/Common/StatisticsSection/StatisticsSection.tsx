import React from "react";

const statisticsData = [
  {
    icon: "/assets/img/client.png",
    number: "1200",
    label: "Happy Clients",
  },
  {
    icon: "/assets/img/project.png",
    number: "225",
    label: "Project Done",
  },
  {
    icon: "/assets/img/coach.png",
    number: "35",
    label: "Expert Coach",
  },
  {
    icon: "/assets/img/experience.png",
    number: "25",
    label: "Year Experienced",
  },
];

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-primary-1 py-[80px] px-[30px] mt-[60px]">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-y-10 gap-x-8">
        {statisticsData.map((stat, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center justify-center gap-8 flex-1 min-w-[250px] max-w-[300px] pb-6 
                border-b md:border-none`}
              style={{
                borderColor:
                  index < statisticsData.length - 1
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
              }}
            >
              <img
                className="w-[60px] h-[66px] object-contain flex-shrink-0"
                alt={`${stat.label} icon`}
                src={stat.icon}
              />
              <div className="flex flex-col gap-[3px] text-center lg:text-left">
                <div className="[font-family:'Outfit',Helvetica] text-[36px] lg:text-[44px] leading-[normal] tracking-[0] text-white">
                  <span className="font-bold">{stat.number}</span>{" "}
                  <span className="font-light">+</span>
                </div>
                <div className="[font-family:'Outfit',Helvetica] font-light text-lg lg:text-xl leading-[normal] tracking-[0] text-white">
                  {stat.label}
                </div>
              </div>
            </div>

            {/* ✅ Desktop separator */}
            {index < statisticsData.length - 1 && (
              <div className="hidden lg:block">
                <img
                  className="w-[4.15px] h-[80px] mt-[-0.01px] flex-shrink-0"
                  alt="Line"
                  src="/assets/img/line-02.svg"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
