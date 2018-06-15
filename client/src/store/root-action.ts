import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { UsersAction } from '../features/userAuth';
import { EventsAction } from '../features/events';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | UsersAction | EventsAction;
