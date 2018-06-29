import * as React from 'react';
import { Slider, Slide } from 'react-materialize';
import SearchBar from '../features/events/components/SearchBar';
import EventsList from '../features/events/components/EventsList';
import './styles/Events.css';

export default () => (
	<React.Fragment>
		<Slider transition={1500} interval={6500}>
			<Slide src="https://cdn.evbstatic.com/s3-build/perm_001/35d88f/django/images/home/banners/homepage_hero_banner_1.jpg"  />
			<Slide src="https://cdn.evbstatic.com/s3-build/perm_001/aa36c3/django/images/home/banners/homepage_hero_banner_2.jpg" />
			<Slide src="https://cdn.evbstatic.com/s3-build/perm_001/6812b9/django/images/home/banners/homepage_hero_banner_3.jpg" />
			<Slide src="https://cdn.evbstatic.com/s3-build/perm_001/99ca9f/django/images/home/banners/homepage_hero_banner_4.jpg" />
		</Slider>
		<SearchBar/>
		<EventsList/>
	</React.Fragment>
);
