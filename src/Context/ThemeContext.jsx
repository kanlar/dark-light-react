import { useEffect } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  function handleTheme() {
    setThemeName((prev) => {
      const themeInfo = prev === "light" ? "dark" : "light";
      changeTheme(themeInfo);
      localStorage.setItem("theme", themeInfo);
      return themeInfo;
    });
  }

  function changeTheme(themeName) {
    document.documentElement.setAttribute("data-bs-theme", themeName);
  }
  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ??
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "lights";
    changeTheme(storedTheme);
    setThemeName(storedTheme);
  }, []);
  return (
    <ThemeContext.Provider value={{ themeName, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
