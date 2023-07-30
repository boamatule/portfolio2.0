// import { func, string } from 'prop-types';
// import React from "react";
// import styled from 'styled-components/macro';
// import {
//   ToggleSwitch,
//   Label, 
//   Input,
// } from './DarkMode.Styles';

// const setDark = () => {
//   localStorage.setItem("theme", "dark");
//   document.documentElement.setAttribute("data-theme", "dark");
// };

// const setLight = () => {
//   localStorage.setItem("theme", "light");
//   document.documentElement.setAttribute("data-theme", "light");
// };

// const storedTheme = localStorage.getItem("theme");

// const prefersDark =
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// const defaultDark =
//   storedTheme === "dark" || (storedTheme === null && prefersDark);

// if (defaultDark) {
//   setDark();
// }

// const toggleTheme = (e) => {
//   if (e.target.checked) {
//     setDark();
//   } else {
//     setLight();
//   }
// };

// const DarkMode = () => {
//   return (
//     <ToggleSwitch>
//         <Input
//           id="checkbox"
//           type="checkbox"
//           name="checkbox"
//           onChange={toggleTheme}
//           defaultChecked={defaultDark}
//         />
//       <Label htmlFor="checkbox" />
//     </ToggleSwitch>

//   );
// };

// export default React.memo(DarkMode);


/* eslint-disable prefer-const */
/* eslint-disable no-multi-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import React from "react";

// import React from "react";
// import { func, string } from 'prop-types';
// import styled from 'styled-components/macro';

// let Sun;
// let Moon;

// Sun = Moon = styled.svg`
//   position: sticky;
//   /* top: 40px;
//   right: 6rem; */
//   color: #4568dc;
//   transition: all transform 2s;
//   cursor: pointer;
//   color: none;
//   background: 'transparent';

//   &:hover {
//     transform: none;
//   }
//   @media screen and (max-width: 768px) {
//     top: 0rem;
//     right: 20em;
//     transform: translate(0%, -24%);
//     background: 'transparent';
//     /* padding: 10px 30px; */
//   }
// `;

// const DarkMode = ({ theme, toggleTheme }) => (
//     <div
//       // onClick={toggleTheme}
//     >
//       {theme === 'light' ? (
//         <Moon
//           width="24"
//           height="24"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           overflow="show"
//           background="transparent"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//           />
//         </Moon>
//       ) : (
//         <Sun
//           width="24"
//           height="24"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//           />
//         </Sun>
//       )}
//     </div>
// );

// DarkMode.propTypes = {
//   theme: string.isRequired,
//   toggleThemer: func.isRequired,
// };

// export default  React.memo(DarkMode);

import PropTypes from 'prop-types';
import React from "react";
import styled from 'styled-components/macro';
import useDarkMode from './useDarkMode';
import { lightTheme, darkTheme } from './Themes'; // Replace 'your-theme-file' with the actual path to your theme file

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
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%; /* Add border-radius for circular effect */

  &:hover {
    background-color:  #4568dc;
    /* border-radius: 50%; */
  }

  @media screen and (max-width: 768px) {
    top: 0rem;
    right: 20em;
    /* transform: translate(0%, -24%); */
    background: 'transparent';
    /* padding: 10px 30px; */
  }
`;

const Sun = styled.svg`
  position: sticky;
  top: 0px;
  right: 0rem;
  color: #4568dc;
  transition: all transform 2s;
  cursor: pointer;
  color: none;
  /* background: 'transparent'; */

  &:hover {
    transform: none;
  }
  @media screen and (max-width: 768px) {
    top: 0rem;
    right: 20em;
    transform: translate(0%, -24%);
    background: 'transparent';
    /* padding: 10px 30px; */
  }
`;

const Moon = styled.svg`
  /* Add styles for the Moon component here if needed */
`;

const DarkMode = ({theme, toggleTheme }) => {
  // const [theme, toggleTheme] = useDarkMode();
  // console.log("Theme:", theme);
  // console.log("Toggle Theme Function:", toggleTheme);
  // const themeObject = theme === 'light' ? lightTheme : darkTheme; // Use lightTheme for 'light' theme and darkTheme for 'dark' theme

  return (
    <div
      onClick={toggleTheme}
      // theme={themeObject}
      // onChange={toggleTheme}
      // defaultChecked={defaultDark}
    >
      {theme === 'light' ? (
        <Moon
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          overflow="show"
          background="transparent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </Moon>
      ) : (
        <Sun
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </Sun>
      )}
    </div>
  );
}

DarkMode.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default React.memo(DarkMode);
