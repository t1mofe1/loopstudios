import { burgerLineTypes } from '../../utils/BurgerTypes';
import { BurgerContainer } from './HeaderBurger.styles';

type HeaderBurgerProps = {
	open: boolean;
	menuClicked: React.MouseEventHandler<HTMLDivElement>;
	type?: keyof typeof burgerLineTypes;
};
export default function HeaderBurger({ open = false, menuClicked, type = 'Default' }: HeaderBurgerProps) {
	const BurgerLines = burgerLineTypes[type];

	return (
		<BurgerContainer onClick={menuClicked}>
			<BurgerLines open={open} />
		</BurgerContainer>
	);
}
