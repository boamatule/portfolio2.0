import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const  HomeContainer = styled(Container)`
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px; 
  row-gap: 40px; 
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
  }
`;

export const  HomeWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 60px;
`;