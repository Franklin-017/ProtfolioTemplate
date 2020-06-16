import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'tomato',
		},
		'& label': {
			color: 'tan',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'tan',
			},
			'&:hover fieldset': {
				borderColor: 'tan',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'tan',
			},
		},
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
	},
	button: {
		marginTop: '1rem',
		color: 'tomato',
		borderColor: 'tomato',
	},
}));

const Contacts = () => {
	const classes = useStyles();
	return (
		<Box component='div' style={{ background: '#234', height: '100vh' }}>
			<Navbar />
			<Grid container justify='center'>
				<Box component='form' className={classes.form}>
					<Typography
						variant='h5'
						style={{
							color: 'tomato',
							textAlign: 'center',
							textTransform: 'uppercase',
						}}
					>
						Hire or Contact Me...
					</Typography>
					<InputField
						fullWidth={true}
						label='Name'
						variant='outlined'
						inputProps={{ style: { color: '#fff' } }}
						margin='dense'
						size='medium'
					/>
					<br />
					<InputField
						fullWidth={true}
						label='Email'
						variant='outlined'
						inputProps={{ style: { color: '#fff' } }}
						margin='dense'
						size='medium'
					/>
					<br />
					<InputField
						fullWidth={true}
						label='Company Name'
						variant='outlined'
						inputProps={{ style: { color: '#fff' } }}
						margin='dense'
						size='medium'
					/>
					<br />
					<Button
						variant='outlined'
						fullWidth={true}
						endIcon={<SendIcon />}
						className={classes.button}
					>
						Contact me
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};

export default Contacts;
