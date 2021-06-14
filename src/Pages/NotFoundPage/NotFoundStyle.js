import styled from 'styled-components/macro';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 400px;
  background: transparent;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  max-width: 1000px;
  padding: 20px 20px 10px;
  margin-bottom: 100px;
  margin-top: 40px;
  overflow: hidden;
`;

export const imgWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;

export const Img = styled.img`
  border: 0;
  align-items: center;
  align-content: center;
  /* border-radius: 50%; */
  width: 100%;
  height: 100%;
  vertical-align: middle;
  display: inline-block;
`;
