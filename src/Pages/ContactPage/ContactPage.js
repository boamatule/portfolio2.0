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
  ButtonText,
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
        <Title>L e t's G e t In Touch </Title>
        <Form name="contact" method="POST" onSubmit={handleSubmit} action="/success.js/">
          <Input placeholder="Full Name" type="text" name="name" onChange={handleChange} required />
          <Input placeholder="Email Address" type="email" name="email" onChange={handleChange} required />
          <TextArea placeholder="What are we going to build today?" name="message" onChange={handleChange} required />
          <ContactButtonWrapper>
            <Button small fontSmall primary type="submit">
              <ButtonText>Submit</ButtonText>
            </Button>
          </ContactButtonWrapper>
        </Form>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactPage;
