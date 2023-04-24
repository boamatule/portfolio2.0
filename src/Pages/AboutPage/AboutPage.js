import React from 'react';
import {
  AboutWrapper,
  Description,
  Heading,
  Image,
  ImageColumn,
  TextColumn
} from './AboutPage.Styles';

const backgroundImage = "../../images/background.svg";

const AboutPage = () => (
<AboutWrapper>
  <TextColumn>
    <Heading>I'm Boa Matule.</Heading>
    <Description>
      I'm a Full Stack Software Developer
      with a background in the hospitality industry as a chef and
      E-commerce Manager.
      I'm based in beautiful Oslo, Norway.
      I'm originally from the pearl of the Indian Ocean, Mozambique.
      I love building, architecting, and scaling web and mobile applications using the latest tech stack in the market.
    </Description>
  </TextColumn>
  <ImageColumn backgroundImage={backgroundImage}>
    <Image src="../../images/moi.webp" alt="Boa" loading="lazy" />
  </ImageColumn>
</AboutWrapper>

);

export default React.memo(AboutPage);