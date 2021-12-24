import { Container, Glassmorphism } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, TextWrapper, Location, Subtitle } = require('./ProfileStyles');

const Profile = () => (
  <Container>
    <ProfileWrapper>
      <Glassmorphism>
        <Avatar>
          <Img src="../../images/avatar.webp" alt="Boa" />
        </Avatar>
        <Heading>Boa Matule | Full Stack Developer</Heading>
        <Location> +4740101117 | Oslo - Norway </Location>
      </Glassmorphism>
    </ProfileWrapper>

    <TextWrapper>
      <Glassmorphism>
        <Subtitle>
          Former Chef and E-business Manager turned into a highly crafted Full Stack Software Developer using the latest
          tools in programming. Trained in ReactJs and Ruby on Rails using methods like Agile and Test-Driven
          Development. Proficient and vid learner. Former Chef and E-business Manager turned into a highly crafted Full
          Stack Software Developer using the latest tools in programming. Trained in ReactJs and Ruby on Rails using
          methods like Agile and Test-Driven Development. Proficient and vid learner.
        </Subtitle>
      </Glassmorphism>
    </TextWrapper>
  </Container>
);

export default Profile;
