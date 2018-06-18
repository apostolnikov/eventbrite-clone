import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { usersActions } from '../';
import { Button, Icon } from 'react-materialize';
import './styles/forms.css';

type Props = {
	loginUser: (username: string, password: string) => any;
};

type State = {
	username: string;
	password: string;
};

class LoginForm extends React.Component<Props, State> {
	readonly state: Readonly<State> = {
		username: '',
		password: ''
	};

	handleFieldChange = (ev: React.FormEvent<HTMLInputElement>) => {
		const { name, value }: any = ev.target;
		this.setState({ [name]: value });
	};

	handleLogin = () => {
		this.props.loginUser(this.state.username, this.state.password);
	};

	render() {
		const { username, password } = this.state;

		return (
			<form className="userAuthForm">
				<input
					type="text"
					name="username"
					placeholder="Username: "
					value={username}
					onChange={this.handleFieldChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password: "
					value={password}
					onChange={this.handleFieldChange}
				/>
				<Button waves="light" onClick={this.handleLogin}>Login<Icon left>input</Icon></Button>
			</form>
		);
	}
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
	loginUser: (username: string, password: string) =>
					usersActions.login(username, password)
})(LoginForm);
