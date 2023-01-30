import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './components/Home';
import SignIn from './components/SignIn_P';
import SignUp from './components/SignUp_P';
import ForgotP from './components/Forgot_P';
import InfoP from './components/Info_P';
import ProS from './components/ProfileScreen';
import TransS from './components/MyBarters';
import TransS2 from './components/Requests';
import Add from './components/AddItem';
import Edit from './components/EditProf';
import Terms from './components/Terms';
import Details from './components/Details'
import Details2 from './components/Details2';
// import DisplayDets from './DisplayDets';

export default function App() {
  return (
    <Navigator/>
  );
}

const NavGuide = createStackNavigator({
  LogInPage: {screen: SignIn}, 
  InfoPage: {screen: InfoP},
  SignUpPage: {screen: SignUp,},
  HomePage: {screen: Home,},  
  ForgotPassPage: {screen: ForgotP,}, 
  ProfilePage: {screen: ProS,}, 
  MyBartersPage: {screen: TransS,},
  RequestsPage: {screen: TransS2,},
  DetailsPage: {screen: Details,},
  Details2Page: {screen: Details2,},
  AddPage: {screen: Add,},
  EditPage: {screen: Edit,},
  TermsPage: {screen: Terms,},
  // DisplayDets: {screen: DisplayDets,},
}, {
  headerMode: 'none' // <= here
});


const Navigator = createAppContainer(NavGuide);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
