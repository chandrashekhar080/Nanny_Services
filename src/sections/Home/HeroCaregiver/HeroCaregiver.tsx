import React, { useState } from "react";
import { ProfileProgressbar } from "../../Common/ProfileProgressbar";

export const Herocaregiver = () => {
  const [showBar, setShowBar] = useState(true);

  return (
    <div className="flex flex-col w-full items-center [font-family:'Poppins',Helvetica] relative mt-5">
      <div className="flex flex-col w-full md:px-20 px-8">
        <h3 className="font-bold text-base sm:text-2xl">Welcome, Joy!</h3>
        <p className="text-sm text-gray-600 leading-normal">
          Your journey starts here. Complete your profile and explore jobs to
          connect with families near you.
        </p>
      </div>

      {showBar && (
        <div className="p-4 w-full flex max-md:flex-wrap justify-center gap-6 md:px-20">
          <ProfileProgressbar
            title="Welcome To All Around Nanny Services"
            description="Let's complete your profile and explore jobs to connect with families near you."
            progress={35}
            buttons={[
              {
                text: "Complete Profile",
                to: "/care-giver/account-settings",
                variant: "primary",
              },
              {
                text: "Skip for Now",
                onClick: () => setShowBar(false),
                variant: "secondary",
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};
