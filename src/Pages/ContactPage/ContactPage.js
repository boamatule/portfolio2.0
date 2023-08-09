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

    // email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(message.email)) {
      alert('Please enter a valid email address.');
      return;
    }

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
          Lets Get in Touch.
        </Heading>
        <Title>
          Whether you have a question or want to collaborate, I'm here to help. Just fill out the contact form and I'll respond as soon as possible.
          {/* <h1 /> */}
          Stay healthy and keep a positive attitude in the meantime!
        </Title>
      </ContactFormColumn>
      <FormContainerColumn>
        <FormContainer>
          <Form name="contact" method="POST" onSubmit={handleSubmit} action="/success">
            <Input
              style={{
                background: 'transparent',
                color: '#999999',
                fontWeight: 'normal',
                letterSpacing: '1px',
                lineHeight: '24px',
                fontSize: '14px',
              }}
              placeholder="Enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
            <Input
              style={{
                background: 'transparent',
                color: '#999999',
                fontWeight: 'normal',
                letterSpacing: '1px',
                lineHeight: '24px',
                fontSize: '14px',
              }}
              placeholder="Enter your email address"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <TextArea
              style={{
                color: '#999999',
                fontWeight: 'normal',
                letterSpacing: '1px',
                lineHeight: '24px',
                fontSize: '14px',
              }}
              placeholder="Hi, let me know when we can start working together!" name="message" onChange={handleChange} required />
            <ContactButtonWrapper>
              <ContactButton
                // small
                // fontSmall
                // primary
                aria-label="Contact" 
                type="submit">
                <ArrowRight />
              </ContactButton>
            </ContactButtonWrapper>
          </Form>
        </FormContainer>
      </FormContainerColumn>
    </ContactContainer >
  );
};

export default React.memo(ContactPage);
