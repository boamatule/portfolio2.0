import { Container } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, TextWrapper, Location } = require('./ProfileStyles');

const Profile = () => (
  <Container>
    <ProfileWrapper>
      <Avatar>
        <Img src="../../images/avatar.png" alt="Boa" />
      </Avatar>
      <TextWrapper>
        <Heading>Boa Matule | Full Stack Developer</Heading>
        <Location> boa.matule@gmail.com | +4740101117 | Oslo, Norway </Location>
      </TextWrapper>
    </ProfileWrapper>
  </Container>
);

export default Profile;
