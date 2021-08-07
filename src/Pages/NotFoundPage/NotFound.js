import React from 'react';
import { Img, imgWrapper, ErrorContainer } from './NotFoundStyle';
import { Container } from '../../global-styles';

const NotFound = () => (
  <imgWrapper>
    <ErrorContainer>
      <Img src="../../images/404.png" alt="Page Not Found" />
    </ErrorContainer>
  </imgWrapper>
);

export default NotFound;
