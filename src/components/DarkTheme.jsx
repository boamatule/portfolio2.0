import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const DarkTheme = () => {
	const getDefaultTheme = () => {
		const storedTheme = localStorage.getItem("theme");

		return (
			storedTheme ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light")
		);
	};

	const [theme, setTheme] = useState(getDefaultTheme);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<>
			<button
				className="p-2 rounded-full focus:outline-none"
				onClick={toggleTheme}
				aria-label={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}
			>
				{theme === "dark" ? (
					<MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-400" />
				) : (
					<SunIcon className="w-6 h-6 text-white dark:text-gray-400" />
				)}
			</button>
		</>
	);
};

export default DarkTheme;
