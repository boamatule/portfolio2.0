import { Container } from '../../global-styles';

const {
  Avatar,
  ProfileWrapper,
  Img,
  Heading,
  TextWrapper,
  Location,
  ProfileWrapperDiv,
  Subtitle,
} = require('./ProfileStyles');

const Profile = () => (
  <Container>
    {/* <ProfileWrapperDiv> */}
    <ProfileWrapper>
      <Avatar>
        <Img src="../../images/avatar.png" alt="Boa" />
      </Avatar>
      <TextWrapper>
        <Heading>Boa Matule | Full Stack Developer</Heading>
        <Location> boa.matule@gmail.com | +4740101117 | Oslo - Norway </Location>
        <Subtitle>
          Boa Matule | Full Stack Developer. The most efficient and supportive way for you to learn the most in-demand
          skills, get hired and advance your career. Boa Matule | Full Stack Developer. The most efficient and
          supportive way for you to learn the most in-demand skills, get hired and advance your career. Boa Matule |
          Full Stack Developer. The most efficient and supportive way for you to learn the most in-demand skills, get
          hired and advance your career. Boa Matule | Full Stack Developer. The most efficient and supportive way for
          you to learn the most in-demand skills, get hired and advance your career.
        </Subtitle>
      </TextWrapper>
      {/* <Subtitle>
        Boa Matule | Full Stack Developer. The most efficient and supportive way for you to learn the most in-demand
        skills, get hired and advance your career. Boa Matule | Full Stack Developer. The most efficient and supportive
        way for you to learn the most in-demand skills, get hired and advance your career. Boa Matule | Full Stack
        Developer. The most efficient and supportive way for you to learn the most in-demand skills, get hired and
        advance your career. Boa Matule | Full Stack Developer. The most efficient and supportive way for you to learn
        the most in-demand skills, get hired and advance your career.
      </Subtitle> */}
    </ProfileWrapper>

    {/* <ProfileWrapper>
        <TextWrapper>
          <Subtitle>
            Boa Matule | Full Stack Developer. The most efficient and supportive way for you to learn the most in-demand
            skills, get hired and advance your career.
          </Subtitle>
        </TextWrapper>
      </ProfileWrapper> */}
    {/* </ProfileWrapperDiv> */}
  </Container>
);

export default Profile;
