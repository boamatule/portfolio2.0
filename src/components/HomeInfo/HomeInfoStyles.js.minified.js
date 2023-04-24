import styled from"styled-components/macro";const HomeInfoSec=styled.div`
  color: #fff;
  padding: 100px 20px;
  /* background: ${({lightBg:e})=>e?"#fff":"#101522"}; */
`,InfoRow=styled.div`
  display: grid;
  /* display: grid; */
  /* margin: 0 -15px -15px -15px; */
  /* flex-wrap: wrap; */
  align-items: center;
  /* flex-direction: column; */
  padding: 40px 20px 0px 20px;
  /* flex-direction: ${({imgStart:e})=>e?"row-reverse":"row"}; */
`,InfoColumn=styled.div`
  /* display: grid; */
  margin-bottom: 15px;
  padding-right: 60px;
  padding-left: 60px;
  flex: 1;
  /* flex-direction: column; */
  justify-content: space-between;
  /* max-width: 50%; */
  /* flex-basis: 50%; */

  @media screen and (max-width: 780px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`,TextWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 540px; */
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`,TopLine=styled.div`
  color: ${({lightTopLine:e})=>e?"#a9b3c1":"#4B59F7"};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`,Heading=styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  color: ${({lightText:e})=>e?"#f7f8fa":"#EEE142"};
`,Subtitle=styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc:e})=>e?"#a9b3c1":"#1c2237"};
`,imgWrapper=styled.div`
  /* max-width: 555px; */
  /* max-width: auto; */
  display: flex;
  justify-content: ${({start:e})=>e?"flex-start":"flex-end"};
`,Img=styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  vertical-align: middle;
  display: inline-block;
`;export{HomeInfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,imgWrapper,Img};