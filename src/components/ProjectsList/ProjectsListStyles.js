import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
  border-radius: 0.75rem /* 12px */;
  padding-top: 0.25rem /* 4px */;
  padding-bottom: 0.25rem /* 4px */;
  padding-bottom: 1.25rem /* 20px */;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem /* 16px */;

  @media screen and (max-width: 960px) {
    padding-left: 2rem /* 16px */;
    padding-right: 2rem /* 16px */;
    /* background: ${({ lightBg }) => (lightBg ? '#101522' : '#101522')};
    background: ${({ lightBg }) => (lightBg ? '#101522' : '#fff')}; */
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #4568dc;
  font-weight: normal;
  justify-content: flex-start;
  text-align: flex-start;
  /* text-transform: uppercase; */

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Heading = styled.h2`
  font-weight: normal;
  margin-top: 120px;
  margin-bottom: 20px;
  font-size: 40px;
  margin-left: 20px;
  justify-content: flex-start;
  /* text-transform: uppercase; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#4568DC')};

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
  justify-content: space-between;
  cursor: pointer;
  margin-left: 20px;

  @media screen and (max-width: 640px) {
    justify-content: center;
    grid-template-columns: 1fr;
  }
`;

export const ButtonWrapperLink = styled.div`
  cursor: pointer;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (max-width: 960px) {
    cursor: pointer;
    justify-content: center;
    padding: 40px 0px 40px 0px;
    align-items: center;
    display: flex;
  }
`;

export const ButtonWrapperLinkText = styled.text`
  font-size: 14px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const SubTitle = styled.p`
  color: silver;
  font-weight: normal;
  margin-top: 10px;
  user-select: none;
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const Image = styled.img`
  display: block;
  width: 340px;
  height: 180px;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 10px;
  justify-content: center;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 20px;
  padding-left: 0px;
  text-align: center;
  background: transparent;
  /* text-transform: uppercase; */
`;

export const ProjectListP = styled.p`
  color: silver;
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

export const CardTitle = styled.p`
  left: 0;
  top: 0px;
  font-weight: normal;
  font-size: 16px;
  margin-left: 26px;
  color: silver;
  /* text-transform: uppercase; */
  background: transparent;
  /* transition: top 0.5s ease; */

  @media screen and (max-width: 960px) {
    /* width: 100%;
    &:hover {
      transform: none;
    } */
  }
`;

export const ProjectWrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: silver;
  @media screen and (max-width: 960px) {
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    height: auto;
  }
`;

export const ProjectDescription = styled.p`
  display: inline-block;
  color: silver;
  padding-top: 10px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  letter-spacing: 1.6px;
  line-height: 20px;
  font-weight: normal;
  background: transparent;
  height: 120px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;
