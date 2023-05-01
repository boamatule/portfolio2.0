import{normalize}from"normalize.css";import styled,{createGlobalStyle}from"styled-components/macro";const GlobalStyles=createGlobalStyle`
  ${normalize}
  :root {
    --light: grey;
    --dark: grey;
    --font-color: #000;
    --background-color: #000;
  }

  [data-theme="dark"] {
    --background-color: #fff;
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
    font-family: 'Rubik';
    background-color: var(--background-color);
    color: var(--font-color);
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: black;
  }
`,Container=styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: auto;
  width: 100%;
  box-sizing: border-box;
`,Button=styled.button`
  white-space: nowrap;
  padding: ${({big:o})=>o?"12px 4px":"10px 20px"};
  color: grey;
  font-size: ${({fontBig:o})=>o?"20px":"16px"};
  outline: none;
  cursor: pointer;
  background: #4568dc;
  transition: 0.5s;
  border-radius: 2px;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({})=>"purple"};
    color: grey;
    text-decoration: none;
  }
`,Span=styled.span`
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;
  padding-left: 0px;
  text-align: center;
  background: transparent;
  font-size: 12px;
  text-transform: uppercase;
`,Glass=styled.div`
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;export{GlobalStyles,Container,Button,Span,Glass};