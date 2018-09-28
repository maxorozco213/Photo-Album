import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainMenu from './Router';

const Appnavigator = createStackNavigator({
  MainMenu: { screen: MainMenu },
});

const App = () =>
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    <Appnavigator />
  </View>;

export default class photoalbum extends React.Component {
  render() {
    return (
      <App />
    );
  }
}
