"use client";

import React, { useState } from "react";
import ShadModalLayout from "./ShadModalLayout";

interface FilterOption {
  label: string;
  value: string;
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

interface Filter {
  label: string;
  options: { label: string; value: string }[];
}

interface FilterModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  filters: Filter[];
}

const FilterModal = ({
  isOpen,
  onOpenChange,
  title,
  filters,
}: FilterModalProps) => {
  return (
    <ShadModalLayout
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      width="w-[500px]"
    >
      <FilterModalArea title={title} filters={filters} />
    </ShadModalLayout>
  );
};

const FilterModalArea = ({
  title,
  filters,
}: {
  title: string;
  filters: Filter[];
}) => {
  const [activeSelections, setActiveSelections] = useState<Record<string, string | null>>({});

  const handleSelectionChange = (filterLabel: string, value: string) => {
    setActiveSelections((prev) => ({
      ...prev,
      [filterLabel]: value,
    }));
  };

  return (
    <div className="max-h-[700px] overflow-y-auto">
      <div className="p-6 font-bold text-orangeSupport">{title}</div>
      <div className="h-[1px] bg-grayTitle/50 dark:bg-white w-full" />

      {filters.map((filter, index) => (
        <div key={filter.label}>
          <div className="p-6 flex flex-col gap-4">
            <h1 className="font-bold">{filter.label}</h1>
            <ul className="flex gap-4 flex-wrap">
              {filter.options.map((option) => (
                <FilterOption
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  selectedValue={activeSelections[filter.label] || null}
                  onSelect={(value) => handleSelectionChange(filter.label, value)}
                />
              ))}
            </ul>
          </div>
          {index < filters.length - 1 && <div className="h-[1px] bg-grayTitle/50 dark:bg-white w-full" />}
        </div>
      ))}
    </div>
  );
};

const FilterOption = ({
  label,
  value,
  selectedValue,
  onSelect,
}: FilterOption) => {
  return (
    <li
      onClick={() => onSelect(value)}
      className={`py-1 px-4 rounded-md cursor-pointer transition-all ${
        selectedValue === value
          ? "bg-gray-800 dark:bg-gray-300 dark:text-black text-white"
          : "bg-gray-200 dark:bg-gray-900"
      }`}
    >
      {label}
    </li>
  );
};

export default FilterModal;
