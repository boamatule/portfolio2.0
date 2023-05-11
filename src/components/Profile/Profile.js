/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// import Boa from '../../images/moi.webp';

const ProfileContainer = styled.div`
	min-height: 400px;
	${tw`flex justify-between w-full pl-3 pr-3 lg:pl-12 lg:pr-12 max-w-screen-2xl`};
`;

const LeftProfileContainer = styled.div`
	${tw`flex flex-col w-1/2`};
`;

const RightProfileContainer = styled.div`
  ${tw`flex flex-col w-1/2`};
`;

const Slogan = styled.h1`
  ${tw`text-4xl font-bold text-black mb-4`};
`;

const Description = styled.p`
  ${tw`text-2xl font-bold text-black mb-4`};
`;

const Profiledescription = styled.p`
  ${tw`text-2xl font-bold text-black mb-4 w-3/4 lg:w-full`};
`;

const ProfileImageContainer = styled.div`
  ${tw`flex justify-center items-center`};
`;

const ProfileImageWrapper = styled.div`
  ${tw`flex justify-center items-center`};
`;

const ProfileImageBackground = styled.div`
  ${tw`w-full h-full bg-contain bg-center`};
`;

const ProfileImage = styled.img`
  ${tw`w-1/2 h-1/2`};
`;
const backgroundImage = "../../images/background.svg";
const Profile = () => {
  return (
    <ProfileContainer>
      <LeftProfileContainer>
        <Slogan>Hi, I'm <span style={{ color: 'purple' }}>Boa Matule</span></Slogan>
        <Description>I'm a Full Stack Developer</Description>
        <Profiledescription>I'm a Full Stack Software Developer with a diverse background spanning from the hospitality industry as a chef to E-commerce as a Co-founder and Manager. Currently, I'm based in the beautiful city of Oslo, Norway, but I'm originally from the pearl of the Indian Ocean, <span style={{ color: 'purple' }}>Mozambique </span>. I'm passionate about building, architecting, and scaling web and mobile applications using cutting-edge technology stacks. Let's create something amazing together!</Profiledescription>
      </LeftProfileContainer>
      <RightProfileContainer>
        <ProfileImageContainer>
          <ProfileImageBackground backgroundImage={backgroundImage}>
            <ProfileImage src="../../images/moi.webp" alt="Boa" />

          </ProfileImageBackground>
        </ProfileImageContainer>
      </RightProfileContainer>

    </ProfileContainer>
  );
}

export default Profile;