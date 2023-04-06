import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const  HomeContainer = styled(Container)`
  /* display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px; 
  row-gap: 40px; 
  justify-content: center;
  align-items: center;
  margin-top: 100px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  margin-top: 300px;
  margin-bottom: 80px;
  
  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
    /* height: 100vh; */
  }
`;

export const  HomeWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const ProjectsListContainer = styled.div`
  margin-top: auto; 
  margin-bottom: 60px;
  justify-content: space-between; 
`;
