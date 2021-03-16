import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.scheme.primary,
		'&:hover': {
			backgroundColor: theme.scheme.secondary,
		},
		color: theme.scheme.color,
		fontFamily: theme.font,
		margin: '20px',
	},
}));

const CustomButton = (props) => {
	const classes = useStyles();
	return (
		<Box>
			<Button
				classes={{
					root: classes.root,
				}}
				variant='contained'
				{...props}
			/>
		</Box>
	);
};

export default CustomButton;
