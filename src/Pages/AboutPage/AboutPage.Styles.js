import { motion } from 'framer-motion';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled, { keyframes } from "styled-components/macro";
import { Container } from "../../global-styles";


const AboutWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  min-height: 100vh;
  padding: 0em 4em;
  overflow: hidden;
  margin-bottom: -400px;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0em 0em;
    margin-top: -50px;
    margin-bottom: -100px;
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
  align-items: center;
  font-weight: bold;
  color: #4568dc;
  justify-content: flex-start;
  text-align: left;
  font-family: 'Roboto Mono', monospace;
  font-size: 32px;
  margin: 0; 

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
    margin-left: auto;
    margin-right: auto;
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
    padding: 0 20px;
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
const GetInTouchLink = styled.p`
  text-decoration: none;
  font-size: 0.9em;
  font-weight: bold;
  position: relative;
  transition: 0.5s ease-in-out;
  line-height: 1em;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  display: inline-block;
  width: 100%;
  height: 100%;
  /* color: inherit; */
  color: #999999;
  justify-content: flex-start;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-bottom: 40px;
  }
`;

const GetInTouch = styled.span`
 color: #999999;  
  position: relative;
  display: inline-block;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #4568dc;
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


export { AboutWrapper, Column, Description, GetInTouch, GetInTouchLink, Heading, Image, ImageColumn, MozambiqueText, SlideAnimation, Text, TextColumn };

