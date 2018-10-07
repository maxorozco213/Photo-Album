//Comes from main menu if saved projects option is chosen

import React from 'react';
import { View, Text, Image } from 'react-native';

export default class ProjectGallery extends React.Component {
  static navigationOptions = ({ navigation, props }) => {
    return {
      headerTintColor: 'white',
      title: 'ProjectGallery',
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
      headerSize: { height: 40 } // ??????????
    };
  };

  render() {
    return (
      <View>
        <Text>
          hi
        </Text>
      </View>
    );
  }
}
