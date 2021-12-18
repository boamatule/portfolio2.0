import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
  border-radius: 0.75rem /* 12px */;
  padding-top: 0.25rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  padding-bottom: 1.25rem /* 20px */;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;

  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #eee142;
  font-weight: bold;

  /* display: flex; */

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: bold;
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

export const CardContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  border-radius: 0.75rem;
  padding-top: 4rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  padding-bottom: 1.25rem /* 20px */;
  padding-left: 0.5rem /* 16px */;
  padding-right: 0.5rem /* 16px */;
  text-align: center;
  backdrop-filter: blur(10px);
  justify-content: space-between;
  /* position: relative; */
  cursor: pointer;

  @media screen and (max-width: 640px) {
    justify-content: center;
    grid-template-columns: 1fr;
  }

  /* @media screen and (max-width: 768px) {
    justify-content: center;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1280px) {
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1536px) {
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
  } */
`;

export const GlassmorphismContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'purple' : '#01bf71')};
    color: #010606;
  }
`;

export const ButtonWrapperLink = styled.div`
  /* height: 20px;
  width: 40px;
  border: 1px solid purple;
  background: none;
  cursor: pointer;
  position: relative;
  display: flex;
  object-fit: cover;
  justify-content: center;
  align-items: center; */
  /* display: inline-block; */
  /* padding-left: 30px;
  padding-right: 40px; */
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: transparent;
`;

export const SubTitle = styled.p`
  color: silver;
  font-weight: normal;
  margin-top: 10px;
  user-select: none;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const Image = styled.img`
  /* border-radius: none;
  border: none;
  padding: 0;
  margin: 0;
  padding-bottom: 0;
  object-fit: cover; */
  /* object-fit: cover; */
  /* background-color: transparent;
  border-radius: none;
  justify-content: center;
  text-align: center; */

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
  height: 200px;
  border-radius: 0px;
  padding-top: 0rem;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: transparent;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const Meta = styled.div`
  display: flex;
  bottom: 0;
  padding: 10px;
  background-color: transparent;
  border: none;
  flex-direction: column;
  width: auto;
  height: 200px;
  /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2); */
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

export const Card = styled.div`
  /* padding: 10px 20px 40px 100px; */
  background: transparent;
  display: flex;
  justify-content: center;
  /* white-space: nowrap; */
  padding-top: 0rem /* 4px */;
  padding-bottom: 0rem /* 4px */;
  padding-bottom: 0rem /* 20px */;
  padding-left: 0rem /* 16px */;
  padding-right: 0rem /* 16px */;
  /* position: relative; */

  @media screen and (max-width: 960px) {
    /* width: 100%;
    &:hover {
      transform: none;
    } */
  }
`;

export const Span = styled.span`
  display: inline-block;
  position: relative;
  align-items: center;
  margin-left: 0px;
  margin-right: 0px;
  justify-content: space-evenly;
  background-color: transparent;
`;
