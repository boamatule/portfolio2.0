import styled from "styled-components/macro";
import { Container } from "../../global-styles";

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  /* margin: 8em 15em; */
  margin-top: 12em;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 0 4px;
  }
`;

