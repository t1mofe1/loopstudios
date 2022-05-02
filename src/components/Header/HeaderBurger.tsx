import { BurgerContainer, BurgerLine } from './HeaderBurger.styles';

type HeaderBurgerProps = {
	isOpen: boolean;
	menuClicked: React.MouseEventHandler<HTMLDivElement>;
	width?: number;
	height?: number;
	strokeWidth?: number;
	rotate?: number;
	color?: string;
	borderRadius?: number;
	animationDuration?: number;
};
export function HeaderBurger({ width = 36, height = 30, isOpen = false, strokeWidth = 2, animationDuration = 0.4, color = '#fff', rotate = 0, borderRadius = 0, menuClicked }: HeaderBurgerProps) {
	return (
		<BurgerContainer {...{ width, height, rotate }} onClick={menuClicked}>
			<BurgerLine {...{ isOpen, strokeWidth, color, animationDuration, height, borderRadius }} type={0} />
			<BurgerLine {...{ isOpen, strokeWidth, color, animationDuration, height, borderRadius }} type={1} />
			<BurgerLine {...{ isOpen, strokeWidth, color, animationDuration, height, borderRadius }} type={2} />
		</BurgerContainer>
	);
}
