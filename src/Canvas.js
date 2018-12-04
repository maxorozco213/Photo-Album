// Page on which the user will create projects
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { DynamicCollage } from 'react-native-images-collage';
import ViewShot from 'react-native-view-shot';

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

  getURI(photosObject) {
    const uri = photosObject.map(p => p.uri);
    return uri;
  }

  render() {
    const photos = this.props.navigation.state.params.selected;
    const { navigate } = this.props.navigation;
    console.log('PHOTOS', photos);
    console.log('URI', this.getURI(photos));
    console.log('LENGTH', photos.length);

    return (
      <View style={styles.container}>
        <ViewShot
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
              onPress={() => navigate('SaveScreen', { photos })}
            >
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
    width: 65,
    height: 50
  },

  imageContainerStyle: {
    flex: 1,
  },

  headerRightStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  },
});
