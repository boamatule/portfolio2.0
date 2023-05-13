import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { Container } from '../../global-styles';

export const ProjectContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: auto;
  background: none;
  padding: 8em 4em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0em 1em;
    margin-bottom: 60px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 2px;
  line-height: 4px;
  color: grey;
  margin-bottom: 24px;
  text-align: center;
  font-family: Rubik;
`;

export const Heading = styled.h1`
  display: flex;
  font-weight: bold;
  padding: 0px 0px;
  color: #4568dc;
  font-size: 32px;
  justify-content: flex-start;
  text-align: flex-start;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    justify-content: left;
    text-align: left;
    padding: 0px 10px;
  }
`;

// export const CardWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   align-items: center;
//   grid-gap: 14px;
//   padding-top: 4rem;
//   padding-bottom: 0.25rem;
//   text-align: center;
//   justify-content: center;

// `;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  padding-left: 0;
  text-align: center;
`;

export const GithubLink = styled.a`
  color: grey;

  &:hover {
    color: #4568dc;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 14px;
  padding-top: 4rem;
  padding-bottom: 0.25rem;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;
    width: 100%;
    z-index: -1;
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
export const ProjectDescription = styled.p`
  display: inline-block;
  color: grey;
  padding: 10px;
  font-size: 14px;
  /* letter-spacing: 1.6px; */
  line-height: 20px;
  font-weight: normal;
  background: transparent;
  height: 120px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    /* padding: 4px 4px; */
  }
`;

export const ProjectBox = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;

  @media screen and (max-width: 768px) {
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
    
  @media screen and (max-width: 768px) {
    font-size: 14px;
    /* padding: 0px 20px; */
  }
`;
export const BoxStyled = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;

  @media screen and (max-width: 768px) {
    border-radius: 10px 10px 0px 0px;
    position: relative;
    padding: 0px 20px;
  }
`;
export const SubTitle = styled.p`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    padding: 10px;
  } 
`;


