import { useState, createContext, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export const Context = createContext(null);
export const TubeContextProvider = ({ children }) => {
	const [openMenu, setOpenMenu] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState('new');

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('asm'));
	useEffect(() => {
		if (isSmallScreen) {
			setOpenMenu(false);
		}
	}, [isSmallScreen]);
	return (
		<Context.Provider
			value={{
				openMenu,
				setOpenMenu,
				isSmallScreen,
				selectedCategory,
				setSelectedCategory,
			}}>
			{children}
		</Context.Provider>
	);
};
