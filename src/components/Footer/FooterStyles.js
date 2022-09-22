import styled from 'styled-components';
import { Container } from '../../global-styles';

export const FooterContainer = styled(Container)`
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};
`;

export const FooterWrapper = styled.div`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  /* font-size: 1.125rem; */
  line-height: 2;
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
  line-height: 4px;
  letter-spacing: 4px;
  align-items: center;
  text-align: center;
  /* margin-bottom: 60px; */
  /* margin-top: 10px; */
  @media screen and (min-width: 800px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 12px;
    line-height: 2px;
    letter-spacing: 2px;
  }
`;
