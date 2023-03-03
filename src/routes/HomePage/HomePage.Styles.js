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

  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
    height: 100vh;
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

export const Moon = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #fff;
  box-shadow: 
    -10px -10px 0 0 #fff,
    30px 30px 0 0 #fff,
    50px -10px 0 0 #fff,
    90px 90px 0 0 #fff,
    30px 110px 0 0 #fff,
    -10px 70px 0 0 #fff,
    -10px -10px 0 0 #fff,
    -10px 30px 0 0 #bbb;
`;