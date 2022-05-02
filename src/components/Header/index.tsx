import { useContext } from 'react';
import { MaxWidthContext } from '../../context/MaxWidth';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';
import { HeaderContainer, StyledHeader } from './styles';

export function Header() {
	const maxWidth = useContext(MaxWidthContext);

	return (
		<StyledHeader>
			<HeaderContainer maxWidth={maxWidth}>
				<HeaderLogo />
				<HeaderMenu />
			</HeaderContainer>
		</StyledHeader>
	);
}
