const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const config = require('./configuration');
const User = require('./models/user');

// Google OAuth Strategy
passport.use('googleToken', new GooglePlusTokenStrategy({
	clientID: config.oauth.google.clientID,
	clientSecret: config.oauth.google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
	try {
		const existingUser = await User.findOne({ "google.id": profile.id });
		if (existingUser) {
			return done(null, existingUser);
		}

		const newUser = new User({
			method: 'google',
			google: {
				id: profile.id,
				email: profile.emails[0].value
			}
		});

		await newUser.save();
		done(null, newUser);
	} catch (error) {
		done(error, false, error.message);
	}
}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
	usernameField: 'email'
}, async (email, password, done) => {
	try {
		// Find the user given the email
		const user = await User.findOne({ "local.email": email });

		// If not, handle it
		if (!user) {
			return done(null, false);
		}

		// Check if the password is correct
		const isMatch = await user.isValidPassword(password);

		// If not, handle it
		if (!isMatch) {
			return done(null, false);
		}

		// Otherwise, return the user
		done(null, user);
	} catch (error) {
		done(error, false);
	}
}));