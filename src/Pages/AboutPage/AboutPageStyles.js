import styled from 'styled-components';

export const AboutWrapper = styled.div`
  border-radius: 0.75rem /* 12px */;
  margin-top: 140px;
  /* padding: 0px 40px; */
`;

export const Description = styled.h2`
  margin-top: 20px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 0px 44px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin-top: 0px;
    padding: 0px 20px;
    justify-content: center;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-bottom: 0px;
  padding: 0px 44px;
  color: yellow;

  &::after {
    content: "Hello, I'm Boa Matule.";
    margin-left: 0px;
    top: 0px;
    font-size: 20px;
    color: grey;
    font-weight: bold;
    letter-spacing: 1.6px;
    line-height: 20px;
    border-bottom: 2px solid yellow;
    margin-bottom: 20px;

  }

  @media screen and (max-width: 800px) {
    font-weight: bold;
    font-size: 14px;
    line-height: 1.8rem;
    letter-spacing: 1.1px;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
  }
`;
