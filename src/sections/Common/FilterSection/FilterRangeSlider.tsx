import * as Slider from "@radix-ui/react-slider";
import React from "react";

interface Props {
  min: number;
  max: number;
  value: number[];
  onChange: (value: number[]) => void;
}

export const FilterRangeSlider = ({ min, max, value, onChange }: Props) => {
  return (
    <div className="mt-2">
      <Slider.Root
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={onChange}
        className="relative flex items-center w-full h-5"
      >
        <Slider.Track className="bg-gray-200 h-1 w-full rounded-full">
          <Slider.Range className="absolute bg-primary-1 h-1 rounded-full" />
        </Slider.Track>

        {value.map((_, i) => (
          <Slider.Thumb
            key={i}
            className="w-5 h-5 bg-primary-1 rounded-full cursor-pointer"
          />
        ))}
      </Slider.Root>

      <div className="flex justify-between text-xs mt-1">
        <span>${value[0]}/hr</span>
        <span>${value[1]}/hr</span>
      </div>
    </div>
  );
};
