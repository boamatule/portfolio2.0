import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { Container } from '../../global-styles';

export const ProjectContainer = styled(Container)`
  padding: 0 0rem;
  margin-bottom: 100px;
  background: none;
  top: 40%;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 8px;
  line-height: 4px;
  color: grey;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  color: #4568dc;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 32px;
  font-family: 'Rubik';
  margin-bottom: 30px;
  text-align: left;

  @media screen and (max-width: 960px) {
    font-size: 20px;
    padding: 0 20px;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 14px;
  padding-top: 4rem;
  padding-bottom: 0.25rem;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;

  @media screen and (max-width: 960px) {
    padding: 46px;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  padding-left: 0;
  text-align: center;
  background: transparent;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const GithubLink = styled.a`
  color: grey;

  &:hover {
    color: #4568dc;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 14px;
  padding-top: 4rem;
  padding-bottom: 0.25rem;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const ProjectDescription = styled.p`
  display: inline-block;
  color: grey;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1.6px;
  line-height: 20px;
  font-weight: normal;
  background: transparent;
  height: 120px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0px 20px;
  }
`;

export const Image = styled(LazyLoadImage)`
  display: block;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
export const ProjectBox = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;

  @media screen and (max-width: 960px) {
    border-radius: 10px 10px 0px 0px;
    position: relative;
  }
`;
export const ProjectSubtitle = styled.p`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2.8px;
  line-height: 20px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  background: transparent;
    
  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 20px;
  }
`;
export const BoxStyled = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;

  @media screen and (max-width: 960px) {
    border-radius: 10px 10px 0px 0px;
    position: relative;
    padding: 0px 20px;
  }
`;
export const SubTitle = styled.p`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  /* letter-spacing: 2.8px; */
  font-weight: normal;
  line-height: 22px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 20px;
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
`;


