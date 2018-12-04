import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class PickPhotos extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
      headerTintColor: 'black',
      title: 'Pick Photos',
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
      num: 0,
      selected: []
    };

    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  componentDidMount() {
    const layoutNumber = this.props.navigation.state.params.layoutNumber;

    Alert.alert(
      'NOTE',
      //eslint-disable-next-line
      'Number of photos chosen MUST match the number specified by the button you chose on the previous page (' + layoutNumber + ' photos)',
      [
        {
          text: 'Go back',
          onPress: () => this.props.navigation.goBack()
        },
        {
          text: 'Ok',
          style: 'cancel'
        }
      ]
    );
  }

  getSelectedImages(images, current) {
    const num = images.length;
    this.setState({
      num,
      selected: images,
    });

    console.log('CURRENTLY CHOSEN', current);
    console.log('SELECTED', this.state.selected);
  }

  selectedMax(isViewScreen) {
    let selectedMax = null;

    if (isViewScreen) {
     selectedMax = 1;
   } else if (!isViewScreen) {
     selectedMax = 4;
    }

    return selectedMax;
  }

  matrixLayout(isViewScreen) {
    let layout = null;

    if (isViewScreen) {
     layout = [1];
   } else if (!isViewScreen) {
     layout = [2, 2];
    }

    return layout;
  }

  checkNavigation(isViewScreen) {
    let screenName = null;

    if (isViewScreen) {
      screenName = 'ViewProjectScreen';
    } else if (!isViewScreen) {
      screenName = 'Canvas';
    }

    return screenName;
  }

  // checkNumberOfPhotos() {
  //   const photos = this.props.navigation.state.params.photos;
  //   const layout = this.props.navigation.state.params.layoutArray;
  //   const layoutSum = layout.reduce(add, 0);
  //
  //   function add(a, b) {
  //       return a + b;
  //   }
  //   console.log('LAYOUT SUM', layoutSum);
  //
  //   if (photos.length !== layoutSum) {
  //     return new Promise(isEqual => {
  //       isEqual('true');
  //     });
  //   }
  // }

  render() {
    const isViewScreen = this.props.navigation.state.params.isViewScreen;
    const layoutArray = this.props.navigation.state.params.layoutArray;
    console.log('IS VIEW', isViewScreen);

    return (
      <View style={styles.container}>
        {/* needs permissions on device */}
        {/* if nothing shows then give app storage access permissions */}
        <View style={styles.container}>
          <CameraRollPicker
              groupTypes='Album'
              maximum={this.selectedMax(isViewScreen)}
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
              this.checkNavigation(isViewScreen),
              { selected: this.state.selected, layoutArray }
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
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 0.1
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
  },

  headerRightStyle: {
    color: 'black',
    fontSize: 17,
    marginRight: 12
  },
});
