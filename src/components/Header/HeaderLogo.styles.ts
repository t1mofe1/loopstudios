import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	z-index: 1;
`;

export const StyledSVG = styled.svg`
	path {
		fill: ${({ theme }) => theme.white};
	}
`;
