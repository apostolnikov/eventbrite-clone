import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './root-reducer';
import { loadFromLocalStorage, saveToLocalStorage } from '../helpers/localStorageHelpers';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const history = createBrowserHistory();
const persistedState = loadFromLocalStorage();

function configureStore(initialState?: {}) {
	// configure middlewares
	const middlewares = [thunk, promise(), routerMiddleware(history)];
	// compose enhancers
	const enhancer = composeEnhancers(applyMiddleware(...middlewares));
	// create store
	return createStore(connectRouter(history)(rootReducer), persistedState || initialState!, enhancer);
}

const store = configureStore();

// save the user state to localStorage and then on createStore we will hydrate it with the localStorage value
store.subscribe(() => saveToLocalStorage(
	store.getState()['user']['error']
	? { user: {} }
	: { user: store.getState()['user'] })
);

export default store;
