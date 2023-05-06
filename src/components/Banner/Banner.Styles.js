import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 6em;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  min-height: 400px;
  width: 100%;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 0 4px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* height: 100%; */
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* color: red; */
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BannerTitle = styled.h1`
  display: flex;
  font-weight: bold;
  padding: 0px 0px;
  color: #4568dc;
  font-size: 32px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
    justify-content: flex-start;
    text-align: flex-start;
    padding: 0px 0px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
    padding: 0px 10px;
  }
`;

export const BannerDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  } 
`;

export const Button = styled.button`
  background-color: #fff;
  color: #222;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
