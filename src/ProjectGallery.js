//Comes from main menu if saved projects option is chosen
<<<<<<< HEAD

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
=======
//Should fetch saved project information from the local storage on the device
//Projects should be opened and displayed to view when selected

//Option to edit/delete the projects from the app can be an optional feature
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ProjectGallery extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
     headerTintColor: 'black',
     title: 'Project Gallery',
     headerStyle: { backgroundColor: 'white' },
     headerTitleStyle: { color: 'black' },
   };
>>>>>>> bcf93dbd32ce7150f0df6febf2ed978e3ed4aa8a
  };

  render() {
    return (
<<<<<<< HEAD
      <View>
        <Text>
          hi
=======
      <View style={styles.container}>
        <Text>
          More place holder text
>>>>>>> bcf93dbd32ce7150f0df6febf2ed978e3ed4aa8a
        </Text>
      </View>
    );
  }
<<<<<<< HEAD
}
=======

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FCFC79'
  }
});
>>>>>>> bcf93dbd32ce7150f0df6febf2ed978e3ed4aa8a
