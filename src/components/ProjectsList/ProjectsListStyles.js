import styled from 'styled-components/macro';
// import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { Container } from '../../global-styles';

export const ProjectContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  /* max-width: 1000px; */
  ${Container}
`;

export const Title = styled.p`
  font-size: 18px;
  /* color: #e5e5e5; */
  color: #eee142;
  display: flex;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    max-width: 400px;
  }
`;

export const Heading = styled.h3`
  /* font-weight: normal; */
  margin-bottom: 40px;
  font-size: 30px;
  line-height: 1.1;
  justify-content: center;
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const ProjectWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  /* color: #fff; */
  /* padding: 60px 0; */
  /* background: transparent; */
  /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SubTitle = styled.p`
  color: grey;
  font-weight: normal;
  margin-top: 10px;
  user-select: none;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  border-radius: 4px;
  border: 0;
  width: 100%;
  /* cursor: pointer; */
  height: auto;
  /* height: 20vh; */
  padding: 0;
  margin: 0;
  padding-bottom: 0;
  object-fit: cover;
`;

export const Meta = styled.div`
  display: flex;
  bottom: 0;
  padding: 10px;
  background-color: transparent;
  border: none;
  flex-direction: column;
  /* width: 300px; */
  height: 200px;
  /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2); */
`;

export const Card = styled.div`
  border-radius: 1px;
  padding: 20px;
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  /* transition: all 0.2s ease-in-out; */
  border: solid 0.75px #eee142;

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
    width: 100%;

    &:hover {
      transform: none;
    }
  }
`;

export const Entities = styled.div`
  display: grid;
  /* padding-left: 50px;
  margin-top: 100px; */
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;

  @media screen and (max-width: 960px) {
    justify-content: center;
    grid-template-columns: 1fr;
    padding: 0px 0px 0px 0px;
  }
`;

export const ProjectListP = styled.p`
  color: silver;
  /* display: flex; */
  font-size: 1rem;
  text-align: start;
  margin-top: 14px;
  margin-bottom: 10px;
`;

export const ButtonLink = styled.a`
  border-radius: 4px;
  margin-top: 0px;
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  display: inline-block;
  width: 40%;
  height: 100%;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 46px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
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

export const buttonLabel = styled.p`
  color: silver;
  font-size: 1rem;
  color: red;
`;
