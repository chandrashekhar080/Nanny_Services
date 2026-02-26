import React from "react";
import { Outlet } from "react-router-dom";
import { FooterSection } from "../FooterSection";
import { HeaderMain } from "../HeaderMain/HeaderMain";


export const FamilyLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderMain />
            <main className="flex-grow">
                <Outlet />
            </main>
            <FooterSection />
        </div>
    );
};
