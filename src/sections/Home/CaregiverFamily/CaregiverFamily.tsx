import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

const caregivers = [
  {
    id: 1,
    name: "Kaitlin G.",
    location: "North Bend, OH, 45052",
    rate: "$17",
    experience: "5yrs",
    rating: "4.5",
    image: "/assets/img/2.png",
  },
  {
    id: 2,
    name: "Kaitlin G.",
    location: "North Bend, OH, 45052",
    rate: "$17",
    experience: "5yrs",
    rating: "4.5",
    image: "/assets/img/2.png",
  },
  {
    id: 3,
    name: "Kaitlin G.",
    location: "North Bend, OH, 45052",
    rate: "$17",
    experience: "5yrs",
    rating: "4.5",
    image: "/assets/img/2.png",
  },
  {
    id: 4,
    name: "Kaitlin G.",
    location: "North Bend, OH, 45052",
    rate: "$17",
    experience: "5yrs",
    rating: "4.5",
    image: "/assets/img/2.png",
  },
];

export const CaregiverFamily = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] mx-auto px-5 items-start gap-[30px] pt-[50px]">

      <h2 className="font-poppins font-semibold text-heading text-2xl">
        Background checked caregivers near you
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-6 sm:gap-8 lg:gap-10 
        w-full"
      >
        {caregivers.map((caregiver) => (
          <Card
            key={caregiver.id}
            className="flex flex-col gap-2.5 border-0 shadow-none"
          >
            <CardContent className="p-0 flex flex-col gap-2.5">

              <div className="relative">
                <img
                  className="w-full h-[260px] sm:h-[280px] lg:h-[291px] rounded-[7.61px] object-cover"
                  alt={caregiver.name}
                  src={caregiver.image}
                />

                {/* Rating badge */}
                <div className="flex w-[62px] items-center justify-center gap-[6.76px] pl-[13.52px] pr-[6.76px] py-[6.76px] absolute top-[0px] left-0 bg-[#40404080] rounded-[10px_0px_10px_0px] backdrop-blur-[2px]">
                  <div className="relative w-[44.75px] h-5">
                    <img
                      className="absolute top-[3px] left-px w-[13px] h-3"
                      alt="Star"
                      src="/assets/img/star-1.svg"
                    />
                    <div className="absolute top-0 left-[21px] font-poppins font-bold text-[#fefefe] text-[13px] text-center">
                      {caregiver.rating}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[9px] w-full">
                <h3 className="font-poppins font-semibold text-black text-lg">
                  {caregiver.name}
                </h3>

                <p className="font-poppins text-description text-sm">
                  {caregiver.location}
                </p>

                <p className="font-poppins text-description text-sm">
                  From {caregiver.rate} / hr • {caregiver.experience} of exp
                </p>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
