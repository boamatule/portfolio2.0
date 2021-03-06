import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Glassmorphism } from '../../global-styles';
import { Heading, Description, ButtonWrapper, AboutContainer } from './AboutPageStyles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container>
      <AboutContainer>
        <Heading>a b o u t.</Heading>
        <Glassmorphism>
          <Description>
            Full Stack Developer based in beautiful Oslo, Norway. Former Chef turned into a highly crafted programmer
            using the latest tools in programming. Trained in ReactJs and Ruby on Rails using methods like Agile and
            Test-Driven Development.
          </Description>
        </Glassmorphism>
        <Link to="/contact">
          <ButtonWrapper>
            <Button small fontSmall onMouseEnter={onHover} primary="true" dark="true">
              Get in touch{' '}
            </Button>
          </ButtonWrapper>
        </Link>
      </AboutContainer>
    </Container>
  );
};

export default AboutPage;
