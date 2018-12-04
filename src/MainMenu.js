// Shows a screen for initial navigation to either Canvas or ProjectGallery
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MainMenu extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, props, screenProps }) => {
    return {
     headerTintColor: 'black',
     title: 'Main Menu',
     headerStyle: { backgroundColor: 'white' },
     headerTitleStyle: { color: 'black' },
    };
  };

  render() {
    const {
      buttonText,
      buttonStyle,
      container,
      logoStyle
    } = styles;

      return (
        <View style={container}>
          <Image
            //eslint-disable-next-line
            source={require('../images/mainlogo.png')}
            style={logoStyle}
          />

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
            { isViewScreen: false })}
          >
            <Text style={buttonText}>
              {'   '}Create a Project{'   '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('PickPhotos',
            { isViewScreen: true })}
          >
            <Text style={buttonText}>
              View Saved Projects
            </Text>
          </TouchableOpacity>
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

  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  subText: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 10
  },

  buttonStyle: {
    borderWidth: 2,
    elevation: 0.5,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 3,
  },

  buttonText: {
    margin: 7,
    color: 'black'
  },

  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 150,
    marginBottom: 20,
    borderWidth: 0
  }
});
