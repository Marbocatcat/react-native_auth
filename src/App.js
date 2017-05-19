import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDwMw6T7aARFWq-RAuEA7rgnZMDONMyzuQ',
      authDomain: 'authentication-984f0.firebaseapp.com',
      databaseURL: 'https://authentication-984f0.firebaseio.com',
      projectId: 'authentication-984f0',
      storageBucket: 'authentication-984f0.appspot.com',
      messagingSenderId: '628657781382'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        console.log(true);
      } else {
        this.setState({ loggedIn: false });
        console.log(false);
      }
    });
  }

  renderContent = () => {
    if (this.state.loggedIn) {
      return <Button>Log Out</Button>;
    }
      return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        { this.renderContent() }
      </View>
    );
  }
}
