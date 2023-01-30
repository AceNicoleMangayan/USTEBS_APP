import React, { Component,useState } from 'react';
import { Alert, AppRegistry, StyleSheet, 
  ScrollView, View, Image, Pressable, Linking, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign,  MaterialCommunityIcons,  Entypo, Ionicons  } from '@expo/vector-icons';

export default class signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      bartermy : '',
      myvalue : '',
      wishlist:'',
      description: '',
    };
  }
  
  RegDataInDB=()=>{
    var Barter_my = this.state.bartermy;
    var My_value = this.state.myvalue;
    var Wish_list = this.state.wishlist;
    var Description = this.state.description;
   
  
    // if ((Email.length==0) || (Password.length==0) || (ConfirmPassword.length==0) || (First_Name.length==0) || (Last_Name.length==0) || (Gender.length==0)|| (FB_Link.length==0) || (Id_numb.length==0) || (Address.length==0) || (Contact_numb.length==0)){
    //   alert("Required Field Is Missing!");
    // }else if(Password !== ConfirmPassword){
    //   alert("Password does not match!");
    // }else if (Password.length<8){
    //   alert("Minimum of 8 characters for password required!!!");
    // }
    

    // else{

      var Data ={
        Barter_my: Barter_my,
        My_value: My_value,
        Wish_list: Wish_list,
        Description: Description,
      };

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

    fetch("http://192.168.100.11/practice_MelDB/kk12_react/AddBarterItem.php",{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Successfully Added!") {
          // alert("Registered successfuly!");
          this.props.navigation.navigate("MyBartersPage");
        }
      })
      .catch((error)=>{
        console.error("ERROR:" + error);
      })
    // }
  }


  
  openAlert=()=>{
    alert('Successfully Added');
    this.props.navigation.navigate("MyBartersPage");
  }

  render() {
    // const [isShowingText, setIsShowingText] = useState(true);

    return (
      <View style={styles1.rootContainer}>
      
      <View style={ styles1.childContainer } >
      <View style={{ marginTop: 15, marginLeft: 18}} >
      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("MyBartersPage")}}>
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
      </View>

      <View style={{ marginTop: -5, marginLeft: -3}} >
      <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
          marginBottom: 30,
          marginLeft: 113,
        }}>Add Item</Text>
        </View>

        <View style={{ marginTop: 10, marginLeft: -90, marginBottom: -5}} >
            <Text style={{
             fontSize: 10,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 113,
        }}>Barter my...</Text>

        </View>

        <View style={styles1.TextInView}>
                <TextInput
                placeholder="Product Name"
                style={styles1.textInput}
                onChangeText={bartermy=>this.setState({bartermy})}
                />
              </View>

              <View style={{ marginTop: -10, marginLeft: -90, marginBottom: -5}} >
             <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 113,
             }}>Total Value</Text>

             </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder="₱"
                style={styles1.textInput}
                onChangeText={myvalue=>this.setState({myvalue})}
                />
              </View>

              <View style={{ marginTop: -10, marginLeft: -90, marginBottom: -5}} >
             <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 113,
             }}>Wishlist</Text>

             </View>

              <View style={styles1.TextInView}>
                <TextInput
                placeholder=""
                style={styles1.textInput}
                onChangeText={wishlist=>this.setState({wishlist})}
                />
              </View>

              <View style={{ marginTop: -10, marginLeft: -90, marginBottom: -5}} >
             <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 113,
             }}>Description</Text>

             </View>
              
              <View style={styles1.TextInView1}>
                <TextInput
                placeholder="Description..."
                style={styles1.textInput1}
                onChangeText={description=>this.setState({description})}
                />
              </View>

              <View style={{ marginTop: -10, marginLeft: -90, marginBottom: -5}} >
             <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 113,
             }}>Photos</Text>

             </View>

              <View style={styles1.ButtonView1}> 
                  <Button
                  title="+ Upload Photo"
               color="#f5f5f5">

              </Button>
       
        </View>
        <View style={styles1.ButtonView2}>
                  <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text }>ADD </Text>
                  </Pressable>
              </View>
{/* 
        <View style={styles1.ButtonView2}> 
                  <Button
                  title="ADD"
               color="#f7ad19"
               onPress={this.openAlert}>
                

              </Button>
       
        </View> */}
    

        </View> 
      
      
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
    padding: 1, 
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
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    width: "87%",
    height: 34,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    

    
    // flexDirection: 'row',
    // marginTop: 6,
    // paddingBottom: 3,
    // width: '95%',
    // padding: 1,
  },

  TextInView1: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    width: "87%",
    height: 70,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row',
    
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
       borderColor: "black",
       borderWidth: 1,
       marginTop: 10,
       marginBottom: 75,
       padding: 30,
       marginLeft: 20,
       alignItems: 'center',
       width: 265,

    },
    ButtonView2: {
      marginTop: -10,
      marginBottom: 50,
      marginLeft: 80,
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

    textInput1:{
      flex: 1,
      height: 30,
      marginTop: -20 ,
      marginBottom: 8,
      marginLeft: 20,
      fontSize: 15,
      borderBottomColor: 'grey',

    },

    Button: {
      borderRadius: 1,
      height: 40,
      backgroundColor: '#E1AD01',
      color: 'white',
      justifyContent: 'center', 
      alignItems: 'center',  
      width: '60%',
 
     },
    
})  


