import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
`;

export const Heading = styled.h1`
  font-weight: normal;
  letter-spacing: 2px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 0)' : '#6969FB')};
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
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled(LazyLoadImage)`
  width: 144px;
  height: 144px;
  border-radius: 50%;
  margin-bottom: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

export const Subtitle = styled.h2`
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  text-align: centert;
  background: transparent;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 20px;
    font-weight: normal;
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
