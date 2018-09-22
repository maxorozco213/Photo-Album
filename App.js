import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Screen1 from './Router';

constructor(props) {

  this.state
}

const Appnavigator = StackNavigator({
  Screen1: { screen: Screen1 },
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
