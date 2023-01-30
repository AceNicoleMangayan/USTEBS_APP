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
          <View style={{ marginTop: -30, marginLeft: 215, margin: -40}} >

          <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("EditPage")}}>
            <Feather name="settings" size={30} color="black" />
          </TouchableOpacity>

          

          </View>
          <View style={{ marginTop: 9, marginLeft: -40}} >
          <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("HomePage")}}>
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
            
            <Image
                source={require('./images/prof.png')}
                style={{height: 200, width: 200, marginLeft: 45}}
              />
      <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#429ebd',
          marginTop: 20,
          marginLeft: 60,
        }}>Richian Reib Suan</Text>
                    </View> 
        <View style={{ margin:-30, marginTop: 50, marginLeft: -20}} >
        <MaterialCommunityIcons name="gender-male-female" size={24} color="black" />
        <Text style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'black',
          marginTop: -23,
          marginLeft: 30,
        }}>Male</Text>
        <View style={{ marginTop: 10, marginLeft: -20}} ></View>
        <Entypo name="location" size={24} color="red" />
        <Text style={{
          fontSize: 11,
          fontWeight: 'bold',
          color: 'black',
          marginTop: -25,
          marginLeft: 30,
        }}>Block 8, Lot 11, GGN1, Pueblo de Oro, Cagayan de Oro City</Text>
        <View style={{ marginTop: 10, marginLeft: -20}} ></View>
        <Entypo name="graduation-cap" size={24} color="darkblue" />
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginTop: -23,
          marginLeft: 30,
        }}>3rd year BSIT</Text>
        <View style={{ marginTop: 10, marginLeft: -20}} ></View>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 60,
          marginLeft: 1,
        }}>Contacts:</Text>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 15,
          marginLeft: 1,
        }}>Number: 09268210242</Text>
         <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 0,
          marginLeft: 1,
        }}>Gmail: suanrichianreb@gmail.com</Text>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 0,
          marginLeft: 1,
        }}>FB Link: </Text>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'blue',
          marginTop: -20,
          marginLeft: 63,
        }}>https://www.facebook.com/richianreib.suan/</Text>
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
    backgroundColor: '#f7ad19',
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
