import { ActionType } from 'typesafe-actions';

import { Event } from './models';
import * as actions from './actions';

export type EventsAction = ActionType<typeof actions>;

export type EventsState = Readonly<{
	featured: Event[];
	favorites: Event[];
}>;

export default function reducer(state: EventsState = {featured: [], favorites: []}, action: EventsAction) {
	switch (action.type) {
		case `${actions.GET_ALL_EVENTS}_FULFILLED`:
			return {...state, featured: action.payload};

		case `${actions.SEARCH_FILTERED_EVENTS}_FULFILLED`:
			return {...state, featured: action.payload};

		case `${actions.GET_EVENTS_BY_USER_ID}_FULFILLED`:
			return {...state, favorites: action.payload};

		case `${actions.REMOVE_FAVORITES_EVENT_BY_ID}_FULFILLED`:
			return {...state, favorites: state.favorites.filter((e) => e['_id'] !== action.payload['id'])};

		default:
			return state;
	}
}
