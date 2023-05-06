import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from 'framer-motion';
import styled, { keyframes } from "styled-components/macro";
import { Container } from "../../global-styles";


const AboutWrapper = styled(Container)`
  display: flex;
  /* width: 100vh;
  height: 100vh; */
  /* align-items: center;
  justify-content: center; */

  /* margin: 20em 10em; */
  font-family: Rubik;
  /* font-style: normal; */
  background-color: transparent;
  /* margin-top: 12em; */
  padding: 0em 0em;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 20px;
  }
`,

  Column = styled.div`
  /* width: 50%; */
  width: 100vh;
  height: 80vh;
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
  font-size: 32px;
  /* margin-bottom: 30px; */
  justify-content: flex-start;
  text-align: flex-start;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
    justify-content: left;
    text-align: left;
    padding: 0px 0px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
    padding: 0px 10px;
  }
`,

  Description = styled.p`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  font-weight: normal;
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
`;

const Text = styled.span`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const SlideAnimation = styled.span`
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #ff9f01, #ffc800);
  opacity: 0.8;
  /* animation: ${slideAnimation} 1s infinite; */
`;

export { AboutWrapper, Column, Description, Heading, Image, ImageColumn, TextColumn, MozambiqueText, GradientButton, Text, SlideAnimation};
