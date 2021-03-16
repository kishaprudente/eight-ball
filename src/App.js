import './App.css';
import { Container } from '@material-ui/core';
import {
	unstable_createMuiStrictModeTheme as createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import Title from './components/Title';
import Image from './components/Image';
import Body from './components/Body';

const theme = createMuiTheme({
	scheme: {
		primary: '#f25f25',
		secondary: '#25b8f2',
		color: '#fff',
	},
	font: 'Josefin Sans',
});

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Container className='App'>
					<Title />
					<Image />
					<Body />
				</Container>
			</ThemeProvider>
		</>
	);
};

export default App;
