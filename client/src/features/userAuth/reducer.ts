import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { getResData } from '../../helpers/selectors';

export type UsersAction = ActionType<typeof actions>;

export type UsersState = Readonly<{}>;

export default function reducer(state: UsersState = {}, action: UsersAction) {
	switch (action.type) {
		case `${actions.REGISTER}_FULFILLED`:
			return getResData(action.payload);

		case `${actions.LOGIN}_FULFILLED`:
			return getResData(action.payload);

		case `${actions.LOGIN_WITH_GOOGLE}_FULFILLED`:
			return getResData(action.payload);

		default:
			return state;
	}
}
