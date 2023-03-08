import styled from 'styled-components';

const StyledColorContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 500px;
	width: 500px;
	background-color: ${({ bgColor }) => bgColor};
`;
const StyledButtonContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

const StyledColorButton = styled.div`
	width: 100px;
	padding: 1rem;
	background-color: white;
	color: black;
	text-align: center;
	border-radius: 2rem;
	border: 2px solid black;
	cursor: pointer;
	&:hover {
		background-color: pink;
		color: white;
	}
`;

export { StyledColorContainer, StyledColorButton, StyledButtonContainer };
