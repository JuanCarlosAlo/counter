import styled from 'styled-components';

const StyledMenuContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const StyledMenu = styled.ul`
	position: absolute;
	width: 86vw;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
	background-color: rgb(0, 191, 255);
	opacity: ${({ state }) => {
		console.log(state);
		if (state === false) {
			return 0;
		} else {
			return 1;
		}
	}};
	transition: opacity 0.6s ease-in-out;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledMenuShow = styled.ul`
	display: flex;
`;

const StyledMenuItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	background-color: white;
	border-radius: 1rem;
	@media screen and (min-width: 768px) {
		width: 150px;
	}
`;
const StyledMenuCross = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	background-color: gray;
	border-radius: 1rem;
	@media screen and (min-width: 768px) {
		display: none;
		width: 50px;
	}
`;

export {
	StyledMenu,
	StyledMenuItem,
	StyledMenuContainer,
	StyledMenuCross,
	StyledMenuShow
};
