import * as React from 'react';
import SearchBar from '../features/events/components/search-bar';
import EventsList from '../features/events/components/events-list';

export default () => (
	<React.Fragment>
		<SearchBar/>
		<EventsList/>
	</React.Fragment>
);
