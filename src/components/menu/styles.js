import styled from 'styled-components';

const StyledMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const StyledMenu = styled.ul`
	display: none;
	flex-direction: column;
	gap: 1rem;
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
	background-color: pink;
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
