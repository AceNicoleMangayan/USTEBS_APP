import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import profile from './images/prof.png';
import { Searchbar } from 'react-native-paper';
// Tab ICons...
import home from './images/home.png';
import trans from './images/trans.png';
import notifications from '../assets/favicon.png';
import settings from '../assets/favicon.png';
import logout from './images/logout.png';
// Menu
import menu from './images/bar.png';
import close from './images/bar.png';

// Photo
import photo from '../assets/favicon.png';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';


// //Navigation import
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


export default function App({navigation}) {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 160,
          height: 160,
          borderRadius: 10,
          marginTop: 70,
          marginLeft: 20,
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
          marginLeft: 10,
        }}>Richian Reib Suan</Text>

        <TouchableOpacity onPress={()=>{navigation.navigate("ProfilePage")}} color="black">
          <Text style={{
            marginTop: 6,
            marginLeft:55,
            color: 'blue'
          }}>View Profile</Text>
        </TouchableOpacity>
 

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}

        </View>

        
        <View style={{ margin:-30, marginLeft: 15}} >
        <MaterialIcons name="compare-arrows" size={33} color="black" />
        </View>

        <View style={{ margin:-30, marginLeft: 18, marginTop: -45}} >
        <Octicons name="checklist" size={28} color="black" />
        </View>
        
         <View style={{ marginBottom: -10, marginLeft: 0, marginTop: -1}} >
        <TouchableOpacity onPress={()=>{navigation.navigate("MyBartersPage")}} color="black">
          <Text style={{
            marginLeft:59,
            fontSize: 20,
            marginBottom: 300,
            fontWeight: 'bold',
            color: 'black'
          }}>My Barters</Text>
        </TouchableOpacity>

        </View>
        

        <View style={{ marginLeft: 0, marginTop: -273}} >
        <TouchableOpacity onPress={()=>{navigation.navigate("RequestsPage")}} color="black">
          <Text style={{
            marginLeft:59,
            fontSize: 20,
            marginBottom: 290,
            fontWeight: 'bold',
            color: 'black'
          }}>Requests</Text>
          
        </TouchableOpacity>

        </View>

        <View style={{ margin:-30, marginBottom: -28, marginLeft: 17, marginTop: -100}} >
        <MaterialCommunityIcons name="logout" size={30} color="black" />
        </View>
        
        <TouchableOpacity onPress={()=>{navigation.navigate("LogInPage")}} color="black">
          <Text style={{
            marginLeft:59,
            fontSize: 17,
            marginBottom: 23,
            fontWeight: 'bold',
            color: 'black'
          }}>Log Out</Text>
        </TouchableOpacity>

      </View>
      

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: '#f7ad19',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>
            <Image source={showMenu ? close : menu} style={{
              width: 30,
              height: 35,
              marginTop: 40,
              marginLeft: -3,
              

            }}></Image>
   
          </TouchableOpacity>

           
          <Searchbar style= {styles.Searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
           value={searchQuery}
             />


          <ScrollView style={styles.scrollView}>


          <Text style={{ marginLeft: -15, marginTop: 1}}>
                        
            <HomeScreen /></Text>
            </ScrollView>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}


// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    
    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        navigation.navigate(HomeScreen)
      } else {
        setCurrentTab(title);
        // if(title == "Transactions"){
          
        // }
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? '#f7ad19' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 30, height: 25,
          tintColor: currentTab == title ? "black" : "black"
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: "white",
          paddingLeft: 15,
          color: currentTab = "black"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ad19',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  Searchbar:{
    marginTop: -43,
    width: 295,
    marginLeft: 35,
    height: 50,
    marginBottom: 10,
  },

  scrollView:{
    marginLeft: -15,
   width: 500,
  }

});
