import styled from "styled-components/macro";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column; /* Set flex direction to column for mobile responsiveness */
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100vh;
`;

const TextRaw = styled.h1`
  margin-top: 16px;
  color: #999999;
  font-size: 32px;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  line-height: 32px;
  margin-bottom: 30px;
  text-align: center;
  width: 60%;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 80%; /* Adjust width for smaller screens */
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    padding: 0 20px;
    width: 100%; /* Full width for smallest screens */
  }
`;

export { ErrorContainer, TextRaw };
