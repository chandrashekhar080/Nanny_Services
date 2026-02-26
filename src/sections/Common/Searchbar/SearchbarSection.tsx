import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import * as Popover from "@radix-ui/react-popover";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Check,
  ChevronDown,
  MapPinIcon,
  SearchIcon,
  UserSearch,
} from "lucide-react";

export const SearchbarSection = ({
  onSearch,
  selectedType,
}: {
  onSearch?: (careType: string, location: string) => void;
  selectedType?: string | null;
}): JSX.Element => {
  const [careType, setCareType] = useState("Babysitter");
  const [location, setLocation] = useState("45001");

  // Map URL query type to display name
  const getDisplayType = (type: string | null) => {
    const typeMapping: { [key: string]: string } = {
      "full-time-care": "Full-Time Care",
      "part-time-care": "Part-Time Care",
      "temporary-care": "Temporary Care",
      "live-in-support": "Live-in Support",
      "overnight-care": "Overnight Care",
      "infant-newborn-care": "Infant & Newborn Care",
      "tutoring-homework-help": "Tutoring & Homework Help",
      "mothers-helper": "Mother's Helper",
      "special-needs-care": "Special Needs Care",
    };
    return typeMapping[type || ""] || "Babysitter";
  };

  // Set initial care type based on selectedType
  React.useEffect(() => {
    if (selectedType) {
      setCareType(getDisplayType(selectedType));
    }
  }, [selectedType]);

  const handleSearch = () => {
    if (onSearch) onSearch(careType, location);
    console.log("Search:", careType, location);
  };

  return (
    <Card className="w-full mx-auto [font-family:'Poppins',Helvetica] bg-white rounded-[20px] border-0 shadow-[0px_2.95px_11.79px_#00000012]">
      <CardContent className="flex flex-col md:flex-row md:items-center gap-4 py-3 px-6 w-full">

        {/* INPUT WRAPPER */}
        <div className="flex flex-col md:flex-row gap-4 flex-1 w-full items-center">

          {/* CARE TYPE */}
          <div className="flex items-center gap-2 flex-1 w-full">
            <UserSearch className="w-5 h-5" />
            <div className="flex flex-col w-full">
              <div className="font-medium text-xs text-sub-heading mb-1">
                Care Type
              </div>

              <Select.Root value={careType} onValueChange={setCareType}>
                <Select.Trigger className="inline-flex items-center justify-between bg-transparent text-sm font-semibold text-[#050505] w-full px-2 py-1 rounded border-0 focus:outline-none">
                  <Select.Value />
                  <Select.Icon>
                    <ChevronDown size={16} />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Content className="bg-white shadow-md rounded-md">
                  <Select.Viewport className="p-1">
                    {["Babysitter", "Nanny", "Caregiver"].map((type) => (
                      <Select.Item
                        key={type}
                        value={type}
                        className="px-2 py-1 text-sm text-black rounded cursor-pointer flex items-center justify-between hover:bg-gray-100 radix-state-checked:bg-gray-100"
                      >
                        <Select.ItemText>{type}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check size={16} />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
            </div>
          </div>

          {/* DIVIDER DESKTOP ONLY */}
          <div className="hidden md:block w-px bg-gray-300 h-[30px]" />

          {/* LOCATION */}
          <div className="flex items-center gap-2 flex-1 w-full">
            <MapPinIcon className="w-5 h-5 text-[#050505]" />
            <div className="flex flex-col w-full">

              <div className="font-medium text-xs text-sub-heading mb-1">
                Where
              </div>

              <Popover.Root>
                <Popover.Trigger asChild>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent border-0 px-2 py-1 text-sm font-semibold text-[#050505] focus:outline-none"
                    placeholder="Enter zip code or city"
                  />
                </Popover.Trigger>
              </Popover.Root>
            </div>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className="w-full md:w-auto">
          <Button
            onClick={handleSearch}
            variant="default"
            className="
              bg-primary-1 text-white 
              hover:bg-primary-1
              w-full md:w-[40px] 
              h-[40px] 
              rounded md:rounded-full 
              flex items-center justify-center
            "
          >
            {/* MOBILE / TAB TEXT */}
            <span className="md:hidden text-sm font-semibold">Search</span>

            {/* DESKTOP ICON */}
            <SearchIcon className="hidden md:block text-white" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
