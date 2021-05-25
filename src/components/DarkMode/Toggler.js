/* eslint-disable react/prop-types */
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { Container } from '../../global-styles';

// const Button = styled.button`
//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 38px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   padding: 0.6rem;
// `;

const ButtonContainer = styled(Container)`
  display: flex, ${Container};
`;

const Button = styled.button`
  border-radius: 0px;
  /* background: ${({ primary }) => (primary ? '#4B67FB' : '#0467FB')}; */
  white-space: nowrap;
  /* padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')}; */
  /* color: ${({ primary }) => (primary ? '#4B67FB' : '#0467FB')}; */
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

function Toggle({ theme, toggleTheme }) {
  const icon = theme === 'light' ? <HiMoon size={38} color="black" /> : <CgSun size={38} color="white" />;
  return <Button onClick={toggleTheme}>{icon}</Button>;
}
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
