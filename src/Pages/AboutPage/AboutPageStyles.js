import styled from 'styled-components/macro';
import { Container } from '../../global-styles';


export const AboutWrapper = styled(Container)`

`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  padding: 0px 0px;
  color: #4568dc;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 200;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2.8px;
  line-height: 20px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin-bottom: 40px;
    
  @media screen and (max-width: 960px) {
    font-size: 14px;
  } 
`;

