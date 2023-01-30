import React, { Component,useState } from 'react';
import { Alert, AppRegistry, StyleSheet, 
  ScrollView, View, Image, Pressable, Linking, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign,  MaterialCommunityIcons,  Entypo, Ionicons  } from '@expo/vector-icons';



export default class signup extends Component {
  twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Cattleya Notebook Binder  →  Ballpen FlexStick',
      //body
      'Do you want to barter?',
      [
        {
          text: 'Accept',
          onPress: () => console.log('Yes Pressed')
        },
        {
          text: 'Decline',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  render() {
    
    return (
      <View style={styles1.rootContainer}>
      
      <View style={{ marginTop: 10, marginLeft: -10, marginBottom: -5}} >
      <Button variant="text" title="Cattleya Notebook Binder  →  Ballpen FlexStick"  onPress={this.twoOptionAlertHandler} color="black"/>
        </View>
    </View>

    
    );
  }
}

//style section
const styles1 = StyleSheet.create({  

  rootContainer:{
    flex: 1,
    backgroundColor: 'white',
    height: 400,
  },
  childContainer: {
    flex: 1,
    margin: 25,
    marginLeft: 25,
    marginTop: 70,
    width: 310,
    padding: 50, 
    backgroundColor: 'white',
    borderRadius: 10,
  },

  container: {  
      flex:1,  
      justifyContent: 'center',  
  },  
  
  buttonContainer: {
      margin: 20  
  },  
  
  multiButtonContainer: {  
      margin: 20,  
      flexDirection: 'row',  
      justifyContent: 'space-between'  
  }  ,
  
  stretch: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 900,
      height: 300,
      margin: 10,
      resizeMode: 'stretch',
  },
  
  stretch1: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  
  stretch2: {
      width: 400,
      height: 160,
      margin: 10,
      resizeMode: 'stretch',
  },
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  TextInView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: 17,
    flexDirection: 'row',
    
    // flexDirection: 'row',
    // marginTop: 6,
    // paddingBottom: 3,
    // width: '95%',
    // padding: 1,
  },

  text: {
      color: 'black',
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
  },

  AppBar1: {
    justifyContent:'center',
    backgroundColor: 'pink',

  },

  AppBar2: {
    margin: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    width: 300,
    height: 20,
  },

  AppBar3: {
    margin: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    width: 300,
    height: 20,
  },
  
  Iconn: {
    margin: 20,  
    flexDirection: 'row',  
    justifyContent: 'space-between' , 
    height: 4,
  },

  AppStyle:{
    flex: 1,
    padding: 20,
    paddingBottom: 3,
    width: '100%',
    backgroundColor:'white'
  },



    ButtonView1: {
       marginTop: 30,
       marginBottom: 75,
       marginLeft: -50,
       alignItems: 'center',
       width: 150

    },
    ButtonView2: {
      marginTop: -110,
      marginBottom: 75,
      marginLeft: 175,
      alignItems: 'center',
      width: 150

   },
   
    Button: {
     borderRadius: 1,
     height: 40,
     backgroundColor: 'black',
     color: 'white',
     justifyContent: 'center', 
     alignItems: 'center',  
     width: '50%',

    },
  
    textInput:{
      flex: 1,
      height: 30,
      marginTop: 7 ,
      marginBottom: 8,
      marginLeft: 20,
      fontSize: 15,
      borderBottomColor: 'grey',

    },
    
})  


