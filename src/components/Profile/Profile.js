import { Container } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, Subtitle, TextWrapper, Location } = require('./ProfileStyles');

const Profile = () => (
  <ProfileWrapper>
    <Container>
      <Avatar>
        <Img src="../../images/avatar.png" alt="" />
      </Avatar>
      <TextWrapper>
        <Heading>Boa Matule | Full Stack Developer</Heading>
        <Location>boa.matule@gmail.com | +4740101117 | Oslo, Norway </Location>
      </TextWrapper>
    </Container>
  </ProfileWrapper>
);

export default Profile;
