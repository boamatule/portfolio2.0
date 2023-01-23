/* eslint-disable react/function-component-definition */
import React from 'react';
import { Glassmorphism } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, Subtitle, ProfileWrapperContainer } = require('./ProfileStyles');

const Profile = () => (
  <ProfileWrapperContainer>
    {/* <ProfileWrapper>
      <Avatar>
        <Img src="../../images/avatar.webp" alt="Boa" />
      </Avatar>
    </ProfileWrapper> */}

    <Heading>Boa Matule</Heading>
    {/* <Location>Oslo - Norway </Location> */}
    <Subtitle>
    I'm a Full Stack Software Developer with background in hospitality's industry as a Chef and E-commerce Manager as a Founder. I'm based in beautiful Oslo, Norway. I'm originally from the pearl of Indian Ocean, Mozambique. I love building, architecting, and scaling web and mobile applications using the latest tech's stack in the market.
    </Subtitle>
    {/* <Subtitle>
      Fullstack Developer with a background in E-commerce and hospitality industry as a Chef and Waiter. I build highly
      scalable web and mobile applications using the latest tools in development. With a focus on end-user usability and
      security, I can help your organization reach high heights with a very efficient approach.
    </Subtitle> */}
  </ProfileWrapperContainer>
);

export default Profile;
