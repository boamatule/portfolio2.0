import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AboutContainer,
  Title,
  Content,
  H1,
  P,
  Heading,
  Subtitle,
  TextWrapper,
  ArrowForward,
  ArrowRight,
} from './AboutPageStyles';
import { Button, Container } from '../../global-styles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Content>
      <AboutContainer>
        <TextWrapper>
          <Heading>Hi, I'm Boa Matule.</Heading>
          <Subtitle>Daydreamer Full Stack Developer based in beautiful Oslo, Norway.</Subtitle>
          <P>
            A bit obessed with imperfection and passionated about small details like the color of butterflies, i spend
            most of the time wondering about the beauty of nature. I do code when i feel it. Always trying my best to be
            helpful when it's needed. I would rather spend all night working than wake up when i am dreaming at 8 a.m!
            Check some of my work in my portfolio. If you would like to work with me,{' '}
            <a href="/contact" target="_blank" rel="noreferrer">
              just drop me an email
            </a>
            .
          </P>
          <Link to="/portfolio-list">
            <Button onMouseEnter={onHover} primary="true" dark="true">
              Say Hi
              {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
            </Button>
          </Link>
        </TextWrapper>
      </AboutContainer>
    </Content>
  );
};

export default AboutPage;
