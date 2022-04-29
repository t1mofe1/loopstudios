import styled from 'styled-components';
import { Fonts, getFont } from '../../utils/Fonts';

export const LinksList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	gap: 1rem;
`;

export const LinkContainer = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	list-style: none;
`;

export const Link = styled.a`
	${getFont(Fonts.Alata)}
	font-size: 15px;
	line-height: 25px;

	margin: 0.25rem;
	padding: 0.25rem;

	text-decoration: none;

	flex: 1;

	color: #ffffff;

	text-align: center;
`;
