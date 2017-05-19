import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ children }) => {
  const { HeaderView, HeaderText } = style;
  return (
    <View style={HeaderView}>
      <Text style={HeaderText}>{children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  HeaderView: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: '#ddd',
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
  },
});

export { Header };
