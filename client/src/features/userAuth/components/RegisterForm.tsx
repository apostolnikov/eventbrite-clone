import * as React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../store/store';

import { RootState } from '../../../store';
import { usersActions } from '../';
import { Button, Icon } from 'react-materialize';
import './styles/Forms.css';

type Props = {
	registerUser: (email: string, password: string) => any;
	errorMessage: string;
};

type State = {
	email: string;
	password: string;
};

class RegisterForm extends React.Component<Props, State> {
	readonly state: Readonly<State> = {
		email: '',
		password: ''
	};

	handleFieldChange = (ev: React.FormEvent<HTMLInputElement>) => {
		const { name, value }: any = ev.target;
		this.setState({ [name]: value });
	};

	handleRegister = () => {
		this.props.registerUser(this.state.email, this.state.password).then((res) => {
			if (res.value.status === 200) {
				history.push('/events');
			}
		 });
	};

	render() {
		const { email, password } = this.state;
		const { errorMessage } = this.props;

		return (
			<div className="userAuthFormRegister">
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
				<Button waves="light" onClick={this.handleRegister}>Register<Icon left>person_pin</Icon></Button>
				<p className="errorMessage">{errorMessage}</p>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	errorMessage: state.user['error']
});

export default connect(mapStateToProps, {
	registerUser: (email: string, password: string) =>
					usersActions.register(email, password)
})(RegisterForm);
