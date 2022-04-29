import styled from 'styled-components';
import Section1Image from '../../assets/img/section1.jpg';
import { Container } from '../../GlobalStyles';
import { Fonts, getFont } from '../../utils/Fonts';

export const SectionContainer = styled.section`
	width: 100%;
	height: 100vh;

	background-image: url(${Section1Image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

export const StyledContainer = styled(Container)`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	height: 100%;
`;

export const SectionBox = styled.div`
	max-width: clamp(min(100%, 18.75rem), 75vw, 40.625rem);

	border: 2px solid #fff;

	margin-top: 100px;

	padding: clamp(20px, 10vw / 10, 40px);

	color: #fff;

	text-transform: uppercase;

	${getFont(Fonts.JosefinSans)};
	font-size: clamp(2rem, 10vw, 4.5rem);
	line-height: clamp(1.875rem, 10vw, 4.375rem);
`;
