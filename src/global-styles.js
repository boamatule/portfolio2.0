import 'normalize.css';
import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light: grey;
    --dark: grey;
    --font-color: #86829c;
    --background-color: #232129;
    --theme-color: #007bff;
  }

  [data-theme="dark"] {
    --background-color: #fafaf8;
  }

  /* Chrome, Firefox, Opera, Edge */
  @media (prefers-color-scheme: light) {
    /* Light mode styles */
    /* Use the --theme-color variable for the browser UI elements */
    :root {
      --color-on-background: #fff;
      --color-on-primary: #007bff;
    }
  }

  /* Chrome, Firefox, Opera, Edge */
  @media (prefers-color-scheme: dark) {
    /* Dark mode styles */
    /* Use a different color for the --theme-color variable */
    :root {
      --color-on-background: #000;
      --color-on-primary: #0cf;
    }
  }

  /* Safari */
  @supports (-webkit-touch-callout: none) {
    /* Use a separate meta tag for Safari */
    meta[name="apple-mobile-web-app-status-bar-style"] {
      content: var(--theme-color);
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;  
    background-color: var(--background-color);
    color: var(--font-color);
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: auto;
  text-align: center;
  padding: 0px 10px;
  
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Button = styled.button`
  white-space: nowrap;
  padding: ${({ big }) => big ? "12px 4px" : "10px 20px"};
  color: grey;
  font-size: ${({ fontBig }) => fontBig ? "20px" : "16px"};
  outline: none;
  cursor: pointer;
  background: #4568dc;
  transition: 0.5s;
  border-radius: 2px;

  &:hover {
    transition: all 0.3s ease-out;
    background: purple;
    color: grey;
    text-decoration: none;
  }
`;

export const Span = styled.span`
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;
  padding-left: 0px;
  text-align: center;
  background: transparent;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Glass = styled.div`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border-radius: 10px 10px 0px 0px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  -webkit-backdrop-filter: blur(20px);
  /* border-radius: 10px 10px 0 0; */
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
