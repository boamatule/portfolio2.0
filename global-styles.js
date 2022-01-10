import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
    font-family: "Roboto Mono";
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    /* transition: all 0.5s linear;   */
	}
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

  @media only screen and (max-width: 1200px){
    font-size: 58%;
  }
  @media only screen and (min-width: 1980px){
    font-size: 70%;
  }
}
body{
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.6rem;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  background: none;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  /** Breakpoints:
  sm: min-width: 640px;
  md: min-width: 768px;
  lg: min-width: 1024px;
  xl: min-width: 1280px;
  2xl: min-width: 1536px;
**/
  @media screen and (max-width: 960px) {
    padding-left: 3rem /* 16px */;
    padding-right: 3rem /* 16px */;
    /* background: ${({ lightBg }) => (lightBg ? '#101522' : '#101522')};
    background: ${({ lightBg }) => (lightBg ? '#101522' : '#fff')}; */
  }
`;

export const Button = styled.button`
  /* background: ${({ primary }) => (primary ? '#eee142' : '#f4edae')}; */
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 4px' : '10px 20px')};
  /* color: black; */
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  background: #4568DC;
  background: (#4568DC 0%, #B06AB3  51%, #4568DC  100%)
  transition: 0.5s;
  border-radius: 2px;
  
  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? 'purple' : 'purple')};
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 1rem;
  line-height: 20px;
  padding-left: 0px;
  text-align: center;
  background: transparent;
  /* text-transform: uppercase; */
`;

export const Glassmorphism = styled.div`
  background: transparent;
  /* background: rgba(255, 255, 255, 0.15); */
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  box-shadow: none;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  /* border-radius: 10px; */
  border-radius: 10px 10px 0px 0px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default GlobalStyles;
