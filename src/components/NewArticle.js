import React, { Component } from 'react';

class NewArticle extends Component { 
	constructor() {
		super();
		this.addArticle = this.addArticle.bind(this);
	}

	addArticle(event) {
		event.preventDefault();


      	const title = this.refs.title.value;
      	const description = this.refs.description.value;
      	const link = this.refs.link.value;
      	const image = this.refs.image.value;

		/*fetch(`${config.apiUrl}articles`, {
			method: 'POST',
	        headers: new Headers({
	        }),
	        body: JSON.stringify({ 
	        	title: title, 
	        	description: description,
	        	link: link,
	        	image: image
	        })
		})
			.then((response) => {
				//redirect
			})
			.catch((error) => {
				console.log(error);
			});*/
	}

	render() { 
		return (
			<div>
				<h2 className="page-title">New article</h2>
				<div className="article-form">
				    <form onSubmit={this.addArticle}>
				        <label for="title">Title:</label>
				        <div className="input-wrapper">
				            <input id="title" ref="title" type="text" name="title" required="" placeholder="Title" className="input"/>
				        </div>
				        <label for="description">Description:</label>
				        <div className="input-wrapper">
				            <input id="description" ref="description" type="text" name="description" required="" placeholder="Description" className="input"/>
				        </div>
				        <label for="link">Link:</label>
				        <div className="input-wrapper">
				            <input id="link" def="link" type="text" name="link" required="" placeholder="Link" className="input"/>
				        </div>
				        <label for="image">Image:</label>
				        <div className="input-wrapper">
				            <input id="image" def="image" type="file" name="image" required="" className="file-input"/>
				        </div>
				        <input type="submit" value="Add article" className="button"/>
				    </form>
				</div>
			</div>
		); 
	} 
} 

module.exports = NewArticle;