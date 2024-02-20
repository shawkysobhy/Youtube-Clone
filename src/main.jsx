import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // Import your custom theme
import { TubeContextProvider } from './context/AppContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<TubeContextProvider>
			<App />
		</TubeContextProvider>
	</ThemeProvider>
);
