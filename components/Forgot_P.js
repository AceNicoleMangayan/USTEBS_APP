import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, Text, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class forgotp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      secureTextEntry : true,
    };
  }


//app layout
  render() {
    return (

      <View style={styles1.AppStyle}>

          <View style={{ alignItems: 'center', marginLeft: 20, marginTop: -50, marginBottom: -40}} >  
               <Image style={{width: 300, height: 300, marginTop: 190}} source={require('./images/forgot.png')} />
          </View> 

          <View style={styles1.TextInView}>
            <TextInput
                placeholder="EMAIL ADDRESS"
                style={styles1.textInput}
                onChangeText={email=>this.setState({email})}
              />
          </View>

          <View style={styles1.ButtonView}> 
          <Button title="SEND AUTHENTICATION" onPress={()=> { alert('Authentication Sent'),this.props.navigation.navigate("LogInPage")}}  color="#E1AD01" tintColor="black" />
          
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -50, flex: 1, justifyContent: 'center',}}>
             
                <View><Button variant="text" title="Go back and Log In" onPress={()=>{this.props.navigation.navigate("LogInPage")}} color="black" /></View>
          </View>
                {/* <View style={styles1.ButtonView}>    
                  <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text}>Existing User: LogIn</Text>
                  </Pressable>

                </View>  */}

                
{/* <view style={styles1.AppBar1}>
<Button   title="New User: SignUp" style={styles1.Button}
                    onPress={()=>{this.props.navigation.navigate("SignUpPage")}} />
                    </view> */}


                {/* <View style={styles1.ButtonView}>
                   <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.props.navigation.navigate("SignUpPage")}}
                    >
                    <Text style={styles1.text}>New User: SignUp</Text>
                  </Pressable>   
               
                </View> */}
                 {/* <View style={styles1.ButtonView}> 
          <Button title="Sign Up" color="#E1AD01" tintColor="white" />
          </View> */}

                {/* <View style={styles1.Iconn}>
                   <Icon name="instagram" size={50} color="#bf1313" />
                   <Icon name="youtube" size={50} color="#bf1313" 
                         onPress={() => Linking.openURL('https://www.youtube.com/channel/UCQATtGnC_pLhKucmrSHM2xA')}/>  
                        
                   <Icon name="twitter" size={50} color="#bf1313" 
                         onPress={() => Linking.openURL('https://www.twitter.com')} 
                   />     */}
                   {/* icons: instagram youtube google  facebook twitter  */}
                {/* </View> */}
                
      </View>
    );
  }
}


//style section
const styles1 = StyleSheet.create({  
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
    backgroundColor:'#9fe7f5'
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
      marginLeft: 65,
      fontSize: 20,
      borderBottomColor: 'grey',

    },

})  
