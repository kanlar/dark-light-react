import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { darkTheme, lightTheme } from "./icon";

function ThemeIcon() {
  const { themeName, handleTheme } = useContext(ThemeContext);

  return (
    <>
      {themeName === "light" ? (
        <button onClick={handleTheme} className="btn">
          {lightTheme} Light
        </button>
      ) : (
        <button onClick={handleTheme} className="btn">
          {darkTheme} Dark
        </button>
      )}
    </>
  );
}

export default ThemeIcon;
