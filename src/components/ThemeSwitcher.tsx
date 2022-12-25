import React, { useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleThemeChange}>
      {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    </button>
  );
};

export default ThemeSwitcher;