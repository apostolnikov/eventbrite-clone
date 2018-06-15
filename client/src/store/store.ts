import { createStore, applyMiddleware, compose } from 'redux';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './root-reducer';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const history = createBrowserHistory();

function configureStore(initialState?: {}) {
	// configure middlewares
	const middlewares = [thunk, promise(), routerMiddleware(history)];
	// compose enhancers
	const enhancer = composeEnhancers(applyMiddleware(...middlewares));
	// create store
	return createStore(connectRouter(history)(rootReducer), initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
