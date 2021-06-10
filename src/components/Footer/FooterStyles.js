import styled from 'styled-components/macro';
import { Link, Link as LinkRouter } from 'react-router-dom';

export const FooterContainer = styled.div`
  /* background-color: #101522; */
  background-color: transparent;
  /* padding: 2rem 0 1rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-top: 2px solid #01bf71; */

  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const FooterWrapper = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
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
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  /* margin: 40px auto 0 auto; */
  /* border-bottom: 2px solid #01bf71; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #eee142;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: silver;
  margin-bottom: 16px;
  font-size: 14px;
  /* font-weight: bold; */
  justify-content: space-between;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 10px 22px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
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

export const Copyright = styled.div`
  color: #eee142;
  font-size: 12px;
  margin-bottom: 20px;
  /* margin-top: 10px; */
`;
