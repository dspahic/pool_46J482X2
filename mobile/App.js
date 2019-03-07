import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LoginScreen from './containers/LoginScreen';
import WelcomeScreen from '.containers/WelcomeScreen';


export default class App extends Component {
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
      this.state.isSignedIn ?
        <WelcomeScreen onLogout={this.onLogout} /> :
        <LoginScreen onLogin={this.onLogin} />
    );
  }
}


