import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import { HeaderContainer, StyledHeader } from './styles';

export default function Header() {
	return (
		<StyledHeader>
			<HeaderContainer>
				<HeaderLogo />
				<HeaderMenu />
			</HeaderContainer>
		</StyledHeader>
	);
}
