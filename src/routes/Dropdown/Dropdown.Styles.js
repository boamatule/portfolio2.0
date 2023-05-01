import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
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
  
  &:hover {
    opacity: 0.8; 
  }
  
`, DropdownMenu = styled.ul`
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  list-style: none;
  text-align: center;
  background: none;
`, DropdownItem = styled.li`
  display: block;
`,

  DropdownLink = styled(Link)`
	display: flex;
	font-size: 1.2rem;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: grey;
	cursor: pointer;
	margin-top: 0%;
  margin-right: 60px; 
  padding: 14px;
  text-align: left;
  font-family: Rubik;
  font-style: bold;

	&:hover {
		color:  #4568dc;
	  border-bottom: 4px solid #4568dc;
  }
`,

  DropdownMobileIcon = styled.div`
  display: none;
  z-index: 999;
  color: #4568dc;

  @media screen and (max-width: 768px) {
  display: flex;
  position: absolute;
  top: 0.8rem;
  right: 1.5rem;
  outline: none;
  background: transparent;
  /* cursor: pointer; */
  transform: translate(-100%, 50%);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translate(-100%, 50%);
  }
}
`

export { DropdownContainer, DropdownItem, DropdownLink, DropdownMenu, DropdownMobileIcon };
