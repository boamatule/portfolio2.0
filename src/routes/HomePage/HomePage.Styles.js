import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const  HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 120px;
  height: 200vh; /* add this property to set the height of the container to 100% of the viewport height */

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
export const Border = styled.div`
  border: 2px solid #474747;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: absolute;
`;