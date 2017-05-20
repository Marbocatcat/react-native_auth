import React, { Component } from 'react';
import { View, } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

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
        console.log(this.state.loggedIn);
      } else {
        this.setState({ loggedIn: false });
        console.log(this.state.loggedIn);
      }
    });
  }

    renderContent = () => {
      switch (this.state.loggedIn) {
        case true:
          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size='large' />;
      }
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
          {this.renderContent()}
      </View>
    );
  }
}
