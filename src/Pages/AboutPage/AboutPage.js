import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../global-styles';
import { Heading, Description, ButtonWrapper, AboutContainer } from './AboutPageStyles';

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <AboutContainer>
      <Heading>a b o u t m e </Heading>
      <Description>
        Highly crafted Fullstack Developer with a background in E-commerce and hospitality industry as a Chef.
        <br />I am based in beautiful Oslo where I have been living for the last 7 years after 6 years in Sweden. I'm
        originally from Mozambique and I have lived in Canada and Nambia as well.  I'm an avid learner with an interest
        in loads of fields. <br />
        Just a curious mind. Lately, I am been focusing on E-commerce, Fintech, Cyber Security. Currently available to
        join any exciting project where my skills can be used to help achieve some of your goals.
        <br />
        {/* <p>Fell free to get in touch here</p> */}
      </Description>

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
