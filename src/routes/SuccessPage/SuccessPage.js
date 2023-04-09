import React from 'react';
import {
  CheckIcon,
  Heading,
  PageWrapper,
  Paragraph,
} from './SuccessPage.Styles';

const SuccessPage = () => (
  <PageWrapper>
    <CheckIcon />
    <Heading>Thank you for getting in touch!</Heading>
    <Paragraph>
      Your message has been sent successfully. I will be back at you as soon as possible.
    </Paragraph>
  </PageWrapper>
);

export default SuccessPage;
