/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Img, imgWrapper } from '../../components/HomeInfo/HomeInfoStyles';
import { Container } from '../../global-styles';

const NotFound = () => (
  <Container>
    <imgWrapper>
      <Img src="../../images/notFound.jpeg" />
    </imgWrapper>
  </Container>
);

export default NotFound;
