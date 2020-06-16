import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/index';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import { CssBaseline } from '@material-ui/core';
import Contacts from './Components/Contacts';

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<Route exact path='/' component={Home} />
			<Route path='/resume' component={Resume} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/contacts' component={Contacts} />
		</Fragment>
	);
}

export default App;
