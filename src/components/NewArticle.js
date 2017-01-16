import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthService from '../services/AuthService';
import ArticleService from '../services/ArticleService';

class NewArticle extends Component { 
	constructor() {
		super();

		this.state = {
			loggedIn: AuthService.loggedIn()
		};
		this.addArticle = this.addArticle.bind(this);
	}

	addArticle(event) {
		event.preventDefault();
		const article = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			link: this.refs.link.value,
			image: this.refs.image.value,
		};
		ArticleService.addArticle(article)
			.then((thing)=> {
				console.log(thing)
			}).catch((thing) => {
				console.log(thing)
			});
	}

	render() { 
		return (
			<div>
			{this.state.loggedIn ? (
				<div>
					<h2 className="page-title">New article</h2>
					<div className="article-form">
					    <form onSubmit={this.addArticle} encType="multipart/form-data">
					        <label htmlFor="title">Title:</label>
					        <div className="input-wrapper">
					            <input id="title" ref="title" type="text" name="title" required="" placeholder="Title" className="input"/>
					        </div>
					        <label htmlFor="description">Description:</label>
					        <div className="input-wrapper">
					            <input id="description" ref="description" type="text" name="description" required="" placeholder="Description" className="input"/>
					        </div>
					        <label htmlFor="link">Link:</label>
					        <div className="input-wrapper">
					            <input id="link" ref="link" type="text" name="link" required="" placeholder="Link" className="input"/>
					        </div>
					        <label htmlFor="image">Image:</label>
					        <div className="input-wrapper">
					            <input id="image" ref="image" type="file" name="image" required="" className="file-input"/>
					        </div>
					        <input type="submit" value="Add article" className="button"/>
					    </form>
					</div>
				</div>
			) : (
				<div>
					You are not logged in.
					<Link to={'/login'}>Login</Link>
				</div>
			)}				
			</div>
		); 
	} 
} 

export default NewArticle;