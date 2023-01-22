import styled from 'styled-components';
import { Container } from '../../global-styles';

export const ProfileWrapperContainer = styled(Container)`
  margin-top: 120px;
  margin-bottom: 20px;
  padding: 0px 48px;
  @media screen and (max-width: 800px) {
    padding: 0px 20px;
  }
`;

export const ProfileWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border-radius: 50%;
  border: 4px solid yellow; */
`;

export const Heading = styled.h1`
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 20px;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 16px;
  color: yellow;
  /* color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 0)' : '#6969FB')}; */
  padding-top: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    line-height: 1.8rem;
    letter-spacing: 1.1px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  position: relative;
  /* margin-top: 20px; */
  margin-bottom: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  /* border: 4px solid yellow;
  border-radius: 50%; */



  /* @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid yellow;

  @media screen and (min-width: 800px) {
    /* width: 120px;
    height: 1120px; */
  }
`;

export const Subtitle = styled.h2`
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
