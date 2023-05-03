import{LazyLoadImage}from"react-lazy-load-image-component";import styled from"styled-components/macro";
import { motion } from 'framer-motion';

import{Container}from"../../global-styles";const AboutWrapper=styled(Container)`
 display: flex;
  margin-bottom: 80px;
  font-family: Rubik;
  font-style: normal;
  background-color: transparent;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 20px;
  }
`,Column=styled.div`
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 20px;
  }
`,

Image=styled(LazyLoadImage)`
  width: 280px;
  height: 280px;
  border-radius: 4px;
  border: 2px solid grey;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    width: 200px;
    height: 200px;
  }
`,ImageColumn=styled(Column)`
 display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #f1f1f1; */
  width: 600px;
  height: 400px;
  border-radius: 4px;
  background-image: url(${t => t.backgroundImage});

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }


`,TextColumn=styled(Column)`
  padding: 0 0px;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    justify-content: center;
    text-align: center;
  }
`,
Heading=styled(motion.h1)`
  display: flex;
  font-weight: bold;
  padding: 0px 0px;
  color: #4568dc;
  font-size: 32px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
  font-size: 28px;
  margin-bottom: 20px;
  justify-content: flex-start;
  text-align: flex-start;
  padding: 0px 20px;
  font-size: 20px;
}
`,Description=styled.p`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  text-align: left;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 20px;
  } 
`;export{AboutWrapper,Column,Image,ImageColumn,TextColumn,Heading,Description};