import { FilterGroup as FG } from "./types";
import { FilterCheckboxList } from "./FilterCheckboxList";
import { FilterRangeSlider } from "./FilterRangeSlider";
import { FilterDatePicker } from "./FilterDatePicker";

interface Props {
  group: FG;
  rangeValue: number[];
  onRangeChange: (value: number[]) => void;
}

export const FilterGroup = ({ group, rangeValue, onRangeChange }: Props) => {
  return (
    <section className="space-y-3">
      <h3 className="text-base font-medium text-[#050505]">
        {group.title}{" "}
        {group.subtitle && <span className="text-sm">{group.subtitle}</span>}
      </h3>

      {group.options && <FilterCheckboxList options={group.options} />}
      {group.date && <FilterDatePicker />}
      {group.range && (
        <FilterRangeSlider
          min={group.range.min}
          max={group.range.max}
          value={rangeValue}
          onChange={onRangeChange}
        />
      )}
    </section>
  );
};
