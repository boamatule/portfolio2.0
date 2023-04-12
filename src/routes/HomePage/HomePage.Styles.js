import styled from 'styled-components';
import { Container } from '../../global-styles';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 400vh;

  @media screen and (max-width: 960px) {
    margin-right: 10px;
    margin-left: 10px;
    height: auto;
  }
`;
