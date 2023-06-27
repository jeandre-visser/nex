'use client';

import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    updateYear(); // Set initial year

    // Update year every time the component re-renders
    // (e.g., when the current year changes)
    const interval = setInterval(updateYear, 1000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>©{currentYear} nex. All rights reserved.</div>
  )
}

export default Footer