import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  background-color: none;
  /* padding: 1em 4em; */
  text-align: center;
  bottom: 0;
  width: 100%;
  display: flex;
  /* align-items: left; */
  padding: 2em 8em;

  @media screen and (max-width: 768px) {
    padding: 1em 2em;
    margin-top: 80px;
    margin-bottom: 0px;
    align-items: left;
  }
`;

export const Copyright = styled.p`
  margin: 0;a
  font-size: 16px;
  text-align: left;
  color: #c4c4c4;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: left;
    justify-content: flex-start;
    
  }
`;

export const SocialLinks = styled.div`
  margin-top: 0px;
  padding: 0 1em;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  margin: 0 5px;
  color: #4568dc;
  text-decoration: none;

  &:hover {
    color: #666;
  }

  @media screen and (max-width: 768px) {
    margin: 0 5px;
    color: #4568dc;
    text-decoration: none;
  }
`;

export const ScrollToTopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 6px;
  right: 60px;
  background: transparent;
  padding: 1em 1em;

  @media screen and (max-width: 768px) {
    right: 28px;
    bottom: 0px;
  }
`;

export const ScrollToTopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #4568dc;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;

  &:hover {
    background-color: #4568dc;
  }

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const ScrollToTopIcon = styled(FaAngleUp)`
  width: 20px;
  height: 20px;
  color: #4568dc;

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
