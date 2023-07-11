import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useThemeDetector } from "hooks";

function useThemeSwitcher() {
  const isDarkTheme = useThemeDetector();
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.remove("purple-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  const light = () => setMode((mode) => (mode === "dark" ? "light" : "dark"));
  const dark = () => setMode((mode) => (mode === "dark" ? "light" : "dark"));

  return (
    // <button onClick={mode === "dark" ? light : dark}>
    //   {mode === "dark" ? (
    //     <MdLightMode size={22} id="switcher" />
    //   ) : (
    //     <MdOutlineDarkMode size={22} id="switcher" />
    //   )}
    // </button>

    <button onClick={isDarkTheme ? dark : light}>
      {isDarkTheme ? (
        <MdOutlineDarkMode size={22} id="switcher" />
      ) : (
        <MdLightMode size={22} id="switcher" />
      )}
    </button>
  );
}

export default useThemeSwitcher;
