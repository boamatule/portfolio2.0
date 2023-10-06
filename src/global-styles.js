import 'normalize.css';
import styled, { createGlobalStyle } from "styled-components/macro";


export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  :root {
    --light: grey;
    --dark: grey;
    --font-color: #86829c;
    --background-color: #232129;
    --color-on-primary: #007bff;
  }

  [data-theme="dark"] {
    --background-color: #fafaf8;
  }

  /* Safari */
  @supports (-webkit-touch-callout: none) {
    /* Use a separate meta tag for Safari */
    meta[name="apple-mobile-web-app-status-bar-style"] {
      content: var(--theme-color);
    }
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;  
    background-color: var(--background-color);
    color: var(--font-color);
  }

  a {
    text-decoration: none;
    color: unset;
  }
`;

export const ResponsiveText = styled.p`
  font-size: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Responsive = styled.div`
  @media (max-width: 700px) {
    padding: 4rem;
    margin: 4rem;
  }
`;
// export const Responsive = styled.div`
//   @media (max-width: 550px) {
//     padding: 4rem 2rem;
//     margin: 4rem 2rem;
//   }
// `;

export const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 800px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


export const Button = styled.button`
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 4px' : '10px 20px')};
  color: none;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  background: #4568dc;
  transition: background 0.5s, color 0.5s; /* Combine transitions */
  border-radius: 0;

  &:hover {
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
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

