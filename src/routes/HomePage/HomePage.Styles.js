import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const  HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  /* margin: 80px; */
  margin-bottom: 240px; /* Add margin-bottom to create spacing */

  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
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
