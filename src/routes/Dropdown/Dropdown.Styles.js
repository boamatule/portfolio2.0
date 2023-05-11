import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: fixed;
  width: 80%;
  height: 100vh;
  top: 0;
  left: 30%;
  display: flex;
  justify-content: center;
  /* align-items: right; */
  background: white;
  animation: slideIn 0.3s ease-out forwards;
  z-index: 999;
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
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  list-style: none; 
  background: transparent;
  text-transform: uppercase;
`, DropdownItem = styled.li`
  display: block;
`,

  DropdownLink = styled(Link)`
	display: flex;
	font-size: 1rem;
  transition: 0.2s ease-in-out;
	color: grey;
	cursor: pointer;
	margin-top: 0%;
  padding: 14px;
  text-align: center;
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
