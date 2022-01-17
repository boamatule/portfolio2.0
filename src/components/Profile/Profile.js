import { Glassmorphism } from '../../global-styles';

const { Avatar, ProfileWrapper, Img, Heading, TextWrapper, Location, Subtitle } = require('./ProfileStyles');

const Profile = () => (
  <>
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
          Decent Chef and E-business Manager turned into a highly crafted Fullstack Developer using the latest
          programming tools to build digital products that scale with focus for the end user.
        </Subtitle>
        <Subtitle>
          Crafted in React and Ruby on Rails, Agile and Test-Driven Development methods with a mobile first approach to
          software development. In the last 2 years i have taken the time and resources to finisse my skills. And i have
          gained a deeper understand of building, architecting and scaling web and mobile apps.
        </Subtitle>
        <Subtitle />
      </Glassmorphism>
    </TextWrapper>
  </>
);

export default Profile;
