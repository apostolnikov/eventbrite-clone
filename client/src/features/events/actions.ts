import { action } from 'typesafe-actions';
import axios from 'axios';

// types
export const GET_ALL_EVENTS = 'events/GET_ALL_EVENTS';
export const SEARCH_FILTERED_EVENTS = 'events/SEARCH_FILTERED_EVENTS';
export const GET_EVENTS_BY_USER_ID = 'events/GET_EVENTS_BY_USER_ID';
export const ADD_EVENT_TO_USER_FAVORITES = 'events/ADD_EVENT_TO_USER_FAVORITES';
export const REMOVE_FAVORITES_EVENT_BY_ID = 'events/REMOVE_FAVORITES_EVENT_BY_ID';

// creators
export const getAllEvents = () =>
action(
	GET_ALL_EVENTS,
	axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0')
	.then((res) => {
		if (!res.data._embedded.events) {
			return [];
		}
		return res.data._embedded.events;
	})
);

export const searchFilteredEvents = (name?: string, city?: string, startDate?: string) =>
action(
	SEARCH_FILTERED_EVENTS,
	axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0', {
		params: {
			city: city,
			startDateTime: startDate ? `${startDate}T14:00:00Z` : ''
		}
	}).then((res) => {
		if (!res.data._embedded.events) {
			return [];
		} else if (name) {
			return res.data._embedded.events.filter((e) => e.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
		}
		return res.data._embedded.events;
	})
);

export const getEventsByUserId = (userId: string) =>
action(
	GET_EVENTS_BY_USER_ID,
	axios.post('/events/getByUserId', {
		userId: userId
	}).then((res) => { return res.data; })
);

export const addEventToUserFavorites = (
	name: string, eventId: string, userId: string, info: string, imageUrl: string, segment: string, genre: string
) =>
action(
	ADD_EVENT_TO_USER_FAVORITES,
	axios.post('/events/add', {
		name: name,
		eventId: eventId,
		userId: userId,
		info: info,
		imageUrl: imageUrl,
		segment: segment,
		genre: genre
	}).then((res) => { return res.data; })
);

export const removeFavoritesEventById = (id: string) =>
action(
	REMOVE_FAVORITES_EVENT_BY_ID,
	axios.post('/events/remove', {
		id: id
	}).then((res) => { return {id: id, res: res.data}; })
);
