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

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => this.props.navigation.navigate('ChooseLayoutScreen',
              { isViewScreen: false })}
            >
              <Text style={buttonText}>
                {'   '}Create a Project{'   '}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
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
    flex: 0.1,
    padding: 20
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
