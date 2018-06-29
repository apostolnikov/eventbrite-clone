const Joi = require('joi');

module.exports = {
	validateBody: (schema) => {
		return (req, res, next) => {
			const result = Joi.validate(req.body, schema);
			if (result.error) {
				return res.status(400).json(result.error);
			}

			if (!req.value) { req.value = {}; }
			req.value['body'] = result.value;
			next();
		}
	},

	schemas: {
		authSchema: Joi.object().keys({
			email: Joi.string().email().required(),
			password: Joi.string().required()
		}),
		addEventSchema: Joi.object().keys({
			name: Joi.string().required(),
			eventId: Joi.string().required(),
			userId: Joi.string().required(),
			info: Joi.string(),
			imageUrl: Joi.string().required(),
			segment: Joi.string().required(),
			genre: Joi.string().required()
		}),
		removeEventSchema: Joi.object().keys({
			id: Joi.string().required()
		}),
		getEventByUserIdSchema: Joi.object().keys({
			userId: Joi.string().required()
		})
	}
}