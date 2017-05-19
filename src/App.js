import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDwMw6T7aARFWq-RAuEA7rgnZMDONMyzuQ',
      authDomain: 'authentication-984f0.firebaseapp.com',
      databaseURL: 'https://authentication-984f0.firebaseio.com',
      projectId: 'authentication-984f0',
      storageBucket: 'authentication-984f0.appspot.com',
      messagingSenderId: '628657781382'
    });
  }
  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <LoginForm />
      </View>
    );
  }
}
