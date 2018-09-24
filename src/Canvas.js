import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading: true,
        clonedList: [],
      };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.canvas}>
          <Text>Place Holder Text</Text>
          {/* Pictures will go here */}
        </View>

        <View style={styles.optionBarStyle}>
          <View>
            {/* Add image button; Access to local gallery */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/picture.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
              {/* Add text */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/edit.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* Add effects */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/stars.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* Undo button */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/return-button.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#FCFC79'
  },

  canvas: {
    flex: 1
  },

  optionBarStyle: {
    flex: 0,
    backgroundColor: 'white',
    height: 45,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
  },

  imageStyle: {
    flex: 0,
    // borderWidth: 0.5,
    // borderColor: 'black',
    resizeMode: 'contain',
    width: 60,
    height: 45
  },

  imageContainerStyle: {
    flex: 1,
  }
});
