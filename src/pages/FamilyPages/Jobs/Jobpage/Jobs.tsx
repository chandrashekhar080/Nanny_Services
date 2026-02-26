import { ClockIcon, MoreVerticalIcon, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../components/ui/tabs";


const jobDetails = [
  {
    icon: ClockIcon,
    label: "Job type",
    value: "Recurring",
  },
  {
    icon: ClockIcon,
    label: "Job start date",
    value: "Tue, Sep 16, 2025",
  },
  {
    icon: ClockIcon,
    label: "Pay rate",
    value: "$8-20/hr",
  },
  {
    icon: ClockIcon,
    label: "Location",
    value: "Addyston, OH",
  },
];

const jobModalData = {
  jobTitle: "Full-Time Nanny for Newborn (0–6 months)",
  location: "Addyston, OH",
  careType: "Recurring",
  numberOfChildren: "1",
  childrenAgeGroup: "Infant (0–12 months)",
  scheduleHours: "Monday - Friday, 8:00 AM - 5:00 PM",
  startDate: "2025-10-17",
  duration: "6 Months",
  experienceLevel: "3+ Years",
  compensation: "$80/hr",
  dutiesResponsibilities:
    "Feeding & bottle prep · Sleep routine management · Light laundry for baby · Overnight monitoring",
  additionalNotes:
    "Prefer caregiver with newborn sleep-training experience and flexible for occasional weekend coverage. Background check required.",
};

const previousJobs = [
  {
    id: 1,
    title: "Part-Time Babysitter for Toddler",
    description: "Looking for an experienced babysitter for our 2-year-old son, 3 days per week.",
    timeAgo: "2 weeks ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Part-time" },
      { icon: ClockIcon, label: "Job start date", value: "Mon, Aug 1, 2024" },
      { icon: ClockIcon, label: "Pay rate", value: "$15-25/hr" },
      { icon: ClockIcon, label: "Location", value: "Cincinnati, OH" },
    ],
  },
  {
    id: 2,
    title: "After-School Care Provider",
    description: "Need someone to pick up children from school and provide care until 6 PM.",
    timeAgo: "1 month ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Recurring" },
      { icon: ClockIcon, label: "Job start date", value: "Wed, Jul 15, 2024" },
      { icon: ClockIcon, label: "Pay rate", value: "$20-30/hr" },
      { icon: ClockIcon, label: "Location", value: "Mason, OH" },
    ],
  },
];

const viewedJobs = [
  {
    id: 1,
    title: "Weekend Nanny Needed",
    description: "Seeking a reliable nanny for weekend care, Saturday and Sunday mornings.",
    timeAgo: "3 days ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Part-time" },
      { icon: ClockIcon, label: "Job start date", value: "Sat, Oct 5, 2025" },
      { icon: ClockIcon, label: "Pay rate", value: "$18-22/hr" },
      { icon: ClockIcon, label: "Location", value: "West Chester, OH" },
    ],
  },
  {
    id: 2,
    title: "Evening Caregiver for Twins",
    description: "Need evening care for 4-year-old twins, Monday through Thursday.",
    timeAgo: "1 week ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Recurring" },
      { icon: ClockIcon, label: "Job start date", value: "Mon, Sep 30, 2025" },
      { icon: ClockIcon, label: "Pay rate", value: "$25-35/hr" },
      { icon: ClockIcon, label: "Location", value: "Loveland, OH" },
    ],
  },
];

const hiredJobs = [
  {
    id: 1,
    title: "Full-Time Live-In Nanny",
    description: "Experienced live-in nanny for two school-age children, full-time position.",
    timeAgo: "1 week ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Full-time" },
      { icon: ClockIcon, label: "Job start date", value: "Mon, Sep 2, 2024" },
      { icon: ClockIcon, label: "Pay rate", value: "$30-40/hr" },
      { icon: ClockIcon, label: "Location", value: "Blue Ash, OH" },
    ],
  },
];

const requestedCaregiverJobs = [
  {
    id: 1,
    title: "Summer Camp Counselor Assistant",
    description: "Looking for an assistant to help with summer camp activities for children aged 5-10.",
    timeAgo: "1 day ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Temporary" },
      { icon: ClockIcon, label: "Job start date", value: "Mon, Jun 1, 2025" },
      { icon: ClockIcon, label: "Pay rate", value: "$15-20/hr" },
      { icon: ClockIcon, label: "Location", value: "Milford, OH" },
    ],
  },
  {
    id: 2,
    title: "Overnight Newborn Care Specialist",
    description: "Experienced overnight caregiver needed for newborn, 4 nights per week.",
    timeAgo: "2 days ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Recurring" },
      { icon: ClockIcon, label: "Job start date", value: "Sun, Oct 20, 2025" },
      { icon: ClockIcon, label: "Pay rate", value: "$25-30/hr" },
      { icon: ClockIcon, label: "Location", value: "Montgomery, OH" },
    ],
  },
  {
    id: 3,
    title: "Tutoring and Childcare Hybrid",
    description: "Need someone who can provide both tutoring and childcare for 8-year-old.",
    timeAgo: "3 days ago",
    details: [
      { icon: ClockIcon, label: "Job type", value: "Part-time" },
      { icon: ClockIcon, label: "Job start date", value: "Tue, Oct 15, 2025" },
      { icon: ClockIcon, label: "Pay rate", value: "$22-28/hr" },
      { icon: ClockIcon, label: "Location", value: "Symmes Township, OH" },
    ],
  },
];

