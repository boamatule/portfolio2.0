import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 200px 0px 200px 0px;
  ${Container};
`;

export const textWrapper = styled.div``;

export const imgWrapper = styled.div`
  @media screen and (max-width: 960px) {
    max-width: 80%;
    display: flex;
    justify-content: center;
  }
`;

export const textRaw = styled.h1`
  color: silver;
  font-size: 24px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 100px;
  margin-top: 100px;
  @media screen and (max-width: 960px) {
    max-width: 80%;
    display: flex;
    justify-content: center;
  }
`;
