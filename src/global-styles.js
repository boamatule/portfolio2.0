import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
    font-family: 'Montserrat';
    /* font-family: 'Spartan, sans-serif'; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
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

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background: ${({ primary }) => (primary ? '#eee142' : '#f4edae')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 4px' : '10px 20px')};
  color: black;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2 solid silver;
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
