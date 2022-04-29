import { useContext } from 'react';
import { MaxWidthContext } from '../../context/MaxWidth';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNavLinks } from './HeaderNavLinks';
import { HeaderContainer, StyledHeader } from './styles';

export function Header() {
	const maxWidth = useContext(MaxWidthContext);

	return (
		<StyledHeader>
			<HeaderContainer maxWidth={maxWidth}>
				<HeaderLogo />
				<HeaderNavLinks />
			</HeaderContainer>
		</StyledHeader>
	);
}