export const Jobs = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Calculate counts
  const currentJobsCount = 1; // The current job card
  const requestedCaregiverCount = requestedCaregiverJobs.length;

  // Tab items with dynamic counts
  const tabItems = [
    { label: `Current (${currentJobsCount})`, value: "current" },
    { label: "Previous", value: "previous" },
    { label: "Viewed", value: "viewed" },
    { label: "Hired", value: "hired" },
    { label: `Requested Caregiver (${requestedCaregiverCount})`, value: "requested" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEditDetails = () => {
    setIsDropdownOpen(false);
    navigate("/family/jobs/edit-job");
  };

  const handleDelete = () => {
    setIsDropdownOpen(false);
    // Add delete functionality here
    console.log("Delete clicked");
  };

  const renderJobCard = (job?: {
    id?: number;
    title: string;
    description: string;
    timeAgo: string;
    details: Array<{ icon: any; label: string; value: string }>;
  }) => {
    const jobData = job || {
      title: "Nanny Needed For My Children In Addyston.",
      description: "Experienced newborn caregiver needed for full-time role with overnight shifts.",
      timeAgo: "10 min ago",
      details: jobDetails,
    };

    return (
      <Card className="flex flex-col [font-family:'Poppins',Helvetica] items-start gap-4 sm:gap-7 p-4 sm:p-6 lg:p-10 relative self-stretch w-full bg-white rounded-xl shadow-[0px_0px_5px_#0000001f] border-0">
        <CardContent className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full p-0">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <Badge className="inline-flex h-7 items-center gap-2.5 px-2 py-0 bg-primary-12 hover:bg-primary-50 rounded-lg border-0 shadow-none">
              <span className="[font-family:'Poppins',Helvetica] font-normal text-primary-1 text-xs sm:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {jobData.timeAgo}
              </span>
            </Badge>

            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:bg-transparent"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <MoreVerticalIcon className="w-5 h-5 sm:w-[26px] sm:h-[26px] text-heading" />
              </Button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-[180px] bg-white shadow-lg rounded-lg border border-gray-100 z-50 overflow-hidden">
                  <button
                    onClick={handleEditDetails}
                    className="w-full px-4 py-3 text-left [font-family:'Poppins',Helvetica] text-sm text-heading hover:text-primary-1 transition-colors"
                  >
                    Edit details
                  </button>
                  <button
                    onClick={handleDelete}
                    className="w-full px-4 py-3 text-left [font-family:'Poppins',Helvetica] text-sm text-heading hover:text-primary-1 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="inline-flex [font-family:'Poppins',Helvetica] items-start gap-3 sm:gap-5 relative flex-[0_0_auto] w-full">
            <div className="inline-flex flex-col items-start gap-3 sm:gap-5 relative flex-[0_0_auto] w-full">
              <h2 className="relative w-full [font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-base sm:text-lg tracking-[0] leading-[normal] break-words">
                {jobData.title}
              </h2>

              <p className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-defaultblack text-sm sm:text-base tracking-[0] leading-[normal] break-words">
                {jobData.description}
              </p>
            </div>
          </div>

          <div className="flex [font-family:'Poppins',Helvetica] flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4 sm:gap-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="grid grid-cols-1 sm:inline-flex sm:items-center gap-4 sm:gap-8 lg:gap-20 relative flex-[0_0_auto] w-full sm:w-auto">
              {jobData.details.map((detail, index) => (
                <div
                  key={index}
                  className="inline-flex items-end gap-3 sm:gap-6 relative flex-[0_0_auto]"
                >
                  <div className="inline-flex items-center gap-2 sm:gap-2.5 relative flex-[0_0_auto]">
                    <detail.icon className="relative w-5 h-5 sm:w-6 sm:h-6 text-heading flex-shrink-0" />

                    <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-heading text-xs sm:text-sm tracking-[0] leading-[normal]">
                        {detail.label}
                      </div>

                      <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-heading text-xs sm:text-sm tracking-[0] leading-[normal] break-words">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="inline-flex h-10 items-center justify-center gap-2.5 px-4 sm:px-5 py-3.5 bg-primary-1 hover:bg-primary-1/90 rounded-lg w-full sm:w-auto"
              onClick={() => setIsJobDetailsOpen(true)}
            >
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-defaultwhite text-sm sm:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Job Details
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col [font-family:'Poppins',Helvetica] items-space-between justify-center gap-5 relative w-full max-w-[1280px] mx-auto px-4 sm:px-5">
      <Tabs defaultValue="current" className="w-full">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative flex-[0_0_auto] mb-5">
          <TabsList className="inline-flex items-center justify-start h-auto bg-white p-0 gap-2 sm:gap-4 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative inline-flex items-center justify-center gap-2.5 px-1 sm:px-2 py-3 data-[state=active]:text-primary-1 bg-white rounded-none border-b-2 border-transparent data-[state=active]:border-primary-1 data-[state=active]:shadow-none flex-shrink-0"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium data-[state=active]:font-semibold [state=active]:text-primary-1 data-[state=active]:text-primary-1 text-sm sm:text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                  {tab.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <Button 
            className="inline-flex h-10 items-center justify-center gap-2.5 px-4 sm:px-5 py-3.5 bg-primary-1 hover:bg-primary-1/90 rounded-lg w-full sm:w-auto"
            onClick={() => navigate("/family/jobs/add-job")}
          >
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-defaultwhite text-sm sm:text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Add New
            </span>
          </Button>
        </div>

        <TabsContent value="current" className="mt-0">
          <div className="flex flex-col gap-5">
            {renderJobCard()}
          </div>
        </TabsContent>

        <TabsContent value="previous" className="mt-0">
          <div className="flex flex-col gap-5">
            {previousJobs.length > 0 ? (
              previousJobs.map((job) => (
                <div key={job.id}>{renderJobCard(job)}</div>
              ))
            ) : (
              <Card className="flex flex-col items-start gap-7 p-10 relative self-stretch w-full bg-white rounded-xl shadow-[0px_0px_5px_#0000001f] border-0">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0 min-h-[200px]">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-base">
                    No previous jobs found
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="viewed" className="mt-0">
          <div className="flex flex-col gap-5">
            {viewedJobs.length > 0 ? (
              viewedJobs.map((job) => (
                <div key={job.id}>{renderJobCard(job)}</div>
              ))
            ) : (
              <Card className="flex [font-family:'Poppins',Helvetica] flex-col items-start gap-7 p-10 relative self-stretch w-full bg-white rounded-xl shadow-[0px_0px_5px_#0000001f] border-0">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0 min-h-[200px]">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-base">
                    No viewed jobs found
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="hired" className="mt-0">
          <div className="flex flex-col gap-5">
            {hiredJobs.length > 0 ? (
              hiredJobs.map((job) => (
                <div key={job.id}>{renderJobCard(job)}</div>
              ))
            ) : (
              <Card className="flex [font-family:'Poppins',Helvetica] flex-col items-start gap-7 p-10 relative self-stretch w-full bg-white rounded-xl shadow-[0px_0px_5px_#0000001f] border-0">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0 min-h-[200px]">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-base">
                    No hired jobs found
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="requested" className="mt-0 [font-family:'Poppins',Helvetica]">
          <div className="flex flex-col gap-5">
            {requestedCaregiverJobs.length > 0 ? (
              requestedCaregiverJobs.map((job) => (
                <div key={job.id}>{renderJobCard(job)}</div>
              ))
            ) : (
              <Card className="flex flex-col items-start gap-7 p-10 relative self-stretch w-full bg-white rounded-xl shadow-[0px_0px_5px_#0000001f] border-0">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0 min-h-[200px]">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-base">
                    No requested caregiver jobs found
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Job Details Modal */}
      <Dialog.Root open={isJobDetailsOpen} onOpenChange={setIsJobDetailsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="[font-family:'Poppins',Helvetica] fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />
          <Dialog.Content
            className="
              fixed top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[95%] sm:w-[90%] max-w-3xl
              max-h-[85vh] sm:max-h-[80vh] overflow-scroll
              bg-white rounded-xl shadow-xl p-4 sm:p-6 z-[9999]
            "
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <Dialog.Title className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-lg sm:text-xl">
                Job Details
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-heading" />
                </button> 
              </Dialog.Close>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              {/* First Row: Job Title */}
              <div>
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                  Job Title
                </div>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                  {jobModalData.jobTitle}
                </p>
              </div>

              {/* Second Row: Location, Care Type, Pay Rate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Location
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.location}
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Care Type
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.careType}
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Number of Children
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.numberOfChildren}
                  </div>
                </div>
              </div>

              {/* Third Row: Children's Age Group, Schedule & Hours, Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Children's Age Group
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.childrenAgeGroup}
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Schedule & Hours
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.scheduleHours}
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Start Date
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.startDate}
                  </div>
                </div>
              </div>

              {/* Fourth Row: Duration, Experience Level Required, Compensation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Duration
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.duration}
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Experience Level Required
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.experienceLevel}
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                    Compensation
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                    {jobModalData.compensation}
                  </div>
                </div>
              </div>

              {/* Fifth: Duties & Responsibilities */}
              <div className="">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                  Duties & Responsibilities
                </div>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                  {jobModalData.dutiesResponsibilities}
                </p>
              </div>
              <div>
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-defaultblack text-sm sm:text-base mb-2">
                  Additional Notes
                </div>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm sm:text-base leading-relaxed">
                  {jobModalData.additionalNotes}
                </p>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
