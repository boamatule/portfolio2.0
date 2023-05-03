import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { Container } from "../../global-styles";

const SkillsSetsContainer = styled(Container)`
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 100px; */
  text-align: left;
  background: transparent;
  color: grey;
  height: 100vh;
  /* width: 50%; */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 50%;
    width: 2px;
    background-color: grey;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-self: flex-end;
    
    &::before {
      display: none;
    }
  }
`;

const SkillsSetWrapper = styled(motion.div)`
  width: 50%;
  align-self: flex-start;

  @media (max-width: 960px) {
    width: 100%;
    max-width: unset;
    margin-bottom: 20px;
    padding: 0 10px;
  }
`;

const SkillsetItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SkillsetImage = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  object-fit: fill;
  margin-right: 20px;
  border-radius: 8px;
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

const SkillsetInfo = styled.div`
  flex: 1;
`;

const SkillsSetsImageWrapper = styled.div`
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

export { SkillsSetsContainer, SkillsSetWrapper, SkillsetItem, SkillsetImage, SkillsetInfo, SkillsSetsImageWrapper };
