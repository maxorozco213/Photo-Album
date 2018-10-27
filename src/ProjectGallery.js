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
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          More place holder text
        </Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FCFC79'
  }
});
