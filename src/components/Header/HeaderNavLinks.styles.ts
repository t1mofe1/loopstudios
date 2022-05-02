import styled from 'styled-components';
import { Fonts, getFont } from '../../utils/Fonts';

type MobileProp = {
	mobile: boolean;
	isOpen: boolean;
};

export const StyledNav = styled.nav<MobileProp>`
	${({ mobile, isOpen }) =>
		mobile &&
		`
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

		background: black;

		opacity: ${isOpen ? 1 : 0};
		${isOpen || 'pointer-events: none'};
	`}
`;

export const LinksList = styled.ul<MobileProp>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${({ mobile }) => mobile && 'flex-direction: column;'}

	gap: ${({ mobile }) => (mobile ? 1.5 : 1)}rem;
`;

export const LinkContainer = styled.li<MobileProp>`
	display: flex;
	align-items: center;
	justify-content: center;

	list-style: none;

	${({ mobile, isOpen }) =>
		mobile &&
		`
		transition: transform 1s;

		transform: translateY(${isOpen ? 0 : -100}%);
	`}
`;

export const Link = styled.a<MobileProp>`
	${({ mobile }) => getFont(mobile ? Fonts.JosefinSans : Fonts.Alata)}
	font-size: ${({ mobile }) => (mobile ? 24 : 15)}px;
	${({ mobile }) => mobile && 'font-weight: 300;'}
	line-height: 25px;

	margin: 0.25rem;
	padding: 0.25rem;

	${({ mobile }) => mobile && `text-transform: uppercase;`}
	text-decoration: none;
	text-align: center;

	flex: 1;

	color: #ffffff;
`;
