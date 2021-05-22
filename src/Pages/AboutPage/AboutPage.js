import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Content, H1, P, ArrowForward, ArrowRight } from './AboutPageStyles';
import { Button } from '../../global-styles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container>
      <Content>
        <Title>Boa Matule</Title>
        <H1>Daydreamer Full Stack Developer based in beautiful Oslo, Norway.</H1>
        <P>
          A bit obessed with imperfection and passionated about small details like the color of butterflies, i spend
          most of the time wondering about the beauty of nature. I do code when i feel it. Always trying my best to be
          helpful when it's needed. I would rather spend all night working than wake up when i am dreaming at 8 a.m!
        </P>
        <Link to="/contact">
          <Button onMouseEnter={onHover} primary="true" dark="true">
            Get in touch
            {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </Link>
      </Content>
    </Container>
  );
};

export default AboutPage;
