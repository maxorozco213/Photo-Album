//Should fetch saved project information from the local storage on the device
//Projects should be opened and displayed to view when selected

//Option to edit/delete the projects from the app can be an optional feature
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { StaticCollage } from 'react-native-images-collage';

export default class ViewProjectScreen extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
      headerTintColor: 'black',
      title: ' ',
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
    console.log('PHOTOS', photos);
    console.log('URI', this.getURI(photos));
    console.log('LENGTH', photos.length);

    return (
      <View style={styles.container}>
        <View>
          <StaticCollage
              height={'100%'}
              width={'100%'}
              images={this.getURI(photos)}
              matrix={[1]}
              containerStyle={{ height: '100%', width: '100%' }}
          />
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

  saveButtonStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  },
  
  headerRightStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  },
});
