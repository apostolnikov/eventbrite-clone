import { action } from 'typesafe-actions';
import axios from 'axios';

// types
export const REGISTER = 'users/REGISTER';
export const LOGIN = 'users/LOGIN';
export const LOGIN_WITH_GOOGLE = 'users/LOGIN_WITH_GOOGLE';

// creators
export const register = (email: string, password: string) =>
action(
	REGISTER,
	axios.post('/users/signup', {
			email: email,
			password: password
		}
	).then((res) => { return res; } )
);

export const login = (email: string, password: string) =>
action(
	LOGIN,
	axios.post('/users/signin', {
			email: email,
			password: password
		}
	).then((res) => { return res; } )
);

export const loginWithGoogle = (accessToken: string) =>
action(
	LOGIN_WITH_GOOGLE,
	axios.post('/users/oauth/google', {
			access_token: accessToken
		}
	).then((res) => { return res; } )
);
