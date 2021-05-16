import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

// import { Link } from 'react-scroll';

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  width: 100%auto;
  min-height: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: transparent;
  margin-top: 80px;
  justify-content: space-between;
  padding: 5px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* min-height: 400px; */
  height: 800px;
  width: 100%;
  background: transparent;
  /* background-color: rgba(0, 0, 0, 0.75); */
  border-radius: 5px;
  box-sizing: border-box;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  max-width: 1000px;
  padding: 20px 20px 10px;
  /* margin-bottom: 100px; */
  margin-top: 10px;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: grey;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
  margin-top: 0px;
`;

export const Form = styled.form`
  /* background: #e0e0d9; */
  /* background: transparent; */
  max-width: 400px;
  /* height: auto; */
  /* width: 100%; */
  z-index: 1;
  display: grid;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px 16px;
  overflow: hidden;
  /* visibility: visible; */
  /* border-radius: 4px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0); */

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const Input = styled.input`
  /* background: #333; */
  background: none;
  /* border-radius: 4px; */
  border: 0;
  color: white;
  height: none;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #01bf71;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const TextArea = styled.textarea`
  /* width: 100%; */
  /* height: 200px; */
  background: none;
  border: 0;
  /* border-radius: 4px; */
  line-height: 30px;
  padding: 20px 18px;
  border-bottom: 2px solid #01bf71;
`;

export const Text = styled.span`
  margin-top: 24px;
  margin-bottom: 24px;
  color: black;
  font-size: 34px;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
