// import * as React from 'react';
// import { getEventImage, getEventSegment, getEventGenre } from '../helpers/selectors';
// import { Card, CardTitle, Chip } from 'react-materialize';

// type Props = {
//     event: any;
//     isInFavorites?: boolean;
// };

// addEventToFavorites = (e) => {
//     return this.props.addToUserFavorites(
//         e.name, e.id, this.props.userId, e.info, getEventImage(e), getEventSegment(e), getEventGenre(e)
//     );
// }

// export const Event: React.SFC<Props> = (props) => {
//     const { event, isInFavorites } = props;

//     return (
//         <Card
//             key={event.id}
//             className="card"
//             header={<CardTitle image={getEventImage(event)}>{event.name}</CardTitle>}
//         >
//             <span className="card-text">{event.info}</span>
//             <Chip>#{getEventSegment(event)}</Chip>
//             <Chip>#{getEventGenre(event)}</Chip>
//             {userId && !isInFavorites &&
//                 <span onClick={() => this.addEventToFavorites(event)} className="chip favoriteChip">
//                     <Toast toast="Successfully added!"><Icon tiny>favorite</Icon></Toast>
//                 </span>
//             }
//         </Card>
//     );
// }
