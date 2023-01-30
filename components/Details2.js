import React, { Component,useState } from 'react';
import { Alert, AppRegistry, StyleSheet, 
  ScrollView, View, Image, Pressable, Linking, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign,  MaterialCommunityIcons,  Entypo, Ionicons  } from '@expo/vector-icons';



export default class signup extends Component {


  render() {
    
    return (
      <View style={styles1.rootContainer}>
      <ScrollView style={styles1.scrollView}>
      <View style={ styles1.childContainer } >
      <View style={{ marginTop: -30, marginLeft: -30}} >
      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("MyBartersPage")}}>
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
      </View>

      <Image
                source={require('./images/Printer.jpg')}
                style={{height: 225, width: 225, marginLeft: -5, marginTop: 20}}
              />

   <View style={{ marginTop: 20, marginLeft: -140, marginBottom: -5}} >
            <Text style={{
             fontSize: 15,
             fontWeight: 'bold',
            color: '#f7ad19',
            marginLeft: 113,
        }}>HP Printer</Text>
        </View>

        <View style={{ marginTop: 10, marginLeft: -140, marginBottom: -5}} >
            <Text style={{
             fontSize: 10,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>September 30, 2022 </Text>
        </View>

        <View style={{ marginTop: 13, marginLeft: -140, marginBottom: -5}} >
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>PRODUCT DETAILS </Text>
        </View>

        <View style={{ marginTop: 13, marginLeft: -140, marginBottom: -5}} >
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'blue',
            marginLeft: 113,
        }}>Value: </Text>
        </View>

        <View style={{ marginTop: 13, marginLeft: -140, marginBottom: -5}} >
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'blue',
            marginLeft: 113,
        }}>Wishlist: </Text>
        </View>

        <View style={{ marginTop: -39, marginLeft: -80, marginBottom: -5}} >
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>₱ 9,000</Text>
        </View>

        <View style={{ marginTop: 13, marginLeft: -80, marginBottom: -5}} >
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>Any Laptop</Text>
        </View>
        
        <View style={{ marginTop: 20, marginLeft: -140, marginBottom: -5}} >
            <Text style={{
             fontSize: 18,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>DESCRIPTION</Text>
        </View>

        <View style={{ marginTop: 23, marginLeft: -140, marginBottom: -20, width: 375}} >
            <Text style={{
             fontSize: 10,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>        If you're in the market for a new printer, you may want to consider the HP printer.
         HP is a well-known brand and has a reputation for being reliable and efficient. 
         Many users say that the HP printers are easy to use and produce high-quality prints. 
         -Printers can be expensive, but they tend to last longer than other types of printing equipment.
-Some printers can print in color, while others are limited to black and white printing.
-Some printers have more features than others, such as photo printing or copy printing.
-Be sure to read the reviews before making your purchase. This will help you get a better idea of what type of printer is right for you.   
         </Text>
        </View>



        </View> 
      </ScrollView>

    </View>
    );
  }
}

//style section
const styles1 = StyleSheet.create({  

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


