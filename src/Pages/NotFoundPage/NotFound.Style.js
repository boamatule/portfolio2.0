import styled from "styled-components/macro";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  height: 100vh;
  width: 100%;
  padding: 0em 10em;
`;

const TextRaw = styled.h1`
  margin-top: 16px;
  color: #999999;
  font-size: 32px;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  line-height: 32px;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* margin-bottom: 30px; */
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 80%; /* Adjust width for smaller screens */
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    padding: 0 20px;
    /* width: 100%;  */
  }
`;

export { ErrorContainer, TextRaw };

