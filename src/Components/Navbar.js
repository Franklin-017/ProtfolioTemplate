import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
	ListItemIcon,
} from '@material-ui/core';

import {
	ArrowBack,
	Home,
	AssignmentInd,
	Apps,
	ContactMail,
} from '@material-ui/icons';
import Footer from './Footer';

const useStyle = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: '#511',
		height: '100%',
	},
	avatar: {
		display: 'block',
		margin: '0.5rem auto',
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	listItem: {
		color: 'tan',
	},
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/',
	},
	{
		listIcon: <AssignmentInd />,
		listText: 'Resume',
		listPath: '/resume',
	},
	{
		listIcon: <Apps />,
		listText: 'Portfolio',
		listPath: '/portfolio',
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contacts',
		listPath: '/contacts',
	},
];

const Navbar = () => {
	const [state, setState] = useState({
		right: false,
	});

	const toggler = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};
	const classes = useStyle();

	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component='div'
			onClick={toggler('right', false)}
		>
			<Avatar className={classes.avatar} src='' alt='' />
			<Divider />
			<List>
				{menuItems.map((item, key) => (
					<ListItem button key={key} component={Link} to={item.listPath}>
						<ListItemIcon className={classes.listItem}>
							{item.listIcon}
						</ListItemIcon>
						<ListItemText
							className={classes.listItem}
							primary={item.listText}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<Fragment>
			<Box component='nav'>
				<AppBar position='static' style={{ background: '#222' }}>
					<Toolbar>
						<IconButton onClick={toggler('right', true)}>
							<ArrowBack style={{ color: 'tomato' }} />
						</IconButton>
						<Typography variant='h5' style={{ color: 'tan' }}>
							Portfolio
						</Typography>
						<MobileRightMenuSlider
							anchor='right'
							open={state.right}
							onClose={toggler('right', false)}
						>
							{sideList('right')}
							<Footer />
						</MobileRightMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</Fragment>
	);
};

export default Navbar;
