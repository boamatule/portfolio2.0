import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';

const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  /* ${tw`relative flex flex-col items-center justify-between w-full h-full overflow-hidden`} */
`;

const ThemeSwitchWrapperSpan = styled.span`
  margin-right: 0.5rem;
  font-size: 1.5rem;
  /* ${tw`absolute top-0 left-0 w-full h-full`} */
`;

const ThemeSwitch = styled.label`
  display: inline-block;
  height: 1.5rem;
  position: relative;
  width: 3rem;
`;

const ThemeSwitchInput = styled.input`

`;

const ThemeSwitchSlider = styled.span`
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
  &:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 1.5rem;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 1.5rem;
  }
`;

const ThemeSwitchInputChecked = styled.input`
  &:checked + ${ThemeSwitchSlider} {
    background-color: #2196F3;
  }
  &:focus + ${ThemeSwitchSlider} {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + ${ThemeSwitchSlider}:before {
    transform: translateX(1.5rem);
  }
`;






const DarkModeToggle = () => {
  return (
    <ThemeSwitchWrapper>
      <ThemeSwitchWrapperSpan role="img" aria-label="sun">
        {/* ☀️ */}
      </ThemeSwitchWrapperSpan>
      <ThemeSwitch>
        <ThemeSwitchInput type="checkbox" id="darkModeToggle" />
        <ThemeSwitchSlider />
      </ThemeSwitch>
      <ThemeSwitchWrapperSpan role="img" aria-label="moon">
        {/* 🌙 */}
      </ThemeSwitchWrapperSpan>
    </ThemeSwitchWrapper>
  )
}

export default DarkModeToggle