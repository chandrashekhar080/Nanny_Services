import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const teamMembers = [
  {
    id: 1,
    name: "Sophia Miller",
    role: "Family Care Advisor",
    image:
      "/assets/img/team-1.png",
    category: "Family Care Advisor",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Caregiver Success Manager",
    image:
      "/assets/img/team-2.png",
    category: "Caregiver Success Manager",
  },
  {
    id: 3,
    name: "Amelia Johnson",
    role: "Childcare Strategist",
    image:
      "/assets/img/team-3.png",
    category: "Childcare Strategist",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Community Support Lead",
    image:
      "/assets/img/team-4.png",
    category: "Community Support Lead",
  },
  {
    id: 5,
    name: "Jerome Bell",
    role: "Manager",
    image:
      "/assets/img/team-5.png",
    category: "Manager",
  },
];

const categories = [
  "All",
  "Family Care Advisor",
  "Caregiver Success Manager",
  "Childcare Strategist",
  "Community Support Lead",
];

export const OurTeamSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMembers =
    activeCategory === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <section className="flex flex-col items-center gap-[30px] w-full max-w-[1280px] mx-auto px-5 mt-[60px]">
      {/* Header */}
      <header className="flex flex-col items-center gap-2.5">
        <div className="flex flex-col items-center gap-1.5 max-w-[609px]">
          <div className="flex items-center justify-center gap-2.5">
            <img className="w-[45px] h-[3.51px]" alt="Decorative line" src="/assets/img/vector-5.svg" />
            <h3 className="font-normal text-primary-1 text-lg leading-[normal]">Our Team</h3>
            <img className="w-[45px] h-[3.51px]" alt="Decorative line" src="/assets/img/vector-5.svg" />
          </div>
          <h2 className="font-semibold text-heading text-2xl text-center leading-[normal]">
            Master Skills with Industry Creative Experts
          </h2>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex flex-col items-center gap-10 w-full">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full text-center">
          <TabsList className="w-full h-auto bg-transparent border-b border-[#e5e5e5] rounded-none p-0 items-center justify-start gap-[10px] sm:gap-[20px] max-w-[1110px]">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="font-normal text-description text-base bg-transparent border-b-2 border-transparent rounded-none pb-2 
                data-[state=active]:border-primary-1 data-[state=active]:text-primary-1 
                data-[state=active]:font-medium data-[state=active]:shadow-none 
                focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Team Grid */}
          <TabsContent value={activeCategory} className="mt-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 w-full justify-items-center">
              {filteredMembers.map((member) => (
                <Card
                  key={member.id}
                  className="flex flex-col items-center gap-2.5 border-none shadow-none bg-transparent transition-transform duration-300 hover:scale-[1.02]"
                >
                  <CardContent className="flex flex-col items-center gap-2.5 p-0 group">
                    <div className="rounded-[10px] overflow-hidden border-4 border-transparent group-hover:border-primary-1 transition-all duration-300">
                      <img
                        className="w-[200px] h-[200px] object-cover"
                        alt={member.name}
                        src={member.image}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-medium text-base text-center text-heading group-hover:text-primary-1 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="font-normal text-description text-sm text-center">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
