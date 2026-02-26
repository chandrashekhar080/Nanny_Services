import React from "react";
import { HeroFamily } from "../../../sections/Home/HeroFamily";
import { CaregiverFamily } from "../../../sections/Home/CaregiverFamily";
import { CTAFamily } from "../../../sections/Home/CtaSecFamily";



export const HomeFamily = (): JSX.Element => {
    return (
        <div className="flex flex-col w-full items-center relative">
            <HeroFamily />
            <CaregiverFamily />
            <CTAFamily />
        </div>
    );
};
