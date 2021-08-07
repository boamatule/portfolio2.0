import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  ${Container};
`;

export const imgWrapper = styled.div`
  @media screen and (max-width: 960px) {
    max-width: 80%;
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 100px;
  margin-top: 100px;
  @media screen and (max-width: 960px) {
    max-width: 80%;
    display: flex;
    justify-content: center;
  }
`;
