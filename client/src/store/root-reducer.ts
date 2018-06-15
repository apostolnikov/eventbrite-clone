import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

import { usersReducer } from '../features/userAuth';
import { eventsReducer } from '../features/events';

const rootReducer = combineReducers({
	router: routerReducer,
	users: usersReducer,
	events: eventsReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
