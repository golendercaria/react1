import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre.js'

class App extends Component {
  render() {
	  return (
		<Fragment>
			<div className="App">
				<header className="gol-App-header">
					<h1>HELLO</h1>
				</header>
			  </div>
			  <hr />
			  <Membre />
	  </Fragment>
    );
  }
}

export default App;
