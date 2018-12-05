// Page on which the user will create projects
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,
          Text, CameraRoll, ToastAndroid } from 'react-native';
import { DynamicCollage, StaticCollage } from 'react-native-images-collage';
import ViewShot, { captureRef, captureScreen } from 'react-native-view-shot';

export default class Canvas extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
     headerTintColor: 'black',
     title: 'Canvas',
     headerStyle: { backgroundColor: 'white' },
     headerTitleStyle: { color: 'black' },
     headerRight:
      <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} >
        <Text style={styles.headerRightStyle}>Main Menu</Text>
      </TouchableOpacity>
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      screenURI: 0,
      previewSource: this.props.navigation.state.params.selectedPhotos,
      error: null,
      res: null,
      value: {
        format: 'png',
        quality: 0.9,
        result: 'tmpfile',
        snapshotContentContainer: false
      }
    };
  }

  getURI(photosObject) {
    const uri = photosObject.map(p => p.uri);
    return uri;
  }

  saveScreenShot(uri) {
    CameraRoll.saveToCameraRoll(uri);
    ToastAndroid.show('Saved', ToastAndroid.SHORT);
    console.log('SAVED', uri);
  }

  snapshot = refname => () =>
    (refname
      ? captureRef(this.refs[refname], this.state.value)
      : captureScreen(this.state.value)
    )
      .then(
        res =>
          this.state.value.result !== 'tmpfile'
            ? res
            : new Promise((success, failure) =>
                // just a test to ensure res can be used in Image.getSize
                Image.getSize(
                  res,
                  (width, height) => (
                    console.log('SAVE URI', res, width, height), success(res),
                    this.saveScreenShot(res)
                  ),
                  failure
                )
              )
      )
      .then(res =>
        this.setState({
          error: null,
          res,
          previewSource: {
            uri:
              this.state.value.result === 'base64'
                ? 'data:image/' + this.state.value.format + ';base64,' + res
                : res
          }
        })

      )
      .catch(
        error => (
          console.warn(error),
          this.setState({ error, res: null, previewSource: null })
        )
    );

  render() {
    const selectedPhotos = this.props.navigation.state.params.selectedPhotos;
    const { navigate } = this.props.navigation;
    const layoutArray = this.props.navigation.state.params.layoutArray;
    console.log('LAYOUT', layoutArray);
    console.log('PHOTOS', selectedPhotos);
    console.log('URI', this.getURI(selectedPhotos));
    console.log('LENGTH', selectedPhotos.length);

    return (
      <View style={styles.container}>
        <ViewShot
          ref="viewRef"
          style={styles.canvas}
        >
          <StaticCollage
              height={1000}
              width={1000}
              // height={'100%'}
              // width={'100%'}
              direction={'row'}
              images={this.getURI(selectedPhotos)}
              imageStyle={styles.photoStyle} // need change?
              matrix={layoutArray}
              containerStyle={{ height: '100%', width: '100%' }}
          />
        </ViewShot>

        <View style={styles.optionBarStyle}>
          <View>
            {/* Add image button; Access to local gallery */}
            <TouchableOpacity
              onPress={() => navigate('PickPhotos')}
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
            <TouchableOpacity>
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
            {/* Save button */}
            <TouchableOpacity
              onPress={this.snapshot('viewRef')}
            >
              <Image
                //eslint-disable-next-line
                source={require('../images/savebutton.png')}
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
    width: 65,
    height: 50
  },

  headerRightStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  },

  photoStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  }
});
