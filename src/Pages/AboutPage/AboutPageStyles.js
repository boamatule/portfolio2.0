import styled from 'styled-components';
import { Container } from '../../global-styles';


export const AboutWrapper = styled(Container)`
  margin-top: 140px;
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
  padding: 0px 44px;

  @media screen and (min-width: 600px) {
    max-width: 100%;
    /* margin-right: auto;
    margin-left: auto; */
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
    max-width: 100%;
    padding-right: 4px;
    padding-left: 4px
}
@media screen and (min-width: 769px) and (max-width:1024px) {
  /* max-width: 1200px; */
}
@media screen and (min-width: 1025px) {
  /* max-width: 1400px; */
} 
`;

export const Heading = styled.h1`
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 20px;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 20px;
  margin-bottom: 0px;
  padding: 0px 44px;
  color: yellow;

  @media screen and (min-width: 600px) {
    max-width: 100%;
    /* margin-right: auto;
    margin-left: auto; */
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
    max-width: 100%;
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
  } 
`;
