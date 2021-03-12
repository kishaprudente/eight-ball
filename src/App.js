import './App.css';
import { Container } from '@material-ui/core';
import Title from './components/Title';
import Image from './components/Image';
import Body from './components/Body';

const App = () => {
	return (
		<Container className='App'>
			<Title />
			<Image />
			<Body />
		</Container>
	);
};

export default App;
