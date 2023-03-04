import React from "react";

import {
  ToggleSwitch,
  Label, 
  Input,
  ToggleButton,
  ToggleIcon,
} from './DarkMode.Styles';

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <ToggleSwitch>
        <Input
          id="checkbox"
          type="checkbox"
          name="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
      <Label htmlFor="checkbox" />
    </ToggleSwitch>

  );
};

export default DarkMode;
