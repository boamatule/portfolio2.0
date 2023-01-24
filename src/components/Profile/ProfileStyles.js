import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../global-styles';

export const ProfileWrapperContainer = styled(Container)`
`;

export const ProfileWrapper = styled(Link)`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Heading = styled.h1`
  padding: 0px 30px;
  font-weight: bold;
  letter-spacing: 1.6px;
  line-height: 20px;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 20px;

  color: yellow;
  /* color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 0)' : '#6969FB')}; */
  /* padding-top: 10px; */
  margin-bottom: 20px;
  

  /* @media screen and (max-width: 800px) {
    font-size: 12px;
    line-height: 1.8rem;
    letter-spacing: 1.1px;
    justify-content: center;
    align-items: center;
    text-align: center;
  } */
`;

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 40px;
  align-items: flex-start;
  text-align: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 60px;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid yellow;

  @media screen and (max-width: 960px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`;

export const Subtitle = styled.p`
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  text-align: flex-start;
  background: transparent;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 20px;
  }
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  letter-spacing: 2px;
  line-height: 20px;
  color: grey;
  font-weight: normal;
  margin-bottom: 0px;
`;
