import { ReactElement } from "react";

interface ProgressBar {
  icon: ReactElement;
  status: string;
  text: string;
  title: string;
}

const isFieldFilled = (field: any) => {
  if (typeof field === 'boolean') {
    return true;
  }
  if (typeof field === 'string') {
    return field.trim() !== ''; 
  }
};

const calculateStatus = (fields: any) => {
  const totalFields = Object.keys(fields).length;
  const filledFieldsCount = Object.values(fields).filter(isFieldFilled).length;

  if (filledFieldsCount === 0) return "pending";
  if (filledFieldsCount < totalFields) return "waiting";
  return "complete";
};

export const changeMultiStep = (
  progressBar: ProgressBar[],
  items: Record<string, any>
) => {
  return progressBar.map((section, index) => {
    const sectionKey = Object.keys(items)[index];
    const fields = items[sectionKey] || {};
    
    return {
      ...section,
      status: calculateStatus(fields)
    };
  });
};
