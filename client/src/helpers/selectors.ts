// event selectors
export const getEventImage = (e) => e.images[0].url;
export const getEventClassifications = (e) => e.classifications[0];
export const getEventSegment = (e) => getEventClassifications(e).segment.name;
export const getEventInfo = (e) => e.info || 'Currently there is no info for this event';
export const getEventGenre = (e) => getEventClassifications(e).genre.name;
export const getEventVenue = (e) => e._embedded.venues[0];
export const getEventVenueName = (e) => getEventVenue(e).name;
export const getEventVenueAddress = (e) => getEventVenue(e).address.line1;
export const getEventVenueCity = (e) => getEventVenue(e).city.name;
export const getEventVenueCountry = (e) => getEventVenue(e).country.name;
export const getEventStartDateTime = (e) => e.dates.start.dateTime;
export const getEventPrice = (e) => e.priceRanges
    ? `${e.priceRanges[0].currency} ${e.priceRanges[0].min} - ${e.priceRanges[0].max}` : 'FREE';

// auth selectors
export const getResData = (v) => v.data;
export const getToken = (v) => v ? v.user.token : undefined;
export const getErrorMessage = (res) =>  {
    if (res.response) {
        if (res.response.data.name) {
            return `${res.response.data.name}: ${res.response.data.details[0].message}!`;
        } else if (res.response.data.error) {
            return `${res.response.data.error}!`;
        } else if (res.response.data) {
            return `${res.response.data}!`;
        }
    }
    return '';
};
