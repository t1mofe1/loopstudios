import { createGlobalStyle, css } from 'styled-components';
import { Fonts, getFont } from './utils/Fonts';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    ${getFont(Fonts.JosefinSans)};

    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
`;

export const MaxWidthMixin = css`
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
`;
