import{FaCheck}from"react-icons/fa";import styled,{keyframes}from"styled-components";const PageWrapper=styled.div`
  max-width: 960px;
  height: 60vh;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Roboto Mono', monospace; 
  justify-content: center;
  text-align: center;
`,fadeIn=keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,CheckIcon=styled(FaCheck)`
  width: 60px;
  height: 60px;
  color: grey;
  animation: ${fadeIn} 0.5s ease-in-out;
`,Heading=styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: grey;
`,Paragraph=styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: grey;
`,Button=styled.button`
  background-color: #0077cc;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005fa3;
  }
`;export{PageWrapper,fadeIn,CheckIcon,Heading,Paragraph,Button};