import styled, { css } from "styled-components";
// import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const ProjectsListContainer = styled.div`
	height: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: auto;
	position: relative;
	z-index: 1;	
	margin-top: 80px;
	margin-bottom: 60px;


	@media screen and (max-width: 768px) {
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		height: 1300px;
	}
`;

export const ProjectsListWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 10px 0px;


	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ProjectListCard = styled.div`
	background: transparent;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 1px;
	padding: 20px;
	max-height: 600px;
	padding-bottom: 10px;
	padding-top: 8px;
	padding-left: 8px;
	padding-right: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const ProjectListImage = styled.img`
	height: 200px;
	width: 330px;
	margin-bottom: 0px;
	border-radius: 1px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;
`;

export const ProjectsListH1 = styled.h1`
	color: silver;
	font-size: 0.5rem;
	color: black;
	margin-bottom: 10px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const  ProjectListH2 = styled.h2`
	color: silver;
	font-size: 1rem;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const ProjectListP = styled.p`
	color: silver;
	/* display: flex; */
	font-size: 1rem;
	text-align: start;
	margin-top: 14px;
	margin-bottom: 14px;

`;

export const ProjectsListBtnLink = styled.a`
	border-radius: 28px;
	background: ${({primary}) => (primary ? '#01bf71' : '#010606')
	};
	display: inline-block;
	white-space: nowrap;
	padding: ${({big}) => (big ? '12px 46px' : '12px 30px')
	};
	color: ${({dark}) =>(dark ? '#010606' : '#fff')
	};
	font-size: ${({fontBig}) => (fontBig ? '18px' : '14px')
	};
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
  margin: 0rem 1rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none; 

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({primary}) => (primary ? 'purple' : '#01bf71')
		};
		color: #010606;
	}
`;

