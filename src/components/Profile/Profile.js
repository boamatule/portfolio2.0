const { Container, imgWrapper, Img, Heading, Subtitle } = require('./ProfileStyles');

const Profile = () => (
  <Container>
    <imgWrapper>
      <Img src="../../images/boa.JPG" />
      {/* <Heading>Boa Matule</Heading>
      <Subtitle>Full Stack Developer</Subtitle> */}
    </imgWrapper>
    <Heading>Boa Matule</Heading>
    <Subtitle>Full Stack Developer</Subtitle>
  </Container>
);

export default Profile;
