import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Form,
  TextArea,
  Input,
  Title,
  ContactContainer,
  ContactButtonWrapper,
  ContactButton,
} from './ContactPageStyles';

const ContactPage = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState({});

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const handleChange = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...message }),
    })
      .then(() => navigate('/message-sent-successfully'))
      .catch((error) => alert(error));
    event.target.reset();
  };

  return (
    <ContactContainer>
      <Title>Fill up the form and i will be at you as soon as possible. Stay healthy and keep smiling.</Title>
      <Form name="contact" method="POST" onSubmit={handleSubmit} action="/success">
        <Input placeholder="Full Name" type="text" name="name" onChange={handleChange} required />
        <Input placeholder="Email Address" type="email" name="email" onChange={handleChange} required />
        <TextArea placeholder="What are we going to build today?" name="message" onChange={handleChange} required />
        <ContactButtonWrapper>
          <ContactButton small fontSmall primary type="submit">
            Submit
          </ContactButton>
        </ContactButtonWrapper>
      </Form>
    </ContactContainer>
  );
};

export default ContactPage;
