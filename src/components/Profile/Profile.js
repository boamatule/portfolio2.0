/* eslint-disable react/function-component-definition */
import React from 'react';

const { Heading, Subtitle, ProfileWrapperContainer } = require('./ProfileStyles');

const Profile = () => (
  <ProfileWrapperContainer>
    <Heading>Boa Matule</Heading>
    <Subtitle>
    I'm a Full Stack Software Developer with background in hospitality's industry as a Chef and E-commerce Manager as a Founder. I'm based in beautiful Oslo, Norway. I'm originally from the pearl of Indian Ocean, Mozambique. I love building, architecting, and scaling web and mobile applications using the latest tech's stack in the market.
    </Subtitle>
  </ProfileWrapperContainer>
);

export default Profile;
