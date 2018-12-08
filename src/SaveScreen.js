import React from 'react';
import { View, CameraRoll, ToastAndroid } from 'react-native';
import { DynamicCollage } from 'react-native-images-collage';
import { captureScreen } from 'react-native-view-shot';

export default class MainMenu extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, props, screenProps }) => {
    return {
     header: null
    };
  };

  getURI(photosObject) {
    const uri = photosObject.map(p => p.uri);
    return uri;
  }

  captureScreenFunction() {
    captureScreen({
        format: 'jpg',
        quality: 1.0
    })
    .then(
        uri => CameraRoll.saveToCameraRoll(uri),
        ToastAndroid.show('Saved', ToastAndroid.SHORT),
        // uri => console.log('Image saved to', uri),
        error => console.error('Oops, snapshot failed', error)
    );
  }

  DelayScreenShot = () => {
    setTimeout(() => {
      this.captureScreenFunction();
    }, 2000);
  }

  DelayReturn = () => {
    setTimeout(() => {
      this.props.navigation.goBack();
    }, 2000);
  }

  render() {
    const photos = this.props.navigation.state.params.photos;
    console.log('SAVE THESE ', photos);
    console.log('USE THESE URI', this.getURI(photos));

    return (
      <View>
        <DynamicCollage
          height={500}
          width={500}
          images={this.getURI(photos)}
          matrix={[2, 2]}
          containerStyle={{ height: '100%', width: '100%' }}
        />

        {this.DelayScreenShot()}
        {this.DelayReturn()}
      </View>
    );
  }
}
