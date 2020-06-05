import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import App from './components/App';
import Log from './components/Log';

const routes = [
	{
		path: '/home',
		name: 'NewPage',
		component: Home
	},
	{
		path: '/',
		name: 'HomePage',
		component: App
	}
];

const hist = createBrowserHistory();
const root = document.getElementById('app');

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			{routes.map(routes => {
				return (
					<Route
						key={routes.name}
						path={routes.path}
						component={routes.component}
					></Route>
				);
			})}
		</Switch>
	</Router>,
	root
);
