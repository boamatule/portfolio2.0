import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 200px 0px 200px 0px;
`;

export const TextRaw = styled.h1`
  color: grey;
  font-size: 20px;
  letter-spacing: 1.6px;
  line-height: 16px;
  font-weight: normal;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 14px;
  }
`;
