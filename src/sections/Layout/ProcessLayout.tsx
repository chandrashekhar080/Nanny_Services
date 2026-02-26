import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderSection } from "./HeaderSection";

export const ProcessLayout = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed z-30 w-full">
      <HeaderSection />
      </div>
      <main className="flex-grow mt-28">
        <Outlet />
      </main>
    </div>
  );
};
