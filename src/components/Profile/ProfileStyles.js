import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: 'row';
  margin-top: 120px;
  padding: 100px 40px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileWrapper = styled.div`
  text-align: center;
  margin: 80px 40px auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
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
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#4568DC')};
  padding-top: 10px;
  /* text-transform: uppercase; */

  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')}; */
  /* margin-left: 5.8rem; */
  @media screen and (max-width: 960px) {
    line-height: 1px;
    font-size: 12px;
    /* margin: 0px 1px auto; */
  }
`;

export const Avatar = styled.div`
  z-index: 1;
  position: relative;
  margin-top: 20px;
  align-items: center;
  display: inline-flex;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media screen and (min-width: 480px) {
    width: 10.6rem;
    height: 10.6rem;
  }
`;

export const TextWrapper = styled.div`
  margin: 80px 40px auto;
  margin-top: 1.9rem;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
    margin: 20px 22px auto;
  }
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  color: grey;
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  margin-left: 0;
  margin-bottom: 20px;
  padding: 0px 14px 0px 14px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 10px 0px 10px;
  }
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  line-height: 1;
  color: grey;
  font-weight: normal;
  letter-spacing: 1px;
  cursor: pointer;
  margin-bottom: 20px;

  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'purple')}; */
`;
