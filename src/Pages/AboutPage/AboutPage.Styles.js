import{LazyLoadImage}from"react-lazy-load-image-component";import styled from"styled-components/macro";import{Container}from"../../global-styles";const AboutWrapper=styled(Container)`
  top: 0;
  display: flex;
  height: 60vh; /* add this property to set the height of the container to 100% of the viewport height */
  margin-bottom: 0px;
  padding: 0 20px;
  font-family: Rubik;
  font-style: normal;
  background-color: transparent;
  @media (max-width: 960px) {
    flex-direction: column;
  };

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 20px;
    padding: 0 10px;
  }
`,Column=styled.div`
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 20px;
  }
`,Image=styled(LazyLoadImage)`
  width: 280px;
  height: 280px;
  border-radius: 4px;
  object-fit: fill;

  @media screen and (max-width: 960px) {
    width: 200px;
    height: 200px;
  }
`,ImageColumn=styled(Column)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 600px;
  height: 400px;
  border-radius: 4px;
  background-image: url(${t=>t.backgroundImage});

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }

`,TextColumn=styled(Column)`
  padding: 0 0px;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    justify-content: center;
    text-align: center;
  }

`,Heading=styled.h1`
  display: flex;
  font-weight: bold;
  /* line-height: 20px; */
  /* letter-spacing: 4px; */
  padding: 0px 0px;
  color: #4568dc;
  font-size: 32px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
  font-size: 28px;
  margin-bottom: 20px;
  justify-content: flex-start;
  text-align: flex-start;
  padding: 0px 20px;

}
`,Description=styled.h2`
  margin-top: 16px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2.8px;
  font-weight: normal;
  /* margin-bottom: 60px; */
  line-height: 22px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    /* margin-bottom: 20px;  */
    padding: 20px;
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  } 
`;export{AboutWrapper,Column,Image,ImageColumn,TextColumn,Heading,Description};