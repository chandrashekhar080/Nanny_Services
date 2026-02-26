import { MapPinIcon, PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const footerColumnsLayout = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/join-now" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Caregivers",
    links: [
      { label: "Create Profile", href: "/join-now" },
      { label: "Find Jobs", href: "/join-now" },
    ],
  },
  {
    title: "Families",
    links: [
      { label: "Search Caregivers", href: "/join-now" },
      { label: "Pricing & Plans", href: "/subscription" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

const footerColumnsFaimly = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/family" },
      { label: "About", href: "/family/about" },
      { label: "Services", href: "/family/services" },
      { label: "Contact", href: "/family/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/family/help-center" },
      { label: "FAQ", href: "family/faq" },
    ],
  },
  {
    title: "Caregivers",
    links: [
      { label: "Create Profile", href: "/family/account-settings?edit=true" },
      { label: "Find Jobs", href: "/family/jobs" },
    ],
  },
  {
    title: "Families",
    links: [
      { label: "Search Caregivers", href: "/family/care-givers" },
      { label: "Pricing & Plans", href: "/family/subscription" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/family/privacy-policy" },
      { label: "Terms of Service", href: "/family/terms-of-service" },
      { label: "Cookie Policy", href: "/family/cookie-policy" },
    ],
  },
];

const footerColumnsCareGiver = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/care-giver" },
      { label: "About", href: "/care-giver/about" },
      { label: "Services", href: "/care-giver/familys" },
      { label: "Contact", href: "/care-giver/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/care-giver/help-center" },
      { label: "FAQ", href: "/care-giver/faq" },
    ],
  },
  {
    title: "Caregivers",
    links: [
      { label: "Create Profile", href: "/care-giver/account-settings?edit=true" },
      { label: "Find Jobs", href: "/care-giver/familys" },
    ],
  },
  {
    title: "Families",
    links: [
      { label: "Search Caregivers", href: "/care-giver" },
      { label: "Pricing & Plans", href: "/care-giver/subscription" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/care-giver/privacy-policy" },
      { label: "Terms of Service", href: "/care-giver/terms-of-service" },
      { label: "Cookie Policy", href: "/care-giver/cookie-policy" },
    ],
  },
];

export const FooterSection = (): JSX.Element => {

const [footerColumns, setFooterColumns] = useState([]);

  const userType = localStorage.getItem("UserType");
  console.log(userType);

  // const footerColumns =
  //  userType === "care-giver"
  //     ? footerColumnsCareGiver
  //     :userType === "family"
  //     ? footerColumnsFaimly
  //     : footerColumnsLayout;
useEffect(() => {
  if (userType === "care-giver") {
    setFooterColumns(footerColumnsCareGiver);
  } else if (userType === "family") {
    setFooterColumns(footerColumnsFaimly);
  } else {
    setFooterColumns(footerColumnsLayout);
  }
}),[userType];

  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-white-100 max-w-[1280px] mx-auto px-5 py-10">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 w-full">
          {/* About Company */}
          <div className="flex flex-col gap-5 w-full lg:w-[250px] flex-shrink-0">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold text-heading text-lg sm:text-xl [font-family:'Poppins',Helvetica]">
                About Company
              </h3>
              <p className="font-normal text-sub-heading text-sm sm:text-base leading-normal [font-family:'Poppins',Helvetica]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <MapPinIcon className="w-5 h-6 text-heading flex-shrink-0" />
              <div className="font-normal text-base [font-family:'Poppins',Helvetica]">
                <span className="text-[#050505] block leading-5">Address</span>
                <span className="text-[#1e1e1e] leading-6">Address goes here</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneIcon className="w-[22px] h-[22px] text-heading flex-shrink-0" />
              <div className="font-normal text-base [font-family:'Poppins',Helvetica]">
                <span className="text-[#050505] block leading-5">Phone Number</span>
                <span className="text-[#1e1e1e] leading-6">+12345-678</span>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          <div
            className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-5 
      gap-8 
      flex-1
    "
          >
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-5">
                <h3 className="font-semibold text-heading text-lg sm:text-xl [font-family:'Poppins',Helvetica]">
                  {column.title}
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {column.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.href}
                      className="font-normal text-sub-heading text-sm sm:text-base [font-family:'Poppins',Helvetica] hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-11 px-6 sm:px-10 lg:px-20 py-4 sm:py-5 flex items-center justify-center text-center">
        <p className="font-semibold text-white text-sm sm:text-base [font-family:'Poppins',Helvetica] leading-6">
          ©2025 All Around American - Nanny Services. All rights reserved
        </p>
      </div>
    </footer>
  );
};
