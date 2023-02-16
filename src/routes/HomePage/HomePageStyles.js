import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const  HomePageWrapper = styled(Container)`
  display: flex;
  margin-top: 100px;

  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
  }
`;