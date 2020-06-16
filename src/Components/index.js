import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	particlesCanvas: {
		position: 'absolute',
		opacity: '0.3',
	},
});

const Home = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Navbar />
			<Header />
			<Particles canvasClassName={classes.particlesCanvas}>
				params=
				{{
					particles: {
						number: {
							value: 45,
							density: {
								enable: true,
								value_area: 1080,
							},
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 3,
								color: 'tomato',
							},
						},
						size: {
							value: 10,
							random: true,
							anim: {
								enable: true,
								speed: 5,
								size_min: 1,
								sync: true,
							},
						},
						opacity: {
							value: 1,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync: true,
							},
						},
					},
				}}
			</Particles>
		</Fragment>
	);
};

export default Home;
