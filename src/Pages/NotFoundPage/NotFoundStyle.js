import styled from 'styled-components/macro';
import { Container } from '../../global-styles';

export const ErrorContainer = styled(Container)`
  padding-top: 100px;
  margin-left: 300px;
  /* @media screen and (max-width: 760px) {
    display: flex;
    align-items: center;
    align-content: center;
  } */
  ${Container};
`;

export const imgWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  /* margin-top: 100px; */
  /* padding: 0px 0px 0px 0px; */

  @media screen and (max-width: 760px) {
    display: flex;
    /* align-items: center; */
    /* align-content: center; */
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  @media screen and (max-width: 780px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
