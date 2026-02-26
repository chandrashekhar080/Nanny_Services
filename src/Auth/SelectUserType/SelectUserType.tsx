import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AuthLayout } from "../AuthLayout/Authlayout";

const accountTypes = [
    {
        image: "/assets/img/nanny-service.png",
        title: "Find Trusted Nannies",
        description:
            "Create your family profile, outline childcare needs, and access unlimited caregiver options. From full-time support to specialized care, discover flexible, trusted solutions designed for your household.",
        buttonText: "Join as a Family",
        route: "/family-accounts-register",
    },
    {
        image: "/assets/img/nanny-job.png",
        title: "Discover Childcare Opportunities",
        description:
            "Create your professional profile, outline experience and availability, and connect with families. From long-term placements to short-term roles, discover flexible, trusted opportunities tailored to your expertise.",
        buttonText: "Join as a Caregiver",
        route: "/caregiver-accounts-register",
    },
];

export const SelectUserType = (): JSX.Element => {
    const navigate = useNavigate();

    const handleButtonClick = (route: string): void => {
        if (!route) navigate("/login");
        if (route === "/family-accounts-register"){
            localStorage.setItem("UserType", "family")
            navigate(route);
        } 
        if (route === "/caregiver-accounts-register"){
            localStorage.setItem("UserType", "care-giver");
            navigate(route);
        }
        return;          
    }; 


    return (
        <AuthLayout>
            <div className="relative w-full flex flex-col items-center justify-start min-h-full px-4 sm:px-8">
                {/* Main content */}
                <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[1280px] mx-auto">
                    {/* Header */}
                    <div className="flex flex-col gap-3 max-w-[700px] text-center">
                        <h1 className="font-bold text-heading text-2xl sm:text-3xl [font-family:'Poppins',Helvetica]">
                            Join Our Trusted Childcare Network
                        </h1>

                        <p className="text-sub-heading text-sm sm:text-base [font-family:'Poppins',Helvetica] leading-relaxed">
                            Connect with a secure, subscription-based platform that brings
                            families and professional caregivers together. Whether you&apos;re
                            looking for reliable childcare or seeking rewarding career
                            opportunities, our community is designed to support your needs.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 w-full">
                        {accountTypes.map((accountType, index) => (
                            <Card
                                key={index}
                                className="flex flex-col justify-between w-full sm:w-[370px] bg-white rounded-[10px] shadow-[0px_0px_10px_#00000040] border-0 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                            >
                                <CardContent className="flex flex-col flex-grow items-start gap-5 p-6 sm:p-[30px] text-left">
                                    <img
                                        className={`${index === 0 ? "w-[150px]" : "w-[84px]"
                                            } h-[84px] object-contain mx-auto sm:mx-0`}
                                        alt={accountType.title}
                                        src={accountType.image}
                                    />

                                    <div className="flex flex-col items-start gap-[11px] w-full flex-grow">
                                        <h2 className="font-semibold text-heading text-lg [font-family:'Poppins',Helvetica]">
                                            {accountType.title}
                                        </h2>

                                        {/* <img
                                            className="w-[27px] h-0.5"
                                            alt="Line"
                                            src="/assets/img/line.svg"
                                        /> */}
                                            
                                    <hr className="w-1/6 h-1 bg-[#FF999A] rounded-full" />
                                        <p className="text-description text-sm leading-6 [font-family:'Poppins',Helvetica]">
                                            {accountType.description}
                                        </p>
                                    </div>
                                </CardContent>

                                <div className="p-6 pt-0 sm:p-[30px] sm:pt-0">
                                    <Button
                                        className="h-auto w-full px-5 py-3 rounded-[50px] bg-primary-1 hover:bg-primary-1/90 transition-colors"
                                        onClick={() => handleButtonClick(accountType.route)}
                                    >
                                        <span className="font-semibold text-white text-sm [font-family:'Poppins',Helvetica]">
                                            {accountType.buttonText}
                                        </span>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </AuthLayout>

    );
};
