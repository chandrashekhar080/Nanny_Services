import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const navigationItems = [
  { label: "Home", path: "/", active: true },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const servicesDropdown = [
  {
    title: "Childcare Services",
    items: [
      { label: "Full-Time Care", path: "/services" },
      { label: "Part-Time Care", path: "/services" },
      { label: "Temporary Care", path: "/services" },
      { label: "Live-in Support", path: "/services" },
      { label: "Overnight Care", path: "/services" },
    ],
  },
  {
    title: "Specialized Services",
    items: [
      { label: "Infant & Newborn Care", path: "/services" },
      { label: "Tutoring & Homework Help", path: "/services" },
      { label: "Mother's Helper", path: "/services" },
      { label: "Special Needs Care", path: "/services" },
    ],
  },
];

export const HeaderSection = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeout = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) setIsDropdownOpen(false);
  }, [isMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) window.clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeout.current) window.clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
      dropdownTimeout.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) window.clearTimeout(dropdownTimeout.current);
    };
  }, []);

  return (
    <section className={`flex w-full ${ location.pathname === "/" || location.pathname.includes("/home") ? "bg-[#fffff4]" :"bg-white"}`}
>
      <div className="relative w-full max-w-[1280px] mx-auto px-5 bg-[linear-gradient(198deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_100%)]">
        <nav className="flex items-center justify-between py-3 rounded-2xl relative">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[143px] h-[90px]"
              alt="All around american"
              src="/assets/img/logo.png"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 relative">
            {navigationItems.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));

              return (
                <div
                  key={index}
                  className="relative"
                  ref={item.hasDropdown ? dropdownRef : null}
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter()}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  
                  {item.hasDropdown ? (
                    <>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <Link
                          to={item.path}
                          className={`[font-family:'Poppins',Helvetica] text-base ${isActive
                            ? "font-medium text-primary-11"
                            : "font-normal text-heading"
                            } hover:text-primary-11`}
                        >
                          {item.label}
                        </Link>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-heading transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </div>

                      {isDropdownOpen && (
                        <div
                          className="absolute top-full mt-3 left-0 w-[520px] bg-white shadow-lg rounded-xl border border-gray-100 z-50 p-5"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="flex gap-8">
                            {servicesDropdown.map((category, i) => (
                              <div key={i} className="flex-1">
                                <span className="block text-[16px] font-semibold text-heading mb-3 [font-family:'Poppins',Helvetica]">
                                  {category.title}
                                </span>
                                <ul className="space-y-2">
                                  {category.items.map((sub, j) => (
                                    <li key={j}>
                                      <Link
                                        to={sub.path}
                                        className="[font-family:'Poppins',Helvetica] block text-[12px] text-black hover:bg-gray-100 p-2 rounded-md"
                                        onClick={() => setIsDropdownOpen(false)}
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`[font-family:'Poppins',Helvetica] text-base ${isActive
                        ? "font-medium text-primary-11"
                        : "font-normal text-heading"
                        } hover:text-primary-11`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/login"
              className="[font-family:'Poppins',Helvetica] font-normal text-heading text-base hover:text-primary-11"
            >
              Login
            </Link>

            <Link to="/join-now">
              <Button className="h-12 px-8 py-2 bg-primary-11 rounded-xl [font-family:'Geist',Helvetica] font-bold text-white text-lg hover:bg-primary-11/90">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          {!isMenuOpen && (
            <button
              className="lg:hidden focus:outline-none z-40"
              onClick={() => {
                setIsMenuOpen(true);
                setIsDropdownOpen(false);
              }}
              aria-label="Open menu"
            >
              <MenuIcon className="w-7 h-7 text-heading" />
            </button>
          )}

          {/* Mobile Drawer */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              <div className={`fixed left-0 top-0 h-full w-[80%] max-w-[320px] ${ location.pathname === "/" || location.pathname.includes("/home") ? "bg-[#fffff4]" :"bg-white"} shadow-xl transform transition-transform duration-300 translate-x-0`}>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 focus:outline-none bg-white rounded-full p-1"
                  aria-label="Close menu"
                >
                  <XIcon className="w-7 h-7 text-heading" />
                </button>

                <ul className="flex flex-col p-6 space-y-2 mt-12">
                  {navigationItems.map((item, index) => {
                    const isActive =
                      location.pathname === item.path ||
                      (item.path !== "/" &&
                        location.pathname.startsWith(item.path));

                    return (
                      <li key={index}>
                        {item.hasDropdown ? (
                          <>
                            <div className="flex justify-between items-center">
                              <Link
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base py-2 px-2 [font-family:'Poppins',Helvetica] ${isActive
                                  ? "text-primary-11 font-medium"
                                  : "text-heading"
                                  } hover:text-primary-11`}
                              >
                                {item.label}
                              </Link>

                              <button
                                onClick={() =>
                                  setIsDropdownOpen((prev) => !prev)
                                }
                                className="focus:outline-none"
                              >
                                <ChevronDownIcon
                                  className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                              </button>
                            </div>

                            {isDropdownOpen && (
                              <div className="pl-4 mt-1 space-y-3">
                                {servicesDropdown.map((category, i) => (
                                  <div key={i}>
                                    <p className="text-black font-semibold text-sm mb-1 [font-family:'Poppins',Helvetica]">
                                      {category.title}
                                    </p>
                                    <ul className="space-y-1">
                                      {category.items.map((sub, j) => (
                                        <li key={j}>
                                          <Link
                                            to={sub.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-[13px] text-black hover:bg-gray-100 py-1 px-1 [font-family:'Poppins',Helvetica]"
                                          >
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block text-base py-2 px-2 [font-family:'Poppins',Helvetica] ${isActive
                              ? "text-primary-11 font-medium"
                              : "text-heading"
                              } hover:text-primary-11`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}

                  {/* Mobile Buttons */}
                  <li>
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-base py-2 px-2 text-heading hover:text-primary-11 [font-family:'Poppins',Helvetica]"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/join-now" onClick={() => setIsMenuOpen(false)}>
                      <Button className="h-12 w-full mt-2 bg-primary-11 text-white text-base rounded-xl hover:bg-primary-11/90">
                        Join Now
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};
