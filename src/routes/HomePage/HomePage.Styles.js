import styled from "styled-components/macro";
import { Container } from "../../global-styles";

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 960px) {
    margin: 0 auto;
    padding: 0 4px;
  }
`;

export const HomeWrapper = styled.div`
  margin-top: 80px;
`;

export const ProjectsListContainer = styled.div`
  margin-top: auto;
  margin-bottom: 60px;
  justify-content: space-between;
`;

