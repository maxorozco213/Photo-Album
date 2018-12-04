import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MainMenu from './src/MainMenu';
import Canvas from './src/Canvas';
import ViewProjectScreen from './src/ViewProjectScreen';
import PickPhotos from './src/PickPhotos';
import SaveScreen from './src/SaveScreen';

const NavStack = createStackNavigator({
  MainMenu: { screen: MainMenu },
  Canvas: { screen: Canvas },
  ViewProjectScreen: { screen: ViewProjectScreen },
  PickPhotos: { screen: PickPhotos },
  SaveScreen: { screen: SaveScreen }
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
