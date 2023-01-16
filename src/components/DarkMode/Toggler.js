/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-multi-assign */
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components/macro';

let Sun;
let Moon;

Sun = Moon = styled.svg`
  position: stycky;
  /* top: 40px;
  right: 6rem; */
  color: #4568dc;
  transition: all transform 2s;
  cursor: pointer;
  color: none;
  background: 'transparent';

  &:hover {
    transform: none;
  }
  @media screen and (max-width: 800px) {
    top: 0rem;
    right: 20em;
    transform: translate(0%, -24%);
    background: 'transparent';
    /* padding: 10px 30px; */
  }
`;

function Toggle({ theme, toggleTheme }) {
  return (
    <div role="button" onClick={toggleTheme}>
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

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
