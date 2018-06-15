import * as React from 'react';

import { Navbar, NavItem } from 'react-materialize';

export default () => (
	<React.Fragment>
		<Navbar brand="Eventy" right>
  			<NavItem href="/login">Login</NavItem>
  			<NavItem href="/register">Register</NavItem>
		</Navbar>
	</React.Fragment>
);
