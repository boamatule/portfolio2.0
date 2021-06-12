const { Container, imgWrapper, Img, Heading, Subtitle } = require('./ProfileStyles');

const Profile = () => (
  <Container>
    <imgWrapper>
      <Img src="../../images/boa.JPG" />
      {/* <Heading>Boa Matule</Heading>
      <Subtitle>Full Stack Developer</Subtitle> */}
      <Heading>Boa Matule</Heading>
      <Subtitle>Full Stack Developer</Subtitle>
    </imgWrapper>
  </Container>
);

export default Profile;
