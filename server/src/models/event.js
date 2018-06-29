const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const eventSchema = new Schema({
	name: {
		type: String,
		required: true
    },
    eventId: {
        type: String,
		required: true
    },
	userId: {
        type: String,
		required: true
    },
    info: {
        type: String,
		required: false
    },
    imageUrl: {
        type: String,
		required: true
    },
    segment: {
        type: String,
		required: true
    },
    genre: {
        type: String,
		required: true
	}
});

// Create a model
const Event = mongoose.model('event', eventSchema);

// Export the model
module.exports = Event;