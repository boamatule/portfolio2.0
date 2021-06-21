import React, { useState } from 'react';
import {
  Form,
  TextArea,
  Input,
  Title,
  ArrowForward,
  ArrowRight,
  ContactWrapper,
  Description,
  ContactContainer,
  FormWrapper,
  ContactButton,
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
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  // <Img src"=../../images/emailSent.svg" />'))

  return (
    <ContactWrapper>
      <ContactContainer>
        <Title>Get in touch</Title>
        <Description>
          If you would like to get in touch, fill up the form bellow or just send an email to boa.matule@gmail.com and i
          will get back to you as soon as possible.
        </Description>
        <Form name="contact" method="POST" onSubmit={handleSubmit}>
          <Input placeholder="Full Name" type="text" name="name" onChange={handleChange} required />
          <Input placeholder="Email Address" type="email" name="email" onChange={handleChange} required />
          <TextArea placeholder="What are we going to build today?" name="message" onChange={handleChange} required />
          <ContactButton type="submit" primary>
            SUBMIT
          </ContactButton>
        </Form>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactPage;
