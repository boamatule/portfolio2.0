import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ContactPageContainer = styled.div`
	min-height: 692px;
	/* position: fixed; */
	position: relative;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 0;
	overflow: hidden;
	background: transparent;
	/* background: linear-gradient(
		108deg,
		rgba(1, 147, 86, 1) 0%,
		rgba(10, 201, 122, 1) 100%
	); */
`;

export const ContactPageWrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
	`;

export const ContactPageFormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;

export const ContactPageForm = styled.form`
	/* background: #e0e0d9; */
	background: black;
	max-width: 800px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	margin-bottom: 40px;
	padding: 80px 32px;
	/* border-radius: 30px; */
	border: 4px solid silver;

	box-shadow: 0 1px 3px rgba(0, 0, 0, 0);

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
	`;

export const ContactPageFormH1 = styled.h1`
	margin-bottom: 40px;
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
	`;

export const ContactPageLabel = styled.label`
	margin-bottom: 8px;
	color: #fff;
	font-size: 14px;
	height: 50px;
	width: 50px;
	`;

export const ContactPageFormInput = styled.input`
	padding: 	16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
	`;

export const ContactPageFormButtom = styled.button`
/* background: #01bf71; */
background: blue;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;

&:hover {
			color: #01bf71;
			/* transition: 0.3s ease-out; */
		}
`;

export const ContactPageText = styled.span`
margin-top: 24px;
margin-bottom: 24px;
/* color: black; */
font-size: 34px;
text-align: center;
`;

export const ContactPageTextArea = styled.input`
	padding: 	32px 32px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
	background: #fff;

`








