import React from 'react';
import { ErrorContainer, TextRaw } from './NotFound.Style';

const NotFound = () => {
  return (
    <ErrorContainer>
      <TextRaw>404: Page Not Found ;-( The page you are looking for doesn't exist or has been moved.</TextRaw>
    </ErrorContainer>
  );
}

export default React.memo(NotFound);