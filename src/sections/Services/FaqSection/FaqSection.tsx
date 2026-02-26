import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  titleImage?: string;
  description?: string;
  showSearch?: boolean;
  items: FaqItem[];
}

export const FaqSection = ({
  title,
  subtitle,
  titleImage = "/assets/img/vector-5.svg",
  description,
  showSearch = false,
  items,
}: FaqSectionProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return items;
    }
    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  const defaultItem = filteredItems.find((item) => item.defaultOpen)?.id || filteredItems[0]?.id;

  return (
    <section className="flex  max-md:px-5 flex-col w-full items-start justify-center gap-5 sm:gap-8 max-w-[1280px] mx-auto mt-[60px] sm:mb-10">
      {/* Header (only show if title or subtitle exist) */}
      {(title || subtitle) && (
        <header className="flex flex-col w-full items-start gap-2.5">
          {subtitle && (
            <div className="inline-flex items-center gap-2.5">
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#FF999A] text-lg tracking-[0] leading-[normal]">
                {subtitle}
              </h3>
              {titleImage && (
                <img
                  className="w-[45px] h-[3.51px]"
                  alt="Title Icon"
                  src={titleImage}
                />
              )}
            </div>
          )}

          {title && (
            <h2 className="self-stretch [font-family:'Poppins',Helvetica] font-medium text-[#050505] text-2xl tracking-[0] leading-[normal]">
              {title}
            </h2>
          )}
          {/* Description */}
          {description && (
            <p className="[font-family:'Poppins',Helvetica] font-normal text-description-d text-sm tracking-[0] leading-[normal] w-full">
              {description}
            </p>
          )}
        </header>
      )}



      {/* Search Bar */}
      {showSearch && (
        <div className="relative w-full max-w-[600px]">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-primary-1 rounded-full p-3 w-10 h-10" />
          <Input
            type="text"
            placeholder='Search for help (e.g., "reset password", "cancel subscription")'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 pr-10 pl-4 rounded-full [font-family:'Poppins',Helvetica] text-sm w-full truncate"
          />
        </div>
      )}

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={defaultItem}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-[#E5E5E5]"
            >
              <AccordionTrigger className="flex items-center justify-between py-5 px-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#050505] text-base tracking-[0] leading-[normal] text-left">
                  {item.question}
                </span>
              </AccordionTrigger>

              {item.answer && (
                <AccordionContent className="pb-5">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm tracking-[0] leading-[26px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm">
              No FAQs found matching your search.
            </p>
          </div>
        )}
      </Accordion>
    </section>
  );
};
