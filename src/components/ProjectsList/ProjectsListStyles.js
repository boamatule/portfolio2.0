import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../global-styles';

export const ProjectContainer = styled(Container)`
  margin-top: 200px;

  @media screen and (max-width: 960px) {
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 4px;
  color: #4568dc;
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
  margin-bottom: 0px;
  padding: 0px 0px;
  color: #4568dc;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 400;
  font-family: 'Rubik', sans-serif;

  @media screen and (max-width: 960px) {
    padding-right: 4px;
    padding-left: 4px
    font-size: 14px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  }
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px 0px;

  @media screen and (max-width: 960px) {
    cursor: pointer;
    justify-content: center;
    padding: 0px 0px 0px 0px;
    align-items: center;
    display: flex;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 12px;
  padding-left: 0px;
  text-align: center;
  background: transparent;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const ProjectDescription = styled.p`
  display: inline-block;
  color: grey;
  padding-top: 10px;
  padding-bottom: 10px;
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

export const Image = styled(LazyLoadImage)`
  display: block;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  object-fit: fill;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    display: block;
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export const BoxStyled = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  &:hover {
    z-index: 1;
  }

  @media screen and (max-width: 960px) {
    border-radius: 10px 10px 0px 0px;
    position: relative;
    &:hover {
      z-index: 1;
    }
  }
`;

export const SubTitle = styled.p`
  margin-top: 20px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background: transparent;
    
  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px
    font-size: 140px;
    justify-content: center;
    align-items: center;
  }
`;
