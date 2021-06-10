/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-multi-assign */
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Container } from '../../Pages/ContactPage/ContactPageStyles';

let Sun;
let Moon;

// eslint-disable-next-line prefer-const
Sun = Moon = styled.svg`
  position: fixed;
  top: 5rem;
  right: 4rem;
  color: #fff142;
  transition: all 0.5s linear;
  cursor: pointer;
  /* overflow: show; */
`;

// eslint-disable-next-line react/prop-types
const Toggle = ({ theme, toggleTheme }) => (
  <>
    <div onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          // overflow="show"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </Moon>
      ) : (
        <Sun
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </Sun>
      )}
    </div>
  </>
);

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
