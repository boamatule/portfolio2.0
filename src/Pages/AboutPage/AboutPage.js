import React from 'react';
import { Container, Wrapper, Title, Content, H1, P } from './AboutPageStyles';

const AboutPage = () => (
  <Container>
    <Content>
      <Title> about me</Title>
      <H1>I am a Junior Full Stack Developer based in beautiful Oslo, Norway.</H1>
      <P>
        I enjoy learning new skills and using code to build beautiful digital products. When I'm not coding, you will
        find me in the kitchen, swimming or playing Capoeira.
      </P>
    </Content>
  </Container>
);

export default AboutPage;
