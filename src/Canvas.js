// Page on which the user will create projects
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, CameraRoll, ToastAndroid } from 'react-native';
import { DynamicCollage } from 'react-native-images-collage';
import { captureScreen } from 'react-native-view-shot';

export default class Canvas extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
     headerTintColor: 'black',
     title: 'Canvas',
     headerStyle: { backgroundColor: 'white' },
     headerTitleStyle: { color: 'black' },
     // headerRight:
     //  <TouchableOpacity>
     //    <Text style={styles.saveButtonStyle}>Save</Text>
     //  </TouchableOpacity>
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      photoMatrix: [],
      photoArray: [],
    };
  }

  getURI(photos) {
    const uri = photos.map(p => p.uri);
    return uri;
  }

  getHeight(photos) {
    const height = photos.map(h => h.height);
    return height;
  }

  getWidth(photos) {
    const width = photos.map(w => w.width);
    return width;
  }

  getMatrixLayout(photos) {
    if (photos.length === 4) {
      this.setState = {
        photoMatrix: [2, 2]
      };
    } else if (photos.length < 4) {
        this.setState = {
          photoMatrix: [3]
        };
    }
  }

  captureScreenFunction() {
    captureScreen({
        format: 'jpg',
        quality: 0.8
    })
    .then(
        uri => CameraRoll.saveToCameraRoll(uri),
        ToastAndroid.show('Saved', ToastAndroid.SHORT),
        // uri => console.log('Image saved to', uri),
        error => console.error('Oops, snapshot failed', error)
    );
  }

  render() {
    const photos = this.props.navigation.state.params.selected;
    console.log('PHOTOS', photos);
    console.log('URI', this.getURI(photos));
    console.log('LENGTH', photos.length);
    console.log('PHOTO MATRIX', this.getMatrixLayout(photos));
    console.log('HEIGHT', this.getHeight(photos));
    console.log('WIDTH', this.getWidth(photos));
    return (
      <View style={styles.container}>
        <View
          style={styles.canvas}
          refs='viewShot'
          options={{ format: 'jpg', quality: 0.9 }}
        >
          <DynamicCollage
              height={500}
              width={500}
              images={this.getURI(photos)}
              matrix={[2, 2]}
              containerStyle={{ height: '100%', width: '100%' }}
          />
        </View>

        <View style={styles.optionBarStyle}>
          <View>
            {/* Add image button; Access to local gallery */}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PickPhotos')}
            >
              <Image
                //eslint-disable-next-line
                source={require('../images/photos.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
              {/* Add text */}
            <TouchableOpacity onPress={() => this.captureScreenFunction()}>
              <Image
                //eslint-disable-next-line
                source={require('../images/pencil.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* Add effects */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/effects.png')}
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
    // backgroundColor: '#FCFC79'
    backgroundColor: 'white'
  },

  canvas: {
    flex: 1
  },

  optionBarStyle: {
    flex: 0,
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
  },

  imageStyle: {
    flex: 0,
    resizeMode: 'contain',
    width: 60,
    height: 45
  },

  imageContainerStyle: {
    flex: 1,
  },

  saveButtonStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  }
});
