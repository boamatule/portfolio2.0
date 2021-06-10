import styled from 'styled-components';

const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

const DropDown = () => <DropDownContainer />;

export default DropDown;


 {/* <Title>{project.title}</Title> */}
 <SubTitle>{project.title}</SubTitle>