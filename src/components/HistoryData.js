import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		// marginTop: theme.spacing.unit * 3,
		overflowX: 'hide',
	},
	table: {
		minWidth: 320,
	},
	tableCell: {
		paddingRight: 4,
		paddingLeft: 5,
	},
});

const HistoryData = ({ history }) => {
	const classes = useStyles();
	const firstTenHistory = history.slice(0, 10);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size='small'>
				<TableHead>
					<TableRow>
						<TableCell align='center'>Question</TableCell>
						<TableCell align='center'>Answer</TableCell>
						<TableCell align='center'>Type</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{firstTenHistory.reverse().map((item, index) => (
						<TableRow key={index}>
							<TableCell align='center'>{item.question}?</TableCell>
							<TableCell align='center'>{item.answer}</TableCell>
							<TableCell align='center'>{item.type}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default HistoryData;
