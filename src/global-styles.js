import styled, { createGlobalStyle } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`
// 	html, body {
// 		font-family: 'Helvetica Neue', 'Helvetica, Arial, sans-serif';
// 		-webkit-font-smoothing: antialiased;
// 		-moz-osx-font-smoothing: grayscale;
// 		background-color: black;
// 		color: #333333;
// 		font-size: 16px;
// 	}
// `;

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
	}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B67FB' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B67FB')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
