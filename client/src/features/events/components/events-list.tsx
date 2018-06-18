import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { eventsActions } from '../';
import { getEventImage, getEventSegment, getEventGenre } from '../../../helpers/selectors';
import { Card, CardTitle, Chip } from 'react-materialize';
import './styles/events-list.css';

type Props = {
    getAllEvents: () => any;
    events: any[];
};

class EventsList extends React.Component<Props, {}> {

    componentDidMount() {
        this.props.getAllEvents();
    }

	render() {
        const { events } = this.props;
		return (
            <div className="eventsListContainer">
                { events.map((event) =>
                    <Card
                        key={event.id}
                        className="card"
                        header={<CardTitle image={getEventImage(event)}>{event.name}</CardTitle>}
                    >
                        <span className="card-text">{event.info}</span>
                        <Chip>#{getEventSegment(event)}</Chip>
                        <Chip>#{getEventGenre(event)}</Chip>
                    </Card>
                )}
            </div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
    events: state.events
});

const mapDispatchToProps = dispatch => ({
    getAllEvents: () => dispatch(eventsActions.getAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
