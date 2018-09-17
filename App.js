import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Screen1 from './Router';

const AppNavigator = StackNavigator({
  Screen1: { screen: Screen1 }
});

const App = () =>
  <View style={styles.container}>
    <Text>
      hi
    </Text>
    <AppNavigator />
  </View>;


export default class photoAlbum extends Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: 'white'
  }
});
