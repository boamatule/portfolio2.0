import { Link } from 'react-router-dom';
import styled from "styled-components";


export const DropdownContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  text-decoration: none;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  /* Handle click event and call toggle function from props */
  &:hover {
    opacity: 0.8; /* Add hover effect */
  }

  /* Add hover effect when the dropdown is open */
  ${({ isOpen }) =>
    isOpen &&
    `opacity: 100%;
    &:hover {
      opacity: 100%;
    }
  `}
`;

export const DropdownWrapper = styled.div`
	color: #fff;
`;

export const DropdownMenu = styled.ul`
  /* margin-top: 180px; */
  display: flex;
  flex-direction: row; /* added */
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
	text-decoration: none;
  list-style: none;
  text-align: center;
  background: none;
  /* @media screen and (max-width: 960px) {
    grid-template-rows: repeat(6, 60px);
  } */
`;

export const DropdownItem = styled.li`
	/* width: 100%;
	height: 50vh; */
  display: block;
`;

export const DropdownLink = styled(Link)`
	display: flex;
	font-size: 1.2rem;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: grey;
	cursor: pointer;
	margin-top: 0%;
  margin-right: 300px; 
  padding: 14px;
  text-align: left;
  font-family: Rubik;
  font-style: bold;

	&:hover {
		color:  #4568dc;
		transition: 0.2s ease-in-out;
    border-bottom: 4px solid #4568dc;
	}

  @media screen and (max-width: 960px) {
  font-size: 1rem;
  padding: 14px;
  margin-right: 60px; 
  }

`;




