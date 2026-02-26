export default function TopTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="w-full flex [font-family:'Poppins',Helvetica] gap-6 text-sm md:text-lg mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={` ${
            activeTab === tab
              ? " text-[#FF999A] border-b-2 border-[#FF999A]"
              : ""
          } "inline-flex items-center justify-start pb-1 text-muted-foreground",

        
        "max-md:overflow-x-auto max-md:no-scrollbar max-md:gap-2",

 
        "whitespace-nowrap",
`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
