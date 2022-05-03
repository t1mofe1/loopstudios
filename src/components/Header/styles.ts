import styled from 'styled-components';
import { MaxWidthMixin } from '../../GlobalStyles';

export const StyledHeader = styled.header`
	/* background: rgba(255, 0, 0, 0.2); */

	padding: 0.5rem 0;
	/* box-shadow: 2px 2px 10px #f1f6f9; */

	position: fixed;

	width: 100%;

	margin-top: 4rem;
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${MaxWidthMixin}
`;
