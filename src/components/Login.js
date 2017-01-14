import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../configs/config.json';

class Login extends Component { 
	constructor() {
		super();

		this.login = this.login.bind(this);
	}

	login(event) {
		event.preventDefault();

      	const username = this.refs.username.value;
      	const password = this.refs.password.value;

		fetch(`${config.apiUrl}login`, {
			method: 'POST',
	        headers: new Headers({
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        }),
	        body: JSON.stringify({ username: username, password: password})
		})
			.then((response) => {
				//redirect
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() { 
		return (
		    <div>
		        <h2 className="page-title">Login</h2>
		        <div className="login-form">
			        <form onSubmit={this.login}>
			            <div className="input-wrapper">
			            	<input id="username" ref="username" className="input" type='text' name='username' required=''/>
			            </div>
			            <div className="input-wrapper">
			            	<input id="password" className="input" ref="password" type='password' name='password' required='' placeholder='Password'/>
			            </div>
			          	<input className="button" type='submit' value='Login'/>
			        </form>
		        </div>
		      	<p>
		      		<Link to={'/registration'}>Registration</Link>
		      	</p>
		    </div>
		); 
	} 
} 

module.exports = Login;