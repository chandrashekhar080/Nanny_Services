import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { X } from "lucide-react";

const tabs = [
  { id: "all", label: "All" },
  { id: "families", label: "Families" },
  { id: "caregivers", label: "Caregivers" },
  { id: "safety", label: "Safety" },
  { id: "payments", label: "Payments" },
  { id: "help-center", label: "Help Center" },
];

const videoCards = [
  {
    id: 1,
    image: "/assets/img/images-5.png",
    duration: "3 Min · Video",
    title: "How To Post Your First Job",
    description: "Step-by-step Guide To Posting Jobs Families Love.",
    category: "families",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    image: "/assets/img/images-5.png",
    duration: "5 Min · Video",
    title: "Payment Setup and Security",
    description: "Learn how to manage payments securely and easily.",
    category: "payments",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    image: "/assets/img/images-5.png",
    duration: "4 Min · Video",
    title: "Safety Tips for Babysitters",
    description: "Essential safety practices for caregivers.",
    category: "safety",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  // {
  //   id: 4,
  //   image: "/assets/img/images-5.png",
  //   duration: "3 Min · Video",
  //   title: "Building Trust with Families",
  //   description: "How caregivers can build lasting trust.",
  //   category: "caregivers",
  //   videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  // },
  // {
  //   id: 5,
  //   image: "/assets/img/images-5.png",
  //   duration: "2 Min · Video",
  //   title: "Getting Help from Support",
  //   description: "Use our help center to find quick answers.",
  //   category: "help-center",
  //   videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  // },
];

export const ResourceTabs = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videoCards[0]>(null);

  const filteredVideos =
    activeTab === "all"
      ? videoCards
      : videoCards.filter((video) => video.category === activeTab);

  return (
    <section className="flex flex-col items-start gap-8 w-full relative">
      {/* Tabs Navigation */}
      <nav className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center gap-6 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-poppins text-base pb-2 transition-colors px-[20px] duration-200 ${activeTab === tab.id
                ? "font-semibold text-primary-1 border-b-2 border-primary-1"
                : "font-normal text-description border-b-2 border-transparent hover:text-primary-1"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredVideos.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col items-center gap-2.5 p-5 bg-[#ffffff] rounded-[10px] shadow-[0px_4px_4px_#00000040] border-0"
          >
            <CardContent className="flex flex-col items-center gap-2.5 w-full p-0">
              <img
                className="w-full h-[220px] sm:h-[262px] rounded-[10px] object-cover"
                alt="Video thumbnail"
                src={card.image}
              />

              <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                <div className="text-description text-sm font-normal">
                  {card.duration}
                </div>

                <h3 className="font-poppins font-semibold text-heading text-lg">
                  {card.title}
                </h3>

                <p className="font-poppins font-normal text-description text-sm">
                  {card.description}
                </p>

                <Button
                  onClick={() => setSelectedVideo(card)}
                  className="w-full h-auto px-[54px] py-4 bg-primary-1 rounded-lg hover:bg-primary-1/90"
                >
                  <span className="font-poppins font-semibold text-[#fefefe] text-base tracking-[0.8px]">
                    Watch Video
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No videos message */}
      {filteredVideos.length === 0 && (
        <div className="text-center w-full text-description text-base font-poppins mt-6">
          No videos available for this category.
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedVideo(null)} // close on outside click
        >
          <div
            className="bg-white rounded-2xl w-full max-w-[800px] relative shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-50 text-primary-1 hover:text-primary-1/80 transition-colors bg-white rounded-full p-1"
            >
              <X className="w-6 h-6 " />
            </button>

            {/* Video content */}
            <div className="relative">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-[450px] object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-5">
              <h3 className="font-poppins font-semibold text-heading text-lg mb-2">
                {selectedVideo.title}
              </h3>
              <p className="font-poppins text-description text-sm">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
