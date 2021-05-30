import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Content, H1, P, ArrowForward, ArrowRight } from './AboutPageStyles';
import { Button, Container } from '../../global-styles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Content>
      <Container>
        <Title>Hi, I'm Boa Matule.</Title>
        <H1>Daydreamer Full Stack Developer based in beautiful Oslo, Norway.</H1>
        <P>
          A bit obessed with imperfection and passionated about small details like the color of butterflies, i spend
          most of the time wondering about the beauty of nature. I do code when i feel it. Always trying my best to be
          helpful when it's needed. I would rather spend all night working than wake up when i am dreaming at 8 a.m!
          Check some of my work in my portfolio. If you would like to work with me, just drop me an email.
        </P>
        <Link to="/portfolio-list">
          <Button onMouseEnter={onHover} primary="true" dark="true">
            Say Hi
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </Link>
      </Container>
    </Content>
  );
};

export default AboutPage;
