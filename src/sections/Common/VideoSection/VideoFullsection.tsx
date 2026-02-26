import { X } from "lucide-react";
import React, { useState } from "react";

type VideoFullSectionProps = {
    backgroundImage?: string;
    caption?: string;
    videoUrl?: string;
    playIcon?: string;
};

export const VideoFullSection = ({
    backgroundImage = "/assets/img/video-bg.png",
    caption = "We Believe Education Fuels Human Development And Success.",
    videoUrl = "/assets/img/sample-video.mp4",
    playIcon = "/assets/img/play-icon-trans.png",
}: VideoFullSectionProps): JSX.Element => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsVideoOpen(false);
        }
    };

    return (
        <section className="inline-flex flex-col items-start w-full mt-[60px]">
            <div
                className="flex flex-col w-full items-center justify-center gap-2.5 px-[95px] py-[227px] bg-cover bg-center relative"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${backgroundImage})`,
                    backgroundSize: "cover",
                    
                    backgroundPosition: "center",
                }}
            >
                <div className="relative w-full max-w-[760px] flex flex-col items-center gap-[30px] z-10">
                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="focus:outline-none hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            className="w-[60px] h-[60px]"
                            alt="Play icon"
                            src={playIcon}
                        />
                    </button>

                    {/* Caption */}
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-normal">
                        {caption}
                    </p>
                </div>

                <div className="absolute inset-0 bg-black/10" />
            </div>

            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-3"
                    onClick={handleOverlayClick}
                >
                    <div className="relative w-full max-w-[800px]">
                        {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
                            <iframe
                                width="100%"
                                height="450"
                                src={
                                    videoUrl.includes("embed")
                                        ? `${videoUrl}?autoplay=1`
                                        : videoUrl.replace("watch?v=", "embed/") + "?autoplay=1"
                                }
                                title="Video player"
                                allow="autoplay; fullscreen"
                                className="w-full rounded-2xl"
                            />
                        ) : (
                              <div
                                                  className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4"
                                                  onClick={() =>  setIsVideoOpen(false)} // close on outside click
                                                >
                                                  <div
                                                    className="bg-white rounded-2xl w-full max-w-[800px] relative shadow-lg overflow-hidden"
                                                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                                                  >
                                                   
                                        
                                                    {/* Video content */}
                                                    <div className="relative">
                                                      <video
                                                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                        controls
                                                        autoPlay
                                                        className="w-full h-[450px] object-cover rounded-t-2xl"
                                                      />
                                                    </div>
                                        
                                                    
                                                  </div>
                                                </div>
                                            
                        )}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-2 right-3 text-primary-1 hover:text-primary-1/80 transition-colors bg-white rounded-full p-1"
                        >
                            <X className="w-6 h-6 " />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
