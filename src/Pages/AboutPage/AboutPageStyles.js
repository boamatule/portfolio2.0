import styled from 'styled-components/macro';
import { Container } from '../../global-styles';


export const AboutWrapper = styled(Container)`

`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  margin-bottom: 40px;
  padding: 0px 0px;
  color: #4568dc;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 400;
  font-family: 'Rubik', sans-serif;
  margin-right: auto;
  margin-left: auto;
  padding-right: 4px;
  padding-left: 4px;
  margin-bottom: 20px;

  @media screen and (min-width: 960px) {
    padding-right: 4px;
    padding-left: 4px
    font-size: 14px;
  }
`;

export const Description = styled.p`
  color: grey;
  font-size: 16px;
  letter-spacing: 2.8px;
  line-height: 20px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;


  @media screen and (min-width: 960px) {
    font-size: 14px;

  } 
`;

