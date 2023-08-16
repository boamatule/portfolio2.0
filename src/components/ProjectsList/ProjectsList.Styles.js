import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  min-height: 100vh;
  padding: 0em 10em;
  overflow: hidden;
  margin-bottom: -400px;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5em 0em;
    margin-top: -50px;
    margin-bottom: -100px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 2px;
  line-height: 4px;
  color: #999999;
  margin: 20px;
  text-align: center;
  font-family: 'Roboto Mono', monospace; 
  font-style: normal;
  font-weight: 400;
  text-align: left;

`;
export const Heading = styled.h2`
  display: flex;
  font-weight: bold;
  /* letter-spacing: 4px; */
  color: #4568dc;
  font-size: 32px;
  font-family: 'Roboto Mono', monospace;
  padding: 0;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  padding-left: 0;
  text-align: center;
`;

export const GithubLink = styled.a`
  color: #999999;

  &:hover {
    color: #4568dc;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  grid-gap: 14px;
  padding-top: 4rem;
  padding-bottom: 0.25rem;
  text-align: center;
  justify-content: center;
  background: transparent;
  border-radius: 10px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;
    width: 100%;
    padding: 40px 20px;
  }
`;
export const Image = styled(LazyLoadImage)`
  display: block;
  height: 100%;
  width: 100%;
  padding-bottom: 4px;
  background-color: transparent;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const ProjectDescription = styled.p`
  display: inline-block;
  color: #999999;
  margin: 10px;
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  background: transparent;
  height: 120px;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ProjectBox = styled(motion.div)`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  border: 1px solid #86829c;
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
  }
`;

export const SubTitle = styled.p`
  margin-top: 16px;
  color: #999999;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  text-align: left;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 0 20px;
  }
`;

export const ProjectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  margin: 0px;
  top: 0;
`;
