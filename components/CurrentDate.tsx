"use client";

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
      }).format(new Date());

      setCurrentDate(formattedDate);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <p className="text-sm text-slate-600">
      {currentDate || "Loading date..."}
    </p>
  );
}