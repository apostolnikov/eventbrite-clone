import { ActionType } from 'typesafe-actions';

import { Event } from './models';
import * as actions from './actions';

export type EventsAction = ActionType<typeof actions>;

export type EventsState = Readonly<{
	events: Event[];
}>;

export default function reducer(state: Event[] = [], action: EventsAction) {
	switch (action.type) {
		case actions.GET_ALL_EVENTS:
			return [...state, action.payload];
		default:
			return state;
	}
}
