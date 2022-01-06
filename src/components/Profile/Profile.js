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
          Chef and E-business Manager turned into a highly crafted Full Stack Software Developer using the latest tools
          in programming. Trained in ReactJs and Ruby on Rails. Agile lover and Test-Driven Development method
          enthusiast. A bit obessed with perfection. Love mushroom and poetry. I listen to 2 Pac everyday. I do love
          Afro Jazz. Learning to enjoy lakris since i was introduced to it... I try to spend my holidays in Bazaruto
          whenever i can.
        </Subtitle>
      </Glassmorphism>
    </TextWrapper>
  </Container>
);

export default Profile;
