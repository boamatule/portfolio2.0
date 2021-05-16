import React from 'react';
import { Container, Form, TextArea, Input, Title, Button, ArrowForward, ArrowRight } from './ContactPageStyles';

const ContactPage = () => (
  // const [emailAddress, setEmailAddress] = useState('');
  // const [password, setPassword] = useState('')

  <Container>
    <Form onSubmit="" method="POST">
      <Title>Let's get in touch!</Title>
      <Input
        placeholder="Enter Your Name"
        type="text"
        required
        // value={emailAddress}
        // onChange={({ target }) => setEmailAddress(target.value)}
      />
      <Input
        placeholder="Enter Your Email Address"
        type="text"
        required
        // value={emailAddress}
        // onChange={({ target }) => setEmailAddress(target.value)}
      />
      <TextArea placeholder="What are we going to build today?" type="message" />
      <Button type="submit" disabled="isInvalid">
        SUBMIT
      </Button>
    </Form>
  </Container>
);

export default ContactPage;
