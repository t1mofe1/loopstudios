import styled, { createGlobalStyle } from 'styled-components';
import { MaxWidthProp } from './context/MaxWidth';
import { Colors } from './utils/Colors';
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
    font-size: 16px;

    background-color: ${Colors.Black};
  }
`;

export const Container = styled.div<MaxWidthProp>`
	max-width: ${({ maxWidth }) => maxWidth};
	width: 90%;
	margin: 0 auto;
`;
