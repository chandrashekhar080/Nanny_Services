import React, { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/button";
import * as Slider from "@radix-ui/react-slider";
import { FilterGroup } from "./FilterGroup";
import { FilterGroup as FG } from "./types";
export interface FilterOption {
  id: string;
  label: string;
  checked?: boolean;
}

export interface RangeFilter {
  min: number;
  max: number;
}

export interface FilterGroup {
  title: string;
  subtitle?: string;
  options?: FilterOption[];
  date?: boolean;
  range?: RangeFilter;
}

interface FilterSectionProps {
  heading?: string;
  groups: FilterGroup[];
}

export const FilterSection = ({
  heading = "Filters",
  groups,
}: FilterSectionProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState([10, 50]); // default range

  return (
    <>
      {/* MOBILE / TABLET FILTER BUTTON */}
      <div className="lg:hidden mb-4">
        <Button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-white text-black hover:bg-white hover:text-black rounded-lg py-3 px-4"
        >
          <SlidersHorizontal size={18} />
          Filters
        </Button>
      </div>


      {/* SLIDE-IN FILTER PANEL */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 p-5 
          transition-transform duration-300 lg:hidden 
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg">{heading}</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-black text-xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-60px)] pb-20">
          {groups.map((group, index) => (
            <section key={index} className="mb-5">
              <h3 className="text-base font-medium text-[#050505] leading-normal mb-2">
                {group.title}
                {group.subtitle && (
                  <span className="text-sm font-medium text-[#050505]">
                    {" "}
                    {group.subtitle}
                  </span>
                )}
              </h3>

              {/* Checkboxes */}
              {group.options && (
                <div className="flex flex-col gap-2">
                  {group.options.map((option) => (
                    <div key={option.id} className="flex items-center gap-2">
                      <Checkbox
                        id={option.id}
                        defaultChecked={option.checked}
                        className="data-[state=checked]:bg-primary-1 data-[state=checked]:border-primary-1"
                      />
                      <Label
                        htmlFor={option.id}
                        className="text-xs text-[#050505] cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              {/* Date */}
              {group.date && (
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              )}

              {/* Range Slider */}
              {group.range && (
                <div className="mt-3">
                  <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-5"
                    min={group.range.min}
                    max={group.range.max}
                    step={1}
                    value={rangeValue}
                    onValueChange={setRangeValue}
                  >
                    <Slider.Track className="bg-gray-200 relative flex-1 h-1 rounded-full">
                      <Slider.Range className="absolute bg-primary-1 h-1 rounded-full" />
                    </Slider.Track>
                    {rangeValue.map((_, idx) => (
                      <Slider.Thumb
                        key={idx}
                        className="block w-5 h-5 bg-primary-1 rounded-full"
                      />
                    ))}
                  </Slider.Root>

                  <div className="flex justify-between text-sm font-medium mt-2 px-1">
                    <span>${group.range.min}/hr</span>
                    <span>${group.range.max}/hr</span>
                  </div>

                  <div className="text-center mt-1 text-sm font-medium">
                    ${rangeValue[0]}/hr - ${rangeValue[1]}/hr
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* DESKTOP FILTER */}
      <Card className="hidden lg:block w-full bg-white rounded-xl shadow-[0px_0px_4px_#00000040]">
        <CardContent className="p-5">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-black text-lg">{heading}</h2>

            {groups.map((group, index) => (
              <section key={index} className="flex flex-col gap-4">
                <h3 className="text-base font-medium text-[#050505] leading-normal">
                  {group.title}
                  {group.subtitle && (
                    <span className="text-sm font-medium text-[#050505]">
                      {" "}
                      {group.subtitle}
                    </span>
                  )}
                </h3>

                {/* Checkboxes */}
                {group.options && (
                  <div className="flex flex-col gap-2">
                    {group.options.map((option) => (
                      <div key={option.id} className="flex items-center gap-1.5">
                        <Checkbox
                          id={option.id}
                          defaultChecked={option.checked}
                          className="data-[state=checked]:bg-primary-1 data-[state=checked]:border-primary-1"
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-xs text-[#050505] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}

                {/* Date */}
                {group.date && (
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                )}

                {/* Range Slider */}
                {group.range && (
                  <div className="mt-3">
                    <Slider.Root
                      className="relative flex items-center select-none touch-none w-full h-5"
                      min={group.range.min}
                      max={group.range.max}
                      step={1}
                      value={rangeValue}
                      onValueChange={setRangeValue}
                    >
                      <Slider.Track className="bg-gray-200 relative flex-1 h-1 rounded-full">
                        <Slider.Range className="absolute bg-primary-1 h-1 rounded-full" />
                      </Slider.Track>
                      {rangeValue.map((_, idx) => (
                        <Slider.Thumb
                          key={idx}
                          className="block w-5 h-5 bg-primary-1 rounded-full"
                        />
                      ))}
                    </Slider.Root>

                    <div className="flex justify-between text-sm font-medium mt-2 px-1">
                      <span>${rangeValue[0]}/hr</span>
                      <span>${rangeValue[1]}/hr</span>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </CardContent>
      </Card>

      
    </>
  );
};
