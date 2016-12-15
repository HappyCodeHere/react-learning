import React, { Component } from 'react';

class Registration extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="registration">
				<form>
					E-mail:
					<input />

					Пароль
					<input />

					<button> Зарегистрироваться </button>
				</form>	
			</div>
		)
	}
}


export default Registration;