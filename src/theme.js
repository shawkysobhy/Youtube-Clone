import { createTheme } from '@mui/material';
const theme = createTheme({
	typography: {
		fontFamily: 'Roboto, sans-serif', // Set your preferred font family
		text: {
			color: '#fff', // Set the default text color to white
		},
	},

	breakpoints: {
		values: {
			xs: 0,
			xsm: 500,
			sm: 600,
			asm: 750,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'@global': {
					'*': {
						boxSizing: 'border-box',
					},
					'::before': {
						boxSizing: 'inherit',
					},
					'::after': {
						boxSizing: 'inherit',
					},
				},
			},
		},
	},
});

export default theme;
