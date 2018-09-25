import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainMenu from './src/MainMenu';
import Canvas from './src/Canvas';
import ProjectGallery from './src/ProjectGallery';

const NavStack = StackNavigator({
  MainMenu: { screen: MainMenu },
  Canvas: { screen: Canvas },
  // ProjectGallery: { screen: ProjectGallery }
});

class Router extends Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    const screenProps = this.props;
    return (
      <NavStack screenProps={screenProps} />
    );
  }
}

export default Router;
