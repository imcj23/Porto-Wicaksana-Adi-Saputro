import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "../utils/icon";
import { getTheme, setTheme } from "../utils/theme";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <LightMode /> : <DarkMode />}
    </button>
  );
}
