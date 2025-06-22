"use client";

import { Calendar } from "@/components/UI/calendar";
import { useState } from "react";

const CalendarArea = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      className="rounded-md w-fit"
      selected={date}
      onSelect={setDate}
    />
  );
};
export default CalendarArea;
