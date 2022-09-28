import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../global-styles';

export const ProfileWrapperContainer = styled(Container)`
  margin-top: 120px;
  margin-bottom: 60px;
  padding: 0px 40px;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  text-align: center;
  margin-bottom: 0px;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h2`
  font-weight: normal;
  letter-spacing: 2px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 0)' : '#6969FB')};
  padding-top: 10px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    line-height: 1.8rem;
    letter-spacing: 1.1px;
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: 20px;
  align-items: center;
  display: inline-flex;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Img = styled(LazyLoadImage)`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
  @media screen and (min-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 10px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  text-align: flex-start;
  margin-bottom: 20px;
  background: transparent;
  /* padding: 0px 40px; */

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin-top: 20px;
    justify-content: flex-start;
    text-align: flex-start;
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
