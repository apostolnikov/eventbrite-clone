const express = require('express');
const router = require('express-promise-router')();

const { validateBody, schemas } = require('../helpers/routeHelpers');
const EventsController = require('../controllers/events');

router.route('/add')
	.post(validateBody(schemas.addEventSchema), EventsController.add);

router.route('/remove')
	.post(validateBody(schemas.removeEventSchema), EventsController.remove);

router.route('/getByUserId')
	.post(validateBody(schemas.getEventByUserIdSchema), EventsController.getByUserId);

module.exports = router;