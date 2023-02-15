import styled from 'styled-components/macro';
import { Container } from '../../global-styles';


export const AboutWrapper = styled(Container)`
  margin-top: 200px;
`;

export const Description = styled.p`
  margin-top: 20px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background: transparent;

  @media screen and (min-width: 960px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px
  } 
`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  margin-bottom: 0px;
  padding: 0px 0px;
  color: #4568dc;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 400;
  font-family: 'Rubik', sans-serif;
  margin-right: auto;
  margin-left: auto;
  padding-right: 4px;
  padding-left: 4px

  @media screen and (min-width: 960px) {
    line-height: 14px;
    font-size: 100;
    letter-spacing: 1px;
    line-height: 30px;
  }
`;
