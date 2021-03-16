import { useState } from 'react';
import { Container, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Result from '../components/Result';
import CustomButton from '../components/CustomButton';
import ShowHistory from '../components/ShowHistory';
import API from '../utils/API';

const useFormStyles = makeStyles((theme) => ({
	root: {
		'& .MuiOutlinedInput-root': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: theme.scheme.secondary,
			},
		},
		'& .MuiFormLabel-root': {
			fontFamily: theme.font,
			color: theme.scheme.secondary,
		},
	},
}));

const Body = () => {
	const classes = useFormStyles();

	const [query, setQuery] = useState('');
	const [result, setResult] = useState('');
	const [error, setError] = useState('');
	const [history, setHistory] = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const handleChange = ({ target }) => {
		const { value } = target;
		setQuery(value);
	};

	const handleQuerySubmit = async () => {
		const lastChar = query.slice(-1);
		if (query === '?') {
			return;
		}
		if (lastChar === '?') {
			try {
				setLoading(true);
				const { data } = await API.getAnswer(query);
				const { answer } = data.magic;
				setResult(answer);
				setLoading(false);
				history.push(data.magic);
			} catch {
				setError('Something went wrong getting the answers');
			}
		} else {
			setResult('you must ask a question');
		}
	};

	const handleShowHistory = () => {
		setOpen(true);
	};

	const handleCloseHistory = () => {
		setOpen(false);
	};

	return (
		<Container>
			<Result error={error} result={result} loading={loading} />
			<FormControl classes={{ root: classes.root }} fullWidth variant='outlined'>
				<InputLabel classes={{ label: classes.root.label }} htmlFor='question'>
					Ask me anything
				</InputLabel>
				<OutlinedInput id='question' value={query} onChange={handleChange} labelWidth={60} />
			</FormControl>
			<CustomButton onClick={handleQuerySubmit}>Submit</CustomButton>
			<CustomButton onClick={handleShowHistory}>Show history</CustomButton>
			<ShowHistory history={history} open={open} handleClose={handleCloseHistory} />
		</Container>
	);
};

export default Body;
