import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { HeaderBurger } from './HeaderBurger';
import { HeaderNavLinks } from './HeaderNavLinks';

export function HeaderMenu() {
	const [open, setOpen] = useState(false);

	const mobile = useMediaQuery('(max-width: 768px)');

	const onMenuClick = () => {
		setOpen((state) => !state);
	};

	return (
		<>
			{mobile && <HeaderBurger isOpen={open} menuClicked={onMenuClick} />}
			<HeaderNavLinks mobile={mobile} isOpen={open} />
		</>
	);
}
