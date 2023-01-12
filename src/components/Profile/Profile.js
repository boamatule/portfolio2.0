/* eslint-disable react/function-component-definition */
import React from 'react';

const {
  Avatar,
  ProfileWrapper,
  Img,
  Heading,
  Location,
  Subtitle,
  ProfileWrapperContainer,
} = require('./ProfileStyles');

const Profile = () => (
  <ProfileWrapperContainer>
    <ProfileWrapper>
      <Avatar>
        <Img src="../../images/avatar.webp" alt="Boa" />
      </Avatar>
    </ProfileWrapper>

    <Heading>Boa Matule ☆ Fullstack Developer</Heading>
    {/* <Location>Oslo - Norway </Location> */}
    <Subtitle>
      Fullstack Developer with a background in E-commerce and hospitality industry as a Chef and Waiter. I build highly
      scalable web and mobile applications using the latest tools in development. With a focus on end-user usability and
      security, I can help your organization reach high heights with a very efficient approach.
    </Subtitle>
  </ProfileWrapperContainer>
);

export default Profile;
