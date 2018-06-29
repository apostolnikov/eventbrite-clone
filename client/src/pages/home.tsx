import * as React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { checkAuth } from '../helpers/checkAuth';
import { Link } from 'react-router-dom';
import './styles/Home.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../helpers/ProtectedRoute';
import Events from './Events';
import LoginForm from '../features/userAuth/components/LoginForm';
import RegisterForm from '../features/userAuth/components/RegisterForm';
import FavoritesEvents from '../features/events/components/FavoritesEvents';

const logout = () => localStorage.removeItem('state');

export default () => (
	<div>
		<Navbar className="homePageNavbar" brand="Eventy" right>
		{ !checkAuth() ?
			<div>
				<NavItem><Link to="/login">Login</Link></NavItem>
				<NavItem><Link to="/register">Register</Link></NavItem>
			</div>
			:
			<div>
				<NavItem><Link to="/favorites">My Favorites</Link></NavItem>
				<NavItem onClick={logout}><Link to="/login">Logout</Link></NavItem>
			</div>
		}
		</Navbar>
		<Switch>
			<Route path="/events" component={Events} />
			<Route path="/register" component={RegisterForm} />
			<Route path="/login" component={LoginForm} />
			<ProtectedRoute path="/favorites" component={FavoritesEvents}/>
			<Redirect to="/events"/>
		</Switch>
	</div>
);
