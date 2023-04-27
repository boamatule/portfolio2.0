import styled from"styled-components/macro";const SpinnerOverlay=styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 `,SpinnerContainer=styled.img`
	background-color: "#000",
	display: inline-block;
	width: 60px;
	height: 60px;
	border: 3px solid rgba(211, 29, 169, 0.6);
	border-radius: 50%;
	border-top-color: orange;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;
	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;export{SpinnerOverlay,SpinnerContainer};