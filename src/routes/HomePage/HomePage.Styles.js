import styled from 'styled-components';
import { Container } from '../../global-styles';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  @media screen and (max-width: 960px) {
    margin-right: 10px;
    margin-left: 10px;
    height: 100vh;
  }
`;
export const AboutWrapper = styled.div`
  background-color: none;
  color: #ffffff;
  padding: 16px;
  border-radius: 4px;
`;

export const ProjectsListWrapper = styled.div`
  background-color: none;
  color: #000000;
  padding: 16px;
  border-radius: 4px;
`;

export const ContactPageWrapper = styled.div`
  background-color: none;
  color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  top: 100vh;
`;
