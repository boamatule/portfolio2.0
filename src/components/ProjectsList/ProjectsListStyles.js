import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../global-styles';

export const ProjectContainer = styled(Container)`
  margin-top: 140px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 4px;
  line-height: 4px;
  justify-content: flex-start;
  text-align: flex-start;
  color: yellow;
  margin-bottom: 24px;
  /* color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')}; */

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 2px;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 20px;
  margin-bottom: 0px;
  padding: 0px 44px;
  color: yellow;

  @media screen and (min-width: 600px) {
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
    padding-right: 4px;
    padding-left: 4px
  }
@media screen and (min-width: 769px) and (max-width:1024px) {
  /* max-width: 1200px; */
}
@media screen and (min-width: 1025px) {
  /* max-width: 1400px; */
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
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin: 0px 0px auto;
  }
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  justify-content: 'space-between';
  align-items: 'center';
  margin: 0px 0px 10px 0px;
  @media screen and (max-width: 800px) {
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
  color: #f5f5f5;
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
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ProjectLinks = styled.a`
  &:hover {
    color: #01bf71;
  }
`;

export const ButtonLink = styled.a`
  border-radius: 4px;
  margin-top: 0px;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};
  display: inline-block;
  width: 40%;
  height: 100%;
  white-space: nowrap;
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
  color: grey;
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

  @media screen and (max-width: 800px) {
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
  @media screen and (max-width: 800px) {
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    height: auto;
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

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const BoxStyled = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  &:hover {
    z-index: 1;
  }

  @media screen and (max-width: 800px) {
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
  padding: 0px 44px;
    
  @media screen and (min-width: 600px) {
    max-width: 100%;
    /* margin-right: auto;
    margin-left: auto; */
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
  max-width: 100%;
  padding-right: 4px;
  padding-left: 4px
}
@media screen and (min-width: 769px) and (max-width:1024px) {
  /* max-width: 1200px; */
}
@media screen and (min-width: 1025px) {
  /* max-width: 1400px; */
} 

`;
