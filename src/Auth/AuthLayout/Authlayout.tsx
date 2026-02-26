import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="relative min-h-[85vh] w-full flex justify-center items-center overflow-hidden">
            <img
                src="/assets/img/ellipse-bg.png"
                alt="Ellipse Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="w-full max-w-[1280px] flex justify-start items-start mx-auto px-4 sm:px-8 pt-3 pb-5">
                {children}
            </div>
        </div>
    );
};
