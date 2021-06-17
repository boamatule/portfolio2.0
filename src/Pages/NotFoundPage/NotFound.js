import React from 'react';
import { Img, imgWrapper } from './NotFoundStyle';
import { Container } from '../../global-styles';

const NotFound = () => (
  <imgWrapper>
    <Container>
      <Img src="../../images/404.svg" />
    </Container>
  </imgWrapper>
);

export default NotFound;
