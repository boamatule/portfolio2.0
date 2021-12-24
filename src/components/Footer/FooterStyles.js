import styled from 'styled-components/macro';
import { Link, Link as LinkRouter } from 'react-router-dom';
import { Container } from '../../global-styles';

export const FooterContainer = styled(Container)`
  /* background-color: #101522;
  background-color: transparent; */
  /* padding: 2rem 0 1rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Container};

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: black;

  @media screen and (max-width: 420) {
    margin: 0;
    padding: 10px;
    margin-bottom: 16px;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin: 16px;
`;

export const FooterLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  /* width: 100%; */
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 0 auto;
  border-bottom: 2px solid #eee142;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #eee142;
  /* justify-self: start; */
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* font-weight: bold; */
`;

export const WebsiteRights = styled.h3`
  display: flex;
  font-weight: normal;
  margin-top: 1.9rem;
  align-items: center;
  /* margin-bottom: 0.8rem; */
  justify-content: center;
  font-size: 1rem;
  color: silver;

  @media screen and (min-width: 480px) {
    margin-top: 1.7rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  padding: 10px 22px;
`;

export const SocialIconLink = styled.a`
  color: silver;
  /* font-size: 30px; */

  &:hover {
    color: #01bf71;
    /* transition: 0.3s ease-out; */
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

export const Copyright = styled.h2`
  color: #eee142;
  font-size: 16px;
  /* font-weight: normal; */
  /* display: flex; */
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 10px;

  @media screen and (min-width: 480px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 10px;
  }
`;
