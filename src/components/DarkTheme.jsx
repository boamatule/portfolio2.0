import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const DarkTheme = () => {
	const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("theme") === "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])


  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, []);

useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

	const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
	};

  return (
    <>
      <button
        className="p-2 rounded-full focus:outline-none"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-400" />
        ) : (
          <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-400" />
        )}
      </button>
    </>
  );
};

export default DarkTheme;
