import React from 'react';
import { Img, imgWrapper, ErrorContainer } from './NotFoundStyle';
import { Container } from '../../global-styles';

const NotFound = () => (
  <imgWrapper>
    <ErrorContainer>
      <Img src="../../images/404.svg" />
    </ErrorContainer>
  </imgWrapper>
);

export default NotFound;
