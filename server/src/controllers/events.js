const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
	add: async (req, res, next) => {
        const { name, eventId, userId, info, imageUrl, segment, genre } = req.value.body;

		//Check if there is a user with the same userId
		const foundUser = await User.findOne({ "_id": userId });
		if (!foundUser) {
			return res.status(404).json({ error: `User with id: ${userId} not found!` });
        }

        const duplicateEvent = await Event.findOne({ "userId": userId, "eventId": eventId });
        if (duplicateEvent) {
            return res.status(403).json({ error: `Duplicate event!` });
        }

		// Create a new event
		const newEvent = new Event({
            name: name,
            eventId: eventId,
            userId: userId,
            info: info,
			imageUrl: imageUrl,
			segment: segment,
			genre: genre
        });

        await newEvent.save();

		// Respond
		res.status(200).json({event: 'Created successfully!'});
    },

    remove: async (req, res, next) => {
        const { id } = req.value.body;

		await Event.remove({ "_id": id }, function(err) {
            if (err) {
                return res.status(404).json({ error: `Event with id: ${id} not found!` });
            } else {
                res.status(200).json({event: 'Removed successfully!'});
            }
        });
    },

    getByUserId: async (req, res, next) => {
        const { userId } = req.value.body;

		const events = await Event.find({ "userId": userId }, function(err) {
            if (err) {
                return res.status(404).json({ error: `There are no events with user id: ${userId}!` });
            }
        });

        res.status(200).json(events);
	}
}