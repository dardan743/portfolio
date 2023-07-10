import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

function useThemeSwitcher() {
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
    <button
      onClick={mode === "dark" ? light : dark}
      // className="text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
    >
      {mode === "dark" ? (
        <MdLightMode size={22} />
      ) : (
        <MdOutlineDarkMode size={22} />
      )}
    </button>
  );
}

export default useThemeSwitcher;
