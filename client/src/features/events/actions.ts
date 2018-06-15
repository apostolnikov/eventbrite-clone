import { action } from 'typesafe-actions';
import axios from 'axios';

// types
export const GET_ALL_EVENTS = 'events/GET_ALL_EVENTS';

// creators
export const getAllEvents = () =>
	action(
		GET_ALL_EVENTS,
		axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0')
	);
