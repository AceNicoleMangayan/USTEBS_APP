import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Button } from "@react-native-material/core";
import { AntDesign,  MaterialCommunityIcons,  Entypo, Feather } from '@expo/vector-icons'; 


export default class signin extends Component {

//app layout
  render() {
    return (
      
      <View style={styles1.rootContainer}>
          <View style={ styles1.childContainer } > 

          <View style={{ marginTop: -40, marginLeft: -40}} >
          <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("LogInPage")}}>
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
            
            <Image
                source={require('./images/LOGO.png')}
                style={{height: 100, width: 400, marginLeft: -55, marginTop: 70}}
              />
      <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 50,
          marginLeft: 10,
          marginRight: -30,
          textAlign: 'center',
          
        }}>It’s an application software for exchanging school needs like books and uniforms between USTP students. </Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 240,
          marginLeft: 10,
          marginRight: -30,
          textAlign: 'center',
          
        }}>@ 2022 unITech </Text>            
                    
                    
                    </View> 
       
            </View> 
          
    </View>
    
    );
  }
}



//style section

const styles1 = StyleSheet.create({ 
//   container: {  
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: 'black',
//     padding: 20,
//     margin: 10,
// },   
  rootContainer:{
    flex: 1,
    backgroundColor: '#9fe7f5',
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
        width: 700,
        height: 200,
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
      borderRadius: 30,
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
        color: 'white',
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
      backgroundColor:'#f7ad19'
    },



      ButtonView: {
         marginTop: 10,
         alignItems: 'center'
      },
     
      Button: {
       borderRadius: 1,
       height: 30,
       backgroundColor: 'green',
       color: 'white',
       justifyContent: 'center', 
       alignItems: 'center',  
       width: '80%',

      },
    
      textInput:{
        flex: 1,
		    height: 30,
        marginTop: 7 ,
        marginBottom: 8,
        marginLeft: 90,
        fontSize: 20,
        borderBottomColor: 'grey',

      },

})  
