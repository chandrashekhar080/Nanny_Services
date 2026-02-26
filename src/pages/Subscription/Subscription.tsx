import React from "react";

import { Link, useLocation } from "react-router-dom";
import { SubscriptionTitleSection } from "../../sections/Subscription/SubscriptionTitle";
import { PlanListSection } from "../../sections/Subscription/PlanListSection";


export const Subscription = (): JSX.Element => {
    const location = useLocation();

    return (
        <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center p-2 sm:p-8 sm:mb-10">
            <SubscriptionTitleSection />
            <PlanListSection />
            <Link
                to={`${location.pathname.includes("/care-giver") ? "/care-giver/subscription/" : "/family/subscription/"}`}
                className="w-fit [font-family:'Poppins',Helvetica] font-medium text-primary-1 text-sm text-center tracking-[0.14px] leading-normal underline mt-8"
            >
                No Thanks
            </Link>
        </div>
    );
};
