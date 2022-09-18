import styled from 'styled-components';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 200px 0px 200px 0px;
  ${Container};
`;

export const TextRaw = styled.h1`
  color: silver;
  font-size: 24px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;