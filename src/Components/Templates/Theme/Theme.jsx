import React, { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleButtonTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={handleButtonTheme} className="cursor-pointer">
        {theme === "light" ? (
          <MdDarkMode size={30} />
        ) : (
          <FaRegLightbulb size={30} />
        )}
      </button>
    </>
  );
}
