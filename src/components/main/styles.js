import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const StyledButtonContainer = styled.div`
	display: flex;
	gap: 2rem;
`;
const StyledCounterNumber = styled.div`
	font-size: 2rem;
`;

const StyledButton = styled.div`
	width: 100px;
	padding: 1rem;
	background-color: white;
	color: black;
	text-align: center;
	border-radius: 2rem;
	border: 2px solid black;
	&:hover {
		background-color: pink;
		color: white;
	}
`;

export {
	StyledButton,
	StyledContainer,
	StyledButtonContainer,
	StyledCounterNumber
};
