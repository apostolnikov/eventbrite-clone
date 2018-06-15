import { action } from 'typesafe-actions';
import axios from 'axios';

// types
export const REGISTER = 'users/REGISTER';
export const LOGIN = 'users/LOGIN';

// creators
export const register = (firstName: string, lastName: string, username: string, email: string, password: string) =>
	action(
		REGISTER,
		axios.post('/users/', {
			  firstName: firstName,
			  lastName: lastName,
			  username: username,
			  email: email,
			  password: password
			}
		)
	);

export const login = (username: string, password: string) =>
	action(
		LOGIN,
		axios.get('/users/', {
			params: {
			  username: username,
			  password: password
			}
		  }
		)
	);
