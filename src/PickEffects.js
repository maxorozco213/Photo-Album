import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class PickEffects extends React.Component {
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
     selectedMax = 10;
    }

    return selectedMax;
  }

  matrixLayout(isViewScreen) {
    let layout = null;

    if (isViewScreen) {
     layout = [1];
   } else if (!isViewScreen) {
     layout = [3, 3];
    }

    return layout;
  }

  goToViewScreen(layoutArray) {
    const photos = this.state.selected;

    if (photos.length !== 1) {
      Alert.alert(
        'NOTE',
        //eslint-disable-next-line
        'You must choose ONE photo to view',
        [
          {
            text: 'Ok',
            style: 'cancel'
          }
        ]
      );
    } else if (photos.length === 1) {
       this.props.navigation.navigate('ViewProjectScreen',
       { selected: this.state.selected, layoutArray });
     }
  }

  goToCanvasScreen(layoutArray) {
    const layoutNumber = 1;
    const selectedEffect = this.state.selected;

    const layoutSum = layoutArray.reduce(add, 0);
    console.log('LAYOUT SUM', layoutSum);

    function add(a, b) {
        return a + b;
    }

    if (selectedEffect.length != null) {
        this.props.navigation.navigate('Canvas',
        { selectedEffect: this.state.selected});
        console.log('PICKEFFECT SELECTEDEFFECT : ' + this.state.selected);
        console.log('PICKEFFECT LAYOUTARRAY : ' + layoutArray);
    } else if (selectedEffect.length !== layoutSum) {
      Alert.alert(
        'NOTE',
        //eslint-disable-next-line
        'Number of Effect user chosen MUST be one',
        [
          {
            text: 'Ok',
            style: 'cancel'
          }
        ]
      );
    }
  }

  checkNav(isViewScreen, layoutArray) {
    //reduce function breaks view screen so this method is necessary
    if (isViewScreen) {
      this.goToViewScreen(layoutArray);
    } else if (!isViewScreen) {
      this.goToCanvasScreen(layoutArray);
    }
  }

  render() {
    const isViewScreen = false;
    const layoutArray = [1];
    console.log('IS VIEW', isViewScreen);
    console.log('IS LAYOUT', layoutArray);

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
            onPress={() => this.checkNav(isViewScreen, layoutArray)}
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