import React, { useState, useRef, useEffect } from "react";
import { Separator } from "../../../components/ui/separator";

export interface TabSection {
    label: string;
    content: React.ReactNode;
}

interface ScrollableTabsProps {
    sections: TabSection[];
}

export const ScrollableTabs: React.FC<ScrollableTabsProps> = ({ sections }) => {
    const [activeTab, setActiveTab] = useState(sections[0]?.label || "");

    const tabContainerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    // Create dynamic refs for each section
    const sectionRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});

    sections.forEach((sec) => {
        if (!sectionRefs.current[sec.label]) {
            sectionRefs.current[sec.label] = React.createRef();
        }
    });

    const scrollToSection = (label: string) => {
        const ref = sectionRefs.current[label];
        ref?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // Auto-center active tab
    useEffect(() => {
        const activeBtn = tabRefs.current[activeTab];
        const container = tabContainerRef.current;

        if (activeBtn && container) {
            const scrollAmount =
                activeBtn.offsetLeft -
                container.offsetWidth / 2 +
                activeBtn.offsetWidth / 2;

            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    }, [activeTab]);

    // Highlight tab when section enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-section");
                        if (id) setActiveTab(id);
                    }
                });
            },
            { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="flex [font-family:'Poppins',Helvetica] flex-col items-center w-full">
            {/* Sticky Tabs */}
            <div className="w-full sticky top-0 bg-white z-50 pb-8">
                <div
                    ref={tabContainerRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {sections.map((tab, idx) => (
                        <button
                            key={idx}
                            ref={(el) => (tabRefs.current[tab.label] = el)}
                            onClick={() => scrollToSection(tab.label)}
                            className="flex flex-col items-center whitespace-nowrap"
                        >
                            <span
                                className={`text-base ${activeTab === tab.label
                                    ? "text-primary-1 font-semibold"
                                    : "text-description"
                                    }`}
                            >
                                {tab.label}
                            </span>

                            {activeTab === tab.label && (
                                <div className="w-full h-0.5 bg-primary-1 mt-1" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sections */}
            {sections.map((sec, index) => (
                <div
                    key={index}
                    ref={sectionRefs.current[sec.label]}
                    data-section={sec.label}
                    className="w-full"
                >
                    {sec.content}
                    {index !== sections.length - 1 && <Separator className="my-8" />}
                </div>
            ))}
        </section>
    );
};
