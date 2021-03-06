import React, { Component } from 'react';
import config from '../configs/config.json';
import { Link } from 'react-router';
import AuthService from '../services/AuthService';

class Articles extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loggedIn: AuthService.loggedIn()
        };
    }

    componentDidMount() {
        fetch(`${config.apiUrl}articles`)
            .then((response) => response.json())
            .then((articles) => {
                this.setState({
                    articles: articles
                });
            });
    }

    render() {
      return (
        <div>
          {!this.state.loggedIn ? (
              <Link to={'/login'}>Login</Link>
          ) : (
              <div>
                  <Link to={'/new-article'}>Add new article</Link>
                  <Link to={'/logout'}>Logout</Link>
              </div>
          )}
          <h2 className="page-title">Last article</h2>
          <ul className="article-list">
          {this.state.articles.map((article, index) => {
            return <li className="article-list__item" key={index}>
                <h2 className="article-list__item__title">{article.title}</h2>
                 <p className="article-list__item__description">{article.description}</p>
                      <a className="article-list__item__link" href={article.link}>Read more...</a>
                      <img className="article-list__item__image" src='../uploads/{article.imageHash}' alt='alt' />
                      <span className="article-list__item__author">{article.author}</span>
                      <span className="article-list__item__date">{article.creation_date.toString()}</span>
                </li>
            })}
          </ul>
        </div>
      );
    }
}

export default Articles;