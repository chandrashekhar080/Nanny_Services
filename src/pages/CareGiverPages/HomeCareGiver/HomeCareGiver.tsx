import React, { useState } from "react";
import StatCard from "../StatCard/StatCard";
import NotificationCard from "../CareGiverNotification/CareGiverNotification";
import JobCard from "../JobCard/JobCard";
import { Herocaregiver } from "../../../sections/Home/HeroCaregiver";
import { useNavigate } from "react-router-dom";

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
   
  ]
function HomeCareGiver() {

  const navigate = useNavigate();

  return (
     <div className="flex flex-col gap-5 items-center w-full [font-family:'Poppins',Helvetica]">
      <Herocaregiver/>
     <section className="p-4 [font-family:'Poppins',Helvetica] w-full flex max-md:flex-wrap justify-center gap-6 md:px-20">
      <StatCard
        count={56}
        onClickLink={() => navigate("/care-giver/familys")}
        title="Jobs"
        linkTitle="Find Jobs"
        icon={<span className="text-red-300"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M12 10.6663H6.66667C5.19391 10.6663 4 11.8602 4 13.333V25.333C4 26.8058 5.19391 27.9997 6.66667 27.9997H25.3333C26.8061 27.9997 28 26.8058 28 25.333V13.333C28 11.8602 26.8061 10.6663 25.3333 10.6663H20M12 10.6663V7.99967C12 6.52691 13.1939 5.33301 14.6667 5.33301H17.3333C18.8061 5.33301 20 6.52691 20 7.99967V10.6663M12 10.6663H20" stroke="#FF999A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>}
      />

      <StatCard 
        count={3}
         onClickLink={() => navigate("/care-giver/dashboard")}
        title="Applied Jobs"
        linkTitle="View Status"
        icon={<span className="text-red-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.60001 12C3.59961 10.6588 3.92038 9.33699 4.53548 8.14514C5.15059 6.95329 6.04214 5.92605 7.13558 5.14936C8.22902 4.37266 9.49255 3.86909 10.8205 3.68075C12.1484 3.49242 13.5021 3.6248 14.7684 4.06683C15.069 4.17153 15.3989 4.15254 15.6855 4.01403C15.9721 3.87551 16.1919 3.62882 16.2966 3.32823C16.4013 3.02763 16.3823 2.69775 16.2438 2.41116C16.1053 2.12456 15.8586 1.90473 15.558 1.80003C13.3468 1.0286 10.9448 0.996808 8.71397 1.70945C6.48314 2.4221 4.5444 3.84055 3.18996 5.75103C1.83552 7.66151 1.13877 9.96048 1.20473 12.3014C1.27069 14.6424 2.09578 16.8985 3.55565 18.7297C5.01552 20.5609 7.03105 21.8679 9.29846 22.4538C11.5659 23.0397 13.9623 22.8727 16.1265 21.978C18.2908 21.0833 20.1056 19.5093 21.2974 17.4934C22.4891 15.4774 22.9934 13.1287 22.734 10.8012C22.7167 10.6446 22.6687 10.4929 22.5927 10.3548C22.5167 10.2167 22.4143 10.095 22.2913 9.99645C22.1683 9.89795 22.0271 9.82464 21.8757 9.78071C21.7244 9.73678 21.5658 9.72309 21.4092 9.74042C21.2526 9.75776 21.1009 9.80578 20.9628 9.88174C20.8247 9.9577 20.7029 10.0601 20.6044 10.1831C20.5059 10.3061 20.4326 10.4474 20.3887 10.5987C20.3448 10.7501 20.3311 10.9086 20.3484 11.0652C20.4748 12.2003 20.3684 13.3492 20.0357 14.4418C19.703 15.5343 19.151 16.5476 18.4135 17.4196C17.6759 18.2916 16.7683 19.004 15.746 19.5133C14.7238 20.0226 13.6084 20.3181 12.4681 20.3818C11.3278 20.4454 10.1865 20.2759 9.11393 19.8835C8.04136 19.4911 7.06009 18.8841 6.23007 18.0996C5.40005 17.3151 4.73873 16.3696 4.28652 15.3208C3.83431 14.2721 3.60071 13.1421 3.60001 12ZM21.3 5.59443C21.5107 5.35573 21.6179 5.04312 21.5981 4.72536C21.5783 4.40759 21.4331 4.11071 21.1944 3.90003C20.9557 3.68934 20.6431 3.5821 20.3253 3.6019C20.0076 3.62171 19.7107 3.76693 19.5 4.00563L11.778 12.7416L7.95841 9.63002C7.83628 9.53043 7.69573 9.45587 7.54478 9.41059C7.39384 9.36531 7.23545 9.35021 7.07867 9.36615C6.76203 9.39833 6.47115 9.55497 6.27001 9.80163C6.17041 9.92375 6.09585 10.0643 6.05057 10.2153C6.0053 10.3662 5.9902 10.5246 6.00613 10.6814C6.03831 10.998 6.19496 11.2889 6.44161 11.49L11.1564 15.33C11.3966 15.5255 11.7031 15.6205 12.0117 15.5952C12.3203 15.5699 12.6072 15.4263 12.8124 15.1944L21.3 5.59443Z" fill="#FF999A"/>
</svg></span>}
      />

      <StatCard 
        count={5}
         onClickLink={() => navigate("/care-giver/dashboard")}
        title="Job Requests"
        linkTitle="View Requests"
        icon={<span className="text-red-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V8.82843C21 8.03278 20.6839 7.26972 20.1213 6.70711L15.2929 1.87868C14.7303 1.31607 13.9672 1 13.1716 1H6ZM5 4C5 3.44772 5.44772 3 6 3H12V8C12 9.10457 12.8954 10 14 10H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM18.5858 8L14 3.41421V8H18.5858Z" fill="#FF999A"/>
</svg></span>}
      />

      <StatCard 
        count={3}
         onClickLink={() => navigate("/care-giver/earnings-payments")}
        title="Profile Views"
        linkTitle="See Insights"
        icon={<span className="text-red-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#FF999A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#FF999A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>}
      />

      <StatCard 
        count={3}
         onClickLink={() => navigate("/care-giver/messages")}
        title="Messages"
        linkTitle="Open Chat"
        icon={<span className="text-red-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.99951 16.5496V19.8996C4.99922 20.3098 5.11905 20.711 5.34418 21.0538C5.56931 21.3966 5.88994 21.6661 6.26642 21.8288C6.6429 21.9915 7.05875 22.0404 7.46271 21.9694C7.86666 21.8985 8.24103 21.7109 8.53955 21.4297L11.1495 18.9697H12.0195C17.5395 18.9697 22.0195 15.1697 22.0195 10.4697C22.0195 5.76973 17.5395 1.96973 12.0195 1.96973C6.49953 1.96973 2.01953 5.77973 2.01953 10.4697C2.042 11.6385 2.32261 12.7878 2.84125 13.8354C3.35989 14.8831 4.10373 15.8031 5.01953 16.5296L4.99951 16.5496Z" stroke="#FF999A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 9.5H7" stroke="#FF999A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12.5H7" stroke="#FF999A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>}
      />
    </section>
     <section className="p-4 [font-family:'Poppins',Helvetica] w-full md:px-20 px-4">
        
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-semibold">Notifications</h2>
          <span className="text-[13px] text-red-400 cursor-pointer">
            See All Notifications
          </span>
        </div>

        <p className="text-[13px] text-gray-500 mb-3">Today</p>
      {/* Notification 1 */}
      <NotificationCard
        title="Job Request"
        message="Your application for Part-Time Babysitter with Johnson Family has been viewed, you've been shortlisted for Weekend Babysitter with Patel Family."
        linkTitle="View Application"
        time="2h"
      />

      {/* Notification 2 */}
      <NotificationCard
        title="New Message"
        message="You have a new message from the Johnson Family."
        linkTitle="View Request"
        time="2h"
      />

    </section>
      <section className="p-4 [font-family:'Poppins',Helvetica] w-full md:px-20 px-4 mb-10">

        <h2 className="text-[15px] font-semibold mb-4">Recommended Jobs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
     {jobsData.map((job, index) => (
    <JobCard key={index} {...job} />
  ))}

      </div>
    </section>
  </div>
  );
}

export default HomeCareGiver;
