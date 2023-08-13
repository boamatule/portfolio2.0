import styled from 'styled-components/macro';

export const ToggleSwitch = styled.div`
  /* --background-color: #4568dc; */
  --dark-color: var(--dark);
  --light-color: var(--light);
  display: flex;
  justify-content: center;
  width: 6.5em;
  top: 1.6em;
  margin-left: 1.5em;
  position: absolute;
  /* background: #4568dc; */
  z-index: 1000;

  @media screen and (max-width: 768px) {  
    display: flex;
    justify-content: center;
    margin-left: 0em;
    margin-top: 0;
    right: 4em;
    z-index: 1000;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 60%;
  height: 28px;
  background-color: var(--dark);
  border-radius: 60px;
  cursor: pointer;
  @media screen and (max-width: 768px) {  
    width: 54%;
    height: 26px;
  }

  &::before {
    content: "";
    display: flex;
    position: absolute;
    justify-content: center;
    top: 6px;
    bottom: 0px;
    left: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: inset 6px -1px 0px 0px #4568dc;
    transition: 0.2s;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {  
      left: 2.2px;
      width: 14px;
      height: 14px;
    }
  };
`;

export const Input = styled.input`
  position: absolute;
  display: none;
  &:checked + ${Label} {
    background-color: var(--light);
    &::before {
      transform: translateX(36px);
      background-color: #4568dc;
      box-shadow: none;
      transition: 0.2s; 
    }
  };
`;
