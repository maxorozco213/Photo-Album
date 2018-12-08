// Page on which the user will create projects
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,
          Text, CameraRoll, ToastAndroid, TextInput } from 'react-native';
import { DynamicCollage, StaticCollage } from 'react-native-images-collage';
import ViewShot, { captureRef, captureScreen } from 'react-native-view-shot';
import MovableView from 'react-native-movable-view';

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
      },
        /*- Justin's Code - START */
                  textIsPressed: false, 
                  effectIsPressed: false,
                  text1: 'Hello World',
                  text2: 'Hello World Again',
                  text3: 'Hello World Again',
                  text4: 'Hello World Again',
                  text5: 'Hello World Again',
                  text6: 'Hello World Again',
                  text7: 'Hello World Again',
                  text8: 'Hello World Again',
                  text9: 'Hello World Again',
                  text10: 'Hello World Again',
                  effectFlag1: null,
                  effectFlag2: null,
                  effectFlag3: null,
                  effect1: null,
        previewSource: this.props.navigation.state.params.selectedEffect,
        error: null,
        res: null,
        value: {
        format: 'png',
        quality: 0.9,
        result: 'tmpfile',
        snapshotContentContainer: false
      },
                  textClicks: 0,
                  effectClicks: 0,
        /*- Justin's Code - END */ 
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

  /*- Justin's Code - START */ 

  IncrementTextItem() {
      
      console.log('Incremented text click ');
      
    this.setState({ textClicks: this.state.textClicks + 1 });
      
    
      
  }

  IncrementEffectItem() {
      
      console.log('Incremented effect click');
      
    if (this.state.effectClicks == 1)
    {
                
    }
      
    this.setState({ effectClicks: this.state.effectClicks + 1 });
      
  }

  effectSet()
  {
    const selectedEffect = this.props.navigation.state.params.selectedEffect;  
      
    var effectImage = JSON.stringify(this.getURI(selectedEffect));
      
    this.setState({ effectFlag1: effectImage});
  }

  pressedTextButton() {
      
      this.setState({textIsPressed: true});
      
  }

  pressedEffectButton() {
      
      this.setState({effectIsPressed: true});
      
  }

  /*- Justin's Code - END */ 

  render() {
    const selectedPhotos = this.props.navigation.state.params.selectedPhotos;
    const { navigate } = this.props.navigation;
    const layoutArray = this.props.navigation.state.params.layoutArray;
    console.log('LAYOUT', layoutArray);
    console.log('PHOTOS', selectedPhotos);
    console.log('URI', this.getURI(selectedPhotos));
    console.log('LENGTH', selectedPhotos.length);
      
    /*- Justin's Code - START */ 
      
      const {buttonStyle} = styles;
      
      var textIsPressed = this.state.textIsPressed;
      var effectIsPressed = this.state.effectIsPressed;
      
      var selectedEffect = this.props.navigation.state.params.selectedEffect;
      
      var textCreation1;
      var textCreation2;
      var textCreation3;
      var textCreation4;
      var textCreation5;
      var textCreation6;
      var textCreation7;
      var textCreation8;
      var textCreation9;
      var textCreation10;
      var effectCreation;
      var effectCreation1;
      var effectCreation2;
      var effectCreation3;
      var effectCreation4;
      var effectCreation5;
      var effectCreation6;
      var effectCreation7;
      var effectCreation8;
      var effectCreation9;
      var effectCreation10;
      var effectCreation11;
      var effectCreation12;
      var effectCreation13;
      var effectCreation14;
      var effectCreation15;
      
      var textState2 = false;
      
      if (textIsPressed) {
          
          console.log('render - textClick : ' + this.state.textClicks);
          
            textCreation1 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50, fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text1) => this.setState({text1})}
                            value={this.state.text1}
                        />
                    </MovableView>
                </View>
            )
        }

        if (textIsPressed && (this.state.textClicks >= 2)) {
          
             console.log('render - textClick2 : ' + this.state.textClicks);
          
            textCreation2 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text2) => this.setState({text2})}
                            value={this.state.text2}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 3)) {
          
             console.log('render - textClick3 : ' + this.state.textClicks);
          
            textCreation3 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text3) => this.setState({text3})}
                            value={this.state.text3}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 4)) {
          
             console.log('render - textClick4 : ' + this.state.textClicks);
          
            textCreation4 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text4) => this.setState({text4})}
                            value={this.state.text4}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 5)) {
          
             console.log('render - textClick5 : ' + this.state.textClicks);
          
            textCreation5 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text5) => this.setState({text5})}
                            value={this.state.text5}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 6)) {
          
             console.log('render - textClick6 : ' + this.state.textClicks);
          
            textCreation6 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text6) => this.setState({text6})}
                            value={this.state.text6}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 7)) {
          
             console.log('render - textClick7 : ' + this.state.textClicks);
          
            textCreation7 = (
                <View>
                    <MovableView>
                        <TextInput
                           style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text7) => this.setState({text7})}
                            value={this.state.text7}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 8)) {
          
             console.log('render - textClick8 : ' + this.state.textClicks);
          
            textCreation8 = (
                <View>
                    <MovableView>
                        <TextInput
                           style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text8) => this.setState({text8})}
                            value={this.state.text8}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 9)) {
          
             console.log('render - textClick8 : ' + this.state.textClicks);
          
            textCreation9 = (
                <View>
                    <MovableView>
                        <TextInput
                           style={{height: 50 ,fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text9) => this.setState({text9})}
                            value={this.state.text9}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (textIsPressed && (this.state.textClicks >= 10)) {
          
             console.log('render - textClick8 : ' + this.state.textClicks);
          
            textCreation10 = (
                <View>
                    <MovableView>
                        <TextInput
                            style={{height: 50, fontSize: 25, color: 'lawngreen', fontWeight: 'bold'}}
                            onChangeText={(text10) => this.setState({text10})}
                            value={this.state.text10}
                        />
                    </MovableView>
                </View>
            )
        }
        
        if (selectedEffect != null) {
            
          var effectImage = JSON.stringify(this.getURI(selectedEffect));
            
          console.log("selectedEffect : " + selectedEffect);
            
          console.log("effectImage : " + effectImage);
            
          // THE URI THAT YOU NEED TO CHANGE ACCORDING TO YOUR SAVE INDEX
            
          var beer = "262";
            
          var cheer = "226";
            
          var icecream = "227";
            
          var balloon = "236";
            
          var birthday = "272";
            
          var confetti = "268";
            
          var crown = "264";
            
          var disco = "266";
            
          var donut = "269";
            
          var drinking = "270";
            
          var firework = "246";
            
          var giftbox = "274";
            
          var karaoke = "241";
            
          if (effectImage.includes(beer)){
               effectCreation1 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/002-beers.png')}
                        />
                        </MovableView>
                    </View>
                )
          }

          if (effectImage.includes(cheer)){
               effectCreation2 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/007-cheers.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(icecream)){
               effectCreation3 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/028-icecream.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(balloon)){
               effectCreation4 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/001-balloons.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(birthday)){
               effectCreation5 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/003-birthday-cake.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(confetti)){
               effectCreation6 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/009-confetti.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(crown)){
               effectCreation7 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/010-crown.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(disco)){
               effectCreation8 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/015-disco-ball.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(donut)){
               effectCreation9 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/017-donut.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(drinking)){
               effectCreation10 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/018-drinking.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(firework)){
               effectCreation11 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/021-fireworks.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(giftbox)){
               effectCreation12 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/026-gift-box.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
          
          if (effectImage.includes(karaoke)){
               effectCreation13 = (
                    <View>
                        <MovableView>
                        <Image
                        style={{width: 100, height: 100}}
                        source={require('../images/030-karaoke.png')}
                        />
                        </MovableView>
                    </View>
                )
          }
            
        }
        
    /*- Justin's Code - END */ 

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
        <View style= {styles.containerTop}>
        {textCreation1}
        {textCreation2}
        {textCreation3}
        {textCreation4}
        {textCreation5}
        {textCreation6}
        {textCreation7}
        {textCreation8}
        {textCreation9}
        {textCreation10}
        {effectCreation1}
        {effectCreation2}
        {effectCreation3}
        {effectCreation4}
        {effectCreation5}
        {effectCreation6}
        {effectCreation7}
        {effectCreation8}
        {effectCreation9}
        {effectCreation10}
        </View>
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
            <TouchableOpacity
            style={buttonStyle}
            onPress={() => { this.IncrementTextItem(); this. pressedTextButton();}}
            >
              <Image
                //eslint-disable-next-line
                source={require('../images/text.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* Add effects */}
            <TouchableOpacity
            onPress={() => {navigate('PickEffects'); this.IncrementEffectItem();}}
            >
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
  },

  /*- Justin's Code - START */ 
    
  containerTop: {
    position: 'absolute',
  },

  buttonStyle: {
    //borderWidth: 2,
    elevation: -2,
    //backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 3,
  },
    
  /*- Justin's Code - END */ 
});
