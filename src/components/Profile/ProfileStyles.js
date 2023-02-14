import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ProfileWrapperContainer = styled(Container)`
`;


export const Heading = styled.h1`
  padding: 0px 40px;
  font-weight: bold;
  letter-spacing: 1.6px;
  line-height: 20px;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 20px;
  color: #4568dc;
  margin-bottom: 40px;
  font-size: 400;
  font-family: 'Rubik', sans-serif;

  /* color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 0)' : '#6969FB')}; */

  @media screen and (max-width: 800px) {
    font-size: 12px;
    line-height: 1.8rem;
    letter-spacing: 1.1px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 40px;
  align-items: flex-start;
  text-align: flex-start;
  justify-content: flex-start;

  @media screen and (min-width: 960px) {
    position: relative;
    margin-bottom: 40px;
    align-items: flex-start;
    text-align: flex-start;
    justify-content: flex-start;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid grey;
  margin-right: 0.5rem;


  @media screen and (min-width: 960px) {
    /* width: 60px;
    height: 60px;
    border-radius: 50%; */
  }
`;

export const Subtitle = styled.p`
  font-size: 106px;
  /* letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  text-align: flex-start;
  background: transparent;
  font-family: 'Rubik', sans-serif; */

  @media screen and (max-width: 960px) {
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 20px;
  }
`;