import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "../components/home/HomePage";
import MunicipalityPipPage from "../components/municipality_pip/MunicipalityPipPage";

class PrivateRoutes extends Component {


	componentDidMount() {
		/*
	  TODO: Replace hardcoded roles with redux,
	   localStorage, or get from server.
	 */
		if (localStorage.jwtToken) {

			console.log("token")
		} else {
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<Fragment>

				<Switch>

					<Route exact path="/dashboard" component={HomePage} />
					<Route exact path="/municipalitypip" component={MunicipalityPipPage} />

				</Switch>
			</Fragment>
		);
	}
}

export default PrivateRoutes;
