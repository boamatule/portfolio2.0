import styled from 'styled-components/macro';

export const ToggleSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-start; */
  /* position: absolute; */
  width: 200px;
  top: 10px;
  margin-left: 900px;
  position: absolute;
  /* margin-right: auto;
  margin-left: auto;
  padding-right: 4px;
  padding-left: 4px; */

  @media screen and (max-width: 960px) {
    margin: 0px 20px; 
    padding: 40px 0px 0px 200px; 
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 40%;
  height: 40px;
  background-color: var(--dark);
  border-radius: 50px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 0px;
    left: 12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: inset 10px -2px 0px 0px rgba(0, 0, 0, 0.9);
    transition: 0.2s;
  }
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
  }
`;


