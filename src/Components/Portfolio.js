import React from 'react';
import Navbar from './Navbar';
import {
	Grid,
	Card,
	Box,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../Images/bg.jpg';

const useStyles = makeStyles({
	mainContainer: {
		background: '#234',
		height: '100%',
	},
	cardContainer: {
		maxWidth: 345,
		margin: '5rem auto',
	},
});

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component='div' className={classes.mainContainer}>
			<Navbar />
			<Grid container justify='center'>
				{/* Project 1 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Project 1'
								height='140'
								img={project1}
							/>
							<CardContent>
								<Typography variant='h5'>Project 1</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Lorem Lorem lorem lorem lorem lorem Lorem Lorem lorem lorem
									lorem lorem Lorem Lorem lorem lorem lorem lorem Lorem Lorem
									lorem lorem lorem lorem
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								Share
							</Button>
							<Button size='small' color='primary'>
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<Grid container justify='center'>
				{/* Project 1 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Project 1'
								height='140'
								img={project1}
							/>
							<CardContent>
								<Typography variant='h5'>Project 1</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Lorem Lorem lorem lorem lorem lorem Lorem Lorem lorem lorem
									lorem lorem Lorem Lorem lorem lorem lorem lorem Lorem Lorem
									lorem lorem lorem lorem
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								Share
							</Button>
							<Button size='small' color='primary'>
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<Grid container justify='center'>
				{/* Project 1 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Project 1'
								height='140'
								img={project1}
							/>
							<CardContent>
								<Typography variant='h5'>Project 1</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Lorem Lorem lorem lorem lorem lorem Lorem Lorem lorem lorem
									lorem lorem Lorem Lorem lorem lorem lorem lorem Lorem Lorem
									lorem lorem lorem lorem
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								Share
							</Button>
							<Button size='small' color='primary'>
								Live Demo
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Portfolio;
