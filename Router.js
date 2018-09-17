import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Screen1 from './src/Screen1';

const navStack = StackNavigator({
  Screen1: { screen: Screen1 }
});

class Router extends Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    const screenProps = this.props;
    return (
      <navStack screenProps={screenProps} />
    );
  }
}

export default Router;
