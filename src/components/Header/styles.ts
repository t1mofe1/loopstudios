import styled from 'styled-components';
import { MaxWidthProp } from '../../context/MaxWidth';
import { Container } from '../../GlobalStyles';

export const StyledHeader = styled.header`
	/* background: rgba(255, 0, 0, 0.2); */

	padding: 0.5rem 0;
	/* box-shadow: 2px 2px 10px #f1f6f9; */

	position: fixed;

	width: 100%;

	margin-top: 4rem;
`;

export const HeaderContainer = styled(Container)<MaxWidthProp>`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
