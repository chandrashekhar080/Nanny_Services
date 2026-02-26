import { useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "rsuite";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { ChevronDownIcon, Search } from "lucide-react";

const badges = [
  { icon: "/assets/img/allergy.png", text: "Health Free" },
  { icon: "/assets/img/cardio-load.png", text: "Hearth Safe" },
  { icon: "/assets/img/family-history.png", text: "Health Care" },
];

const categories = [
  { value: "babysitter", label: "Babysitter" },
  { value: "nanny", label: "Nanny" },
  { value: "caregiver", label: "Caregiver" },
  { value: "tutor", label: "Tutor" },
  { value: "special-needs", label: "Special Needs Care" },
];

export const HeroSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      date: selectedDate,
      category: selectedCategory,
      search: searchQuery,
    });
    // TODO: Add API call or navigation logic
  };

  const handleSearch = () => {
    console.log("Search clicked:", {
      date: selectedDate,
      category: selectedCategory,
      search: searchQuery,
    });
    // TODO: Add search logic
  };

  return (
    <section className="flex flex-col w-full relative overflow-hidden">
      <style>{`
        /* DatePicker Custom Styles */
        .rsuite-datepicker-custom {
          height: 100% !important;
        }
        .rsuite-datepicker-custom .rs-picker-toggle {
          background-color: rgb(240, 240, 241) !important;
          background: rgb(240, 240, 241) !important;
          color: #717273 !important;
          font-family: Poppins !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          border: none !important;
          border-width: 0 !important;
          border-style: none !important;
          box-shadow: none !important;
          height: 100% !important;
          outline: none !important;
        }
        .rsuite-datepicker-custom .rs-picker-toggle::before,
        .rsuite-datepicker-custom .rs-picker-toggle::after {
          border: none !important;
          display: none !important;
        }
        .rsuite-datepicker-custom .rs-picker-toggle:hover,
        .rsuite-datepicker-custom .rs-picker-toggle:focus,
        .rsuite-datepicker-custom .rs-picker-toggle:active,
        .rsuite-datepicker-custom .rs-picker-toggle:focus-visible,
        .rsuite-datepicker-custom .rs-picker-toggle:focus-within {
          background-color: rgb(240, 240, 241) !important;
          background: rgb(240, 240, 241) !important;
          box-shadow: none !important;
          border: none !important;
          outline: none !important;
        }
        .rsuite-datepicker-custom .rs-picker-toggle:focus-visible {
          outline: none !important;
          outline-offset: 0 !important;
        }
        .rsuite-datepicker-custom input:focus,
        .rsuite-datepicker-custom input:active,
        .rsuite-datepicker-custom input:focus-visible {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        .rsuite-datepicker-custom .rs-input-group:focus,
        .rsuite-datepicker-custom .rs-input-group:active,
        .rsuite-datepicker-custom .rs-input-group:focus-within {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        .rsuite-datepicker-custom .rs-picker-toggle-value {
          color: #717273 !important;
        }
        .rsuite-datepicker-custom .rs-picker-toggle-placeholder {
          color: #717273 !important;
          opacity: 0.6;
        }
        .rsuite-datepicker-custom .rs-picker-toggle-input {
          background-color: rgb(240, 240, 241) !important;
          background: rgb(240, 240, 241) !important;
          color: #717273 !important;
          border: none !important;
          border-width: 0 !important;
          height: 100% !important;
        }
        .rsuite-datepicker-custom input {
          background-color: rgb(240, 240, 241) !important;
          background: rgb(240, 240, 241) !important;
          color: #717273 !important;
          border: none !important;
          border-width: 0 !important;
          height: 100% !important;
        }
        .rsuite-datepicker-custom .rs-input-group-addon {
          background-color: rgb(240, 240, 241) !important;
          background: rgb(240, 240, 241) !important;
          border: none !important;
          border-width: 0 !important;
          border-left: none !important;
          border-right: none !important;
          border-top: none !important;
          border-bottom: none !important;
        }
        .rsuite-datepicker-custom .rs-input-group {
          background-color: rgb(240, 240, 241) !important;
          background: rgb(240, 240, 241) !important;
          border: none !important;
          border-width: 0 !important;
          height: 100% !important;
        }
        .rsuite-datepicker-custom .rs-input-group > * {
          border: none !important;
          border-width: 0 !important;
        }

        /* Select Category Custom Styles */
        .category-select-trigger {
          color: #717273 !important;
          font-family: Poppins !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
        }
        .category-select-trigger[data-placeholder] {
          color: #717273 !important;
        }
        .category-select-trigger span {
          color: #717273 !important;
          font-family: Poppins !important;
          font-size: 16px !important;
          font-weight: 500 !important;
        }
        .category-select-content {
          background: white !important;
          border-radius: 8px !important;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1) !important;
          z-index: 9999 !important;
        }
        .category-select-item {
          font-family: Poppins !important;
          font-size: 16px !important;
          padding: 12px 16px !important;
          cursor: pointer !important;
        }
        .category-select-item:hover,
        .category-select-item[data-highlighted] {
          background-color: #f3f4f6 !important;
        }
      `}</style>
      <div className="absolute inset-0 bg-[linear-gradient(198deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_100%)]">
        <div className="mt-[-420px] w-[1060px] h-[1060px] ml-[-200px] bg-style-1 rounded-[530px] blur-[500px] opacity-20" />
      </div>
      <img
        src="/assets/img/shape.png"
        alt="Decorative shape"
        className="absolute top-0 left-1/2 -translate-x-[80%] opacity-90 pointer-events-none"
      />
      <div className="relative w-full max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-[18px] mt-0 md:mt-[60px]">

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

              {/* Badges – wrap on small screens */}
              <div className="flex flex-wrap items-center gap-[10px] sm:gap-[13px]">
                {badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-[3px]">
                    <img className="" alt={badge.text} src={badge.icon} />
                    <span className="font-poppins font-medium text-heading text-xs">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/join-now">
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
      <div className="w-full max-w-[1280px] mx-auto px-5 my-8 sm:my-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 px-[30px] py-[34px] bg-[#fefefe] rounded-lg shadow-[0px_0px_14px_#00000040]">
          <div className="flex flex-col lg:flex-row items-center gap-[25px] sm:gap-[40px] w-full">
            {/* First Half: Date/Time Picker and Category */}
            <div className="flex flex-col sm:flex-row w-full lg:w-1/2 gap-[26px]">
              <div className="w-full sm:flex-1 h-[60px] py-0 bg-[#ebebf1] rounded-lg flex justify-between items-center">
                <div className="flex-1 min-w-0">
                  <DatePicker
                    value={selectedDate}
                    onChange={(value) => setSelectedDate(value as Date | null)}
                    format="MM/dd/yyyy hh:mm aa"
                    showMeridian
                    placeholder="Select Date & Times"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      background: "transparent",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#000000",
                    }}
                    className="rsuite-datepicker-custom"
                  />
                </div>
              </div>

              <div className="w-full sm:flex-1 h-[60px] py-0 bg-subtle-grey rounded-lg flex justify-between items-center relative">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="category-select-trigger w-full h-full px-5 py-0 bg-transparent border-0 hover:bg-transparent [&>svg]:hidden">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="category-select-content bg-white z-50">
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value} className="category-select-item font-poppins">
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ChevronDownIcon className="w-6 h-6 flex-shrink-0 pointer-events-none absolute right-5 text-[#717273]" />
              </div>
            </div>

            {/* Second Half: Search Bar and Submit Button */}
            <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center gap-[20px]">
              <div className="flex items-center gap-[20px] w-full sm:flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search best doctors consultations"
                  className="w-full bg-transparent border-0 font-poppins text-grey text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none placeholder:text-grey"
                  style={{ 
                    fontFamily: "Poppins",
                    pointerEvents: "auto",
                    zIndex: 1
                  }}
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex-shrink-0 p-2 hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-8 h-8 text-grey" />
                </button>
              </div>

              <Button 
                type="submit"
                className="w-full sm:w-[110px] h-[60px] p-3.5 bg-primary-11 rounded-lg font-poppins font-semibold text-[#fefefe] text-sm tracking-[0.70px] leading-[18px] hover:bg-primary-11/90 flex-shrink-0"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};