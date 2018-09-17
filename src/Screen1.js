import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Screen1 extends Component {

  constructor(props) {
    super(props);
      this.state = {
        isLoading: true,
        clonedList: [],
      };
  }

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
