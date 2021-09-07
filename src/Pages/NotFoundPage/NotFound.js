import React from 'react';
import { ErrorContainer, textWrapper, textRaw } from './NotFoundStyle';
import { Container } from '../../global-styles';

const NotFound = () => (
  <ErrorContainer>
    <textRaw>404: Page Not Found ;-( The page you are looking for doesn't exist or has been moved.</textRaw>
  </ErrorContainer>
);

export default NotFound;
