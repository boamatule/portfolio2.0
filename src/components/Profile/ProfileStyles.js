// import styled from 'styled-components';
// import { Container } from '../../global-styles';

// export const ProfileWrapperContainer = styled(Container)`
//   margin-bottom: 0px;
// `;
// export const ProfileWrapperRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   margin: 0px 0px auto;

//   @media screen and (max-width: 800px) {
//     justify-content: center;
//     align-items: center;
//     padding: 0px 0px auto;
//     grid-template-columns: 1fr;
//   }
// `;

// export const ProfileWrapperColumn = styled.div`
//   width: 100%;
// `;

// export const ProfileWrapper = styled.div`
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   margin-top: 120px;

//   @media screen and (max-width: 800px) {
//     justify-content: cente
//     align-items: center;
//     padding: 0px 0px auto;
//   }
// `;

// export const Heading = styled.h2`
//   font-weight: normal;
//   letter-spacing: 4px;
//   line-height: 20px;
//   justify-content: center;
//   /* justify-content: flex-start; */
//   text-align: center;
//   align-items: center;
//   font-size: 18px;
//   color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};
//   padding-top: 10px;

//   @media screen and (max-width: 800px) {
//     font-size: 14px;
//     line-height: 1.8rem;
//     letter-spacing: 1.1px;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// export const Avatar = styled.div`
//   position: relative;
//   margin-top: 20px;
//   align-items: center;
//   display: inline-flex;

//   @media screen and (max-width: 800px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 20px;
//   }
// `;

// export const Img = styled.img`
//   width: 144px;
//   height: 144px;
//   border-radius: 50%;
//   margin-bottom: 20px;

//   @media screen and (min-width: 800px) {
//     width: 144px;
//     height: 144px;
//   }
// `;

// export const Subtitle = styled.p`
//   margin: 40px 20px auto;
//   color: grey;
//   font-size: 16px;
//   letter-spacing: 2px;
//   line-height: 20px;
//   font-weight: normal;
//   justify-content: flex-start;
//   text-align: center;
//   background: transparent;

//   @media screen and (max-width: 800px) {
//     font-size: 14px;
//     margin-top: 0px;
//     letter-spacing: 2px;
//     line-height: 20px;
//     font-weight: normal;
//     justify-content: center;
//     text-align: center;
//     margin: 20px 20px auto;
//   }
// `;

// export const Location = styled.p`
//   margin-top: 10px;
//   font-size: 1.1rem;
//   letter-spacing: 2px;
//   line-height: 20px;
//   color: grey;
//   font-weight: normal;
//   margin-bottom: 0px;
// `;

import styled from 'styled-components';
import { Container } from '../../global-styles';

export const ProfileWrapperContainer = styled(Container)`
  margin-bottom: 0px;
`;
export const ProfileWrapperRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px 0px auto;
  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    padding: 0px 0px auto;
    grid-template-columns: 1fr;
  }
`;

export const ProfileWrapperColumn = styled.div`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 20px;
  padding: 80px 80px;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h2`
  font-weight: normal;
  letter-spacing: 2px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 0)' : '#6969FB')};
  padding-top: 10px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 1.8rem;
    letter-spacing: 1.1px;
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: 20px;
  align-items: center;
  display: inline-flex;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Img = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 50%;
  margin-bottom: 20px;
  @media screen and (min-width: 800px) {
    width: 144px;
    height: 144px;
  }
`;

export const Subtitle = styled.h3`
  margin-top: 10px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  /* align-items: center; */
  background: transparent;
  padding: 0px 40px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const Location = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  letter-spacing: 2px;
  line-height: 20px;
  color: grey;
  font-weight: normal;
  margin-bottom: 0px;
`;
