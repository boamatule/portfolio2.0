import React from 'react';

import { Button } from '../../global-styles';
import {
  BannerContainer,
  BannerDescription,
  BannerText,
  BannerTitle
} from './Banner.Styles';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>Boa Matule</BannerTitle>
      <BannerText>Full Stack Developer</BannerText>
      <BannerDescription>Full Stack Developer
      </BannerDescription>
      <a href="/contact_me">
        <Button >Get in Touch</Button>
      </a>
    </BannerContainer>
  )
}
export default Banner;