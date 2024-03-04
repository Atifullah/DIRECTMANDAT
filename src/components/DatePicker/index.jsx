import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const CustomCalender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      locale="fr"
      className={
        "!border !border-white"
      }
      onChange={onChange}
      value={value}
      selectRange={false}
    />
  );
};
