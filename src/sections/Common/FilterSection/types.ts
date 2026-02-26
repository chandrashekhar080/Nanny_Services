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
