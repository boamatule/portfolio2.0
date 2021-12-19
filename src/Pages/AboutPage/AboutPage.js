import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../global-styles';
import { Content, Heading, Subtitle, TextWrapper, Description } from './AboutPageStyles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container>
      <Content>
        <TextWrapper>
          <Heading>Hi, I'm Boa Matule.</Heading>
          <Subtitle>Full Stack Developer based in beautiful Oslo, Norway.</Subtitle>
          <Description>
            Former Chef turned into a highly crafted programmer using the latest tools in programming. Trained in
            ReactJs and Ruby on Rails using methods like Agile and Test-Driven Develoment.
          </Description>
          <Link to="/contact">
            <Button small fontSmall onMouseEnter={onHover} primary="true" dark="true">
              Let me your valuable asset{' '}
            </Button>
          </Link>
        </TextWrapper>
      </Content>
    </Container>
  );
};

export default AboutPage;
