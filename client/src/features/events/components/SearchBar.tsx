import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { eventsActions } from '../';
import { Button, Icon } from 'react-materialize';
import './styles/SearchBar.css';

type Props = {
    searchEvents: (name: string, city: string, startDate: string) => any;
};

type State = {
    name: string;
    city: string;
    startDate: string;
};

class SearchBar extends React.Component<Props, State> {
	readonly state: Readonly<State> = {
		name: '',
        city: '',
        startDate: ''
	};

	handleFieldChange = (ev: React.FormEvent<HTMLInputElement>) => {
		const { name, value }: any = ev.target;
		this.setState({ [name]: value });
	};

	handleSearch = () => {
        this.props.searchEvents(this.state.name, this.state.city, this.state.startDate);
	};

	render() {
		const { name, city, startDate } = this.state;

		return (
            <div className="searchBarContainer">
                <span className="searchBarTitle">Find your next experience</span>
                <div className="searchBarForm">
                    <form>
                        <input
                            className="searchBarInput"
                            type="text"
                            name="name"
                            placeholder="Event name: "
                            value={name}
                            onChange={this.handleFieldChange}
                        />
                        <input
                            className="searchBarInput"
                            type="text"
                            name="city"
                            placeholder="City: "
                            value={city}
                            onChange={this.handleFieldChange}
                        />
                        <input
                            className="searchBarInput"
                            type="text"
                            name="startDate"
                            placeholder="After: YYYY-MM-DD"
                            value={startDate}
                            onChange={this.handleFieldChange}
                        />
                    </form>
                    <Button waves="light" onClick={this.handleSearch}><Icon left>search</Icon></Button>
                </div>
            </div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
    searchEvents: (name?: string, city?: string, startDate?: string) => eventsActions.searchFilteredEvents(name, city, startDate)
})(SearchBar);
