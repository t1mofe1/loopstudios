import styled from 'styled-components';

type BurgerContainerProps = {
	width: number;
	height: number;
	rotate: number;
};
export const BurgerContainer = styled.div<BurgerContainerProps>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	position: relative;
	transform: rotate(${({ rotate }) => rotate}deg);

	cursor: pointer;
	z-index: 1;
`;

type BurgerLineProps = {
	isOpen: boolean;
	strokeWidth: number;
	color: string;
	animationDuration: number;
	borderRadius: number;
	height: number;

	type: 0 | 1 | 2;
};
export const BurgerLine = styled.span<BurgerLineProps>`
	display: block;

	height: ${({ strokeWidth }) => strokeWidth}px;
	width: 100%;

	background: ${({ color }) => color};

	transition-timing-function: ${({ type }) => (type === 1 ? 'ease-out' : 'ease')};
	transition-duration: ${({ animationDuration, type }) => (type === 2 ? animationDuration / 4 : animationDuration)}s;

	border-radius: ${({ borderRadius }) => borderRadius}px;

	transform-origin: center;
	${({ isOpen, type, height }) => type !== 1 && `transform: translate3d(0, ${isOpen ? height / 2 : type === 0 ? 0 : height}px, 0) rotate(${isOpen ? `${type === 2 && '-'}45deg` : '0'})`};

	margin-top: ${({ strokeWidth }) => `-${strokeWidth / 2}px`};

	position: absolute;
	${({ type, height }) => type === 1 && `top: ${height / 2}px`};

	${({ type, isOpen }) => type === 1 && `opacity: ${isOpen ? '0' : '1'}`};
`;
