import React from "react";

function StatCard({ count, title, linkTitle, icon, onClickLink }) {
  return (
    <div className="
      w-full sm:min-w-56 
      flex items-center justify-between 
      gap-4
      border rounded-xl p-4 
      bg-white shadow-sm hover:shadow-md 
      transition-all
    ">

      {/* Left Section */}
      <div className="flex flex-col">
        <div className="text-[26px] font-semibold leading-tight">{count}</div>

        <div className="text-[12px] text-gray-500">{title}</div>

        <span onClick={onClickLink} className="text-[11px] text-red-400 font-medium mt-2 cursor-pointer">
          {linkTitle}
        </span>
      </div>

      {/* Icon Section */}
      <div className="shrink-0">
        <span className="bg-[#FFF5F5]/60 p-3 rounded-xl flex items-center justify-center">
          {icon}
        </span>
      </div>

    </div>
  );
}

export default StatCard;
