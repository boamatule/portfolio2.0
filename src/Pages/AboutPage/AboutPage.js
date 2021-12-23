import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../global-styles';
import { Content, Heading, Subtitle, Description, ButtonWrapper } from './AboutPageStyles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container>
      <Content>
        <Heading>About.</Heading>
        <Subtitle>Full Stack Developer based in beautiful Oslo, Norway.</Subtitle>
        <Description>
          Former Chef turned into a highly crafted programmer using the latest tools in programming. Trained in ReactJs
          and Ruby on Rails using methods like Agile and Test-Driven Development.
        </Description>
        <Link to="/contact">
          <ButtonWrapper>
            <Button small fontSmall onMouseEnter={onHover} primary="true" dark="true">
              CONTACT{' '}
            </Button>
          </ButtonWrapper>
        </Link>
      </Content>
    </Container>
  );
};

export default AboutPage;
