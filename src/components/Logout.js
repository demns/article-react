import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthService from '../services/AuthService';

class Logout extends Component { 
	componentDidMount() {
    	AuthService.logout();
  	}

	render() { 
		return (
		    <div>
		        <p>You are now logged out</p>
		        <Link to={'/'}>Home page</Link>
		    </div>
		); 
	} 
} 

export default Logout;