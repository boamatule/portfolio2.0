import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const FooterContainer = styled(Container)`
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 80px;

  @media screen and (min-width: 960px) {
    font-weight: normal;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    line-height: 1px;
    letter-spacing: 1px;
  }
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')}; */
`;

export const FooterWrapper = styled.div`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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
  color: yellow;
  margin: 0px 0px;

  @media screen and (min-width: 960px) {
    font-weight: normal;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    line-height: 1px;
    letter-spacing: 1px;
  }
`;
