import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { eventsActions } from '../';
import { getEventImage,
        getEventSegment,
        getEventGenre,
        getEventInfo,
        getEventPrice,
        getEventVenueCity } from '../../../helpers/selectors';
import { Card, CardTitle, Chip, Toast, Icon } from 'react-materialize';

type Props = {
    event: any;
    userId: string;
    addToUserFavorites: (name: string, eventId: string,
        userId: string, info: string, imageUrl: string, segment: string, genre: string) => any;
    isInFavorites?: boolean;
};

class Event extends React.Component<Props, {}> {

    addEventToFavorites = (e) => {
        return this.props.addToUserFavorites(
            e.name, e.id, this.props.userId, e.info, getEventImage(e), getEventSegment(e), getEventGenre(e)
        );
    }

    render() {
        const { event, userId } = this.props;
        return (
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
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
    addToUserFavorites: (name: string, eventId: string, userId: string, info: string, imageUrl: string, segment: string, genre: string) =>
                        dispatch(eventsActions.addEventToUserFavorites(name, eventId, userId, info, imageUrl, segment, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
