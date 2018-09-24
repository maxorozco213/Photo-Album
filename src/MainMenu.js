import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading: true,
      };
  }

  componentDidMount() {
    this.state = {
      isLoading: false
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            //eslint-disable-next-line
            source={require('../images/Splash_Screen.png')}
          />
        </View>
        );
      }
    }
  }

//eslint-disable-next-line
const styles = StyleSheet.create({

});
