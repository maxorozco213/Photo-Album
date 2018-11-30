// Page on which the user will create projects
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
      <TouchableOpacity>
        <Text style={styles.saveButtonStyle}>Save</Text>
      </TouchableOpacity>
    };
  };

  getURI(photos) {
    // let photoArray;
    for (let i = 0; i < photos.length; i++) {
      return photos[i].uri;
    }

    // return photoArray;
    // https://atendesigngroup.com/blog/array-map-filter-and-reduce-js
  }

  chooseLayout() {

  }

  render() {
    const photos = this.props.navigation.state.params.selected;
    console.log('PHOTOS', photos);
    console.log('URI', this.getURI(photos));
    return (
      <View style={styles.container}>
        <ViewShot
          style={styles.canvas}
          options={{ format: 'jpg', quality: 0.9 }}
        >
          <DynamicCollage
              height={'100%'}
              width={'100%'}
              images={[this.getURI(photos)]}
              matrix={[1]}
          />
        </ViewShot>

        <View style={styles.optionBarStyle}>
          <View>
            {/* Add image button; Access to local gallery */}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PickPhotos')}
            >
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
