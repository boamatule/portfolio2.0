import styled from 'styled-components/macro';
export const ToggleSwitch = styled.div`
  --background-color: #4568dc;
  --dark-color: var(--dark);
  --light-color: var(--light);
  display: flex;
  justify-content: center;
  width: 6.5em;
  top: 1.6em;
  margin-left: 1.5em;
  position: absolute;
  background: #4568dc;
  z-index: 1000; // Updated value to ensure it appears above dropdown

  @media screen and (max-width: 768px) {  
    display: flex;
    margin-left: 0;
    margin-top: 0;
    right: 3em;
    z-index: 1000; // Updated value to ensure it appears above dropdown
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 60%;
  height: 26px;
  background-color: var(--dark);
  border-radius: 60px;
  cursor: pointer;
  @media screen and (max-width: 768px) {  
    width: 54%;
  }

  &::before {
    content: "";
    display: flex;
    position: absolute;
    top: 6px;
    bottom: 0px;
    left: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: inset 8px -1px 0px 0px rgba(0, 0, 0, 0.9);
    transition: 0.2s;
    align-items: center;
    justify-content: center;
    /* font-size: 1rem; */

    @media screen and (max-width: 768px) {  
      left: 2px;
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
      background-color: #fff;
      box-shadow: none;
      transition: 0.2s; 
    }
  };
`;
