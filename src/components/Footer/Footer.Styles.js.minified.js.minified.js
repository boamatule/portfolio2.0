import{FaAngleUp}from"react-icons/fa";import styled from"styled-components/macro";const FooterWrapper=styled.div`
  display: flex;
  align-items: flex-start;
  position: fixed;
  bottom: 40px;
  left: 0px;
  right: 0;
  width: 100%;
`,FooterLinksContainer=styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800) {
    padding-top: 32px;
  }
`,Copyright=styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 4px;
  letter-spacing: 2px;
  align-items: center;
  text-align: center;
  color: #4568dc;
  margin: 0px 140px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 2px;
    letter-spacing: 1px;
  }
`,ScrollToTopContainer=styled.div`
  display: flex;
  justify-content: flex-end; /* align to right */
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  background: transparent,
`,ScrollToTopButton=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #4568dc;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #4568dc;
  } 
`,ScrollToTopIcon=styled(FaAngleUp)`
  width: 20px;
  height: 20px;
  color: #4568dc;
  cursor: pointer;

  &:hover {
    color: grey;
  } 
`;export{FooterWrapper,FooterLinksContainer,Copyright,ScrollToTopContainer,ScrollToTopButton,ScrollToTopIcon};