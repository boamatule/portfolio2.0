import { motion } from "framer-motion";
import React from "react";

import { Button } from "../../global-styles";
import {
  AboutWrapper,
  Description,
  GradientButton,
  Heading,
  Image,
  ImageColumn,
  MozambiqueText,
  SlideAnimation,
  Text,
  TextColumn,
} from './AboutPage.Styles';

const backgroundImage = "../../images/background.svg";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const AboutPage = () => (
  <AboutWrapper>
    <TextColumn>
      <Heading variants={variants} initial="hidden" animate="visible">
        {"Hello, I'm Boa Matule.".split("").map((letter, index) => {
          return (
            <React.Fragment key={index}>
              <motion.span variants={letterVariants}>{letter}</motion.span>
              {index !== "Hello, I'm Boa Matule!".length - 2 && <span>&nbsp;</span>}
            </React.Fragment>
          );
        })}
      </Heading>
      <Description>
        I'm a Full Stack Software Developer with a diverse background spanning from the hospitality industry as a chef to E-commerce as a Co-founder and Manager. 
        <h1 />
        Currently, I'm based in the beautiful city of Oslo, Norway, but I'm originally from the pearl of the Indian Ocean, <MozambiqueText>Mozambique </MozambiqueText>. 
        <h1 />
        I'm passionate about building, architecting, and scaling web and mobile applications using cutting-edge technology stacks. Let's create something amazing together!
      </Description>
      <GradientButton href="/contact_me">
        <Button>
          <Text>Get in Touch</Text>
          <SlideAnimation />
        </Button>
      </GradientButton>
    </TextColumn>
    <ImageColumn backgroundImage={backgroundImage}>
      <Image src="../../images/moi.webp" alt="Boa" />
    </ImageColumn>
  </AboutWrapper>
);

export default React.memo(AboutPage);