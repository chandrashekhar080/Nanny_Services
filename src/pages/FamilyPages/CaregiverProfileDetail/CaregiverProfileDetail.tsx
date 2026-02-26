import { Heart } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { FaStar } from "react-icons/fa6";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

// TYPES FOR REUSABILITY
interface ProfileBadge {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface CaregiverProfileProps {
    name: string;
    experience: string;
    location: string;

    rating: number;
    reviewsCount: number;

    image: string;
    imageIndex?: string;

    favoriteIcon?: string;

    topBadges?: string[];
    profileBadges?: ProfileBadge[];

    onBook?: () => void;
    onMessage?: () => void;

    education?: string[];
    languages?: string[];
    extras?: string[];
}

export const CaregiverProfileDetail = ({
    name,
    experience,
    location,
    rating,
    reviewsCount,
    image,

    topBadges = [],
    profileBadges = [],

    onBook,
    onMessage,

    education = [],
    languages = [],
    extras = [],
}: CaregiverProfileProps) => {
    return (
        <div className="flex flex-col items-start justify-center gap-5 w-full">
            {/* MAIN PROFILE CARD */}
            <Card className="flex flex-col w-full p-5 bg-white rounded-xl border border-[#f1f1f1] shadow-shadows">
                <CardContent className="flex flex-col w-full gap-4 p-0">

                    {/* TOP SECTION */}
                    <div className="flex flex-col w-full gap-6">

                        {/* IMAGE + DETAILS */}
                        <div className="flex items-start gap-3 w-full">

                            {/* PROFILE IMAGE */}
                            <div
                                className="w-28 h-28 flex items-center justify-center rounded-xl bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${image})`
                                }}
                            >
                            </div>

