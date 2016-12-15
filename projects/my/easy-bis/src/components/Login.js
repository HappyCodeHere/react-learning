import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="login">
				<form>
					E-mail:
					<input />

					Пароль
					<input />

					<button> Войти </button>
				</form>	
			</div>
		)
	}
}


export default Login;