import styled from 'styled-components/macro';
import { Container } from '../../global-styles';


export const AboutWrapper = styled(Container)`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;


export const Column = styled.div`
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 120px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid grey;
  margin-right: 0.5rem;
`;


export const ImageColumn = styled(Column)`
  display: flex;
  justify-content: center;
`;

export const TextColumn = styled(Column)`
  padding: 0 0px;
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


  &::after {
    content: "";
    background: grey;
    height: 0.3em;
    width: 24%;
    display: block;
    margin-top: -0.4rem;
    margin-left: -0.1%;
    position: absolute;
    z-index: -1;

    @media screen and (max-width: 960px) {
      width: 56%;
    }
  }

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






