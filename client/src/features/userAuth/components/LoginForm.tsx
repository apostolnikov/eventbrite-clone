import * as React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../store/store';

import { RootState } from '../../../store';
import { usersActions } from '../';
import { GoogleLogin } from 'react-google-login';
import { Button, Icon } from 'react-materialize';
import './styles/Forms.css';

type Props = {
	loginUser: (email: string, password: string) => any;
	loginUserWithGoogle: (accessToken: string) => any;
	errorMessage: string;
};

type State = {
	email: string;
	password: string;
};

class LoginForm extends React.Component<Props, State> {
	readonly state: Readonly<State> = {
		email: '',
		password: ''
	};

	handleFieldChange = (ev: React.FormEvent<HTMLInputElement>) => {
		const { name, value }: any = ev.target;
		this.setState({ [name]: value });
	};

	handleLogin = () => {
		this.props.loginUser(this.state.email, this.state.password).then((res) => {
			if (res.value.status === 200) {
				history.push('/events');
			}
		 });
	};

	responseGoogle = (res) => {
		this.props.loginUserWithGoogle(res.accessToken).then((res) => {
			if (res.value.status === 200) {
				history.push('/events');
			}
		 });
	}

	render() {
		const { email, password } = this.state;
		const { errorMessage } = this.props;

		return (
			<div className="userAuthFormLogin">
				<form>
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
				</form>
				<Button waves="light" onClick={this.handleLogin}>Login<Icon left>input</Icon></Button>
				<GoogleLogin
					clientId="118961582725-vi8k0pi7el49h02j67trm99crqlp31lg.apps.googleusercontent.com"
					buttonText="Sign in with Google"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>
				<p className="errorMessage">{errorMessage}</p>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	errorMessage: state.user['error']
});

export default connect(mapStateToProps, {
	loginUser: (email: string, password: string) =>
					usersActions.login(email, password),
	loginUserWithGoogle: (accessToken: string) =>
					usersActions.loginWithGoogle(accessToken)
})(LoginForm);
