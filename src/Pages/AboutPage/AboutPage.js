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
          <Subtitle>Full Stack Developer based in beautiful Oslo, Norway.</Subtitle>
          <P>
            Former Chef turned into a highly crafted programmer using the latest tools in programming. Trained in
            ReactJs and Ruby on Rails using methods like Agile and Test-Driven Develoment.
            {/* <a href="/contact" target="_blank" rel="noreferrer">
              If can always reach me ust drop me an email
            </a> */}
          </P>
          <Link to="/contact">
            <Button onMouseEnter={onHover} primary="true" dark="true">
              HIRE ME
              {/* {hover ? <ArrowForward /> : <ArrowRight />} */}
            </Button>
          </Link>
        </TextWrapper>
      </AboutContainer>
    </Content>
  );
};

export default AboutPage;
