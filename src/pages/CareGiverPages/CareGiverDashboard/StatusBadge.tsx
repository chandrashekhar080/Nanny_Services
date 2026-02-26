import React from "react";
import clsx from "clsx";

const statusStyles = {
  Hired: "bg-green-100 text-green-700",
  Open: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Closed: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-600",
};

export function StatusBadge({ status, className }) {
  return (
    <span
      className={clsx(
        `${className} text-xs font-medium px-3 py-1 rounded-full`,
        statusStyles[status] || "bg-gray-100 text-gray-600"
      )}
    >
      {status}
    </span>
  );
}

export function Badge({ text }) {
  return (
     <button className="border p-3 border-red-300 text-red-400 rounded-lg py-2 text-[13px]">
          {text}
        </button>
  );
}
