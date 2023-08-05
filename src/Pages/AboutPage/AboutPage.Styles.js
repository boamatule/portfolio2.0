import { motion } from 'framer-motion';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled, { keyframes } from "styled-components/macro";
import { Container } from "../../global-styles";


const AboutWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  min-height: 100vh; /* Set a minimum height of 100vh to ensure it fits well on the page */
  padding: 6em 4em;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 20px;
    padding: 2em 1em; 
  }
`,

  Column = styled.div`
  width: 100vh;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`,

  Image = styled(LazyLoadImage)`
  width: 280px;
  height: 280px;
  border-radius: 4px;
  border: 2px solid grey;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`,

  ImageColumn = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  border-radius: 4px;
  background-image: url(${t => t.backgroundImage});

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
`,

  TextColumn = styled(Column)`
  padding: 0 0px;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    justify-content: center;
    text-align: center;
  }
`,

  Heading = styled(motion.h1)`
  display: flex;
  font-weight: bold;
  padding: 0px 0px;
  color: #4568dc;
  justify-content: flex-start;
  text-align: flex-start;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-size: 32px;
  margin-bottom: 0px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
    justify-content: left;
    text-align: left;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
    padding: 0px 10px;
  }
`,

  Description = styled.p`
  margin-top: 16px;
  color: #999999;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  line-height: 22px;
  text-align: left;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    padding: 10px;
  } 
`;

const MozambiqueText = styled.span`
  background: linear-gradient(to right, #00A74A, #262626, #FCD116, #FFFFFF, #FF0000);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${keyframes`
    0% {
      color: #00A74A;
    }
    20% {
      color: #262626;
    }
    40% {
      color: #FCD116;
    }
    60% {
      color: #FFFFFF;
    }
    80% {
      color: #FF0000;
    }
    100% {
      color: #00A74A;
    }
  `} 5s linear infinite;
`;

const slideAnimation = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

const GradientButton = styled.a`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to right, #ff9f01, #ffc800);
  @media screen and (max-width: 768px) {
    display: none;
  } 
`;

const Text = styled.span`
  text-decoration: none;
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.5em 1em;
  display: block;
  position: relative;
  z-index: 2;
  transition: 0.5s ease-in-out;
  line-height: 1em;
`;

const SlideAnimation = styled.span`
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #ff9f01, #ffc800);
  opacity: 0.8;
`;

export { AboutWrapper, Column, Description, GradientButton, Heading, Image, ImageColumn, MozambiqueText, SlideAnimation, Text, TextColumn };

