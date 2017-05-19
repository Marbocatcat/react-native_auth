import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = style;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
});

export { CardSection };
