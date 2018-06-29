// tslint:disable-next-line:no-import-side-effect
import 'tslib';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './store/store';

import Home from './pages/Home';

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</ConnectedRouter>
	</Provider>
);

render(<Root />, document.getElementById('root'));
