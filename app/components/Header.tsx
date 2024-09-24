"use client";
// TopBar.tsx
import React, { useState, useEffect } from "react";

// Define the props for the TopBar component
const TopBar: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  // Update the clock every minute (skip seconds)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Convert to 12-hour format
      setTime(`${formattedHours}:${minutes} ${period}`);

      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const formattedDate = new Intl.DateTimeFormat(undefined, options)
        .format(now)
        .replace(/, /g, " "); // Remove comma between month and day
      setDate(formattedDate);
    };

    // Update clock immediately and then every minute
    updateClock();
    const interval = setInterval(updateClock, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="absolute top-0 z-[999] w-full items-center bg-[#121212]">
      <div className="flex h-11 items-center justify-between space-x-2 text-gray-100">
        <div className="flex h-11 items-center">
          <p className="px-2 text-lg font-medium">Petter Bergmar</p>
        </div>

        <div className="flex gap-1">
          <div className="text-md font-regular flex h-11 items-center px-2 text-gray-100">
            {date}
          </div>
          <div className="text-md font-regular flex h-11 items-center px-2 text-gray-100">
            {time}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
