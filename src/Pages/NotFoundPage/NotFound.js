import { ErrorContainer, TextRaw } from './NotFoundStyle';

const NotFound = () => (
  <ErrorContainer>
    <TextRaw>404: Page Not Found ;-( The page you are looking for doesn't exist or has been moved.</TextRaw>
  </ErrorContainer>
);

export default NotFound;
