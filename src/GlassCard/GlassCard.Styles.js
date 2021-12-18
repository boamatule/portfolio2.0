import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  width: 80vw;
  padding: 20px 60px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: purple;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: auto;
  background: #1a1d2b;
  padding: 20px 60px;
  box-sizing: border-box; */
  --border-radius: 0.7rem;
  --transition-time: 0.3s;
  position: relative;
  padding-top: 56, 25%;
  background: linear-gradient(0deg, #1e1f2a, 0%, #2f313d);
  box-shadow: inset 0px 0px 60px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 16px 17 -5px #000;

  cursor: pointer;
  border-radius: var(--border-radius);
  transition: var(--transition-time);

  :hover {
    transition: scale(1.05);
    .border {
      border: 1px solid purple;
    }
  }

  .border {
    position: absolute;
    top: 20;
    width: 100%;
    height: 100%;
    border: 3px solid #42444f;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-clip: border-box;
    z-index: 10;
    transition: all var(--transition-time);
    pointer-events: none;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
