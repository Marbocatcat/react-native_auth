import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  onLoginSuccess = () => {
    console.log('Log in Successful');
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: '',
    });
  }

  onLoginFail = () => {
    console.log('Log in Failed');
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  }

  handleOnPress = () => {
    console.log('handle pressed');
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => this.onLoginSuccess())
        .catch(() => this.onLoginFail()));
 }

 renderButton = () => {
   if (this.state.loading) {
     return <Spinner size='large' />;
   }
   return <Button onPress={this.handleOnPress}>Login</Button>;
 }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder='user@something.com'
          label='Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          placeholder='password'
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={style.errorStyle}>{ this.state.error }</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const style = StyleSheet.create({
  errorStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Avenir Next',
    paddingTop: 10,
    paddingBottom: 5,
  }
});
