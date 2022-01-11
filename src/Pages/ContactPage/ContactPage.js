import React, { useState } from 'react';
import { Span, Button } from '../../global-styles';
import {
  Form,
  TextArea,
  Input,
  Title,
  Description,
  ContactContainer,
  ContactWrapper,
  ContactButtonWrapper,
} from './ContactPageStyles';

const ContactPage = () => {
  const [message, setMessage] = useState({});

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...message }),
    })
      .then(() => alert('Your message as been sent successfully'))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <Title>C o n t a c t.</Title>
        <Description>
          {/* If you would like to get in touch, fill up the form below and i will get back to you as soon as possible. */}
        </Description>
        <Form name="contact" method="POST" onSubmit={handleSubmit}>
          <Input placeholder="Full Name" type="text" name="name" onChange={handleChange} required />
          <Input placeholder="Email Address" type="email" name="email" onChange={handleChange} required />
          <TextArea placeholder="What are we going to build today?" name="message" onChange={handleChange} required />
          <ContactButtonWrapper>
            <Button small fontSmall primary type="submit">
              Send
            </Button>
          </ContactButtonWrapper>
        </Form>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactPage;
