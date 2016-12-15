import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import Main from './components/Main.js';
import DetailInfo from './components/DetailInfo.js';

import Login from './components/Login.js';
import Registration from './components/Registration.js';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="login" component={Login} />
		<Route path="registration" component={Registration} />
		<Route path=":etag" component={DetailInfo} />
	</Route>
);