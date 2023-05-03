import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  animation: slideIn 0.3s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`,

DropdownMenu = styled.ul`
  display: flex; flex-direction: row; align-items: center; list-style: none; background: none;
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
  right: 0rem;
  outline: none;
  background: transparent;
  transform: translate(-100%, 50%);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translate(-100%, 50%);
  }
}
`

export { DropdownContainer, DropdownItem, DropdownLink, DropdownMenu, DropdownMobileIcon };
