/* eslint-disable react/function-component-definition */
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
  Heading,
  FormContainer,
  ContactFormColumn,
  FormContainerColumn,
  ArrowRight,
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
      .then(() => {
        navigate('/message_sent_successfully');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((error) => alert(error));
    event.target.reset();
  };

  return (
    <ContactContainer>
      <ContactFormColumn>
        <Heading>
          Let's get in touch!
        </Heading>
        <Title>
          Are you interested in working together or have any questions?
          Fill in the form and I will get back to you as soon as possible.
          Until then, stay healthy.
        </Title>
      </ContactFormColumn>
      <FormContainerColumn>
        <FormContainer>
          <Form name="contact" method="POST" onSubmit={handleSubmit} action="/success">
            <Input placeholder="Full Name" type="text" name="name" onChange={handleChange} required />
            <Input placeholder="Email Address" type="email" name="email" onChange={handleChange} required />
            <TextArea placeholder="What are we going to build today?" name="message" onChange={handleChange} required />
            <ContactButtonWrapper>
              <ContactButton small fontSmall primary type="submit">
                <ArrowRight />
              </ContactButton>
            </ContactButtonWrapper>
          </Form>
        </FormContainer>
      </FormContainerColumn>
    </ContactContainer>
  );
};

export default ContactPage;
