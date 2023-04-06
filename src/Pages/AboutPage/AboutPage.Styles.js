import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../global-styles';


export const AboutWrapper = styled(Container)`
  top: 0;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: auto; */
  /* padding: 0 38px; */
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

export const Image = styled(LazyLoadImage)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  /* border: 0px solid #474747; */
  margin-right: 0.5rem;
  object-fit: fill;
`;


export const ImageColumn = styled(Column)`
  display: flex;
  justify-content: center;
`;

export const TextColumn = styled(Column)`
  padding: 0 0px;
  justify-content: flex-start;
`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  padding: 0px 0px;
  color: #4568dc;
  font-size: 200;
  margin-bottom: 60px;
  font-family: 'Rubik', sans-serif;
`;

export const Description = styled.p`
  margin-top: 16px;
  color: #474747;
  font-size: 16px;
  letter-spacing: 2.8px;
  line-height: 20px;
  font-weight: normal;
  margin-bottom: 100px;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: flex-start;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  } 
`;






