// import { withRouter } from 'react-router-dom';
// import { Container } from '../../global-styles';
// // import { projects } from '../../Pages/PortfolioPage/portfolio-content';
// import {
//   CardContainer,
//   GlassmorphismContainer,
//   Image,
//   Title,
//   ProjectDescription,
// } from '../../components/ProjectsList/ProjectsListStyles';

// // import { projects } from '../PortfolioPage/portfolio-content';

// const HomePageProject = ({ projects }) => (
//   <Container>
//     <CardContainer>
//       {projects.map((project, key) => (
//         <GlassmorphismContainer key={key} to={`/project/${project.id}`}>
//           <Image src={project.imageUrl} />
//           {/* <ButtonWrapperLink>
// 							<Button />
// 							<Button />
// 						</ButtonWrapperLink> */}
//           <Title>{project.title}</Title>
//           {/* <ProjectDescription>{project.description}</ProjectDescription> */}
//           <ProjectDescription>{project.stack}</ProjectDescription>

//           {/* <CardTitle>{project.description}</CardTitle> */}
//           {/* <Button>check me out</Button>
// 						<Button>Github</Button> */}
//         </GlassmorphismContainer>
//       ))}
//     </CardContainer>
//   </Container>
// );

// export default withRouter(HomePageProject);
