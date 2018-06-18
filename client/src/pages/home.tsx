import * as React from 'react';

import { Navbar, NavItem } from 'react-materialize';
import Events from './events';
import './styles/home.css';

export default () => (
	<React.Fragment>
		<Navbar className="homePageNavbar" brand="Eventy" right>
  			<NavItem href="/login">Login</NavItem>
  			<NavItem href="/register">Register</NavItem>
		</Navbar>
		<Events/>
	</React.Fragment>
);
