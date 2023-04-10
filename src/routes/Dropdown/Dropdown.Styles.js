import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: purple;
  display: flex;
  justify-content: center; /* centers the child items horizontally */
  align-items: center; /* centers the child items vertically */
  top: 0;
  left: 0;
	text-decoration: none;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  transition: opacity 0.3s ease-in-out;
`;


export const DropdownIcon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	font-size: 2rem;
	outline: none;
	background: transparent;
	cursor: pointer;
`;

export const DropdownCloseIcon = styled(FaTimes)`
	/* color:  #4568dc; */
	color:  red;

`;

export const DropdownWrapper = styled.div`
	color: #fff;
`;

export const DropdownMenu = styled.ul`
  margin-top: 180px;
  display: flex;
  flex-direction: column; /* added */
  justify-content: center; /* added */
  align-items: center; /* added */
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
	text-decoration: none;

  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const DropdownItem = styled.li`
	width: 100%;
	height: 100vh;
`;

export const DropdownLink = styled(Link)`
	display: flex; /* left */
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: grey;
	cursor: pointer;
	padding: 0.5rem 1rem;
	margin-top: 0%;
	
	&:hover {
		color:  #4568dc;
		transition: 0.2s ease-in-out;
	}
`;


// export const SideBarRoute = styled(Route)`
// color: purple;
// border-radius: 50px;
// background: #01bf71;
// white-space: none;
// padding: 16px 64px;
// font-size: 16px;
// outline: none;
// border: none;

// cursor: pointer;
// 	transition: all 0.2s ease-in-out;
// 	text-decoration: none:

// 	&:hover {
// 		color: #000;
// 		transition: 0.2s ease-in-out;
// 	}
// `;




