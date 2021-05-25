/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form, TextArea, Input, Title, ArrowForward, ArrowRight, ContactWrapper } from './ContactPageStyles';
import { Button, Container } from '../../global-styles';

const ContactPage = ({ lightBg }) => {
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
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <ContactWrapper>
      <Container lightBg={lightBg}>
        <Title>Don't be shy! Send me a quick note :)</Title>
        <Form name="contact" method="POST" onSubmit={handleSubmit}>
          <Input
            placeholder="Full Name"
            type="text"
            name="name"
            onChange={handleChange}
            required
            // required
            // value={emailAddress}
            // onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            onChange={handleChange}
            required
            // required
            // value={emailAddress}
            // onChange={({ target }) => setEmailAddress(target.value)}
          />
          <TextArea placeholder="What are we going to build today?" name="message" onChange={handleChange} required />
          <Button type="submit">SUBMIT</Button>
        </Form>
      </Container>
    </ContactWrapper>
  );
};

export default ContactPage;
