import { Container, Glassmorphism } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, TextWrapper, Location, Subtitle } = require('./ProfileStyles');

const Profile = () => (
  <Container>
    <ProfileWrapper>
      <Glassmorphism>
        <Avatar>
          <Img src="../../images/avatar.webp" alt="Boa" />
        </Avatar>
        <Heading>Boa Matule | Fullstack Developer</Heading>
        <Location> +4740101117 | Oslo - Norway </Location>
      </Glassmorphism>
    </ProfileWrapper>

    <TextWrapper>
      <Glassmorphism>
        <Subtitle>
          Decent Chef and E-business Manager turned into a highly crafted Fullstack Software Developer using the latest
          tools in programming. Trained in React and Ruby on Rails. Agile and Test-Driven Development enthusiast.
        </Subtitle>
        <Subtitle> You might find myself most of the time trying different kind of mushrooms.</Subtitle>
      </Glassmorphism>
    </TextWrapper>
  </Container>
);

export default Profile;
