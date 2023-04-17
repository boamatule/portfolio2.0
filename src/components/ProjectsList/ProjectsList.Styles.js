import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../global-styles';

const padding = css`
  padding: 0 2rem;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const ProjectContainer = styled(Container)`
  ${padding}
  margin-bottom: 60px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 4px;
  color: grey
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 14px;
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
  font-family: 'Rubik', sans-serif;
  margin-bottom: 60px;

  @media screen and (max-width: 960px) {
    font-size: 28px;
    padding: 0px 20px;
  }
`;

export const CardWrapper = styled.div`
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
    padding: 4
    6px;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  padding-left: 0;
  text-align: center;
  background: transparent;
  /* color: grey; */

  @media screen and (max-width: 960px) {
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
    margin: 0px 0px;
    width: 100%;
    z-index: -1;
  }
`;

export const ProjectDescription = styled.p`
  display: inline-block;
  /* color: #474747; */
  color: grey;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1.6px;
  line-height: 20px;
  font-weight: normal;
  background: transparent;
  height: 120px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    padding: 0px 20px;
  }
`;

// Styled component for displaying images with lazy loading
export const Image = styled(LazyLoadImage)`
  display: block;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  object-fit: fill;
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

// Styled component for wrapping project boxes
export const ProjectBox = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;

  @media screen and (max-width: 960px) {
    border-radius: 10px 10px 0px 0px;
    position: relative;
  }
`;

// Styled component for displaying project subtitles
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
    font-size: 16px;
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