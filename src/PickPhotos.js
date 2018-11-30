import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class PickPhotos extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
      headerTintColor: 'black',
      title: 'Pick Photos',
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
   };
  };

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      selected: []
    };

    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  getSelectedImages(images, current) {
    const num = images.length;

    this.setState({
      num,
      selected: images,
    });

    console.log(current);
    console.log(this.state.selected);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* needs permissions on device */}
        {/* if nothing shows then give app storage access permissions */}
        <View style={styles.container}>
          <CameraRollPicker
              groupTypes='Album'
              maximum={4}
              selected={this.state.selected}
              assetType='Photos'
              imagesPerRow={3}
              imageMargin={5}
              callback={this.getSelectedImages}
              emptyText="No Photos to Show"
              emptyTextStyle={styles.emptyTextStyle}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate(
              'Canvas',
              { selected: this.state.selected }
            )}
          >
            <Text style={styles.buttonText}>
              Finish
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
    backgroundColor: '#FCFC79'
  },

  emptyTextStyle: {
    color: 'black',
    fontSize: 20,
  },

  buttonContainer: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    borderTopWidth: 0,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  buttonStyle: {
    borderColor: '#e1e105',
    backgroundColor: '#FCFC79',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    height: 40,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});
