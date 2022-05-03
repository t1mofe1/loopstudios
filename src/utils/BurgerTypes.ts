import styled, { css } from 'styled-components';
import { BurgerLines } from '../components/Header/HeaderBurger.styles';

// source: https://github.com/AuvikAlive/react-animated-burgers/tree/master/src/lib/components
export const burgerLineTypes = {
	Default: BurgerLines,
	SliderBurgerLines: styled(BurgerLines)`
		&::before {
			top: ${40 * 0.1 + 40 * 0.15}px;
			transition-property: transform, opacity;
			${({ open }) =>
				open &&
				css`
					transform: rotate(-45deg) translate3d(-${40 / 7}px, -${40 * 0.15}px, 0);
					opacity: 0;
				`};
		}
		&::after {
			top: ${80 * 0.1 + 80 * 0.15}px;
			${({ open }) =>
				open &&
				css`
					transform: translate3d(0, -${(40 * 0.1 + 40 * 0.15) * 2}px, 0) rotate(-90deg);
				`};
		}
		top: ${(40 * 0.1) / 2}px;
		${({ open }) =>
			open &&
			css`
				transform: translate3d(0, ${40 * 0.1 + 40 * 0.15}px, 0) rotate(45deg);
			`};
	`,
};
