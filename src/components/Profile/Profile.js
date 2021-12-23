import { Container } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, TextWrapper, Location, Subtitle } = require('./ProfileStyles');

const Profile = () => (
  <Container>
    <ProfileWrapper>
      <Avatar>
        <Img src="../../images/avatar.png" alt="Boa" />
      </Avatar>
      <TextWrapper>
        <Heading>Boa Matule | Full Stack Developer</Heading>
        <Location> boa.matule@gmail.com | +4740101117 | Oslo - Norway </Location>
        <Subtitle>
          Former Chef and E-business Manager turned into a highly crafted Full Stack Software Developer using the latest
          tools in programming. Trained in ReactJs and Ruby on Rails using methods like Agile and Test-Driven
          Development. Proficient and vid learner.
        </Subtitle>
      </TextWrapper>
    </ProfileWrapper>
  </Container>
);

export default Profile;
