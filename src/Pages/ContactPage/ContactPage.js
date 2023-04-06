/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowRight,
  ContactButton,
  ContactButtonWrapper,
  ContactContainer,
  ContactFormColumn,
  Form,
  FormContainer,
  FormContainerColumn,
  Heading,
  Input,
  TextArea,
  Title,
} from './ContactPage.Styles';

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
          Until then, stay healthy & be positive!
        </Title>
      </ContactFormColumn>

      <FormContainerColumn>
        <FormContainer>
          <Form name="contact" method="POST" onSubmit={handleSubmit} action="/success">
            <Input
              placeholder="Enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
            <Input
              style={{
                background: 'transparent',
                color: '#474747',
                fontWeight: 'normal',
                letterSpacing: '1.6px',
                lineHeight: '24px',
                fontSize: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid grey',
                border: '2px solid #4568dc',
                borderRadius: '2px',
                padding: '8px'
              }}
              placeholder="Enter your email address"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <TextArea placeholder="Hi, let me know when we can start working together!" name="message" onChange={handleChange} required />
            <ContactButtonWrapper>
              <ContactButton small fontSmall primary aria-label="Contact" type="submit">
                <ArrowRight />
              </ContactButton>
            </ContactButtonWrapper>
          </Form>
        </FormContainer>
      </FormContainerColumn>
    </ContactContainer >
  );
};

export default ContactPage;
