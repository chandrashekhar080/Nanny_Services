import React from "react";

type BreadcrumbProps = {
  title: string;
  backgroundImage?: string;
};

export const Breadcrumb = ({
  title,
  backgroundImage = "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600",
}: BreadcrumbProps): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start w-full">
      <div className="inline-flex flex-col items-center gap-5 w-full">
        <div className="w-full h-[500px]">
          <div
            className="flex flex-col w-full h-[500px] items-center justify-center gap-2.5 border-b-[0.3px] border-[#ffffff] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(255, 153, 154, 0.4) 0%, rgba(255, 153, 154, 0.4) 100%), url("${backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          >
            <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-5xl text-center tracking-[0] leading-[normal]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
