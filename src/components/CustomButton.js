import { Box, Button } from '@material-ui/core';

const CustomButton = (props) => {
	return (
		<Box>
			<Button className='button' variant='contained' {...props} />
		</Box>
	);
};

export default CustomButton;
