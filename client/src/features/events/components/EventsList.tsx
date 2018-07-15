import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { eventsActions } from '../';
import Event from './Event';
import { ProgressBar } from 'react-materialize';
import './styles/EventsList.css';

type Props = {
    getAllEvents: () => any;
    events: any[];
    isLoading: boolean;
};

class EventsList extends React.Component<Props, {}> {

    componentDidMount() {
        this.props.getAllEvents();
    }

	render() {
        const { events, isLoading } = this.props;

		return (
            <div className="eventsListContainer">
                {events.length === 0 && !isLoading &&
                    <h2>No events found!</h2>
                }
                {isLoading &&
                    <ProgressBar large />
                }
                { events.map((event) =>
                    <Event key={event.id} event={event}/>
                )}
            </div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
    events: state.events['featured'],
    isLoading: state.events['isLoading']
});

const mapDispatchToProps = dispatch => ({
    getAllEvents: () => dispatch(eventsActions.getAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
