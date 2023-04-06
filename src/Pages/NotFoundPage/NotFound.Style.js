import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 200px 0px 200px 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;
  }
`;

export const TextRaw = styled.h1`
  color: grey;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    margin: 20px 20px;
  }
`;
