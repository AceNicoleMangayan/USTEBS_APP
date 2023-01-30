import React, { Component } from 'react';
import { Overlay, Modal, StyleSheet, View, Image, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome, Feather } from '@expo/vector-icons'; 



export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_numb : '',
      password : '',
      secureTextEntry : true,
    };
  }

//code to send/reciev data with php to backend
  RegDataInDB=()=>{
    var Id_numb = this.state.id_numb;
    var Password = this.state.password;

    if ((Id_numb.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!");
    }else{

      var Data ={
        id_numb: Id_numb,
        Password: Password
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      fetch("http://192.168.100.11/practice_MelDB/kk12_react/LoginP.php",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Logged In Successfully") {
        // alert("Logged In Successfully");
       this.props.navigation.navigate("HomePage");
        }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    }
  }

//app layout
  render() {
    return (

      <View style={styles1.AppStyle}>

          <View style={{ alignItems: 'center', marginTop: 50, marginBottom: -40, marginLeft: 275}} >  
          <TouchableOpacity 
          onPress={() => {this.props.navigation.navigate("InfoPage")}}>
          <Feather name="info" size={30 } color="black" />
            </TouchableOpacity>
          </View> 

          <View style={{ alignItems: 'center', marginTop: 110, marginBottom: -40}} >  
               <Image style={{width: 400, height: 250}} source={require('./images/LOGO.png')} />
          </View> 
          
          <View style={styles1.TextInView}>
            <TextInput
                placeholder="ID NUMBER"
                style={styles1.textInput}                
                onChangeText={id_numb=>this.setState({id_numb})}
              />
          </View>

         <View style={ styles1.TextInView}>
              <TextInput
                placeholder="PASSWORD"
                style={styles1.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={password=>this.setState({password})}

              />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: -30, marginTop: -2, flex: 1, justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}>  
                  <FontAwesome name={true ? "eye" : "eye"} size={24} color="black" />
                </TouchableOpacity>
                </View>
          </View>

          <View style={styles1.ButtonView}> 
          <Button title="Login"   onPress={()=>{this.RegDataInDB()}}  color="#E1AD01" tintColor="black" />
          </View>
 

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 36, flex: 1, justifyContent: 'center'}}>
                  <View><Button variant="text" title="Forgot Password?" onPress={()=>{this.props.navigation.navigate("ForgotPassPage")}} color="black" /></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, flex: 1, justifyContent: 'center',}}>
                  <View><Text>No Account ?</Text></View>
                  <View><Button variant="text" title="Sign Up" onPress={()=>{this.props.navigation.navigate("SignUpPage")}} color="black" /></View>
                </View>                
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
        marginLeft: 90,
        fontSize: 20,
        borderBottomColor: 'grey',

      },

})  
