import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import HeaderBurger from './HeaderBurger';
import HeaderNavLinks from './HeaderNavLinks';

export default function HeaderMenu() {
	const [open, setOpen] = useState(false);

	const mobile = useMediaQuery('(max-width: 768px)');

	const onMenuClick = () => {
		setOpen((state) => !state);
	};

	return (
		<>
			{mobile && <HeaderBurger type={'SliderBurgerLines'} open={open} menuClicked={onMenuClick} />}
			<HeaderNavLinks mobile={mobile} open={open} />
		</>
	);
}
