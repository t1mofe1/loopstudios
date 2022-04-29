import HeaderLogoSVG from '../../assets/img/header_logo.svg';
import { HeaderLogoContainer } from './HeaderLogo.styles';

export function HeaderLogo() {
	return (
		<HeaderLogoContainer>
			<img src={HeaderLogoSVG} alt="loopstudios" />
		</HeaderLogoContainer>
	);
}
