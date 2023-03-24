import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/login/LoginPage';

const PublicRoutes = ({ match }) => (
	<Fragment>
		<Switch>
			<Route path="/" component={LoginPage} />
		</Switch>
	</Fragment>
);

export default PublicRoutes;

