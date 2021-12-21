import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin-top: 80px;
  padding: 100px 40px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProfileWrapper = styled.div`
  /* display: grid; */
  flex-direction: row;
  /* width: 100%; */
  height: 50%;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
`;

export const Avatar = styled.div`
  z-index: 1;
  position: relative;
  margin-top: 80px;
  align-items: center;
  display: inline-flex;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid purple;

  @media screen and (min-width: 480px) {
    width: 10.6rem;
    height: 10.6rem;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  margin-top: 1.9rem;
  align-items: center;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 768px) {
    margin-top: 1.9rem;
  }
`;

export const Heading = styled.h3`
  font-weight: bold;
  letter-spacing: 1;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #eee142;
  /* font-weight: bold; */
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')}; */
  /* margin-left: 5.8rem; */
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1rem;
  line-height: 1.5rem;
  color: grey;
  font-weight: normal;
  margin-left: 0.85rem;
  /* max-width: 440px;
  margin-bottom: 35px;
  display: flex;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 1.15;
  justify-content: center;
  align-items: flex-start;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')}; */
`;

export const Location = styled.h4`
  /* margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.5;
  letter-spacing: 10;
  justify-content: center;
  align-items: center; */
  font-size: 1.1rem;
  line-height: 1;
  color: grey;
  font-weight: none;
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'purple')}; */
`;
