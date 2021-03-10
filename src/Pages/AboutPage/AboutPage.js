import React from 'react'
import {
	AboutContainer,
	AboutWrapper,
	AboutTitle,
	AboutContent,
	AboutH1,
	AboutP,
} from './AboutPageStyles';

const AboutPage = () => {
	return (
		<>
			<AboutContainer>
				<AboutContent>
					<AboutTitle>
						about me
					</AboutTitle>
					<AboutH1>
						Junior Full Stack Developer based in beautiful Oslo, Norway.
					</AboutH1>
					<AboutP>
						Highly trained in modern web stack working with tools like Git, Github, Node, Visual Studio and working in teams. 
						Always focus om test-driven development and in an agile process. 
					</AboutP>
					<AboutP>
					I enjoy learning new skills and using code to build beautiful digital products. When I'm not coding, you will find me in the kitchen, swimming or playing Capoeira.

					</AboutP>
				</AboutContent>
			</AboutContainer>
		</>
	);
};

export default AboutPage;
