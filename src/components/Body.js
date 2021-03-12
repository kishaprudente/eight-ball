import { Container, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Result from '../components/Result';
import CustomButton from '../components/CustomButton';

const Body = () => {
	return (
		<Container>
			<Result />
			<FormControl fullWidth variant='outlined'>
				<InputLabel htmlFor='outlined-adornment-amount'>Question</InputLabel>
				<OutlinedInput
					id='outlined-adornment-amount'
					// value={values.amount}
					// onChange={handleChange('amount')}
					// startAdornment={<In`putAdornment position="start">$</InputAdornment>}
					labelWidth={60}
				/>
			</FormControl>
			<CustomButton>Submit</CustomButton>
			<CustomButton>Show history</CustomButton>
		</Container>
	);
};

export default Body;
