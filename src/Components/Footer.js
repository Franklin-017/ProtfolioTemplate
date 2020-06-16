import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250,
		},
		'& .MuiSvgIcon-root': {
			fill: 'tan',
			'&:hover': {
				fill: 'tomato',
				fontSize: '1.8rem',
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<BottomNavigation width='auto' style={{ background: '#222' }}>
			<BottomNavigationAction
				style={{ padding: 0 }}
				icon={<Facebook />}
				className={classes.root}
			/>
			<BottomNavigationAction
				style={{ padding: 0 }}
				icon={<Twitter />}
				className={classes.root}
			/>
			<BottomNavigationAction
				style={{ padding: 0 }}
				icon={<Instagram />}
				className={classes.root}
			/>
		</BottomNavigation>
	);
};

export default Footer;
