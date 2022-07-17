import styled from 'styled-components/macro';

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* margin-bottom: 20px; */

  @media screen and (min-width: 800px) {
    width: 144px;
    height: 144px;
  }
`;

export const Avatar = styled.div`
  z-index: 1;
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
