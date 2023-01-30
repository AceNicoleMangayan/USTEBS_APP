import React, { Component,useState } from 'react';
import { Alert, AppRegistry, StyleSheet, 
  ScrollView, View, Image, Pressable, Linking, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign,  MaterialCommunityIcons,  Entypo, Ionicons  } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";


export default class signup extends Component {
  constructor(props) {
    super(props);
    
    this.state={selectedLabel:''};
    
    this.state = { 
      first_name : '',
      last_name : '',
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
    var Email = this.state.email;
    var FB_Link = this.state.fb_link;
    var Id_numb = this.state.id_numb;
    var Address = this.state.address;
    var Contact_numb = this.state.contact_numb;
    var Password = this.state.password;
    var ConfirmPassword = this.state.confirmpassword;
  }
  


  Show =(value)=>
  {
    this.setState({selectedLabel:value});
  }

  openAlert=()=>{
    alert('Successfully Change');
    this.props.navigation.navigate("ProfilePage");
  }
  

  render() {
    // const [isShowingText, setIsShowingText] = useState(true);

    return (
      <View style={styles1.rootContainer}>
      <ScrollView style={styles1.scrollView}>
      
      <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 70,
          marginLeft: -28,
          marginRight: -30,
          marginBottom: 30,
          textAlign: 'center',
          
        }}>Edit Profile </Text> 

           <Image
                source={require('./images/prof.png')}
                style={{height: 175, width: 175, marginLeft: 90}}
              />

          <View style={{ flexDirection: 'row',flex: 1, justifyContent: 'center', marginBottom: 40, marginTop: -20, marginLeft: 150}}>
          <MaterialCommunityIcons name="image-edit-outline" size={30} color="black" />

           </View>


               <View style={styles1.TextInView}>
                <TextInput
                placeholder="2020304352"
                style={styles1.textInput}
                onChangeText={id_numb=>this.setState({id_numb})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="Richian Reib"
                style={styles1.textInput}
                onChangeText={first_name=>this.setState({first_name})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="Suan"
                style={styles1.textInput}
                onChangeText={last_name=>this.setState({last_name})}
                />
              </View>
              
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="3rd Year BSIT"
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

            {/* <Picker.Item label="GENDER:" value="Unknown" /> */}
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" /> 
            

           </Picker>
              

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="Block 8, Lot 11, GGN1, CDO"
                style={styles1.textInput}
                onChangeText={address=>this.setState({address})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="09268210242"
                style={styles1.textInput}
                onChangeText={contact_numb=>this.setState({contact_numb})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="suanrichianreib@gmail.com"
                style={styles1.textInput}
                onChangeText={email=>this.setState({email})}
                />
              </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="https://www.facebook.com/richianreib.suan/"
                style={styles1.textInput}
                onChangeText={fb_link=>this.setState({fb_link})}
                />
              </View>
                
              <View style={styles1.TextInView}>
                <TextInput
                placeholder="OLD PASSWORD"
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
                placeholder="NEW PASSWORD"
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


              <View style={{ flexDirection: 'row', marginLeft: -105, marginBottom: 30, marginTop: 30, flex: 1, justifyContent: 'center'}}>

                
              <View style={styles1.ButtonView2}> 
                  <Button
                  title="SAVE"
                  color="#f7ad19"
                
                    onPress={this.openAlert} /></View>
                  
               </View>

               <View style={{ flexDirection: 'row', marginLeft: 100, marginBottom: 60, marginTop: -141, flex: 1, justifyContent: 'center'}}>
  
                
              <View style={styles1.ButtonView1}> 
                  <Button
                  title="CANCEL"
                  color="black" 
                
                  onPress={()=>{this.props.navigation.navigate("ProfilePage")}}/></View>
                  
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
  // childContainer: {
  //   flex: 1,
  //   margin: 25,
  //   marginLeft: 25,
  //   marginTop: 70,
  //   width: 310,
  //   padding: 50, 
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  // },

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
       marginTop: 0,
       marginBottom: -10,
       marginLeft: 20,
       alignItems: 'center',
       width: 150

    },
    ButtonView2: {
      marginTop: 10,
      marginBottom: 75,
      marginLeft: -10,
      alignItems: 'center',
      width: 150

   },
   
    Button: {
     borderRadius: 1,
     height: 40,
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
      fontSize: 13,
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


