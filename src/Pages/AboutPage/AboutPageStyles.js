import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* border: 2px solid silver; */
  /* background: #0c0c0c; */
  /* background: transparent; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 400px;
  position: relative;
  z-index: 1;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  flex-direction: column;
  z-index: 3;
`;

export const H1 = styled.h1`
  color: silver;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const P = styled.p`
  margin-top: 20px;
  color: silver;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  margin: 16px;
`;
