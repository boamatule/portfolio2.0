const {
  Avatar,
  ProfileWrapper,
  Img,
  Heading,
  TextWrapper,
  Location,
  Subtitle,
  ProfileWrapperRow,
  ProfileWrapperColumn,
  ProfileWrapperContainer,
} = require('./ProfileAvatarStyles');

const ProfileAvatar = () => (
  <>
    <Avatar>
      <Img src="../images/avatar.webp" alt="Boa" />
    </Avatar>
  </>
);

export default ProfileAvatar;
