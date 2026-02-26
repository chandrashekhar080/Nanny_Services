import React from "react";
import { useNavigate } from "react-router-dom";

function JobCard({ family, location, category, rate, schedule, kids, distance }) {

  const navigate = useNavigate();

  return (
    <div className="border [font-family:'Poppins',Helvetica] rounded-xl p-4 bg-white shadow-sm w-full ">
      
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-[15px]">{family}</h3>
          <p className="text-[12px] text-gray-500">{location}</p>
        </div>

        <div className="text-right">
          <p className="text-[12px] text-gray-500">{category}</p>
          <p className="font-semibold text-[14px]">{rate}</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2 text-[13px] text-gray-600">

        {/* Schedule */}
        <div className="flex items-center gap-2">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 6L12 12L18 12" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span>{schedule}</span>
        </div>

        {/* Kids */}
        <div className="flex items-center gap-2">
          <span><img src="/assets/img/baby.png"/></span>
          <span>{kids}</span>
        </div>

        {/* Distance */}
        <div className="flex items-center gap-2">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#050505" stroke-width="1.5"/>
<path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#050505" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span>{distance}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-4">
        <button className="w-1/2 border border-red-300 text-red-400 rounded-lg py-2 text-[13px]">
          Decline
        </button>

        <button onClick={() => navigate("/care-giver/familys/profile/:id")} className="w-1/2 bg-[#FCA5A5] text-white rounded-lg py-2 text-[13px]">
          View Job
        </button>
      </div>

    </div>
  );
}

export default JobCard;
