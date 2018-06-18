import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { usersActions } from '../';
import { Button, Icon } from 'react-materialize';

type Props = {
	registerUser: (firstName: string, lastName: string, username: string, email: string, password: string) => any;
};

type State = {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
};

class RegisterForm extends React.Component<Props, State> {
	readonly state: Readonly<State> = {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: ''
	};

	handleFieldChange = (ev: React.FormEvent<HTMLInputElement>) => {
		const { name, value }: any = ev.target;
		this.setState({ [name]: value });
	};

	handleRegister = () => {
		this.props.registerUser(this.state.firstName, this.state.lastName, this.state.username, this.state.email, this.state.password);
	};

	render() {
		const { firstName, lastName, username, email, password } = this.state;

		return (
			<form className="userAuthForm">
				<input
					type="text"
					name="firstName"
					placeholder="Enter your first name: "
					value={firstName}
					onChange={this.handleFieldChange}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Enter your last name: "
					value={lastName}
					onChange={this.handleFieldChange}
				/>
				<input
					type="text"
					name="username"
					placeholder="Username: "
					value={username}
					onChange={this.handleFieldChange}
				/>
				<input
					type="text"
					name="email"
					placeholder="Email: "
					value={email}
					onChange={this.handleFieldChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password: "
					value={password}
					onChange={this.handleFieldChange}
				/>
				<Button waves="light" onClick={this.handleRegister}>Register<Icon left>person_pin</Icon></Button>
			</form>
		);
	}
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
	registerUser: (firstName: string, lastName: string, username: string, email: string, password: string) =>
					usersActions.register(firstName, lastName, username, email, password)
})(RegisterForm);
