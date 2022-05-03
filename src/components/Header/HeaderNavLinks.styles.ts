import { Link as ReactLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MaxWidthMixin } from '../../GlobalStyles';
import { Fonts, getFont } from '../../utils/Fonts';

type MobileProp = {
	$mobile: boolean;
	open: boolean;
};
type ActiveProp = {
	$active: boolean;
};
type ActiveMobileProp = ActiveProp & MobileProp;

export const StyledNav = styled.nav<MobileProp>`
	${({ $mobile, open, theme }) =>
		$mobile &&
		css`
			position: fixed;
			top: 0;
			left: 0;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			height: 100vh;
			width: 100%;

			transition: opacity 0.3s;

			background: ${theme.black};

			opacity: ${open ? 1 : 0};

			${!open &&
			css`
				pointer-events: none;
			`};
		`}
`;

export const LinksList = styled.ul<MobileProp>`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	${({ $mobile }) =>
		$mobile &&
		css`
			flex-direction: column;
		`}

	${({ $mobile }) =>
		$mobile &&
		css`
			${MaxWidthMixin}
			height: 100vh;
		`}

	${({ $mobile }) =>
		$mobile
			? css`
					gap: 1.5rem;
			  `
			: css`
					gap: 1rem;
			  `}
`;

export const LinkContainer = styled.li<MobileProp>`
	display: flex;
	align-items: center;
	justify-content: center;

	list-style: none;

	${({ $mobile, open }) =>
		$mobile &&
		css`
			transition: transform 0.4s ease-in-out;
			transform: translateX(${open ? 0 : -150}%);
		`}
`;

export const Link = styled(ReactLink)<ActiveMobileProp>`
	${({ $mobile }) => getFont($mobile ? Fonts.JosefinSans : Fonts.Alata)}
	${({ $mobile }) =>
		$mobile
			? css`
					font-size: 24px;
			  `
			: css`
					font-size: 15px;
			  `}
	${({ $mobile }) =>
		$mobile &&
		css`
			font-weight: 300;
		`}
	line-height: 25px;

	margin: 0.25rem;
	padding: 0.25rem;

	${({ $mobile }) =>
		$mobile &&
		css`
			text-transform: uppercase;
		`}
	text-decoration: none;
	${({ $mobile }) =>
		!$mobile &&
		css`
			text-align: center;
		`}

	${({ $active }) =>
		$active &&
		css`
			border: 0.25rem solid ${({ theme }) => theme.white};
		`}

	flex: 1;

	color: ${({ theme }) => theme.white};
`;
