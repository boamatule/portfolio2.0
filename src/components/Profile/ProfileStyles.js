import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ProfileWrapperContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  /* width: 100%; */
`;
export const ProfileWrapperRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: 0px 0px auto;
    grid-template-columns: 1fr;
  }
`;

export const ProfileWrapperColumn = styled.div`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
;
  
  @media screen and (max-width: 800px) {
    justify-content: cente
    align-items: center;
    margin: 40px 22px auto;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 1rem;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 1.6rem;
    letter-spacing: 1.1px;
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  /* z-index: 1; */
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

export const Img = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media screen and (min-width: 800px) {
    width: 144px;
    height: 144px;
  }
`;

export const TextWrapper = styled.div`
  margin: 120px 0px auto;
  /* margin-top: 120px; */
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 22px auto;
  }
`;

export const Subtitle = styled.p`
  /* margin-top: 20px;
  color: grey;
  font-size: 16px;
  letter-spacing: 1.5px;
  line-height: 20px;
  font-weight: normal;
  text-align: flex-start; */
  /* justify-content: center; */
  /* margin-left: 0;
  margin-bottom: 20px;
  padding: 0px 14px 0px 14px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 10px 0px 10px;
  } */

  margin-top: 20px;
  padding-bottom: 10px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  /* margin-left: 10px;
  margin-right: 10px; */
  background: transparent;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  line-height: 1;
  color: grey;
  font-weight: normal;
  letter-spacing: 1px;
  /* cursor: pointer; */
  margin-bottom: 20px;
`;
