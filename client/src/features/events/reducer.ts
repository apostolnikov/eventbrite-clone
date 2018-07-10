import { ActionType } from 'typesafe-actions';

import { Event } from './models';
import * as actions from './actions';

export type EventsAction = ActionType<typeof actions>;

export type EventsState = Readonly<{
	featured: Event[];
	favorites: Event[];
	isLoading: boolean;
}>;

export default function reducer(state: EventsState = {featured: [], favorites: [], isLoading: false}, action: EventsAction) {
	switch (action.type) {
		case `${actions.GET_ALL_EVENTS}_FULFILLED`:
			return {...state, featured: action.payload, isLoading: false};

		case `${actions.SEARCH_FILTERED_EVENTS}_FULFILLED`:
			return {...state, featured: action.payload, isLoading: false};

		case `${actions.GET_EVENTS_BY_USER_ID}_FULFILLED`:
			return {...state, favorites: action.payload, isLoading: false};

		case `${actions.REMOVE_FAVORITES_EVENT_BY_ID}_FULFILLED`:
			return {...state, favorites: state.favorites.filter((e) => e['_id'] !== action.payload['id']), isLoading: false};

		// loading state, status reducer for the calls will be created eventually
		case `${actions.GET_ALL_EVENTS}_PENDING`:
			return {...state, isLoading: true};
		case `${actions.SEARCH_FILTERED_EVENTS}_PENDING`:
			return {...state, isLoading: true};
		case `${actions.GET_EVENTS_BY_USER_ID}_PENDING`:
			return {...state, isLoading: true};
		default:
			return state;
	}
}
