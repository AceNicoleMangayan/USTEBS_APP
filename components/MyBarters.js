import React, { Component,useState } from 'react';
import { Alert, AppRegistry, StyleSheet, 
  ScrollView, View, Image, Pressable, Linking, 
  Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign,  MaterialCommunityIcons,  Entypo, Ionicons  } from '@expo/vector-icons';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="message-plus" />;

export default class signup extends Component {


  render() {
    
    return (
      <View style={styles1.rootContainer}>
      <ScrollView style={styles1.scrollView}>


      <View style={ styles1.childContainer } >
      <View style={{ marginTop: -30, marginLeft: -30}} >
      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("HomePage")}}>
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10, marginLeft: -35}} >
      <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 5,
          marginLeft: 65,
        }}>My Barters</Text>
        </View>
          

        <View style={{ margin: -25, marginTop: 30 }}>
      <Card>

      <Card.Cover source={require('./images/Ballpen.jpg')} />
        <Card.Content>

        

        <View style={{ flexDirection: 'row', alignItems: 'center', 
        marginLeft: 5, marginTop: 10, flex: 1, justifyContent: 'center'}}>
        <Button   onPress={() => {this.props.navigation.navigate("DetailsPage")}}
                  title="Ballpen FlexStick"
                  color="#9fe7f5"/>
       
         </View>

        </Card.Content>
        
        {/* <Card.Actions>
          <Button>Ballpen</Button>
        </Card.Actions> */}
      </Card>
    </View>

    <View style={{ margin: -25, marginTop: 70 }}>
      <Card>

      <Card.Cover source={require('./images/Printer.jpg')} />
        <Card.Content>

        <View style={{ flexDirection: 'row', alignItems: 'center', 
        marginLeft: 5, marginTop: 10, flex: 1, justifyContent: 'center'}}>
        <Button   onPress={() => {this.props.navigation.navigate("Details2Page")}}
                  title="HP Printer"
                  color="#9fe7f5"/>
         </View>

        </Card.Content>
{/*        
        <Card.Actions>
          <Button>HP Printer</Button>
        </Card.Actions> */}
      </Card>
    </View>



        </View> 
      </ScrollView>

      <View style={{ marginTop: -100, marginBottom:30, marginLeft: 275, width: 50}} >

      <TouchableOpacity
       onPress={() => {this.props.navigation.navigate("AddPage")}}>
    <Ionicons name="md-add-circle-outline" size={50} color="black" />
    </TouchableOpacity>



</View>
      

    </View>
    );
  }
}

//style section
const styles1 = StyleSheet.create({  

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


