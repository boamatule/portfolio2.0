import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-decoration: royalblue; */
  margin-top: 80px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const imgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  border: 2px solid purple;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  /* vertical-align: middle; */
  /* display: inline-block; */
`;

export const Heading = styled.h1`
  /* margin-bottom: 24px; */
  font-size: 48px;
  line-height: 1.5;
  letter-spacing: 10;
  justify-content: center;
  align-items: center;
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'purple')}; */
`;

export const Subtitle = styled.h3`
  /* max-width: 440px; */
  /* margin-bottom: 35px; */
  display: flex;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 1.15;
  justify-content: center;
  align-items: center;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;
