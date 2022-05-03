import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { defaultTheme, Theme, themes, Themes } from '../utils/Themes';

type ThemeContextProps = {
	theme: Theme;
	setTheme: (theme: Themes) => void;
};
export const ThemeContext = createContext<ThemeContextProps>({
	theme: defaultTheme,
	setTheme: () => {},
});

type ThemeProviderProps = {
	theme: Theme;
	children: ReactNode;
};
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
	const [currentTheme, setTheme] = useState<Theme>(theme);

	const setCustomTheme = (theme: Themes) => setTheme(themes[theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme: currentTheme,
				setTheme: setCustomTheme,
			}}
		>
			<StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
