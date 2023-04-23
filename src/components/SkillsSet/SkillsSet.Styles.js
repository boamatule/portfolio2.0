import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { Container } from '../../global-styles';

export const SkillsSetsContainer = styled(Container)`
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background: transparent;
  color: grey;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    /* height: 90vh; */
    align-self: flex-end; /* Add align-self property */
  }
`;

export const SkillsSetWrapper = styled(motion.div)`
  width: 50%;
  align-self: flex-start;
  /* padding: 20px; */
  /* margin: 10px; */
  @media (max-width: 960px) {
    width: 100%;
    /* max-width: unset; */
    margin-bottom: 20px;
    padding: 0 20px;
  }
`;
export const SkillsetItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SkillsetImage = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  object-fit: fill;
  /* object-fit: cover; */
  margin-right: 20px;
  border-radius: 8px; /* Add a border radius for rounded corners */
  display: block;
  border-radius: 10px 10px 0px 0px;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

export const SkillsetInfo = styled.div`
  flex: 1;
`;
export const SkillsSetsImageWrapper = styled.div`
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
  }`;
