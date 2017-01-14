import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <h1 className="site-header__logo">News</h1>
          </header>
          <div className="site-content">
              {this.props.children} 
          </div>   
      </div>
    );
  }
}

export default App;