                            {/* NAME + DETAILS */}
                            <div className="flex flex-col flex-1 gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="text-[#050505] text-lg font-medium">
                                        {name}
                                    </div>
                                    <Heart />
                                </div>

                                <div className="text-sm font-medium text-[#050505]">
                                    {experience}
                                </div>

                                <div className="text-sm text-description">
                                    {location}
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaStar className="text-[#FEC00D]" />
                                    <span className="text-sm font-medium">{rating}</span>
                                    <span className="text-sm text-description">({reviewsCount})</span>
                                </div>
                            </div>
                        </div>

                        {/* TOP BADGES */}
                        <div className="flex items-center gap-2 flex-wrap">
                            {topBadges.map((badge, i) => (
                                <Badge
                                    key={i}
                                    className="px-2 py-1 bg-primary-100 text-primary-1 border border-primary-1 rounded hover:bg-primary-100 hover:text-primary-1"
                                >
                                    {badge}
                                </Badge>
                            ))}

                            {/* STATIC ICONS (optional) */}
                            <img className="w-5 h-5" src="/assets/img/verified-check-svgrepo-com.svg" />
                            <img className="w-5 h-5" src="/assets/img/crown-svgrepo-com.svg" />
                        </div>

                        {/* PROFILE BADGES */}
                        <div className="flex flex-col gap-4 w-full">
                            {profileBadges.map((badge, index) => (
                                <div key={index} className="flex gap-3 w-full">
                                    {badge.icon}
                                    <div>
                                        <div className="font-semibold">{badge.title}</div>
                                        <div className="text-sm">{badge.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col w-full gap-4">
                        <Button
                            className="h-12 w-full bg-primary-1 rounded-full text-white hover:bg-primary-1/90"
                            onClick={onBook}
                        >
                            Request Booking
                        </Button>

                        <Button
                            variant="outline"
                            className="h-12 w-full rounded-full border-primary-1 text-primary-1 hover:border-primary-1/90 hover:text-primary-1"
                            onClick={onMessage}
                        >
                            Message
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* SECTIONS CARD */}
            <Card className="flex flex-col w-full p-5 bg-white rounded-xl border border-[#f1f1f1] shadow-shadows">
                <CardContent className="flex flex-col w-full gap-6 p-0">

                    {/* EDUCATION */}
                    {education.length > 0 && (
                        <section>
                            <h3 className="font-semibold text-base mb-2">Education</h3>
                            {education.map((item, i) => (
                                <p key={i} className="text-sm">{item}</p>
                            ))}
                        </section>
                    )}

                    {/* LANGUAGES */}
                    {languages.length > 0 && (
                        <section>
                            <h3 className="font-semibold text-base mb-2">Languages</h3>
                            {languages.map((lang, i) => (
                                <p key={i} className="text-sm">{lang}</p>
                            ))}
                        </section>
                    )}

                    {/* ADDITIONAL DETAILS */}
                    {extras.length > 0 && (
                        <section>
                            <h3 className="font-semibold text-base mb-2">Additional details</h3>
                            {extras.map((extra, i) => (
                                <p key={i} className="text-sm">{extra}</p>
                            ))}
                        </section>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};



export default function CaregiverProfileDetail1({
  initials = "JF",
  name = "Johnson Family",
  verified = true,
  location = "New York, NY",
  rate = "$20/Hr",
  tags = ["Part-Time", "Child Care"],
  onSave = () => {},
  onApply = () => {},
}) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white [font-family:'Poppins',Helvetica] rounded-xl shadow p-5 w-[300px] space-y-5 hover:shadow-lg transition border border-gray-100">
      
      {/* Top Section */}
      <div className="flex gap-4 items-start">
        {/* Logo Placeholder */}
        <div className="w-24 h-24 bg-[#FFF5F5]/50 rounded-xl flex items-center justify-center text-[#FF999A] font-semibold">
          {initials}
        </div>

        <div className="flex flex-col">
       <div className="flex gap-2 m-2">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.83316 2.08025C7.61399 2.26702 7.5044 2.36042 7.38736 2.43887C7.11907 2.61869 6.81775 2.74349 6.50089 2.80605C6.36266 2.83335 6.21913 2.8448 5.93207 2.8677C5.21083 2.92526 4.8502 2.95404 4.54934 3.06031C3.85346 3.3061 3.3061 3.85346 3.06031 4.54934C2.95404 4.8502 2.92526 5.21083 2.8677 5.93207C2.8448 6.21913 2.83335 6.36266 2.80605 6.50089C2.74349 6.81775 2.61869 7.11907 2.43887 7.38736C2.36042 7.5044 2.26703 7.61398 2.08025 7.83316C1.61095 8.38387 1.37629 8.65918 1.2387 8.94709C0.920433 9.613 0.920433 10.387 1.2387 11.0529C1.3763 11.3408 1.61095 11.6161 2.08025 12.1668C2.267 12.386 2.36042 12.4956 2.43887 12.6126C2.61869 12.8809 2.74349 13.1822 2.80605 13.4991C2.83335 13.6374 2.8448 13.7809 2.8677 14.0679C2.92526 14.7892 2.95404 15.1498 3.06031 15.4507C3.3061 16.1465 3.85346 16.6939 4.54934 16.9397C4.8502 17.0459 5.21083 17.0747 5.93207 17.1323C6.21913 17.1552 6.36266 17.1667 6.50089 17.194C6.81775 17.2565 7.11907 17.3813 7.38736 17.5612C7.5044 17.6396 7.61398 17.733 7.83316 17.9197C8.38387 18.3891 8.65918 18.6237 8.94709 18.7613C9.613 19.0796 10.387 19.0796 11.0529 18.7613C11.3408 18.6237 11.6161 18.3891 12.1668 17.9197C12.386 17.733 12.4956 17.6396 12.6126 17.5612C12.8809 17.3813 13.1822 17.2565 13.4991 17.194C13.6374 17.1667 13.7809 17.1552 14.0679 17.1323C14.7892 17.0747 15.1498 17.0459 15.4507 16.9397C16.1465 16.6939 16.6939 16.1465 16.9397 15.4507C17.0459 15.1498 17.0747 14.7892 17.1323 14.0679C17.1552 13.7809 17.1667 13.6374 17.194 13.4991C17.2565 13.1822 17.3813 12.8809 17.5612 12.6126C17.6396 12.4956 17.733 12.386 17.9197 12.1668C18.3891 11.6161 18.6237 11.3408 18.7613 11.0529C19.0796 10.387 19.0796 9.613 18.7613 8.94709C18.6237 8.65918 18.3891 8.38387 17.9197 7.83316C17.733 7.61398 17.6396 7.5044 17.5612 7.38736C17.3813 7.11907 17.2565 6.81775 17.194 6.50089C17.1667 6.36266 17.1552 6.21913 17.1323 5.93207C17.0747 5.21083 17.0459 4.8502 16.9397 4.54934C16.6939 3.85346 16.1465 3.3061 15.4507 3.06031C15.1498 2.95404 14.7892 2.92526 14.0679 2.8677C13.7809 2.8448 13.6374 2.83335 13.4991 2.80605C13.1822 2.74349 12.8809 2.61869 12.6126 2.43887C12.4956 2.36042 12.386 2.26703 12.1668 2.08025C11.6161 1.61095 11.3408 1.3763 11.0529 1.2387C10.387 0.920433 9.613 0.920433 8.94709 1.2387C8.65918 1.37629 8.38387 1.61095 7.83316 2.08025ZM13.9362 8.07683C14.2222 7.79077 14.2222 7.327 13.9362 7.04095C13.6501 6.7549 13.1863 6.7549 12.9003 7.04095L8.53507 11.4062L7.09972 9.97084C6.81367 9.68482 6.34989 9.68482 6.06384 9.97084C5.7778 10.2569 5.7778 10.7206 6.06384 11.0067L8.0171 12.96C8.30314 13.246 8.76691 13.246 9.05302 12.96L13.9362 8.07683Z" fill="#0088E8"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 20 20" fill="none">
<path d="M17 7.08312C17 6.49608 16.5236 6.02014 15.9366 6.02014C15.3491 6.02014 14.8727 6.49608 14.8727 7.08312C14.8727 7.37022 14.9868 7.63042 15.1718 7.82139C14.4485 9.3193 13.0659 9.84224 11.9944 9.36887C11.0399 8.94674 10.6879 7.74021 10.5687 6.80541C10.9579 6.60078 11.2232 6.19317 11.2232 5.72278C11.2232 5.04731 10.6759 4.5 10 4.5C9.32453 4.5 8.7768 5.04731 8.7768 5.72278C8.7768 6.19317 9.04212 6.60075 9.43136 6.80541C9.31217 7.74024 8.96012 8.94677 8.00563 9.36887C6.93408 9.84227 5.55153 9.3193 4.8282 7.82139C5.01321 7.63042 5.12729 7.37022 5.12729 7.08312C5.12729 6.49608 4.65091 6.02014 4.06386 6.02014C3.47638 6.02014 3 6.49608 3 7.08312C3 7.624 3.40417 8.06962 3.92627 8.13713L5.15204 12.6236H14.848L16.0737 8.13713C16.5962 8.06962 17 7.624 17 7.08312Z" fill="url(#paint0_linear_431_6998)"/>
<path d="M15.4418 14.5372C15.4418 14.9742 15.0877 15.3284 14.6502 15.3284H5.34987C4.91278 15.3284 4.55859 14.9742 4.55859 14.5372V14.4714C4.55859 14.0339 4.91278 13.6797 5.34987 13.6797H14.6502C15.0877 13.6797 15.4418 14.0339 15.4418 14.4714V14.5372Z" fill="url(#paint1_linear_431_6998)"/>
<defs>
<linearGradient id="paint0_linear_431_6998" x1="10" y1="4.5" x2="10" y2="12.6236" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF999A"/>
<stop offset="1" stop-color="#FF4F4F"/>
</linearGradient>
<linearGradient id="paint1_linear_431_6998" x1="10.0002" y1="13.6797" x2="10.0002" y2="15.3284" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF999A"/>
<stop offset="1" stop-color="#FF4F4F"/>
</linearGradient>
</defs>
</svg>
</div>
          <div className="flex items-center gap-2">
             
            <h2 className="font-semibold text-[16px]">{name}</h2>
          
          </div>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-[11px] px-2 py-[3px] border border-[#FF999A] rounded-[10px] bg-rose-50 text-[#FF999A]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rate */}
      <p className="font-semibold text-[18px]">{rate}</p>

      {/* Buttons */}
      <div className="flex gap-3">
        {/* Save Button */}
        <button
          className="flex-1 border border-rose-300 text-[#FF999A] py-2 rounded-full flex items-center justify-center gap-2 hover:bg-rose-50 transition"
          onClick={() => {
            setSaved(!saved);
            onSave();
          }}
        >
          {saved ? (
            <IoMdHeart className="text-[#FF999A]" />
          ) : (
            <IoMdHeartEmpty className="text-[#FF999A]" />
          )}
          Save Job
        </button>

        {/* Apply Button */}
        <button
          className="flex-1 bg-[#FF999A] text-white py-2 rounded-full hover:bg-[#FF999A] transition"
          onClick={onApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}