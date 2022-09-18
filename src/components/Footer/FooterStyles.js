import styled from 'styled-components';
import { Container } from '../../global-styles';

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};
`;

export const FooterWrapper = styled.div`
  align-items: center;
  margin-top: 20px;
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
  margin-bottom: 0.5rem /* 8px */;
  /* font-weight: 700; */
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800) {
    padding-top: 32px;
  }
`;

export const Copyright = styled.h1`
  color: #6969fb;
  font-size: 16px;
  align-items: center;
  text-align: center;
  /* margin-bottom: 60px; */
  margin-top: 10px;
  @media screen and (min-width: 800px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
  }
`;
