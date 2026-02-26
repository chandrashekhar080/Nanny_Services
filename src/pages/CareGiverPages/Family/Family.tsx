import React from 'react'
import { SearchbarSection } from '../../../sections/Common/Searchbar/SearchbarSection'
import { FilterSection } from '../../../sections/Common/FilterSection'
import JobCard from '../JobCard/JobCard'



const locationOptions = [
    { id: "within-5km", label: "Within 5 km", checked: true },
    { id: "5-10km", label: "5 – 10 km" },
    { id: "10-20km", label: "10 – 20 km" },
];

const jobOptions = [
    { id: "Full-Time", label: "Full-Time", checked: true },
    { id: "Part-Time", label: "Part-Time" },
    { id: "Overnight", label: "Overnight" },
    { id: "Live-in", label: "Live-in" },
];

const childrensOptions = [
    { id: "Infant (0–12m)", label: "Infant (0–12m)", checked: true },
    { id: "Toddler (1–3y)", label: "Toddler (1–3y)" },
    { id: "Preschool (3–5y)", label: "Preschool (3–5y)" },
    { id: "School Age (6–12y)", label: "School Age (6–12y)" },
    { id: "Teen (13+)", label: "Teen (13+)" },

];

const availabilityOptions = [
    { id: "Days", label: "Days", checked: true },
    { id: "Hours", label: "Hours", checked: false },

];



const jobsData=[
    {
      family: "Johnson Family",
      location: "Austin, TX",
      category: "Child Care",
      rate: "$20/hr",
      schedule: "Mon–Fri, 3 PM – 7 PM",
      kids: "2 kids (ages 6 & 9)",
      distance: "1 mile away",
    },
    {
      family: "Johnson Family",
      location: "Austin, TX",
      category: "Child Care",
      rate: "$20/hr",
      schedule: "Mon–Fri, 3 PM – 7 PM",
      kids: "2 kids (ages 6 & 9)",
      distance: "1 mile away",
    },
    {
      family: "Johnson Family",
      location: "Austin, TX",
      category: "Child Care",
      rate: "$20/hr",
      schedule: "Mon–Fri, 3 PM – 7 PM",
      kids: "2 kids (ages 6 & 9)",
      distance: "1 mile away",
    },
    {
      family: "Johnson Family",
      location: "Austin, TX",
      category: "Child Care",
      rate: "$20/hr",
      schedule: "Mon–Fri, 3 PM – 7 PM",
      kids: "2 kids (ages 6 & 9)",
      distance: "1 mile away",
    },
   
  ]
function Family() {
  return (
      <div className="flex flex-col gap-6 [font-family:'Poppins',Helvetica] w-full max-w-[1280px] mx-auto px-5 items-center relative mb-10 mt-5">
  {/* GRID LAYOUT */}
  <div className="grid grid-cols-12 gap-5 w-full">
    
    {/* FILTERS */}
    <div className="col-span-12 lg:col-span-3 mt-5">
      <FilterSection
        heading="Product Filters"
        groups={[
          { title: "Location", options: locationOptions },
          {
            title: "Care Type",
           
            options: jobOptions,
          },
          {
            title: "Children’s Age",
          
            options: childrensOptions,
          },
          { title: "Schedule", options: availabilityOptions },
           { title: "Compensation Range", range: { min: 10, max: 50 } },
    { title: "Start Date", date: true }
        ]}
      />
    </div>

    {/* JOB CARDS SECTION */}
   <div className="col-span-12 lg:col-span-9">
      {/* SEARCH BAR */}
  <div className="w-full [font-family:'Poppins',Helvetica] max-w-[880px] my-5">
    <SearchbarSection />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
    {jobsData.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
</div>


  </div>
</div>

  )
}

export default Family
