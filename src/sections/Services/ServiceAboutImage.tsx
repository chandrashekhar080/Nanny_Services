import React from "react";

export const ServiceAboutImage = () => {
  return (
    <div className="relative w-[560px] h-[611px] overflow-hidden rounded-[40px]">
      <svg
        viewBox="0 0 560 611"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="shapeMask">
            {/* Main rounded rectangle */}
            <rect width="560" height="611" fill="white" rx="40" ry="40" />

            {/* Rectangle cutout with radius only on bottom-right */}
            <rect
              x="0"
              y="0"
              width="320"
              height="60"
              fill="black"
              rx="0"
              ry="0"
              style={{ borderBottomRightRadius: "10px" }}
            />

            {/* New square cutout next to rectangle with radius only on top-left */}
            <rect
              x="320"
              y="0"
              width="60"
              height="60"
              fill="black"
              rx="0"
              ry="0"
              style={{ borderTopLeftRadius: "10px" }}
            />

            {/* Bottom square cutout */}
            <rect
              x="0"
              y="532"
              width="80"
              height="80"
              fill="black"
            />
          </mask>
        </defs>

        {/* Image with rounded visible edges only */}
        <image
          href="./service-about.png"
          width="560"
          height="611"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#shapeMask)"
        />
      </svg>

      {/* Play button */}
      <div className="absolute bottom-4 left-4 bg-black rounded-xl p-2 flex items-center justify-center">
        <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L11 7L1 13V1Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};