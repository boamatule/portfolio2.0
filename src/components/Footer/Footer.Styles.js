import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  background-color: none;
  padding: 0 14em;
  text-align: center;
  bottom: 0;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: left;
  position: fixed;

  @media screen and (max-width: 768px) {
    padding: 0 3em;
    margin-top: 0px;
    margin-bottom: 60px;
    align-items: left;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: left;
  color: #4568dc;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: left;
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
  bottom: 20px;
  right: 20px;
  background: transparent;

  @media screen and (max-width: 768px) {
    right: 10px;
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
  cursor: pointer;

  &:hover {
    color: grey;
  }

  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
