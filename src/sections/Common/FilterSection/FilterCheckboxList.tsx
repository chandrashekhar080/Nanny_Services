import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterOption } from "./types";

export const FilterCheckboxList = ({ options }: { options: FilterOption[] }) => (
  <div className="flex flex-col gap-2">
    {options.map((option) => (
      <label key={option.id} htmlFor={option.id} className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id={option.id}
          defaultChecked={option.checked}
          className="data-[state=checked]:bg-primary-1 data-[state=checked]:border-primary-1"
        />
        <span className="text-sm text-[#050505]">{option.label}</span>
      </label>
    ))}
  </div>
);
