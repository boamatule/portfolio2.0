// /* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import { withRouter } from 'react-router-dom';

// import { Button, Container, Span, Glassmorphism } from '../../global-styles';
// import {
//   Image,
//   CardContainer,
//   ButtonWrapperLink,
//   Heading,
//   ProjectDescription,
//   Title,
//   ProjectLinks,
//   BoxStyled,
// } from './ProjectsListStyles';

// const ProjectsList = ({ projects }) => (
//   <Container>
//     <Heading>p o r t f o l i o</Heading>

//     <CardContainer>
//       {projects.map((project, key) => (
//         <BoxStyled whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
//           <Glassmorphism key={key} to={`/project/${project.id}`}>
//             <Image src={project.imageUrl} alt={project.alt} />
//             <Title>{project.title}</Title>
//             <ProjectDescription>{project.stack}</ProjectDescription>
//             <ButtonWrapperLink>
//               <a href={project.URL} target="_blank" rel="noreferrer">
//                 <Button
//                   small
//                   fontSmall
//                   primary
//                   style={{
//                     marginLeft: '0px',
//                     color: 'white',
//                     fontSize: '20px',
//                   }}
//                 >
//                   <Span>See Live</Span>
//                 </Button>
//               </a>
//               <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
//                 <Button
//                   small
//                   fontSmall
//                   primary
//                   style={{
//                     margin: '0px 12px 0px 10px',
//                     background: 'transparent',
//                     border: 'none',
//                     color: 'grey',
//                     // transition: 'all 0.3s ease-out',
//                   }}
//                 >
//                   <Span>Source Code</Span>
//                 </Button>
//               </a>
//             </ButtonWrapperLink>
//           </Glassmorphism>
//         </BoxStyled>
//       ))}
//     </CardContainer>
//   </Container>
// );
// export default withRouter(ProjectsList);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Button, Glassmorphism } from '../../global-styles';
import {
  Image,
  CardContainer,
  ButtonWrapper,
  Heading,
  ProjectDescription,
  Title,
  BoxStyled,
  Text,
  Subtitle,
} from './ProjectsListStyles';

const ProjectsList = ({ projects }) => (
  <Container>
    <Heading>Curated projects</Heading>
    <Subtitle>
      A list of curated projects to showcase some of my tech stacks. Please, have a look below and check my{' '}
      <a
        style={{
          color: '#6969FB',
          backgroundColor: 'transparent',
          fontSize: '16px',
        }}
        href="https://github.com/boamatule"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        {' '}
        github profile
      </a>{' '}
      for more projects.
    </Subtitle>

    <CardContainer>
      {projects.map((project) => (
        <BoxStyled key={project.id} whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
          <Glassmorphism>
            <Image src={project.imageUrl} alt={project.alt} />
            <Title>{project.title.toLowerCase()}</Title>
            <ProjectDescription>{project.stack}</ProjectDescription>
            <ButtonWrapper>
              <a href={project.deployedUrl} target="_blank" rel="noreferrer">
                <Button
                  small
                  fontSmall
                  primary
                  style={{
                    color: 'white',
                  }}
                >
                  <Text>See Live</Text>
                </Button>
              </a>

              <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
                <Button
                  small
                  fontSmall
                  primary
                  style={{
                    paddingLeft: '60px',
                    background: 'transparent',
                    border: 'none',
                    color: '#6969FB',
                  }}
                >
                  <Text>Source Code</Text>
                </Button>
              </a>
            </ButtonWrapper>
          </Glassmorphism>
        </BoxStyled>
      ))}
    </CardContainer>
  </Container>
);
export default withRouter(ProjectsList);
