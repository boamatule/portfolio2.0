import styled from 'styled-components/macro';

export const imgWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;

export const Img = styled.img`
  width: auto;
  height: auto;
`;
