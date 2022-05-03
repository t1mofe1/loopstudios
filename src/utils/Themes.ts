import { DefaultTheme } from 'styled-components';

// export enum Colors {
// 	White = '#ffffff',
// 	Black = '#000000',
// 	DarkGray = '#8c8c8c',
// 	VeryDarkGray = '#696969',
// }

export enum Themes {
	Light = 'light',
	Dark = 'dark',
}

export type Theme = {
	white: string;
	black: string;
	dark_gray: string;
	very_dark_gray: string;
};

export const themes: {
	[key in Themes]: Theme;
} = {
	light: {
		white: 'hsl(0, 0%, 0%)',
		black: 'hsl(0, 0%, 100%)',
		dark_gray: 'hsl(0, 0%, 75%)',
		very_dark_gray: 'hsl(0, 0%, 61%)',
	},
	dark: {
		white: 'hsl(0, 0%, 100%)',
		black: 'hsl(0, 0%, 0%)',
		dark_gray: 'hsl(0, 0%, 55%)',
		very_dark_gray: 'hsl(0, 0%, 41%)',
	},
};

export const defaultTheme: DefaultTheme = themes[Themes.Dark];
