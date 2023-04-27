import styled from 'styled-components/macro';

export const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  width: 104px;
  top: 24px;
  margin-left: 20px;
  position: absolute;
  background: #4568dc;

  @media screen and (max-width: 960px) {
    /* padding-right: 2rem; */
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 60%;
  height: 30px;
  background-color: var(--dark);
  border-radius: 50px;
  cursor: pointer;

  &::before {
    content: "";
    display: flex;
    position: absolute;
    top: 6px;
    bottom: 0px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    box-shadow: inset 8px -1px 0px 0px rgba(0, 0, 0, 0.9);
    transition: 0.2s;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  };

  /* &:hover {
    background-color: blue;
  } */
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
