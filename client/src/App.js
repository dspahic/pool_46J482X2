import React, { Component } from 'react';
import Login from './containers/Login';
import Welcome from './containers/Welcome';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    }
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogin() {
    this.setState({ isSignedIn: true })
  }

  onLogout() {
    this.setState({ isSignedIn: false })
  }
  render() {
    return (
      <div className="App">
        {!this.state.isSignedIn ?
          <Login onLogin={this.onLogin} />
          : <Welcome onLogout={this.onLogout} />}
      </div>

    );
  }
}

export default App;
