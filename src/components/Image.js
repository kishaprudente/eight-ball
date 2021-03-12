import { Box } from '@material-ui/core';
import Icon from '../assets/icon.png';

const Image = () => {
	return (
		<Box>
			<img src={Icon} className='icon' alt='Eight ball'></img>
		</Box>
	);
};

export default Image;
