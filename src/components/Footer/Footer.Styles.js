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
  margin-top: 40px;
  /* margin-bottom: 20px; */
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
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
  font-size: 14px;
  line-height: 4px;
  letter-spacing: 2px;
  align-items: center;
  text-align: center;
  color: #4568dc;
  margin: 0px 0px;
  /* border-bottom: 2px solid #4568dc; */


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
    justify-content: center; /* center horizontally */
    align-items: center; /* center vertically */
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid silver;
    cursor: pointer;
`;

export const ScrollToTopIcon = styled(FaAngleUp)`
  width: 20px;
  height: 20px;
  color: grey;
`;




