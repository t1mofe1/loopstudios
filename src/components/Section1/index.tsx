import { useContext } from 'react';
import { MaxWidthContext } from '../../context/MaxWidth';
import { SectionBox, SectionContainer, StyledContainer } from './styles';

export function Section1() {
	const maxWidth = useContext(MaxWidthContext);

	return (
		<SectionContainer>
			<StyledContainer maxWidth={maxWidth}>
				<SectionBox>Immersive experiences that deliver</SectionBox>
			</StyledContainer>
		</SectionContainer>
	);
}
