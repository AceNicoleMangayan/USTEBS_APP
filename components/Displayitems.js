import React, {useState,useEffect} from 'react';
import { Animated, Image, SafeAreaView, TextInput, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import { Avatar, Card, Title, Paragraph, Modal,  Portal, Provider} from 'react-native-paper';


import { AntDesign,  MaterialCommunityIcons,  Entypo, Feather } from '@expo/vector-icons'; 

import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';
// state = {
//   isVisible: false
// };
// hide show modal


const LeftContent = (props) => <Avatar.Icon {...props} icon="message-plus" />;


const Displayitems = () =>{
  const [visible, setVisible] = React.useState(false);
  const [idb, setidb] = React.useState(false);
  const idcont = () => setidb('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 10, height: 1000, marginBottom:5250, width: 325, marginLeft:-17};
  const [item, setItem] = useState([]);
  // const [idb, setidb] = useState();

  const sendreq = () =>{
    alert("Sent Request!");
    setVisible(false);
  }


  useEffect(() =>{
    fetch("http://192.168.100.11/practice_MelDB/kk12_react/DisplayBarter.php").then(res => res.json()).then(
        (result) => {
            setItem(result);
        }
    )
}, [])
  return (

    <View>
    <Provider>
   <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
      <View style ={{marginTop:-100}}>
           <View>
      <ScrollView>
         <View>
               <Image
                source={require('./images/cattleya.jpg')}
                style={{height: 190, width: 150, marginLeft: 60, marginTop: 350}}
              /></View>
        <View style={{marginTop: 20}}>
              <Text style={{
             fontSize: 15,
             fontWeight: 'bold',
            color: '#f7ad19',
            marginLeft: 2,
        }}>Cattleya Notebook Binder</Text>
        </View>
              <View>
              <Text style={{
             fontSize: 10,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 2,
        }}>2022-11-28</Text>
              </View>

              <View>
              <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 2,
        }}>PRODUCT DETAILS </Text>
              </View>

              <View>
              <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'blue',
            marginLeft: 2,
        }}>Value: </Text>
              </View>


              <View>
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'blue',
            marginLeft: 2,
        }}>Wishlist: </Text>
        </View>

        <View>
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 70,
            marginTop: -35,
        }}>₱ 200</Text>
        </View>

        <View>
            <Text style={{
             fontSize: 13,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 70,
            marginTop: -18
        }}>Rizal Book</Text>
        </View>
        
        <View>
            <Text style={{
             fontSize: 18,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 2,
            marginTop: 30,
        }}>DESCRIPTION</Text>
        </View>

        <View>
            <Text style={{
             fontSize: 10,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 2,
        }}> This notebook is suitable for classroom, office, etc., meeting your multiple needs. 
        It is lightweight, easy to carry and offers great convenience to your life.
         
         </Text>
        </View>
        

        <View>
            <Text style={{
             fontSize: 10,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 2,
          }}>─────────────────────────────────────────

        </Text>
        </View>

        <Image
                source={require('./images/prof1.jpg')}
                style={{height: 50, width: 50, marginLeft: 0, marginTop: 30, marginBottom: 10}}
              />
      <View >
            <Text style={{
             fontSize: 15,
             fontWeight: 'bold',
            color: 'black',
            marginLeft: 80,
            marginTop: -48
          }}>Ma. Theresa Ompoc
        </Text>
      </View>
      <View style={{ marginTop: 50, marginLeft: 30, marginBottom: -20}} >
         <Picker
             style={styles1.picker}
            >

            <Picker.Item label="BARTER WITH:" value="" />
            <Picker.Item label="⚫ Ballpen FlexStick" value="Ballpen FlexStick" />
            <Picker.Item label="⚫ HP Printer" value=" HP Printer" /> 

           </Picker>
      </View>
      <View style={styles1.TextInView}>
                <TextInput
                placeholder="Add Comment"
                style={styles1.textInput}
                />
      </View>
      <View style={styles1.button1}> 
      
                  <Button
                  title="Send Request"
                  color="#f7ad19" onPress={sendreq}/>
      </View>
      </ScrollView>
    </View>
      
      </View>
    </Modal>
   </Portal>
     
   {/* <Button title="Show" style={{marginTop: 30}} onPress={showModal} /> */}


   

      {item.map(item =>(
                 <View style={{ margin: 20, marginTop: 20 }}>
                <Card>
              <Card.Title
                title={item.fullname}
                left={LeftContent}
                
              />
              <Image
                      source={{uri: `${item.profpic}`}}
                      style={{height: 50, width: 50, marginLeft: 15, marginTop: -60, marginBottom: 10}}
                    />
              
              <Card.Cover source={{uri: `${item.images}`}} />
              
              <Card.Content>
              <Text>{item.barter_name}</Text>
              <TouchableOpacity
                    style={styles1.button}
                    onPress={showModal}
                    >
                    <Text style={styles1.buttonText}>View Details</Text>
                </TouchableOpacity>   
      
              </Card.Content>       
              {/* <Card.Actions>
                <Button>View Details</Button>
              </Card.Actions> */}
      
      
      {/* Second Post */}
      
      
            </Card>
            </View>
                //    <Card>
                // <Text>{item.barter_name}</Text>
                // </Card>
            ))}
            </Provider>
    </View>
  )
}

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
          marginLeft: 70,
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
          width: 220,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#f7ad19"
        },
        button1:{
            marginTop: 20,
            width: 220,
            height: 40,
            marginLeft: 38,
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

export default Displayitems;