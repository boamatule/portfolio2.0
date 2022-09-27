import styled from 'styled-components';

export const AboutWrapper = styled.div`
  border-radius: 0.75rem /* 12px */;
  margin-top: 100px;
  padding-bottom: 0.25rem /* 4px */;
  /* padding-bottom: 2rem; */
  padding: 40px 40px;

  @media screen and (max-width: 800px) {
    padding: 10px 10px;
  }
`;

export const Description = styled.h3`
  margin-top: 0px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 0px 40px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 20px;
  letter-spacing: 20px;
  font-size: 20px;
  justify-content: flex-start;
  padding: 0px 40px;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};

  @media screen and (max-width: 800px) {
    font-size: 16px;
    font-weight: bold;
    margin: 100px 0px auto;
  }
`;
