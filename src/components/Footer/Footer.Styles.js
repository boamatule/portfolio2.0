import styled from 'styled-components/macro';
import { Container } from '../../global-styles';
import { FaAngleUp } from 'react-icons/fa';


export const FooterContainer = styled(Container)`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  align-items: center;
  /* margin-top: 80px; */
  position: relative;
  bottom: 20px;
  width: 100%;
  height: 80px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800) {
    padding-top: 32px;
  }
`;

export const Copyright = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 4px;
  letter-spacing: 2px;
  align-items: center;
  text-align: center;
  color: #4568dc;
  margin: 0px 0px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const ScrollToTopContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* align to right */
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  background: transparent,
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
  &:hover {
    background-color: #4568dc;
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
`;




