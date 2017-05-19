import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = style;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export { Button };
