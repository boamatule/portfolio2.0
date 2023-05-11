import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: fixed;
  width: 80%;
  height: 100vh;
  top: 0;
  left: 30%;
  display: flex;
  font-family: Rubik;
  justify-content: center;
  /* align-items: right; */
  background: white;
  animation: slideIn 0.3s ease-out forwards;
  /* z-index: 999; */
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
    text-align: center;
    align-items: center;
    color: grey;
    letter-spacing: 6px;
    font-size: 700;
    line-height: 10px;
    font-family: 'Rubik', monospace;
    font-weight: bold;
    text-decoration: none;
    padding: 0rem 0.5rem;
    cursor: pointer;

    &.active {
      border-bottom: 3px solid #4568dc;
    }

    @media screen and (max-width: 768px) {
      padding: 0.5rem 0.5rem;
      margin: 1rem 0;

    &:hover {
      transition: 0.3s ease-out;
    }
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
