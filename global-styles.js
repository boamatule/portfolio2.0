import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
    color: ${({ theme }) => theme.text};
	}
  * {
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
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: auto;
  padding-left: auto;
  background: none;

  /** Breakpoints:
  sm: min-width: 640px;
  md: min-width: 768px;
  lg: min-width: 1024px;
  xl: min-width: 1280px;
  2xl: min-width: 1536px;
**/
  @media screen and (max-width: 800px) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

export const Button = styled.button`
  /* background: ${({ primary }) => (primary ? '#eee142' : '#f4edae')}; */
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 4px' : '10px 20px')};
  color: grey;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  background: #4568dc;
  transition: 0.5s;
  border-radius: 2px;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? 'purple' : 'purple')};
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
  font-size: 14px;
  text-transform: uppercase;
`;

export const Glassmorphism = styled.div`
  background: transparent;
  box-shadow: none;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px 10px 0px 0px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default GlobalStyles;
