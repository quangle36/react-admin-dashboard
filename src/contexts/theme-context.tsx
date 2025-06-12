import React from 'react';
import { THEME_MODE, THEME_STORAGE } from '../configs';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
	theme: Theme;
	handleChangeTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
	theme: 'light',
	handleChangeTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
	const [theme, setTheme] = React.useState<Theme>(THEME_MODE.LIGHT as Theme);
	const [isInitialized, setIsInitialized] = React.useState(false);

	React.useEffect(() => {
		const savedTheme = window.localStorage.getItem(THEME_MODE.DARK);
		const initializeTheme = (savedTheme || THEME_MODE.LIGHT) as Theme;

		setTheme(initializeTheme);
		setIsInitialized(true);
	}, []);

	React.useEffect(() => {
		if (isInitialized) {
			window.localStorage.setItem(THEME_STORAGE, theme);
			if (theme === THEME_MODE.DARK) {
				document.documentElement.classList.add(THEME_MODE.DARK);
			} else {
				document.documentElement.classList.remove(THEME_MODE.DARK);
			}
		}
	}, [theme, isInitialized]);

	function handleChangeTheme() {
		setTheme(
			(prevState) =>
				(prevState === THEME_MODE.LIGHT
					? THEME_MODE.DARK
					: THEME_MODE.LIGHT) as Theme
		);
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				handleChangeTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => React.useContext(ThemeContext);
