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
        <br />
        Currently, I'm based in the beautiful city of Oslo, Norway, but I'm originally from the pearl of the Indian Ocean, <MozambiqueText>Mozambique </MozambiqueText>.
        <br />
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
      <Image src="../../images/moi.webp" alt="Boa" title="This is Boa" />
    </ImageColumn>
  </AboutWrapper>
);

export default React.memo(AboutPage);

// import React from 'react';
// import styled from 'styled-components';

// // Styles for the components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f2f2f2;
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   color: #666;
//   margin-bottom: 40px;
// `;

// const Button = styled.button`
//   padding: 12px 24px;
//   font-size: 16px;
//   color: #fff;
//   background-color: #4568dc;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #1237a3;
//   }
// `;

// const LandingPage = () => {
//   return (
//     <Container>
//       <Title>Welcome to My Landing Page</Title>
//       <Subtitle>Start exploring the amazing features!</Subtitle>
//       <Button>Get Started</Button>
//     </Container>
//   );
// };

// export default LandingPage;

