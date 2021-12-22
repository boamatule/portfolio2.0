import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
    font-family: "Roboto";
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;  
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
    background: #F9F9F9;
    color: #333;

}

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
  background: ${({ primary }) => (primary ? '#eee142' : '#f4edae')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 4px' : '10px 20px')};
  color: black;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2 solid purple;
  cursor: pointer;
  /* background-color: transparent; */

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? '#f4edae' : '#f4edae')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
