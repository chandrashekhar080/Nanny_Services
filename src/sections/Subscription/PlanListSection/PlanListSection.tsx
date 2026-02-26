import React, { useState } from "react";
import { CheckIcon } from "lucide-react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

const pricingPlans = [
  {
    name: "Basic",
    price: "$19.99",
    period: "/Month",
    features: [
      "Limited profile visibility",
      "Post / apply to up to 3 jobs per month",
      "Access to basic training videos",
      "Standard messaging access",
    ],
    isPopular: false,
  },
  {
    name: "Standard",
    price: "$29.99",
    period: "/Month",
    features: [
      "Unlimited job posts (for families)",
      "Unlimited applications (for caregivers)",
      "Full profile visibility in search",
      "Secure messaging system",
      "Access to full training video library",
    ],
    isPopular: true,
  },
  {
    name: "Premium",
    price: "$39.99",
    period: "/Month",
    features: [
      "Everything in Standard, plus:",
      "Featured placement in search results",
      "Priority customer support",
      "Save & shortlist unlimited caregivers/jobs",
      "Extra safety & verification badge",
    ],
    isPopular: false,
  },
];

export const PlanListSection = (): JSX.Element => {
  const [activePlan, setActivePlan] = useState(pricingPlans[0].name);

  return (
    <section className="w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center px-4 md:px-0">
      {/* MOBILE / TABLET VIEW */}
      <div className="w-full lg:hidden flex justify-center">
        <Tabs value={activePlan} onValueChange={setActivePlan} className="w-full text-center sm:max-w-[400px]">
          <TabsList className="w-full h-auto bg-transparent border-b border-[#e5e5e5] rounded-none p-0 justify-center flex-wrap gap-[10px] sm:gap-[20px]">
            {pricingPlans.map((plan) => (
              <TabsTrigger
                key={plan.name}
                value={plan.name}
                className="font-normal text-description text-base bg-transparent border-b-2 border-transparent rounded-none pb-2 
                data-[state=active]:border-primary-1 data-[state=active]:text-primary-1 
                data-[state=active]:font-medium data-[state=active]:shadow-none 
                focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                {plan.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {pricingPlans.map((plan) => (
            <TabsContent key={plan.name} value={plan.name} className="mt-10 w-full">
              <Card
                className={`
                  w-full flex flex-col rounded-xl
                  ${plan.isPopular ? "shadow-[0px_0px_44px_#96000033] border-[#ff999a]" : "border-[#dddddd]"}
                  bg-white
                `}
              >
                {plan.isPopular && (
                  <div className="h-[42px] flex items-center justify-center bg-primary-1 rounded-[12px_12px_0px_0px] px-5">
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base">
                      Most Popular!
                    </div>
                  </div>
                )}

                <CardContent className="flex flex-col items-center gap-10 px-5 py-[34px]">
                  <div className="flex flex-col items-center gap-2.5">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-heading text-2xl">
                      {plan.name}
                    </h3>

                    <div className="flex items-end">
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-heading text-[28px] leading-[2.2rem]">
                        {plan.price}
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-heading text-base">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-5 w-full">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2.5 w-full"
                      >
                        <CheckIcon className="w-6 h-6 flex-shrink-0 text-primary-1" />
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-heading text-base flex-1 text-start">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary-1 hover:bg-primary-1/90 rounded-xl px-[34px] py-2.5 h-auto">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                      Upgrade
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-0 w-full max-w-[1100px]">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`
              flex flex-col
              ${index === 0 ? "rounded-[12px_0px_0px_12px]" : ""}
              ${index === 1 ? "rounded-xl shadow-[0px_0px_44px_#96000033] border-[#ff999a] z-10" : ""}
              ${index === 2 ? "rounded-[0px_12px_12px_0px]" : ""}
              ${!plan.isPopular ? "border-[#dddddd]" : ""}
              bg-white
            `}
          >
            {plan.isPopular && (
              <div className="h-[42px] flex items-center justify-center bg-primary-1 rounded-[12px_12px_0px_0px] px-5">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base">
                  Most Popular!
                </div>
              </div>
            )}

            <CardContent className="flex flex-col items-center justify-between px-5 py-[34px] h-full gap-10">
              <div className="flex flex-col items-center gap-2.5">
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-heading text-2xl">
                  {plan.name}
                </h3>

                <div className="flex items-end">
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-heading text-[28px] leading-[2.2rem]">
                    {plan.price}
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-heading text-base">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 w-full">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-2.5 w-full"
                  >
                    <CheckIcon className="w-6 h-6 flex-shrink-0 text-primary-1" />
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-heading text-base flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-primary-1 hover:bg-primary-1/90 rounded-xl px-[34px] py-2.5 h-auto">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                  Upgrade
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
