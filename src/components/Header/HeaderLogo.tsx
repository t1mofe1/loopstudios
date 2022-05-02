import { useNavigate } from 'react-router-dom';
import HeaderLogoSVG from '../../assets/img/header_logo.svg';
import { HeaderLogoContainer } from './HeaderLogo.styles';

export function HeaderLogo() {
	const navigate = useNavigate();

	return (
		<HeaderLogoContainer onClick={() => navigate('/')}>
			<img src={HeaderLogoSVG} alt="loopstudios" />
		</HeaderLogoContainer>
	);
}
