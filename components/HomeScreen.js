// App.js
import React, { Component, useEffect, useState} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView, Button, TextInput, Alert
  
} from 'react-native';

import { AntDesign,  MaterialCommunityIcons,  Entypo, Feather } from '@expo/vector-icons'; 

import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

import { Picker } from "@react-native-picker/picker";

const LeftContent = (props) => <Avatar.Icon {...props} icon="message-plus" />;
import Forgot from './Forgot_P';
import Displayitems from './Displayitems';


export default class App extends Component {
  // initial state
//   constructor(props) {
//     super(props);
//     this.state = ({
//         userName: [],
//     });
// }
  state = {
    isVisible: false
  };
  // hide show modal
  displayModal(show){
    this.setState({isVisible: show})
  }

  handleClick() {
    alert('Sent Request');
  }

  Show =(value)=>
  {
    this.setState({selectedLabel:value});
  }

  RegDataInDB=()=>{
    // var Barter_my = this.state.bartermy;
    // var My_value = this.state.myvalue;
    // var Wish_list = this.state.wishlist;
    // var Description = this.state.description;

      var Data ={
        All_cont: 'All',
        // My_value: My_value,
        // Wish_list: Wish_list,
        // Description: Description,
      };

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      fetch("http://192.168.100.11/practice_MelDB/kk12_react/DisplayBarter.php",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        const result = Object.keys(Response).map((key) => Response[key]);
        this.setState({userName : JSON.stringify(Response)});
        
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    
  }
  componentDidMount(){
    this.RegDataInDB()
  }

  render() {
    const {userName} = this.state;
    return (
      <View style={styles1.rootContainer}>
     {/* <Text> {this.state.userName.map((h) => {
          return <Text style={{ fontSize: 20 }}>{h.barter_name}</Text>;
        })}</Text> */}

      <View style={{ marginTop: 10, marginLeft: 50, marginBottom: -10}} >
      {/* <Text>{this.state.userName}</Text> */}
        <TouchableOpacity onPress={()=>{}} color="black">
          {/* <Text>{dogImage}</Text> */}
        <Text style={{
          // marginTop: 6,
          marginLeft:15,
          color: 'black',
          fontSize: 20,
        }}>Home</Text>
      </TouchableOpacity>
      
      </View>

      <ScrollView style={styles1.scrollView}>
       

      <View style={ styles1.childContainer } > 
          

          <View style={{ margin: -25, marginTop: -10 }}>
          <Displayitems />
          
      </View>

      

      <View style={{ marginTop: 40, marginLeft: 30}} >
      <Text style={{
          marginTop: 10,
          marginLeft:15,
          color: 'black',
          fontSize: 20
        }}></Text>
      </View>
            
        </View>
        </ScrollView>
        </View>
      );
  }
};
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
  width: 400
 
},
childContainer: {
  flex: 1,
  margin: 25,
  marginLeft: 25,
  marginTop: 18,
  width: 340,
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
    backgroundColor: "lightgray",
    borderRadius: 10,
    width: 290,
    height: 100,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: -11,
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
       marginTop: -10,
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
      marginLeft: 20,
      fontSize: 15,
      borderBottomColor: 'grey',

    },

    buttonText:{
      marginLeft: 90,
      marginTop: 10,
    },
    text1:{
      marginLeft: 0,
      marginTop: -30,
    },
    closeText:{
      fontSize: 30
    },
    rootContainer1:{
      flex: 1,
  backgroundColor: '#f7ad19',
  width: 400
    },
    childContainer1:{
      flex: 1,
     margin: 25,
     marginLeft: 23,
     marginTop: 40,
     width: 315,
     padding: 50, 
     backgroundColor: 'white',
    borderRadius: 10,
    },
    button:{
      marginTop: 20,
      width: 260,
      height: 40,
      borderRadius: 10,
      backgroundColor: "#f7ad19"
    },
    button1:{
      marginTop: 80,
      marginLeft: 5,
      marginBottom: -10,
      width: 260,
      height: 40,
      borderRadius: 10,
      backgroundColor: "#f7ad19"
    },
    buttonText1:{
      marginLeft: 70,
      marginTop: 10,
    },
    ButtonView2: {
      marginTop: 10,
      marginBottom: -9,
      marginLeft: 58,
      alignItems: 'center',
      width: 150

   },

})  