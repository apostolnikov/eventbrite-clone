import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { eventsActions } from '../';
import { getEventImage, getEventSegment, getEventGenre, getEventInfo, getEventPrice, getEventVenueCity } from '../../../helpers/selectors';
import { Card, CardTitle, Chip, Icon, Toast } from 'react-materialize';
import './styles/EventsList.css';

type Props = {
    getAllEvents: () => any;
    addToUserFavorites: (name: string, eventId: string,
                        userId: string, info: string, imageUrl: string, segment: string, genre: string) => any;
    events: any[];
    userId: string;
};

class EventsList extends React.Component<Props, {}> {

    componentDidMount() {
        this.props.getAllEvents();
    }

    addEventToFavorites = (e) => {
        return this.props.addToUserFavorites(
            e.name, e.id, this.props.userId, e.info, getEventImage(e), getEventSegment(e), getEventGenre(e)
        );
    }

	render() {
        const { events, userId } = this.props;

		return (
            <div className="eventsListContainer">
                {events.length === 0 &&
                    <h2>No events found!</h2>
                }
                { events.map((event) =>
                    <Card
                        key={event.id}
                        className="card"
                        header={<CardTitle image={getEventImage(event)}>{event.name}</CardTitle>}
                    >
                        <span className="card-text">{getEventInfo(event)}</span>
                        <span className="eventPrice">{getEventPrice(event)}</span>
                        <Chip>#{getEventVenueCity(event)}</Chip>
                        <Chip>#{getEventSegment(event)}</Chip>
                        <Chip>#{getEventGenre(event)}</Chip>
                        {userId &&
                            <span onClick={() => this.addEventToFavorites(event)} className="chip favoriteChip">
                                <Toast toast="Successfully added!"><Icon tiny>favorite</Icon></Toast>
                            </span>
                        }
                    </Card>
                )}
            </div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
    events: state.events['featured'],
    userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
    getAllEvents: () => dispatch(eventsActions.getAllEvents()),
    addToUserFavorites: (name: string, eventId: string, userId: string, info: string, imageUrl: string, segment: string, genre: string) =>
                        dispatch(eventsActions.addEventToUserFavorites(name, eventId, userId, info, imageUrl, segment, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
