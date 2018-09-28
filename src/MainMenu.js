// Shows a screen for initial navigation to either Canvas or ProjectGallery
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MainMenu extends React.Component {
  static navigationOptions = ({ navigation, screenProps, props }) => {
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
    } = styles;

      return (
        <View style={container}>
          {/* <Image
            source={'../images/logo.png'}
          /> */}

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('Canvas')}
          >
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

//eslint-disable-next-line
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
  }
});
