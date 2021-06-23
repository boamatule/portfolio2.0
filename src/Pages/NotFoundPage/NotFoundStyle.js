import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  /* padding: 80px 80px 120px 420px;
  @media screen and (max-width: 760px) {
    padding: 0px 40px 40px 40px;
    align-content: center;
  } */
  /* align-content: center;
  max-width: 100%; */
  display: flex;
  justify-content: center;
  ${Container};
`;

export const imgWrapper = styled.div`
  /* margin-bottom: 15px;
  padding-right: 60px;
  padding-left: 60px; */
  /* flex: 1; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* max-width: 50%; */
  /* flex-basis: 50%; */

  @media screen and (max-width: 780px) {
    max-width: 100%;
    /* flex-basis: 100%; */
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  margin-bottom: 15px;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 60px;
  @media screen and (max-width: 780px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
