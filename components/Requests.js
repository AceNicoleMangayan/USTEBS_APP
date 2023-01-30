import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign,  MaterialCommunityIcons,  Entypo, Ionicons  } from '@expo/vector-icons';
import RequestsScreen from './RequestsScreen';
import MyRequestsScreen from './MyRequestsScreen';

const FirstRoute = () => (
    <ScrollView style={styles1.scrollView}>
  
      <RequestsScreen />     
    
    </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={styles1.scrollView}>
  
      <MyRequestsScreen />     
    
    </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample({ navigation: { goBack } }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Requests' },
    { key: 'second', title: 'My Requests'},
  ]);



  return (
    
    <View style={styles1.rootContainer}>
        <View style={ styles1.childContainer } > 

        <View style={{ marginTop: -30, marginLeft: -30}} >
      <TouchableOpacity
          onPress={() => goBack()} >
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
      </View>

        <View style={{ marginTop: 10, marginLeft: -25, marginBottom: -35}} >
      <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 5,
          marginLeft: 65,
        }}>Requests</Text>
        </View>

    <TabView style={styles1.tab}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
    />
</View>
</View>
  );
}

const styles1 = StyleSheet.create({ 


    tab:{
        width: 310,
        marginLeft: -50,
        marginTop: 70,
        backgroundColor: "white"
    },

    rootContainer:{
      flex: 1,
      backgroundColor: '#9fe7f5',
      width: 360,
      height: 750,
     
    },
    childContainer: {
      flex: 1,
      margin: -50,
      marginLeft: 27,
      marginTop: 80,
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