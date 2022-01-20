import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const ProjectContainer = styled.div`
  border-radius: 0.75rem /* 12px */;
  padding-top: 0.25rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  padding-bottom: 2rem;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;

  @media screen and (max-width: 960px) {
    /* padding-left: 2rem;
    padding-right: 2rem; */
    /* background: ${({ lightBg }) => (lightBg ? '#101522' : '#101522')};
    background: ${({ lightBg }) => (lightBg ? '#101522' : '#fff')}; */
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: normal;
  justify-content: flex-start;
  text-align: flex-start;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 40px;
  margin-left: 20px;
  justify-content: center;
  text-align: center;
  margin: 100px 20px 40px auto;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};

  @media screen and (max-width: 960px) {
    font-size: 20px;
    font-weight: bold;
    margin-right: 0px;
    margin: 20px 4px auto;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 14px;
  padding-top: 4rem;
  padding-bottom: 0.25rem;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 2fr;
    justify-content: center;
    align-items: center;
    margin: 0px 0px auto;
  }
`;

export const ButtonWrapper = styled.div`
  /* display: flex; */
  cursor: pointer;
  /* justify-content: 'center'; */
  align-items: 'center';
  margin: 0px 100px 10px 4px;

  @media screen and (max-width: 960px) {
    cursor: pointer;
    justify-content: center;
    padding: 0px 0px 0px 0px;
    align-items: center;
    display: flex;
  }
`;

export const SubTitle = styled.p`
  color: silver;
  font-weight: normal;
  margin-top: 10px;
  user-select: none;
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const ButtonText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  line-height: 20px;
  padding-left: 0px;
  text-align: center;
  background: transparent;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  max-width: 100%;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  object-fit: fill;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ProjectLinks = styled.a`
  &:hover {
    color: #01bf71;
  }
`;

export const ProjectListP = styled.p`
  color: silver;
  font-size: 1rem;
  text-align: start;
  margin-top: 14px;
  margin-bottom: 10px;
`;

export const ButtonLink = styled.a`
  border-radius: 4px;
  margin-top: 0px;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};
  display: inline-block;
  width: 40%;
  height: 100%;
  white-space: nowrap;
  /* padding: ${({ big }) => (big ? '12px 46px' : '12px 30px')}; */
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  margin: 0rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'purple' : '#01bf71')};
    color: #010606;
  }
`;

export const buttonLabel = styled.p`
  color: silver;
  font-size: 1rem;
  color: red;
`;

export const CardTitleWrapper = styled.div`
  margin: 40px 0px auto;
  margin-bottom: 10px;
  justify-content: center;
  padding: 0px 0px 10px 10px;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
    margin: 30px 10px auto;
    width: 100%;
  }
`;

export const ProjectWrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: silver;
  @media screen and (max-width: 960px) {
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    height: auto;
  }
`;

export const ProjectDescription = styled.p`
  display: inline-block;
  color: silver;
  padding-top: 10px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  letter-spacing: 1.6px;
  line-height: 20px;
  font-weight: normal;
  background: transparent;
  height: 120px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const BoxStyled = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  &:hover {
    z-index: 99;
  }
`;
