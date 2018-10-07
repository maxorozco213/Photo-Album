// Shows a screen for initial navigation to either Canvas or ProjectGallery
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MainMenu extends React.Component {
  static navigationOptions = ({ navigation, props }) => {
    return {
     headerTintColor: 'white',
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
<<<<<<< HEAD
      mainText,
      subText,
      logoStyle
=======
>>>>>>> bcf93dbd32ce7150f0df6febf2ed978e3ed4aa8a
    } = styles;

      return (
        <View style={container}>
<<<<<<< HEAD
          <Image
            //eslint-disable-next-line
            source={require('../images/logo.png')}
            style={logoStyle}
          />

          <TouchableOpacity style={buttonStyle}>
=======
          {/* <Image
            source={'../images/logo.png'}
          /> */}

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('Canvas')}
          >
>>>>>>> bcf93dbd32ce7150f0df6febf2ed978e3ed4aa8a
            <Text style={buttonText}>
              {'    '}Create a Project{'    '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('ProjectGallery')}
          >
            <Text style={buttonText}>
              View Saved Projects
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
// }

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
    padding: 6,
    color: 'black'
  },

  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
