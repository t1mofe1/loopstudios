import {} from 'styled-components';
import { Theme } from './utils/Themes';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
