import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderSection />
            <main className="flex-grow">
                <Outlet />
            </main>
            <FooterSection />
        </div>
    );
};
