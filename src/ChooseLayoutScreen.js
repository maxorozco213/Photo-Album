// Have the user pick a layout for the project
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ChooseLayout extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, props, screenProps }) => {
    return {
     headerTintColor: 'black',
     title: 'Pick a Layout',
     headerStyle: { backgroundColor: 'white' },
     headerTitleStyle: { color: 'black' },
     headerRight:
      <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} >
        <Text style={styles.headerRightStyle}>Main Menu</Text>
      </TouchableOpacity>
    };
  };

  render() {
    const isViewScreen = this.props.navigation.state.params.isViewScreen;

    return (
      <View style={styles.container}>
        {/* <View>
          <Text style={styles.buttonText}>
            NOTE: Number of photos chosen MUST match the number specified beside the layout
          </Text>
        </View> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
                    { isViewScreen, layoutNumber: 1, layoutArray: [1] })}
          >
            <Text style={styles.buttonText}>
              Layout 1 (One photo)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
                    { isViewScreen, layoutNumber: 2, layoutArray: [1, 1] })}
          >
            <Text style={styles.buttonText}>
              Layout 2 (two photos)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
                    { isViewScreen, layoutNumber: 3, layoutArray: [1, 2] })}
          >
            <Text style={styles.buttonText}>
              Layout 3 (Three photos)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
                    { isViewScreen, layoutNumber: 3, layoutArray: [2, 1] })}
          >
            <Text style={styles.buttonText}>
              Layout 4 (Three photos)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
                    { isViewScreen, layoutNumber: 4, layoutArray: [1, 2, 1] })}
          >
            <Text style={styles.buttonText}>
              Layout 5 (Four photos)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
                    { isViewScreen, layoutNumber: 4, layoutArray: [2, 2] })}
          >
            <Text style={styles.buttonText}>
              Layout 6 (Four photos)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFC79',
  },

  buttonStyle: {
    borderColor: '#e1e105',
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    height: 40,
    padding: 15
  },

  buttonText: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1,
    padding: 10
  },

  buttonContainer: {
    backgroundColor: '#FCFC79',
    height: 60,
    width: '70%',
    borderTopWidth: 0,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    left: 0,
    flex: 0.1
  },

  headerRightStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  },
});
