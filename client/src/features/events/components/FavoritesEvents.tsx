import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { eventsActions } from '../';
import { Card, CardTitle, Chip, Button, ProgressBar } from 'react-materialize';
import { getEventInfo } from '../../../helpers/selectors';
import './styles/EventsList.css';

type Props = {
    getFavoriteEvents: (userId: string) => any;
    removeEventFromFavorites: (id: string) => any;
    events: any[];
    userId: string;
    isLoading: boolean;
};

class FavoritesEvents extends React.Component<Props, {}> {

    componentDidMount() {
        if (this.props.userId) {
            this.props.getFavoriteEvents(this.props.userId);
        }
    }

    removeEventFromFavorites = (event) => {
        return this.props.removeEventFromFavorites(event._id);
    }

	render() {
        const { events, isLoading } = this.props;

		return (
            <div className="favoritesEventsListContainer">
                {events.length === 0 && !isLoading &&
                    <h2>There are no events added to your favorites list!</h2>
                }
                {isLoading &&
                    <ProgressBar large />
                }
                { events.map((event) =>
                    <Card
                        key={event._id}
                        className="card"
                        header={<CardTitle image={event.imageUrl}>{event.name}</CardTitle>}
                    >
                        <span className="card-text">{getEventInfo(event)}</span>
                        <Chip>#{event.segment}</Chip>
                        <Chip>#{event.genre}</Chip>
                        <Button floating small className="removeButton" waves="light" icon="clear" onClick={() => this.removeEventFromFavorites(event)} />
                    </Card>
                )}
            </div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
    events: state.events['favorites'],
    isLoading: state.events['isLoading'],
    userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
    getFavoriteEvents: (userId: string) => dispatch(eventsActions.getEventsByUserId(userId)),
    removeEventFromFavorites: (id: string) => dispatch(eventsActions.removeFavoritesEventById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesEvents);
