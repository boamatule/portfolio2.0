import React from 'react';
import { Container, Form, TextArea, Input, Title, Button } from './ContactPageStyles';

const ContactPage = () => (
  // const [emailAddress, setEmailAddress] = useState('');
  // const [password, setPassword] = useState('')

  <Container>
    <Form onSubmit="" method="POST">
      <Title>Let's get in touch</Title>
      <Input
        placeholder="Your Name"
        type="text"
        // value={emailAddress}
        // onChange={({ target }) => setEmailAddress(target.value)}
      />
      <Input
        placeholder="Your Email"
        type=""
        // value={emailAddress}
        // onChange={({ target }) => setEmailAddress(target.value)}
      />
      <TextArea placeholder="What are we going to build today?" type="message" />
      <Button type="submit">Send</Button>
    </Form>
  </Container>
);

export default ContactPage;
