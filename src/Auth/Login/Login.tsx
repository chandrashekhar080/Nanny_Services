import React from "react";
import { WelcomeSection } from "./sections/WelcomeSection";
import { LoginFormSection } from "./sections/LoginFormSection";

export const Login = (): JSX.Element => {
  return (
    <main className="relative w-full mt-4 min-h-screen bg-[#ffffff] flex flex-col">
      {/* Background image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Ellipse BG"
        src="/assets/img/ellipse-bg.png"
      />

      <div className="relative z-10 flex flex-1 w-full flex-col md:flex-row">
        {/* Welcome section - hidden on tablet and mobile */}
        <aside className="hidden lg:block w-[49%]">
          <WelcomeSection />
        </aside>

        {/* Login form section */}
        <section className="flex-1 h-full flex items-center justify-center w-full">
          <LoginFormSection />
        </section>
      </div>
    </main>

  );
};
