import React, { Component, useState } from 'react';
import { Alert, AppRegistry, StyleSheet, 
  ScrollView, View, Image, Pressable, Linking, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'; 
import { Picker } from "@react-native-picker/picker";



export default class signup extends Component { 
  constructor(props) {
    super(props);
    
    this.state = { 
      first_name : '',
      last_name : '',
      selectedLabel:'',
      id_numb: '',
      address: '',
      contact_numb: '',
      email : '',
      fb_link : '',
      password : '',
      confirmpassword : '',
      check_textInputChange : false,
      secureTextEntry : true,
      secureTextEntry_ConfirmPass : true
    };
  } 
  
  RegDataInDB=()=>{
    var First_Name = this.state.first_name;
    var Last_Name = this.state.last_name;
    var Gender = this.state.selectedLabel;
    var Email = this.state.email;
    var FB_Link = this.state.fb_link;
    var Id_numb = this.state.id_numb;
    var Address = this.state.address;
    var Contact_numb = this.state.contact_numb;
    var Password = this.state.password;
    var ConfirmPassword = this.state.confirmpassword;
   
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPassword.length==0) || (First_Name.length==0) || (Last_Name.length==0) || (Gender.length==0)|| (FB_Link.length==0) || (Id_numb.length==0) || (Address.length==0) || (Contact_numb.length==0)){
      alert("Required Field Is Missing!");
    }else if(Password !== ConfirmPassword){
      alert("Password does not match!");
    }else if (Password.length<8){
      alert("Minimum of 8 characters for password required!!!");
    }
    

    else{

      var Data ={
        First_Name: First_Name,
        Last_Name: Last_Name,
        Email: Email,
        FB_Link: FB_Link,
        Password: Password,
        Id_numb : Id_numb,
        Address : Address,
        Contact_numb : Contact_numb,
        Gender: Gender
      };

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

    fetch("http://192.168.100.11/practice_MelDB/kk12_react/SignUp.php",{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Registered successfuly!") {
          // alert("Registered successfuly!");
          this.props.navigation.navigate("LogInPage");
        }
      })
      .catch((error)=>{
        console.error("ERROR:" + error);
      })
    }
  }




  Show =(value)=>
  {
    this.setState({selectedLabel:value});
  }
  

  render() {

    return (
      <View style={styles1.AppStyle}>
      <ScrollView style={styles1.scrollView}>

      <Text style={{
          fontSize: 50,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 70,
          marginLeft: -15,
          marginRight: -30,
          marginBottom: 30,
          textAlign: 'center',
          
        }}>Sign Up </Text> 


               <View style={styles1.TextInView}>
                <TextInput
                placeholder="ID NUMBER"
                style={styles1.textInput}
                onChangeText={id_numb=>this.setState({id_numb})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="FIRST NAME"
                style={styles1.textInput}
                onChangeText={first_name=>this.setState({first_name})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="LAST NAME"
                style={styles1.textInput}
                onChangeText={last_name=>this.setState({last_name})}
                />
              </View>
              
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="COURSE & YEAR / YEAR STARTED"
                style={styles1.textInput}
                // onChangeText={last_name=>this.setState({last_name})}
                />
              </View>
              
              
              <Picker
              
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}
              // onChangeItem={value=> this.gender(value)}
               mode="dropdown" // Android only
             style={styles1.picker}
            >

            <Picker.Item label="GENDER:" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" /> 
            

           </Picker>
              

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="ADDRESS"
                style={styles1.textInput}
                onChangeText={address=>this.setState({address})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="CONTACT NUMBER"
                style={styles1.textInput}
                onChangeText={contact_numb=>this.setState({contact_numb})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="EMAIL"
                style={styles1.textInput}
                onChangeText={email=>this.setState({email})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="FB LINK"
                style={styles1.textInput}
                onChangeText={fb_link=>this.setState({fb_link})}
                />
              </View>
                
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="PASSWORD"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles1.textInput}
                onChangeText={password=>this.setState({password})}
                />
                 <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: -30, marginTop: -2, flex: 1, justifyContent: 'center'}}>
                   <TouchableOpacity
                    onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}>  
                   <FontAwesome name={true ? "eye" : "eye"} size={24} color="black" />
                   </TouchableOpacity>
                 </View>
              </View>
              
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="CONFIRM PASSWORD"
                style={styles1.textInput}
                onChangeText={confirmpassword=>this.setState({confirmpassword})}
                secureTextEntry={this.state.secureTextEntry_ConfirmPass ? true : false}
                /> 
                 <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: -30, marginTop: -2, flex: 1, justifyContent: 'center'}}>
                   <TouchableOpacity
                    onPress={() =>this.setState({secureTextEntry_ConfirmPass: !this.state.secureTextEntry_ConfirmPass})}>  
                   <FontAwesome name={true ? "eye" : "eye"} size={24} color="black" />
                   </TouchableOpacity>
                 </View>
              </View> 

              <View style={styles1.ButtonView}>
                  <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text }>REGISTER </Text>
                  </Pressable>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -50, marginBottom: 150, flex: 1, justifyContent: 'center',}}>
                  <View><Text>By registering, I agree to USTeBS</Text>
                  </View>
                </View>
          

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -150, marginBottom: 50, flex: 1, justifyContent: 'center',}}>
                <View>
                <Button variant="text" title="Terms and Conditions" 
                  onPress={()=>{this.props.navigation.navigate("TermsPage")}} color="blue" />
                  </View>
                </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, flex: 1, justifyContent: 'center',}}>
                  <View><Text>Have an Account ?</Text>
                  </View>
              <View>
                <Button variant="text" title="Log In" 
                  onPress={()=>{this.props.navigation.navigate("LogInPage")}} color="black" /></View>
               </View>
              </ScrollView>
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
    backgroundColor:'#9fe7f5'
  },



    ButtonView: {
       marginTop: 20,
       marginBottom: 75,
       alignItems: 'center'

    },
   
    Button: {
     borderRadius: 1,
     height: 40,
     backgroundColor: '#E1AD01',
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
    picker: {
      marginVertical: 0,
      width: 130,
      padding: 10,
      borderWidth: 1,
      backgroundColor: "white",
      color:"#000",
      marginLeft: 20,
      marginTop: 0,
      marginBottom: 20,
    },
    
})  


