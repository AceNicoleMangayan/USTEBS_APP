import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Button } from "@react-native-material/core";
import { AntDesign,  MaterialCommunityIcons,  Entypo, Feather } from '@expo/vector-icons'; 


export default class signin extends Component {

//app layout
  render() {
    return (
      
      <View style={styles1.rootContainer}>
         <ScrollView style={styles1.scrollView}>
          <View style={ styles1.childContainer } > 

          <View style={{ marginTop: -40, marginLeft: -40}} >
          <TouchableOpacity
          onPress={() => {this.props.navigation.navigate("SignUpPage")}}>
            <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>

    <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
          marginLeft: 40,
          marginBottom: 20,
          marginRight: -30,
          
          
        }}>Terms and Conditions
        
        </Text>
              
      <Text style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
          marginLeft: 12,
          marginRight: -30,
          textAlign: 'justify',
          
          
        }}>The words of which the initial letter is capitalized have 
        meanings defined under the following conditions. The following 
        definitions shall have the same meaning regardless of whether 
        they appear in singular or in plural. 
        
        </Text>
        <Text style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10,
          marginLeft: 12,
          marginRight: -30,
          textAlign: 'justify',
          
          
        }}>Application means the software program provided by the Company downloaded by You on any electronic device, named USTeBS
        Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.
        Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
        Country refers to: Philippines
        Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to USTeBS.
        Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
        Service refers to the Application.
        Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the TermsFeed Terms and Conditions Generator.
        Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
        You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
        
        
        </Text>

        <Text style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10,
          marginLeft: 12,
          marginRight: -30,
          textAlign: 'justify',
          
          
        }}>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        
        
        </Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 90,
          marginLeft: 10,
          marginRight: -30,
          textAlign: 'center',
          
        }}>@ 2022 unITech </Text>            
                    
                    
                    </View> 
       
            </View> 
            </ScrollView>
          
    </View>
    
    );
  }
}



//style section

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
