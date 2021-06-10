import styled from 'styled-components/macro';
// import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const Title = styled.p`
  font-size: 24px;
  /* color: #e5e5e5; */
  color: purple;
  font-weight: bold;
  /* margin-left: 56px;
  margin-right: 56px; */
  /* margin-top: 10px; */
  /* margin-bottom: 40px; */
  display: flex;
  /* flex-direction: column; */
  /* justify-content: start-start; */
  /* text-align: flex-start; */
`;

export const Heading = styled.h1`
  margin-bottom: 28px;
  font-size: 40px;
  line-height: 1.1;
  justify-content: center;
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'purple')};
`;

export const ProjectWrapper = styled.div`
  color: #fff;
  padding: 60px 0;
  background: transparent;
  /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */

  /* @media screen and (max-width: 780px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  } */
`;

export const Container = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: auto;
  position: relative;
  z-index: 1;
  margin-top: 80px;
  margin-bottom: 60px;
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const SubTitle = styled.p`
  color: grey;
  font-weight: normal;
  margin-top: 16px;
  margin-bottom: 0;
  user-select: none;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  /* cursor: pointer; */
`;
export const Wrapper = styled.div`
  max-width: 1000px;
  height: 200px;
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  align-items: center;
  grid-gap: 16px;
  padding: 10px 0px;
`;

export const Image = styled.img`
  border-radius: 4px;
  /* width: 200px; */
  /* height: 200px; */
  /* border: 0; */
  width: 100%;
  /* max-width: 305px; */
  /* cursor: pointer; */
  height: auto;
  /* height: 30vh; */
  padding: 0;
  margin: 0;
  padding-bottom: 0;
  object-fit: cover;
  /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2); */
`;

export const Meta = styled.div`
  display: flex;
  bottom: 0;
  padding: 10px;
  background-color: transparent;
  border: 2px solid grey;
  border-radius: 4px;
  flex-direction: column;
  /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2); */
`;

export const Card = styled.div`
  /* background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; */
  border-radius: 4px;
  padding: 20px;
  /* max-height: 600px; */
  padding-bottom: 10px;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  /* transition: all 0.2s ease-in-out; */
  border: solid 2px grey;

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const CardMenu = styled.ul`
  transform: translateY(-600px);
  transition: all 0.4s ease-in-out;
  position: absolute;
  left: 50%;
  top: 40%;
  opacity: 0;
`;

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  transition: all 0.4s ease-in-out;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;
  }
`;

export const Entities = styled.div`
  display: grid;
  padding-right: 100px;
  padding-left: 100px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 40px 10px;

  @media screen and (max-width: 780px) {
    max-width: 100%;
    justify-content: center;
    /* display: flex; */
    grid-template-columns: 1fr;
  }
`;

export const H1 = styled.h1`
  color: silver;
  font-size: 0.5rem;
  color: black;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

// export const Title = styled.h2`
//   color: silver;
//   font-size: 1rem;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;

export const ProjectListP = styled.p`
  color: silver;
  /* display: flex; */
  font-size: 1rem;
  text-align: start;
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const ButtonLink = styled.a`
  border-radius: 28px;
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  display: inline-block;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 46px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  margin: 0rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'purple' : '#01bf71')};
    color: #010606;
  }
`;
