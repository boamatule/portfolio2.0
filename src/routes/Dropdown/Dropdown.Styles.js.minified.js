import{Link}from"react-router-dom";import styled from"styled-components";const DropdownContainer=styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  text-decoration: none;
  cursor: pointer;
  &.clicked {
    display: none;
  }
  /* Handle click event and call toggle function from props */
  &:hover {
    opacity: 0.8; /* Add hover effect */
  }

  /* Add hover effect when the dropdown is open */
  ${({isOpen:e})=>e&&`opacity: 100%;
    &:hover {
      opacity: 100%;
    }
  `}
`,DropdownMenu=styled.ul`
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  list-style: none;
  text-align: center;
  background: none;
`,DropdownItem=styled.li`
	/* width: 100%;
	height: 50vh; */
  display: block;
`,DropdownLink=styled(Link)`
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
`;export{DropdownContainer,DropdownMenu,DropdownItem,DropdownLink};