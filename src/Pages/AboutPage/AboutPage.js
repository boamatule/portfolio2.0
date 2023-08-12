import { motion } from "framer-motion";
import React from "react";

import {
  AboutWrapper,
  Description,
  GetInTouch,
  GetInTouchLink,
  Heading,
  Image,
  ImageColumn,
  MozambiqueText,
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

const AboutPage = ({ email, subject, body }) => {
  const customEmail = "boa.matule@gmail.com";
  const handleEmailClick = () => {
    const mailtoLink = `mailto:${customEmail}?subject=${encodeURIComponent("")}&body=${encodeURIComponent("")}`;
    window.location.href = mailtoLink;
  };
  return (
    <AboutWrapper>
      <TextColumn>
        <Heading variants={variants} initial="hidden" animate="visible">
          {/* {"I am Boa Matule.".split("").map((letter, index) => {
            return (
              <React.Fragment key={index}>
                <motion.span variants={letterVariants}>{letter}</motion.span>
                {index !== "I am Boa Matule.".length - 2 && <span>&nbsp;</span>}
              </React.Fragment>
            );
          })} */}
          I am Boa Matule.
        </Heading>
        <Description>
          I'm a Full Stack Software Developer with a diverse background spanning from the hospitality industry as a chef to E-commerce as a Co-founder and Manager.
          <br />
          Currently, I'm based in the beautiful city of Oslo, Norway, but I'm originally from the pearl of the Indian Ocean, <MozambiqueText>Mozambique </MozambiqueText>.
          <br />
          I'm passionate about building, architecting, and scaling web and mobile applications using cutting-edge technology stacks. Let's create something amazing together!
        </Description>
        <GetInTouchLink>
          Let us connect
          <span>&nbsp;</span>
          <GetInTouch
            onClick={handleEmailClick}
            title="Send me an email to get in touch"
            aria-label="Send me an email to get in touch"
          />.
        </GetInTouchLink>
      </TextColumn>
      <ImageColumn backgroundImage={backgroundImage}>
        <Image src="../../images/moi.webp" alt="Boa" title="This is Boa" />
      </ImageColumn>
    </AboutWrapper>
  )
}

export default React.memo(AboutPage);