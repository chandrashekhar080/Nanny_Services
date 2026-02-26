import React from "react";

function NotificationCard({ title, message, linkTitle, time }) {
  return (
    <div className="w-full  [font-family:'Poppins',Helvetica] border rounded-xl p-4 mb-3 bg-white flex flex-col shadow-sm">
      
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[14px]">{title}</h3>

        {/* Red Dot */}
        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
      </div>

      <p className="text-[13px] text-gray-600 mt-1 leading-snug">
        {message}
      </p>

      <div className="flex items-center justify-between mt-3">
        <span className="text-[12px] text-red-400 font-medium cursor-pointer">
          {linkTitle}
        </span>

        <span className="text-[12px] text-gray-500">{time}</span>
      </div>

    </div>
  );
}

export default NotificationCard;
