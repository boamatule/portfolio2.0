import styled from 'styled-components/macro';

export const ToggleSwitch = styled.div`
  display: flex;
  position: absolute;
  width: 200px;
  top: 10px;
  left: 120px;

  @media screen and (max-width: 960px) {
    /* left: 120px; */

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
    box-shadow: inset 10px -2px 0px 0px var(--light);
    background-color: var(--dark);
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
      background-color: var(--dark);
      box-shadow: none;
      transition: 0.2s;
    }
  }
`;


