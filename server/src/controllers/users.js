const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration');

signToken = user => {
	return JWT.sign({
		iss: 'EventbriteClone',
		sub: user.id,
		iat: new Date().getTime(), // current time
		exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
	}, JWT_SECRET);
}

module.exports = {
	signUp: async (req, res, next) => {
		const { email, password } = req.value.body;

		// Check if there is a user with the same email
		const foundUser = await User.findOne({ "local.email": email });
		if (foundUser) {
			return res.status(403).json({ error: 'Email is already in use' });
		}

		// Create a new user
		const newUser = new User({
			method: 'local',
			local: {
				email: email,
				password: password
			}
		});

		await newUser.save();

		// Generate the token
		const token = signToken(newUser);
		// Respond with token
		res.status(200).json({ token, id: newUser._id, method: newUser.method, email: newUser.local.email });
	},

	signIn: async (req, res, next) => {
		// Generate token
		const { email } = req.value.body;
		const user = await User.findOne({ "local.email": email });
		const token = signToken(req.user);
		res.status(200).json({ token, id: user._id, method: user.method, email: user.local.email });
	},
	
	googleOAuth: async (req, res, next) => {
		// Generate token
		const token = signToken(req.user);
		res.status(200).json({ token, id: req.user._id, method: req.user.method, email: req.user.google.email });
	}
}