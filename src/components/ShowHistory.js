import { useRef } from 'react';
import { Modal, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HistoryData from './HistoryData';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.scheme.secondary,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const ShowHistory = ({ history, open, handleClose }) => {
	const classes = useStyles();
	const nodeRef = useRef(null);

	return (
		<Modal
			className={classes.modal}
			open={open}
			noderef={nodeRef}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<div ref={nodeRef} className={classes.paper}>
				{history.length === 0 ? <p>No history to show.</p> : <HistoryData history={history} />}
			</div>
		</Modal>
	);
};

export default ShowHistory;
