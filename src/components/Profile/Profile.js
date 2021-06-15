import { Container } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, Subtitle, TextWrapper, Location } = require('./ProfileStyles');

const Profile = () => (
  <ProfileWrapper>
    <Container>
      <Avatar>
        <Img src="../../images/avatar.png" />
      </Avatar>
      <TextWrapper>
        <Heading>Boa Matule | Full Stack Developer</Heading>
        {/* <Location>Oslo | Norway </Location> */}
      </TextWrapper>
    </Container>
  </ProfileWrapper>
);

export default Profile;
