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
        }, 30000);
      })
      .catch((error) => alert(error));
    event.target.reset();
  };

  return (
    <ContactContainer>
      <ContactFormColumn>
        <Heading>
          Contact Me!
        </Heading>
        <Title>
          Whether you have a question or want to collaborate, I'm here to help. Just fill out the contact form and I'll respond as soon as possible. Stay healthy and keep a positive attitude in the meantime!
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

export default React.memo(ContactPage);
