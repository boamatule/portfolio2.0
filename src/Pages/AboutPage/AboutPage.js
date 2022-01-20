import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glassmorphism } from '../../global-styles';
import { Heading, Description, ButtonWrapper, AboutContainer } from './AboutPageStyles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <AboutContainer>
      <Heading>a b o u t m e </Heading>
      <Glassmorphism>
        <Description>
          Hi there! I'm Boa. I am a Fullstack Developer with a background in E-commerce and hospitality industry both as
          a Chef and Waiter. 
        </Description>
        <Description>
          I am based in beautiful Oslo where I have been living for the last 7 years after 6 years in Sweden. I'm
          originally from Mozambique and I have lived in Canada and Nambia as well. 
        </Description>
        <Description>
          I'm an avid learner with an interest in loads of fields. Just a curious mind. Lately, I am been focusing on
          E-commerce, Fintech, Cyber Security.
        </Description>
        <Description>
          As a passionate Chef, sharing a good homemade meal with friends it's always a pleasure.
        </Description>
        <Description>
          Currently available to join any exciting project where my skills can be used to help achieve some of your
          goals.
        </Description>
      </Glassmorphism>
      <Link to="/contact">
        <ButtonWrapper>
          <Button small fontSmall onMouseEnter={onHover} primary="true" dark="true">
            Get in touch
          </Button>
        </ButtonWrapper>
      </Link>
    </AboutContainer>
  );
};

export default AboutPage;
