import styled from 'styled-components';

export const BurgerContainer = styled.div`
	width: 40px;
	height: ${40 * 0.6}px;
	display: inline-block;
	position: relative;

	cursor: pointer;

	z-index: 1;
`;

export type BurgerLineProps = {
	open: boolean;
};
export const BurgerLines = styled.span<BurgerLineProps>`
	top: 50%;
	margin-top: ${-40 * 0.05}px;

	&,
	&::before,
	&::after {
		display: block;

		background-color: ${({ theme }) => theme.white};

		width: 40px;
		height: ${40 * 0.1}px;
		border-radius: ${40 * 0.1}px;
		position: absolute;
		transition-property: transform;
		transition-duration: 0.5s;
		transition-timing-function: ease;
	}

	&::before,
	&::after {
		content: '';
	}
	&::before {
		top: ${-40 * 0.25}px;
	}
	&::after {
		bottom: ${-40 * 0.25}px;
	}
`;
