import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";



export const SideBarContainer = styled.div`
z-index: 999,
height: 100%;
width: 100%;
background: black,
display: grid;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' :  '0')};
top: ${({ isOpen }) => (isOpen ? '0' :  '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
color: #000;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SideBarWrapper = styled.div`
color: #fff;
`;

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 960px) {
	grid-template-rows: repeat(6, 60px);
}

`;


export const SideBarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
	color: #000;
	transition: 0.2s ease-in-out;
}
`;

export const SideBarRoute = styled.div`
color: #fff;
border-radius: 50px;
background: #01bf71;
white-space: none;
padding: 16px 64px;
font-size: 16px;
outline: none;
border: none;

cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none:

	&:hover {
		color: #000;
		transition: 0.2s ease-in-out;
	}
`;




