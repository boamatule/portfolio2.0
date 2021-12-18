import styled from 'styled-components/macro';

export const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
