import styled from 'styled-components';
import { Container } from '../../global-styles';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
  height: 200vh;

  @media screen and (max-width: 960px) {
    margin-right: 10px;
    margin-left: 10px;
    height: 400vh;
  }
`;

export const HomeWrapper = styled.div`
  margin: 80px 0 100px;
`;

export const ProjectsListContainer = styled.div`
  margin: auto 0 60px;
  display: flex;
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
