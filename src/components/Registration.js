import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../configs/config.json';

class Registration extends Component { 
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

      	const username = this.refs.username.value;
      	const password = this.refs.password.value;

      	this.register(username, password);
	}

	register(event) {
		fetch(`${config.apiUrl}users/create`)
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
		        <h2 className="page-title">Registration</h2>
		        <div className="login-form">
			        <form onSubmit={this.register}>
			            <div className="input-wrapper">
			            	<input id="username" ref="username" className="input" type='text' name='username' required=''/>
			            </div>
			            <div className="input-wrapper">
			            	<input id="password" className="input" ref="password" type='password' name='password' required='' placeholder='Password'/>
			            </div>
			          	<input className="button" type='submit' value='Registration'/>
			        </form>
		        </div>
		      	<p>
		      		<Link to={'/Login'}>or login</Link>
		      	</p>
		    </div>
		); 
	} 
} 

module.exports = Registration;