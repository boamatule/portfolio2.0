import React from "react";
import styled from 'styled-components/macro';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MoonIcon = <FontAwesomeIcon icon={faMoon} />;
const SunIcon = <FontAwesomeIcon icon={faSun} />;



export const ToggleSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 200px;
  top: 10px;
  margin-left: 0px;
  position: absolute;

  @media screen and (max-width: 960px) {
    margin: 40px 0px; 
    margin-left: 0px;
    justify-content: center;
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
  /* color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')}; */

  &::before {
    /* content: ${({ isSun }) => (isSun ? `'${SunIcon}'` : `'${MoonIcon}'`)}; */
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
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


export const ToggleIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 14px;
`;
